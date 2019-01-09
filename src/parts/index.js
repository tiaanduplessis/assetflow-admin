import React from 'react';
import { List, Edit, Create, Datagrid, TextField, ChipField, ReferenceArrayField, SingleFieldList, SelectField, EditButton, SimpleForm, TextInput, Filter, ImageField, LongTextInput, SelectInput, ImageInput, FunctionField, ReferenceArrayInput, SelectArrayInput, FormDataConsumer } from 'react-admin';
import { QRCode } from 'react-qr-svg'

import { required } from '../utils/validation'

const styles = {
    input: { width: '100%' },
    picture: { height: '100px' },
    qrCode: { width: 300, maxWidth: '100%' }
}

const statusChoices = [
    { id: 'deployed', name: 'Deployed' },
    { id: 'pending', name: 'Pending' },
    { id: 'inMaintainence', name: 'In maintainence' }
]

const PartsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <TextInput label="Name" source="name"/>
    </Filter>
);


export const PartsList = (props) => (
    <List
        title="Parts"
        filters={<PartsFilter />}
        bulkActions={false}
        {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <SelectField source="status" choices={statusChoices} />

            <ReferenceArrayField label="Assets" reference="assets" source="assetIds">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>

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
            {/* <NumberField source="purchaseCost" options={{ style: 'currency', currency: 'ZAR' }} /> */}
            <ReferenceArrayField label="Sites" reference="sites" source="siteId">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

const PartsTitle = ({ record }) => {
    return <span>{record ? record.name : ''}</span>;
};

export const PartsEdit = (props) => (
    <Edit title={<PartsTitle />}
        {...props}
    >
        <SimpleForm>
            <FormDataConsumer>
                 {({ formData, ...rest }) => {

                     if (formData.id) {
                        return <QRCode
                                bgColor="#FFFFFF"
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
                choices={statusChoices}
                validate={[required()]}
            />

            <ReferenceArrayInput
                label="Assets"
                source="assetIds"
                reference="assets">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>

            <ImageInput source="pictures" label="Related pictures" accept="image/*" multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="model" style={styles.input} />
            <TextInput source="serial" style={styles.input} />
            <ReferenceArrayInput
                label="Sites"
                source="siteId"
                reference="sites">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const PartsCreate = (props) => (
    <Create {...props}>
        <SimpleForm
        >
            <TextInput source="name" style={styles.input} />
            <LongTextInput source="description" />
            <SelectInput source="status"
                style={styles.input}
                choices={statusChoices} />

            <ReferenceArrayInput
                label="Assets"
                source="assetIds"
                reference="assets">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="model" style={styles.input} />
            <TextInput source="serial" style={styles.input} />
            <ReferenceArrayInput
                label="Sites"
                source="siteId"
                reference="sites">
                <SelectArrayInput optionText="name" style={styles.input} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);