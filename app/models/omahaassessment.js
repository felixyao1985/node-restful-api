
let mysql = require('../common/mysql-model');

let omahaassessment = mysql('omahaassessment',{
    "ID": "int",
    "IDCard": "varchar",
    "Personnel": "varchar",
    "Place": "varchar",
    "IZHFiles": "varchar",
    "Score": "int",
    "Memo": "text",
    "Status": "tinyint",
    "Date": "date"
});

module.exports=omahaassessment;

