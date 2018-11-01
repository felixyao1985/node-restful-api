
let mysql = require('../common/mysql-model');

let workassessment = mysql('workassessment',{
    "ID": "int",
    "OrgName": "varchar",
    "Result": "text",
    "Date": "date",
    "TypeName": "varchar",
    "TypeValue": "varchar"
});

module.exports=workassessment;

