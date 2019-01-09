import React from 'react'
import {FunctionField} from 'react-admin'


const styles = {
    picture: { height: '100px' }
}

const PicturePreviewField = (props) => {
    return <FunctionField {...props} render={record => {
        if (record[props.source] && Array.isArray(record[props.source])) {
            const first = record[props.source][0]
            return <img style={styles.picture} alt="Preview" src={first.src} />
        }
    
        return null
    }
    } />
}

export default PicturePreviewField
