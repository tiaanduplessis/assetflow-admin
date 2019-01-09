import React from 'react'

const EditTitle = ({ record }) => {
    return <span>{record ? record.name : 'Edit'}</span>;
};

export default EditTitle