
let mysql = require('../common/mysql-model');

let omahasubject = mysql('omahasubject',{
    "ID": "int",
    "CID": "int",
    "Name": "varchar",
    "Special": "int",
    "Status": "int",
    "versions": "varchar"
});

module.exports=omahasubject;

