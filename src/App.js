import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase';

import {FirebaseDataProvider} from 'ra-data-firebase'
import {FirebaseAuthProvider} from 'ra-auth-firebase'


import { authConfig, clientConfig, theme, firebaseConfig } from './config'

// Sections
import Login from './login'

import Dashboard from './dashboard'

import PinDrop from '@material-ui/icons/PinDrop';
import { SitesCreate, SitesEdit, SitesList } from './sites'

import Store from '@material-ui/icons/Store';
import { AssetsCreate, AssetsEdit, AssetsList } from './assets'

import ViewCompact from '@material-ui/icons/ViewCompact';
import { PartsCreate, PartsEdit, PartsList } from './parts'

import Build from '@material-ui/icons/Build';
import { MaintenanceCreate, MaintenanceEdit, MaintenanceList } from './maintenance'

import Assessment from '@material-ui/icons/Assessment';
import { WorkOrdersCreate, WorkOrdersEdit, WorkOrdersList } from './work-orders'

import Subject from '@material-ui/icons/Subject';
import { WorkLogsCreate, WorkLogsEdit, WorkLogsList } from './work-logs'

import People from '@material-ui/icons/People';
import { PersonsCreate, PersonsEdit, PersonsList } from './people'

import LocalShipping from '@material-ui/icons/LocalShipping';
import { SuppliersCreate, SuppliersEdit, SuppliersList } from './suppliers'

const history = createHistory();

firebase.initializeApp(firebaseConfig);


class App extends Component {
  render() {

    return <Admin
      history={history}
      title="Assetflow"
      theme={theme}
      loginPage={Login}
      dashboard={Dashboard}
      authProvider={FirebaseAuthProvider(authConfig)}
      dataProvider={FirebaseDataProvider(clientConfig)}
    >


      <Resource
        icon={PinDrop}
        options={{ label: 'Sites' }}
        name="sites"
        list={SitesList}
        edit={SitesEdit}
        create={SitesCreate}
      />

      <Resource
        icon={Store}
        options={{ label: 'Assets' }}
        name="assets"
        list={AssetsList}
        edit={AssetsEdit}
        create={AssetsCreate}
      />

      <Resource
        icon={ViewCompact}
        options={{ label: 'Parts' }}
        name="parts"
        list={PartsList}
        edit={PartsEdit}
        create={PartsCreate}
      />

      <Resource
        icon={Build}
        options={{ label: 'Maintenance' }}
        name="maintenance"
        list={MaintenanceList}
        edit={MaintenanceEdit}
        create={MaintenanceCreate}
      />

      <Resource
        icon={People}
        options={{ label: 'People' }}
        name="people"
        list={PersonsList}
        edit={PersonsEdit}
        create={PersonsCreate}
      />

      <Resource
        icon={LocalShipping}
        options={{ label: 'Suppliers' }}
        name="suppliers"
        list={SuppliersList}
        edit={SuppliersEdit}
        create={SuppliersCreate}
      />


      <Resource
        icon={Assessment}
        options={{ label: 'Work Orders' }}
        name="workOrders"
        list={WorkOrdersList}
        edit={WorkOrdersEdit}
        create={WorkOrdersCreate}
      />

      <Resource
        icon={Subject}
        options={{ label: 'Work logs' }}
        name="workLogs"
        list={WorkLogsList}
        edit={WorkLogsEdit}
        create={WorkLogsCreate}
      />

    </Admin>;
  }
}

export default App;