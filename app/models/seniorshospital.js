
let mysql = require('../common/mysql-model');

let seniorshospital = mysql('seniorshospital',{
    "ID": "int",
    "IDCard": "varchar",
    "Name": "varchar",
    "Doctor": "varchar",
    "Department": "varchar",
    "Phone": "varchar",
    "Memo": "text"
});

module.exports=seniorshospital;

