import React from 'react';
import { List, useAuthenticated } from 'react-admin';
import Icon from '@material-ui/icons/FlashOn';
import ActivitiesGrid from '../components/ActivitiesGrid';

export const ActivityIcon = Icon;

export const ActivityList = props => {
  useAuthenticated();
  return (
    <List title="Activités" {...props}>
      <ActivitiesGrid />
    </List>
  );
};
