import React from 'react';
import { List, Edit, Create , Datagrid, TextField, EditButton, SimpleForm, TextInput, Filter, LongTextInput } from 'react-admin';

import AddressField from '../components/AddressField'
import EditTitle from '../components/EditTitle'
import ListActions from '../components/ListActions'

import styles from './styles'

const SitesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <TextInput label="Name" source="name"/>
    </Filter>
);


export const SitesList = (props) => (
    <List 
        title="Sites"
        filters={<SitesFilter />}
        bulkActions={false}
        actions={<ListActions/>}
    {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <AddressField source="address" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SitesEdit = (props) => (
    <Edit title={<EditTitle />} 
    
        {...props}
    >
        <SimpleForm>
            <TextInput source="name" style={styles.input}/>
            <LongTextInput source="description" style={styles.input}/>
            <LongTextInput source="address" style={styles.input}/>
        </SimpleForm>
    </Edit>
);

export const SitesCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" style={styles.input}/>
            <LongTextInput source="description" style={styles.input}/>
            <LongTextInput source="address" style={styles.input}/>
        </SimpleForm>
    </Create>
);