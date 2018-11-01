
let mysql = require('../common/mysql-model');

let servicegroup = mysql('servicegroup',{
    "ID": "int",
    "DiagnosisList": "text",
    "Item": "text"
});

module.exports=servicegroup;

