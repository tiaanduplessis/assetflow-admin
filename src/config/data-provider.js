export default {
  admin: {
    path: 'people', // path in db to store user information (default 'users')
    config: {
      // Firebase config used to create additional app to create users (HACK)
      apiKey: "AIzaSyBwdpv7Hm38HTYYopUzRonEcxKP0F58AEY",
      authDomain: "assetflow-1c2e4.firebaseapp.com",
      databaseURL: "https://assetflow-1c2e4.firebaseio.com",
      storageBucket: "assetflow-1c2e4.appspot.com",
      messagingSenderId: "875098773341"
    },
    validate: (data) => data.isEmployee // Function to validate that a user should be created in firebase (default () => true)
  },

    trackedResources: [
      {
        name: 'sites',
        path: `sites`,
        isPublic: false
      },
      {
        name: 'assets',
        path: `assets`,
        isPublic: false,
        uploadFields: ['pictures', 'files']
      },
      {
        name: 'parts',
        path: 'parts',
        isPublic: false,
        uploadFields: ['pictures', 'files']
      },
      {
        name: 'maintenance',
        path: `maintenance`,
        isPublic: false,
        uploadFields: ['pictures', 'files']
      },
      {
        name: 'workOrders',
        path: `workOrders`,
        isPublic: false,
        uploadFields: ['pictures', 'files']
      },
      {
        name: 'workLogs',
        path: `workLogs`,
        isPublic: false,
      },
      {
        name: 'people',
        path: 'people',
        isPublic: false,
      },
      {
        name: 'suppliers',
        path: `suppliers`,
        isPublic: false,
      }
    ]
  }