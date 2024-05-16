const {Firestore} = require('@google-cloud/firestore');

const path = require('path');

const safilePath = path.join(__dirname,'service-account.json');

const firestore = new Firestore({
      projectId: 'ar-tour-416020',
      keyFilename: safilePath,
      databaseId: 'faszen-products'
});

module.exports = firestore;