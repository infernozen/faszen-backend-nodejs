const {Firestore} = require('@google-cloud/firestore');
const { PROJECT_ID , FIRESTORE_DB } = require('../utils/secrets');

const path = require('path');

const safilePath = path.join(__dirname,'service-account.json');

const firestore = new Firestore({
      projectId: PROJECT_ID,
      keyFilename: safilePath,
      databaseId: FIRESTORE_DB
});

module.exports = firestore;
