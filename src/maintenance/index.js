import React from 'react';
import { List, Edit, Create, Datagrid, TextField, ChipField, ReferenceArrayField, FormDataConsumer, SingleFieldList, SelectField, EditButton, SimpleForm, TextInput, Filter, ImageField, LongTextInput, SelectInput, ImageInput, FunctionField, ReferenceArrayInput, SelectArrayInput, FileField, FileInput } from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';
import { required } from '../utils/validation'

import EditTitle from '../components/EditTitle'

const styles = {
  input: { width: '100%' },
  picture: { height: '100px' }
}

const typeChoices = [
  { id: 'recurring', name: 'Recurring' },
  { id: 'scheduled', name: 'Scheduled' },
  { id: 'onceOff', name: 'Once-off' }
]

const statusChoices = [
  { id: 'active', name: 'Active' },
  { id: 'complete', name: 'Complete' }
]

const recurringChoices = [
  { id: 'daily', name: 'Daily' },
  { id: 'weekly', name: 'Weekly' },
  { id: 'monthly', name: 'Monthly' },
  { id: 'yearly', name: 'Yearly' },
]

const MaintenanceFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" />
    <TextInput label="Name" source="name" />
  </Filter>
);


export const MaintenanceList = (props) => (
  <List
    title="Maintenance"
    filters={<MaintenanceFilter />}
    bulkActions={false}
    {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      <SelectField source="type" choices={typeChoices} />

      <ReferenceArrayField label="Assets" reference="assets" source="assetIds">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <SelectField source="status" choices={statusChoices} />

      <FunctionField label="Pictures" render={record => {
        if (record.pictures && Array.isArray(record.pictures)) {
          const first = record.pictures[0]
          return <img style={styles.picture} alt="Preview" src={first.src} />
        }

        return null
      }
      } />

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

      <EditButton />
    </Datagrid>
  </List>
);

export const MaintenanceEdit = (props) => (
  <Edit title={<EditTitle />}
    {...props}
  >
    <SimpleForm>

      <TextInput source="name" style={styles.input} validate={[required()]} />
      <LongTextInput source="description" />
      <SelectInput source="type"
        style={styles.input}
        choices={typeChoices}
        validate={[required()]}
      />

      <FormDataConsumer>
        {({ formData, ...rest }) => formData.type === 'recurring' ?

          <SelectInput source="interval"
            style={styles.input}
            choices={recurringChoices}
          /> : <DateInput disablePast source="dueDate" label="Due date" options={{ format: 'DD/MM/YYYY' }} />


        }
      </FormDataConsumer>

      <ReferenceArrayInput
        label="Assets maintained"
        source="assetIds"
        reference="assets">
        <SelectArrayInput validate={[required()]} optionText="name" style={styles.input} />
      </ReferenceArrayInput>

      <SelectInput source="status"
        style={styles.input}
        choices={statusChoices}
        validate={[required()]}
      />

      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>

      <FileInput source="files" label="Related files" accept="application/pdf" multiple>
        <FileField source="src" title="title" />
      </FileInput>

      <ReferenceArrayInput
        label="Responsible people"
        source="peopleIds"
        reference="people">
        <SelectArrayInput optionText="name" style={styles.input} />
      </ReferenceArrayInput>

      <ReferenceArrayInput
        label="Suppliers"
        source="suppliersIds"
        reference="suppliers">
        <SelectArrayInput optionText="name" style={styles.input} />
      </ReferenceArrayInput>

    </SimpleForm>
  </Edit>
);

export const MaintenanceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>

      <TextInput source="name" style={styles.input} validate={[required()]} />

      <LongTextInput source="description" />

      <SelectInput source="type"
        style={styles.input}
        choices={typeChoices}
        validate={[required()]}
      />

      <FormDataConsumer>
        {({ formData, ...rest }) => formData.type === 'recurring' ?

          <SelectInput source="interval"
            style={styles.input}
            choices={recurringChoices}
          /> : <DateInput disablePast source="dueDate" label="Due date" options={{ format: 'DD/MM/YYYY' }} />

        }
      </FormDataConsumer>


      <ReferenceArrayInput
        label="Assets maintained"
        source="assetIds"
        reference="assets">
        <SelectArrayInput validate={[required()]} optionText="name" style={styles.input} />
      </ReferenceArrayInput>

      <SelectInput source="status"
        style={styles.input}
        choices={statusChoices}
        validate={[required()]}
      />

      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>

      <FileInput source="files" label="Related files" accept="application/pdf" multiple>
        <FileField source="src" title="title" />
      </FileInput>

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
    </SimpleForm>
  </Create>
);