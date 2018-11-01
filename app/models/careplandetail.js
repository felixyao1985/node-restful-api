
let mysql = require('../common/mysql-model');

let careplandetail = mysql('careplandetail',{
    "ID": "int",
    "CPID": "int",
    "ItemID": "varchar",
    "Source": "varchar",
    "cost": "double",
    "TimesType": "varchar",
    "Frequency": "int",
    "Times": "int"
});

module.exports=careplandetail;

