
let mysql = require('../common/mysql-model');

let district = mysql('district',{
    "ID": "int",
    "CityID": "int",
    "Name": "varchar",
    "Description": "text",
    "Status": "enum"
});

module.exports=district;

