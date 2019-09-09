const mongoose = require('mongoose');
// mongoose.Promise = global.Promise
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/rolodex";
mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');
    },
    err => {
         console.log(err);
        }
  );
module.exports = mongoose.connection