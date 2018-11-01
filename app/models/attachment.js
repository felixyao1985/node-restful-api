
let mysql = require('../common/mysql-model');

let attachment = mysql('attachment',{
    "ID": "int",
    "Division": "varchar",
    "DBName": "varchar",
    "DBID": "int",
    "TempName": "varchar",
    "Filename": "varchar",
    "Size": "int",
    "Type": "varchar",
    "Folder": "text",
    "Memo": "text"
});

module.exports=attachment;

