
let mysql = require('../common/mysql-model');

let sym_data_gap = mysql('sym_data_gap',{
    "start_id": "bigint",
    "end_id": "bigint",
    "status": "char",
    "create_time": "datetime",
    "last_update_hostname": "varchar",
    "last_update_time": "datetime"
});

module.exports=sym_data_gap;

