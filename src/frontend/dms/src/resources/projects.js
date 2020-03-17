import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  useAuthenticated
} from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import SettingsIcon from '@material-ui/icons/Settings';
import { JsonLdSimpleForm, JsonLdReferenceInput } from '../utils/jsonLdInputs';

export const ProjectIcon = SettingsIcon;

export const ProjectList = (props) => {
  useAuthenticated();
  return (
    <List title="Projets" {...props}>
      <Datagrid>
        <TextField source="pairv1:preferedLabel" label="Nom" />
        <EditButton basePath="/Project" />
      </Datagrid>
    </List>
  );
};

const ProjectTitle = ({ record }) => {
  return <span>Projet {record ? `"${record['pairv1:preferedLabel']}"` : ''}</span>;
};

export const ProjectEdit = (props) => (
  <Edit title={<ProjectTitle />} {...props}>
    <JsonLdSimpleForm>
      <TextInput source="pairv1:preferedLabel" label="Nom" fullWidth />
      <MarkdownInput multiline source="pairv1:description" label="Description" fullWidth />
      <TextInput source="pairv1:homePage" label="Site web" fullWidth />
      <JsonLdReferenceInput label="Géré par" reference="Organization" source="pairv1:isManagedBy" />
    </JsonLdSimpleForm>
  </Edit>
);

export const ProjectCreate = (props) => (
  <Create title="Créer un projet" {...props}>
    <SimpleForm>
      <TextInput source="pairv1:preferedLabel" label="Nom" />
      <MarkdownInput multiline source="pairv1:description" label="Description" fullWidth />
      <TextInput source="pairv1:homePage" label="Site web" />
    </SimpleForm>
  </Create>
);