import { PairResourceCreate } from '../../../../pair';
import GroupEdit from './GroupEdit';
import GroupList from './GroupList';
import GroupShow from './GroupShow';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    list: GroupList,
    show: GroupShow,
    create: PairResourceCreate,
    edit: GroupEdit,
    icon: HomeIcon,
    options: {
      label: 'Groups',
      parent: 'Actor'
    }
  },
  dataModel: {
    types: ['pair:Group'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'groups',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Groupe |||| Groupes',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        image: 'Logo',
        'pair:affiliates': 'Membres',
        'pair:partnerOf': 'Partenaires',
        'pair:involvedIn': 'Participe à',
        'pair:hasTopic': 'Thèmes',
        'pair:documentedBy': 'Documents'
      }
    }
  }
};
