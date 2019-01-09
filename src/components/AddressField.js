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

    const str = record[props.source].split('\n').join(', ')
    const address = `https://maps.google.com/?q=${encodeURIComponent(str)}`
    return <a
        href={address} style={styles.link} target="_blank" rel="noopener noreferrer">{record[props.source]}</a>
}

} {...props} />

export default TelField