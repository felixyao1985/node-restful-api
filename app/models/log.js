
let mysql = require('../common/mysql-model');

let log = mysql('log',{
    "ID": "int",
    "DBName": "varchar",
    "DBID": "int",
    "DBAction": "enum",
    "DBLog": "text",
    "CreateTime": "datetime",
    "CreateUserID": "int",
    "CreateUserName": "varchar"
});

module.exports=log;

