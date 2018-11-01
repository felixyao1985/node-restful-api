
let mysql = require('../common/mysql-model');

let omahacategory = mysql('omahacategory',{
    "ID": "int",
    "Tag": "varchar",
    "Name": "varchar",
    "Status": "int",
    "versions": "varchar"
});

module.exports=omahacategory;

