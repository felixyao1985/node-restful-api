
let mysql = require('../common/mysql-model');

let state = mysql('state',{
    "ID": "int",
    "Name": "varchar",
    "Description": "text",
    "Sequence": "varchar",
    "Sort": "int",
    "Status": "enum"
});

module.exports=state;

