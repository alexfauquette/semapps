const { join: pathJoin } = require('path');
const Rsync = require('rsync');
const { CronJob } = require('cron');

const BackupService = {
  name: 'backup',
  settings: {
    localServer: {
      fusekiBackupsPath: null,
      otherDirsPaths: {}
    },
    remoteServer: {
      user: null,
      password: null,
      host: null,
      path: null
    },
    // Required for automated backups
    cronJob: {
      time: null,
      timeZone: 'Europe/Paris'
    }
  },
  dependencies: ['fuseki-admin'],
  started() {
    const { cronJob } = this.settings;

    if (cronJob.time) {
      this.cronJob = new CronJob(cronJob.time, this.actions.backupAll, null, true, cronJob.timeZone);
    }
  },
  actions: {
    async backupAll(ctx) {
      await this.actions.backupDatasets();
      await this.actions.backupOtherDirs();
    },
    async backupDatasets(ctx) {
      const { fusekiBackupsPath } = this.settings.localServer;

      if (!fusekiBackupsPath) {
        console.log('No fusekiBackupsPath defined, skipping backup...');
        return;
      }

      // Generate new backup of all datasets
      const datasets = await ctx.call('fuseki-admin.listAllDatasets');
      for (const dataset of datasets) {
        await ctx.call('fuseki-admin.backupDataset', { dataset });
      }

      await this.actions.syncWithRemoteServer({ path: fusekiBackupsPath, subDir: 'datasets' });
    },
    async backupOtherDirs(ctx) {
      const { otherDirsPaths } = this.settings.localServer;

      if (!otherDirsPaths) {
        console.log('No otherDirPaths defined, skipping backup...');
        return;
      }

      for (const [key, path] of Object.entries(otherDirsPaths)) {
        await this.actions.syncWithRemoteServer({ path, subDir: key });
      }
    },
    syncWithRemoteServer(ctx) {
      const { path, subDir } = ctx.params;
      const { remoteServer } = this.settings;

      if (!remoteServer.host) {
        console.log('No remove server defined, skipping remote backup...');
        return;
      }

      // Setup rsync to remote server
      const rsync = new Rsync()
        .flags('arv')
        .set('e', `sshpass -p "${remoteServer.password}" ssh -o StrictHostKeyChecking=no`)
        .source(path)
        .destination(`${remoteServer.user}@${remoteServer.host}:${pathJoin(remoteServer.path, subDir)}`);

      return new Promise((resolve, reject) => {
        console.log('Rsync started with command: ' + rsync.command());
        rsync.execute(error => {
          if (error) {
            reject(error);
          } else {
            console.log('Rsync finished !');
            resolve();
          }
        });
      });
    }
  }
};

module.exports = BackupService;
