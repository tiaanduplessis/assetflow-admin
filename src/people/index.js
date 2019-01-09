import React from 'react';
import { List, Edit, Create, Datagrid,DisabledInput, FormDataConsumer, TextField, BooleanInput, BooleanField, EditButton, SimpleForm, TextInput, Filter, EmailField } from 'react-admin';

import TelField from '../components/TelField'
import EditTitle from '../components/EditTitle'

const styles = {
    input: { width: '100%' },
    link: {
        color: '#367fce',
        fontWeight: '600'
    }
}


const PersonsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <TextInput label="Name" source="name" />
    </Filter>
);

export const PersonsList = (props) => (
    <List
        title="People"
        filters={<PersonsFilter />}
        bulkActions={false}
        {...props}>
        <Datagrid>
            <TextField source="name" />
            <EmailField source="email" style={styles.link} />
            <TelField source="number" />
            <TextField source="role" />
            <BooleanField source="isAdmin" />
            <BooleanField source="isEmployee" />
            {/* <ReferenceArrayField label="Site whitelist" reference="sites" source="siteIdWhitelist">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField> */}
            <EditButton />
        </Datagrid>
    </List>
);

export const PersonsEdit = (props) => (
    <Edit title={<EditTitle />}
        {...props}
    >
        <SimpleForm>
            <DisabledInput source="id" style={styles.input} />
            <TextInput source="name" style={styles.input} />
            <DisabledInput source="email" style={styles.input} />
            <TextInput source="number" style={styles.input} />
            <TextInput source="role" style={styles.input} />
            {/* <ReferenceArrayInput
                label="Site whitelist"
                source="siteIdWhitelist"
                reference="sites">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput> */}
        </SimpleForm>
    </Edit>
);

export const PersonsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" style={styles.input} />
            <TextInput source="email" style={styles.input}  type="email" />
            <TextInput source="password" style={styles.input}  type="password" />
            <TextInput source="number" style={styles.input} />
            <TextInput source="role" style={styles.input} />
            <BooleanInput label="Is Employee" source="isEmployee" />
            <FormDataConsumer>
                 {({ formData, ...rest }) => formData.isEmployee &&
                      <BooleanInput label="Is admin" source="isAdmin" {...rest} />
                 }
             </FormDataConsumer>
            
            {/* <ReferenceArrayInput
                label="Site whitelist"
                source="siteIdWhitelist"
                reference="sites">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput> */}
        </SimpleForm>
    </Create>
);