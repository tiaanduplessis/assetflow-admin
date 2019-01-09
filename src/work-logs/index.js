import React from 'react';
import { List, Edit, Create, ReferenceArrayField,SelectArrayInput, ReferenceArrayInput,  SingleFieldList, ChipField, Datagrid, TextField, EditButton, SimpleForm, TextInput, Filter, LongTextInput } from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';

import EditTitle from '../components/EditTitle'


const styles = {
    input: {width: '100%'}
}


const WorkLogsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
    </Filter>
);

export const WorkLogsList = (props) => (
    <List 
        title="Work logs"
        filters={<WorkLogsFilter />}
        bulkActions={false}
    {...props}>
        <Datagrid>
            <ReferenceArrayField label="Work orders" reference="workOrders" source="workOrdersIds">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField source="startTime" />
            <TextField source="endTime"/>
            <TextField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

export const WorkLogsEdit = (props) => (
    <Edit
        title={<EditTitle/>}
        {...props}
    >
        <SimpleForm>
            <ReferenceArrayInput
                label="Work orders"
                source="workOrdersIds"
                reference="workOrders">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
            <DateTimeInput source="startTime" label="Start time" options={{ format: 'DD/MM/YYYY, HH:mm:ss', ampm: false, clearable: true }} />
            <DateTimeInput source="endTime" label="End time"options={{ format: 'DD/MM/YYYY, HH:mm:ss', ampm: false, clearable: true }} />
            <LongTextInput source="description" style={styles.input}/>
        </SimpleForm>
    </Edit>
);

export const WorkLogsCreate = (props) => (
    <Create
    title="Create new Work log"
     {...props}>
        <SimpleForm>
            <ReferenceArrayInput
                label="Work orders"
                source="workOrdersIds"
                reference="workOrders">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
            <DateTimeInput source="startTime" label="Start time" style={styles.input} options={{ format: 'DD/MM/YYYY, HH:mm:ss', ampm: false, clearable: true }} />
            <DateTimeInput source="endTime" label="End time" style={styles.input} options={{ format: 'DD/MM/YYYY, HH:mm:ss', ampm: false, clearable: true }} />
            <LongTextInput source="description" style={styles.input}/>
        </SimpleForm>
    </Create>
);