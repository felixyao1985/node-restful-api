
let mysql = require('../common/mysql-model');

let diagnosismap = mysql('diagnosismap',{
    "ID": "int",
    "Division": "varchar",
    "DivisionID": "int",
    "Diagnosis": "text",
    "versions": "varchar"
});

module.exports=diagnosismap;

