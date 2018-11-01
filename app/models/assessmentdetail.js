
let mysql = require('../common/mysql-model');

let assessmentdetail = mysql('assessmentdetail',{
    "ID": "int",
    "Division": "varchar",
    "DivisionID": "int",
    "OptionID": "int",
    "Result": "int"
});

module.exports=assessmentdetail;

