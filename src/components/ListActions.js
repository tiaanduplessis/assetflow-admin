import React, {Component} from 'react'
import {CardActions, CreateButton, RefreshButton, showNotification} from 'react-admin'
import {Button} from '@material-ui/core';
import firebase from 'firebase'

function dataToCSV(val) {
    const rows = Object.values(val).map(current => Object.values(current).join(',')).join("\r\n")
    return `data:text/csv;charset=utf-8,${rows}`
}

class Actions extends Component {
    componentDidMount() {
        this.db = firebase.database()
    }

    handleExportClick = () => {
        if (this.db) {
            const {resource} = this.props
            showNotification('Generating CSV')
            this.db.ref(resource).once('value', snapshot => {
                const val = snapshot.val()
                window.open(encodeURI(dataToCSV(val)));
            }).catch(error => {
                showNotification('We could not generate the CSV file', 'warning')
            })
        }

    }

    render()  {
        const { resource, filters, displayedFilters, filterValues, basePath, showFilter } = this.props


        return (
            <CardActions>
                {filters && React.cloneElement(filters, {
                    resource,
                    showFilter,
                    displayedFilters,
                    filterValues,
                    context: 'button',
                }) }
                <CreateButton basePath={basePath} />
                <RefreshButton />
                <Button color="primary" onClick={this.handleExportClick}>Export</Button>;
            </CardActions>
        )
    }
}

export default Actions