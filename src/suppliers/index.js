import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, SimpleForm, TextInput, Filter, EmailField, LongTextInput } from 'react-admin';

import TelField from '../components/TelField'
import AddressField from '../components/AddressField'

const styles = {
    input: {width: '100%'},
    link: {
        color: '#367fce',
        fontWeight: '600'
    }
}


const SuppliersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <TextInput label="Name" source="name"/>
    </Filter>
);

export const SuppliersList = (props) => (
    <List 
        title="Suppliers"
        filters={<SuppliersFilter />}
        bulkActions={false}
    {...props}>
        <Datagrid>
            <TextField source="name" />
            <EmailField source="email" style={styles.link}/>
            <TelField source="number"/>
            <AddressField source="address" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SuppliersEdit = (props) => (
    <Edit
        {...props}
    >
        <SimpleForm>
            <TextInput source="name" style={styles.input}/>
            <TextInput source="email" style={styles.input}/>
            <TextInput source="number" style={styles.input}/>
            <LongTextInput source="address" style={styles.input}/>
            <LongTextInput source="notes" style={styles.input}/>
        </SimpleForm>
    </Edit>
);

export const SuppliersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" style={styles.input}/>
            <TextInput source="email" style={styles.input}/>
            <TextInput source="number" style={styles.input}/>
            <LongTextInput source="address" style={styles.input}/>
            <LongTextInput source="notes" style={styles.input}/>
        </SimpleForm>
    </Create>
);