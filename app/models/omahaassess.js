
let mysql = require('../common/mysql-model');

let omahaassess = mysql('omahaassess',{
    "ID": "int",
    "IDCard": "varchar",
    "NextTime": "date",
    "Assessors": "varchar",
    "Recorder": "varchar",
    "Place": "varchar",
    "IZHFiles": "varchar",
    "Score": "int",
    "Memo": "text",
    "Status": "tinyint",
    "Date": "date",
    "accountId": "int"
});

module.exports=omahaassess;

