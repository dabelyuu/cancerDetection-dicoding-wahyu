// const { Firestore } = require('@google-cloud/firestore');

// const path = require('path');

// const pathKey = path.resolve('./private_key')

// async function storeData(id, data) {
//   try {
//     const db = new Firestore({
//       projectId: 'projectid',
//       keyFilename: pathKey,
//     });

//     const predictCollection = db.collection('prediction-history');
//     return predictCollection.doc(id).set(data);

//   }catch(error) {
//     console.error(error);
//   }
// }
   
// module.exports = storeData;