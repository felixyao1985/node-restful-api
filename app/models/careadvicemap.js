
let mysql = require('../common/mysql-model');

let careadvicemap = mysql('careadvicemap',{
    "ID": "int",
    "versions": "varchar",
    "DiagnosisID": "int",
    "CareAdvice": "text"
});

module.exports=careadvicemap;

