
let mysql = require('../common/mysql-model');

let sym_data_event = mysql('sym_data_event',{
    "data_id": "bigint",
    "batch_id": "bigint",
    "router_id": "varchar",
    "create_time": "datetime"
});

module.exports=sym_data_event;

