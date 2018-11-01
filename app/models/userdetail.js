
let mysql = require('../common/mysql-model');

let userdetail = mysql('userdetail',{
    "ID": "int",
    "UserID": "int",
    "StateID": "int",
    "CityID": "int",
    "Address": "varchar",
    "Postcode": "varchar"
});

module.exports=userdetail;

