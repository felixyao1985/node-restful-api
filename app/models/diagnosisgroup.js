
let mysql = require('../common/mysql-model');

let diagnosisgroup = mysql('diagnosisgroup',{
    "ID": "int",
    "versions": "varchar",
    "Division": "varchar",
    "DivisionList": "text",
    "Diagnosis": "text"
});

module.exports=diagnosisgroup;

