import React from 'react';
import { List, Edit, Create, Datagrid, TextField, ChipField, ReferenceArrayField, SingleFieldList, SelectField, EditButton, SimpleForm, TextInput, Filter, ImageField, LongTextInput, SelectInput, ImageInput, NumberInput, FunctionField, ReferenceArrayInput, SelectArrayInput, DateField, FileField, FileInput } from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';
import { required } from '../utils/validation'

import EditTitle from '../components/EditTitle'

const styles = {
    input: { width: '100%' },
    picture: { height: '100px' }
}

const statusChoices = [
    { id: 'pending', name: 'Pending' },
    { id: 'scheduled', name: 'Scheduled' },
    { id: 'assigned', name: 'Assigned' },
    { id: 'inProgress', name: 'In progress' },
    { id: 'completed', name: 'Completed' }
]

const priorityChoices = [
    { id: 'low', name: 'Low' },
    { id: 'medium', name: 'Medium' },
    { id: 'high', name: 'High' },
]

const WorkOrdersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <TextInput label="Name" source="name" />
    </Filter>
);


export const WorkOrdersList = (props) => (
    <List
        title="Work Orders"
        filters={<WorkOrdersFilter />}
        bulkActions={false}
        {...props}>
        <Datagrid>
            <TextField source="name" />
            <ReferenceArrayField label="Maintenance" reference="maintenance" source="maintenanceIds">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField source="address" />
            <FunctionField label="Preview" render={record => {
                if (record.pictures && Array.isArray(record.pictures)) {
                    const first = record.pictures[0]
                    return <img style={styles.picture} alt="Preview" src={first.src} />
                }
                return <div style={styles.picture}></div>
            }
            } />
            <DateField source="startDate" />
            <DateField source="completedDate" />
            <SelectField source="status" choices={statusChoices} />
            <SelectField source="priority" choices={priorityChoices} />
            <ReferenceArrayField label="Responsible people" reference="people" source="personIds">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField label="Suppliers" reference="suppliers" source="supplierIds">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>

            <TextField source="notes" />
            <EditButton />
        </Datagrid>
    </List>
);

export const WorkOrdersEdit = (props) => (
    <Edit title={<EditTitle />}
        {...props}
    >
        <SimpleForm>
            <TextInput source="name" style={styles.input} validate={[required()]} />
            <ReferenceArrayInput
                label="Maintenance"
                source="maintenanceIds"
                reference="maintenance">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
            <LongTextInput source="address" style={styles.input} />
            <ImageInput source="pictures" label="Related pictures of work" accept="image/*" multiple>
                <ImageField source="src" title="name" />
            </ImageInput>

            <FileInput source="files" label="Related files" accept="application/pdf" multiple>
                <FileField source="src" title="title" />
            </FileInput>

            <DateInput source="startDate" label="Start date" options={{ format: 'DD/MM/YYYY' }} />
            <DateInput source="completionDate" label="Completion date" options={{ format: 'DD/MM/YYYY' }} />
            <SelectInput source="status"
                style={styles.input}
                choices={statusChoices}
                validate={[required()]}
            />
            <SelectInput source="priority"
                style={styles.input}
                choices={priorityChoices}
                validate={[required()]}
            />

            <ReferenceArrayInput
                label="Responsible people"
                source="personIds"
                reference="people">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>

            <ReferenceArrayInput
                label="Suppliers"
                source="suppliersIds"
                reference="suppliers">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>

            <NumberInput source="cost" style={styles.input} />
            <LongTextInput source="notes" />

        </SimpleForm>
    </Edit>
);

export const WorkOrdersCreate = (props) => (
    <Create {...props}
        title="Create new Work order"
    >
        <SimpleForm>

            <TextInput source="name" style={styles.input} validate={[required()]} />

            <ReferenceArrayInput
                label="Maintenance"
                source="maintenanceIds"
                reference="maintenance">
                <SelectArrayInput optionText="name" style={styles.input} validate={[required()]} />
            </ReferenceArrayInput>

            <LongTextInput source="address" style={styles.input} />

            <ImageInput source="pictures" label="Related pictures of work" accept="image/*" multiple>
                <ImageField source="src" title="name" />
            </ImageInput>

            <FileInput source="files" label="Related files" accept="application/pdf" multiple>
                <FileField source="src" title="title" />
            </FileInput>

            <DateInput source="startDate" label="Start date" options={{ format: 'DD/MM/YYYY' }} />

            <DateInput source="completionDate" label="Completion date" options={{ format: 'DD/MM/YYYY' }} />

            <SelectInput source="status"
                style={styles.input}
                choices={statusChoices}
                validate={[required()]}
            />

            <SelectInput source="priority"
                style={styles.input}
                choices={priorityChoices}
                validate={[required()]}
            />

            <ReferenceArrayInput
                label="Responsible people"
                source="personIds"
                reference="people">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>

            <ReferenceArrayInput
                label="Suppliers"
                source="suppliersIds"
                reference="suppliers">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>

            <NumberInput source="cost" style={styles.input} />

            <LongTextInput source="notes" />

        </SimpleForm>
    </Create>
);