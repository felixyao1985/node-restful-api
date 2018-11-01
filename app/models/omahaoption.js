
let mysql = require('../common/mysql-model');

let omahaoption = mysql('omahaoption',{
    "ID": "int",
    "PID": "int",
    "relyID": "int",
    "Type": "varchar",
    "Name": "varchar",
    "Score": "int",
    "Status": "int",
    "versions": "varchar"
});

module.exports=omahaoption;

