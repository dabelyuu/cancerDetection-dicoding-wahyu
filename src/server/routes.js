const postPredictHandler = require('./handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        maxBytes: 1000000, // Limit to 1 MB
        multipart: true
      }
    }
  }
]
 
module.exports = routes;