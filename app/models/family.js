
let mysql = require('../common/mysql-model');

let family = mysql('family',{
    "ID": "int",
    "IDCard": "varchar",
    "Name": "varchar",
    "RelationShip": "varchar",
    "Age": "int",
    "Health": "varchar",
    "Address": "varchar",
    "Phone": "varchar",
    "isContact": "tinyint",
    "Stauts": "varchar"
});

module.exports=family;

