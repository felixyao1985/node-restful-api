
let mysql = require('../common/mysql-model');

let careadvice = mysql('careadvice',{
    "ID": "int",
    "DiagnosisID": "int",
    "Name": "varchar",
    "Status": "int",
    "versions": "varchar"
});

module.exports=careadvice;

