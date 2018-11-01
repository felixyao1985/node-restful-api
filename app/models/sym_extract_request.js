
let mysql = require('../common/mysql-model');

let sym_extract_request = mysql('sym_extract_request',{
    "request_id": "bigint",
    "node_id": "varchar",
    "status": "char",
    "start_batch_id": "bigint",
    "end_batch_id": "bigint",
    "trigger_id": "varchar",
    "router_id": "varchar",
    "last_update_time": "datetime",
    "create_time": "datetime"
});

module.exports=sym_extract_request;

