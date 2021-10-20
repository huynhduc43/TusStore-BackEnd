require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const dbURL = process.env.DB;

module.exports = function(){
  mongoose.connect(dbURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    autoIndex: false
  });

  mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ", dbURL);
  });

  mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
  });

  mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose default connection is disconnected due to application termination");
      process.exit(0)
    });
  });
}
