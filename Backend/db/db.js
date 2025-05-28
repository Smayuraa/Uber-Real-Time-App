const mongoose = require('mongoose');


// function connectToDb() {
//     mongoose.connect(process.env.DB_CONNECT
//     ).then(() => {
//         console.log('Connected to DB');
//     }).catch(err => console.log(err));
// }
const connectToDb = () => {
  const uri = process.env.DB_CONNECT;

  if (!uri) {
    throw new Error('MongoDB URI is not defined');
  }
  // RETURN the promise here
  return mongoose.connect(uri);

};


module.exports = connectToDb;