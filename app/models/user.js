
let mysql = require('../common/mysql-model');

let user = mysql('user',{
    "ID": "int",
    "OrgID": "int",
    "Type": "enum",
    "Role": "enum",
    "Username": "varchar",
    "Password": "varchar",
    "Name": "varchar",
    "Mobile": "varchar",
    "Phone": "varchar",
    "EMail": "varchar",
    "Memo": "text",
    "Icon": "varchar",
    "Sex": "enum",
    "Age": "int",
    "Birthday": "date",
    "IDCard": "varchar",
    "LastLoginIP": "varchar",
    "LastLoginTime": "datetime",
    "LastLogoutTime": "datetime",
    "Status": "enum"
});

module.exports=user;

