
let mysql = require('../common/mysql-model');

let ehome = mysql('ehome',{
    "ID": "int",
    "ShowStyle": "int",
    "img": "text",
    "Content": "text",
    "sq": "int"
});

module.exports=ehome;

