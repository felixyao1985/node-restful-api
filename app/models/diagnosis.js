
let mysql = require('../common/mysql-model');

let diagnosis = mysql('diagnosis',{
    "ID": "int",
    "code": "varchar",
    "Content": "varchar",
    "Status": "int",
    "versions": "varchar"
});

module.exports=diagnosis;

