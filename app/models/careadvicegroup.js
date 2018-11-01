
let mysql = require('../common/mysql-model');

let careadvicegroup = mysql('careadvicegroup',{
    "ID": "int",
    "versions": "varchar",
    "DiagnosisList": "text",
    "CareAdvice": "text"
});

module.exports=careadvicegroup;

