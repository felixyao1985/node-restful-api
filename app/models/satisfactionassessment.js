
let mysql = require('../common/mysql-model');

let satisfactionassessment = mysql('satisfactionassessment',{
    "ID": "int",
    "OrgName": "varchar",
    "Person": "varchar",
    "Block1": "varchar",
    "Block2": "varchar",
    "Result": "text",
    "Date": "date"
});

module.exports=satisfactionassessment;

