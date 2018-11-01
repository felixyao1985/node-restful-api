
let mysql = require('../common/mysql-model');

let sym_data = mysql('sym_data',{
    "data_id": "bigint",
    "table_name": "varchar",
    "event_type": "char",
    "row_data": "mediumtext",
    "pk_data": "mediumtext",
    "old_data": "mediumtext",
    "trigger_hist_id": "int",
    "channel_id": "varchar",
    "transaction_id": "varchar",
    "source_node_id": "varchar",
    "external_data": "varchar",
    "node_list": "varchar",
    "create_time": "datetime"
});

module.exports=sym_data;

