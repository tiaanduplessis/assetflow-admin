import React from 'react'
import { FunctionField } from 'react-admin'

const styles = {
    link: {
        color: '#367fce',
        fontWeight: '600'
    }
}

const TelField = (props) => <FunctionField render={record => {
    if (!record[props.source]) {
        return null
    }
    const num = `tel:+${record[props.source].replace(/[- ]/g, '')}`
    return <a
        href={num} style={styles.link} target="_blank" rel="noopener noreferrer">{record[props.source]}</a>
}

} {...props} />

export default TelField