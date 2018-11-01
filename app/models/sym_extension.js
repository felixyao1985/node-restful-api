
let mysql = require('../common/mysql-model');

let sym_extension = mysql('sym_extension',{
    "extension_id": "varchar",
    "extension_type": "varchar",
    "interface_name": "varchar",
    "node_group_id": "varchar",
    "enabled": "smallint",
    "extension_order": "int",
    "extension_text": "mediumtext",
    "create_time": "datetime",
    "last_update_by": "varchar",
    "last_update_time": "datetime"
});

module.exports=sym_extension;

