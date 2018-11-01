
let mysql = require('../common/mysql-model');

let sym_channel = mysql('sym_channel',{
    "channel_id": "varchar",
    "processing_order": "int",
    "max_batch_size": "int",
    "max_batch_to_send": "int",
    "max_data_to_route": "int",
    "extract_period_millis": "int",
    "enabled": "smallint",
    "use_old_data_to_route": "smallint",
    "use_row_data_to_route": "smallint",
    "use_pk_data_to_route": "smallint",
    "reload_flag": "smallint",
    "file_sync_flag": "smallint",
    "contains_big_lob": "smallint",
    "batch_algorithm": "varchar",
    "data_loader_type": "varchar",
    "description": "varchar",
    "create_time": "datetime",
    "last_update_by": "varchar",
    "last_update_time": "datetime"
});

module.exports=sym_channel;

