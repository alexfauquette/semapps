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
  useAuthenticated,
  AutocompleteArrayInput
} from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import SettingsIcon from '@material-ui/icons/Settings';
import { JsonLdReferenceInput, UriInput } from '../utils/jsonLdInputs';

export const ProjectIcon = SettingsIcon;

export const ProjectList = (props) => {
  useAuthenticated();
  return (
    <List title="Projets" {...props}>
      <Datagrid>
        <TextField source="pairv1:preferedLabel" label="Nom" />
        <EditButton basePath="/pairv1-Project" />
      </Datagrid>
    </List>
  );
};

const ProjectTitle = ({ record }) => {
  return <span>Projet {record ? `"${record['pairv1:preferedLabel']}"` : ''}</span>;
};

export const ProjectEdit = (props) => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pairv1:preferedLabel" label="Nom" fullWidth />
      <TextInput source="pairv1:comment" label="Commentaire" fullWidth />
      <MarkdownInput multiline source="pairv1:description" label="Description" fullWidth />
      <UriInput source="pairv1:homePage" label="Site web" fullWidth />
      <TextInput source="pairv1:adress" label="Adresse" fullWidth />
      <JsonLdReferenceInput label="Géré par" reference="pairv1-Organization" source="pairv1:isManagedBy">
        <AutocompleteArrayInput
          optionText={record => ( record && ( record['pairv1:preferedLabel'] || record['foaf:givenName'] ) ) || 'LABEL MANQUANT'}
          fullWidth
        />
      </JsonLdReferenceInput>
      <JsonLdReferenceInput label="Intérêts" reference="skos-Concept" source="pairv1:hasInterest">
        <AutocompleteArrayInput
          optionText={record => ( record && record['skos:prefLabel']['@value'] ) || 'LABEL MANQUANT'}
          fullWidth
        />
      </JsonLdReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = (props) => (
  <Create title="Créer un projet" {...props}>
    <SimpleForm>
      <TextInput source="pairv1:preferedLabel" label="Nom" />
      <MarkdownInput multiline source="pairv1:description" label="Description" fullWidth />
      <UriInput source="pairv1:homePage" label="Site web" />
    </SimpleForm>
  </Create>
);