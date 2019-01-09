import React from 'react';
import { List, Edit, Create, Datagrid, Responsive, SimpleList, TextField, ChipField, FileInput, FileField, ReferenceArrayField, SingleFieldList, SelectField, EditButton, SimpleForm, TextInput, Filter, ImageField, LongTextInput, SelectInput, ImageInput, FunctionField, ReferenceArrayInput, SelectArrayInput, FormDataConsumer } from 'react-admin';
import { QRCode } from 'react-qr-svg'


import AddressField from '../components/AddressField'
import EditTitle from '../components/EditTitle'

import { required } from '../utils/validation'

const statusChoices = [
    { id: 'deployed', name: 'Deployed' },
    { id: 'pending', name: 'Pending' },
    { id: 'inMaintainence', name: 'In maintainence' }
]

const styles = {
    input: { width: '100%' },
    picture: { height: '100px' },
    qrCode: { width: 300, maxWidth: '100%' }
}

const AssetsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <TextInput label="Name" source="name" />
    </Filter>
);


export const AssetsList = (props) => (
    <List
        title="Assets"
        filters={<AssetsFilter />}
        bulkActions={false}
        {...props}>


        <Responsive
            small={
                <SimpleList
                primaryText={record => record.name}
                secondaryText={record => record.description}
                />
            }
            medium={
                <Datagrid>
                <TextField source="name" />
                <TextField source="description" />
                <SelectField source="status" choices={statusChoices} />
                <FunctionField label="Pictures" render={record => {
                    if (record.pictures && Array.isArray(record.pictures)) {
                        const first = record.pictures[0]
                        return <img style={styles.picture} alt="Preview" src={first.src} />
                    }
    
                    return null
                }
                } />
                <TextField source="model" />
                <TextField source="serial" />
                <AddressField source="address" />
                <ReferenceArrayField label="Sites" reference="sites" source="siteId">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <EditButton />
            </Datagrid>
            }
        />

    </List>
);

export const AssetsEdit = (props) => (
    <Edit title={<EditTitle />}
        {...props}
    >
        <SimpleForm>
            <FormDataConsumer>
                {({ formData, ...rest }) => {

                    if (formData.id) {
                        return <QRCode
                            bgColor="#ffffff"
                            fgColor="#303030"
                            level="H"
                            style={styles.qrCode}
                            value={formData.id}
                        />
                    }

                    return null

                }
                }
            </FormDataConsumer>
            <TextInput source="name" style={styles.input} validate={[required()]} />
            <LongTextInput source="description" />
            <SelectInput source="status"
                style={styles.input}
                choices={[
                    { id: 'deployed', name: 'Deployed' },
                    { id: 'pending', name: 'Pending' },
                    { id: 'inMaintainence', name: 'In maintainence' }
                ]}
                validate={[required()]}
            />
            <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple>
                <ImageField source="src" title="title" />
            </ImageInput>

            <FileInput source="files" label="Related files" accept="application/pdf" multiple>
                <FileField source="src" title="title" />
            </FileInput>

            <TextInput source="model" style={styles.input} />
            <TextInput source="serial" style={styles.input} />
            <LongTextInput source="address" style={styles.input} />

            <ReferenceArrayInput
                label="Sites"
                source="siteId"
                reference="sites">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const AssetsCreate = (props) => (
    <Create {...props}>
        <SimpleForm
        >
            <TextInput source="name" style={styles.input} />
            <LongTextInput source="description" />
            <SelectInput source="status"
                style={styles.input}
                choices={[
                    { id: 'deployed', name: 'Deployed' },
                    { id: 'pending', name: 'Pending' },
                    { id: 'inMaintainence', name: 'In maintainence' }
                ]} />
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>

            <FileInput source="files" label="Related files" accept="application/pdf" multiple>
                <FileField source="src" title="title" />
            </FileInput>

            <TextInput source="model" style={styles.input} />
            <TextInput source="serial" style={styles.input} />
            <LongTextInput source="address" style={styles.input} />

            <ReferenceArrayInput
                label="Sites"
                source="siteId"
                reference="sites">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
