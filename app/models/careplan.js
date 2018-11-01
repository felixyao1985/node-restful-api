
let mysql = require('../common/mysql-model');

let careplan = mysql('careplan',{
    "ID": "int",
    "versions": "varchar",
    "accountId": "int",
    "OID": "int",
    "BeginTime": "date",
    "EndTime": "date",
    "BasePackItem": "varchar",
    "BasePackTimes": "int",
    "Date": "date",
    "Status": "int",
    "IDCard": "varchar",
    "Memo": "text",
    "Target": "text",
    "Degree": "varchar",
    "Target2": "text",
    "CareAdviceList": "text"
});

module.exports=careplan;

