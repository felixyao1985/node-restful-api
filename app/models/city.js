
let mysql = require('../common/mysql-model');

let city = mysql('city',{
    "ID": "int",
    "StateID": "int",
    "Name": "varchar",
    "EngName": "varchar",
    "Description": "text",
    "Status": "enum"
});

module.exports=city;

