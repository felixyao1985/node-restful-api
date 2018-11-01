
let mysql = require('../common/mysql-model');

let omahaadetail = mysql('omahaadetail',{
    "ID": "int",
    "OAID": "int",
    "OptionID": "int",
    "OptionValue": "varchar",
    "OptionMemo": "text",
    "OptionList": "text",
    "OptionScore": "int"
});

module.exports=omahaadetail;

