
let mysql = require('../common/mysql-model');

let oassessdetail = mysql('oassessdetail',{
    "ID": "int",
    "OID": "int",
    "SID": "int",
    "OptionID": "int",
    "OptionMemo": "text",
    "OptionList": "text",
    "OptionScore": "int",
    "OtherMemo": "varchar",
    "OtherDiagnosis": "text"
});

module.exports=oassessdetail;

