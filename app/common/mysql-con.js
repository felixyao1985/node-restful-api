const mysql = require('mysql');
const Config = require('../../config');


const connectdb=()=>{
  //let connection = mysql.createConnection(Config.mysql);
  let connection = mysql.createPool(Config.mysql)
  return connection;
}

module.exports=connectdb;