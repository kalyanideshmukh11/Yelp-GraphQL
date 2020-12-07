const config = require('../config');
var mongoose = require('mongoose');
const db = config.URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 1,
  bufferMaxEntries: 0,
        });
        console.log("MongoDB connected");
    } catch(e) {
        console.log(e);
    }
}

module.exports = connectDB;