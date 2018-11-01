
let mysql = require('../common/mysql-model');

let servicemap = mysql('servicemap',{
    "ID": "int",
    "CareAdviceID": "int",
    "Item": "text"
});

module.exports=servicemap;

