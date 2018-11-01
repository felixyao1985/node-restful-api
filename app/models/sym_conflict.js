
let mysql = require('../common/mysql-model');

let sym_conflict = mysql('sym_conflict',{
    "conflict_id": "varchar",
    "source_node_group_id": "varchar",
    "target_node_group_id": "varchar",
    "target_channel_id": "varchar",
    "target_catalog_name": "varchar",
    "target_schema_name": "varchar",
    "target_table_name": "varchar",
    "detect_type": "varchar",
    "detect_expression": "mediumtext",
    "resolve_type": "varchar",
    "ping_back": "varchar",
    "resolve_changes_only": "smallint",
    "resolve_row_only": "smallint",
    "create_time": "datetime",
    "last_update_by": "varchar",
    "last_update_time": "datetime"
});

module.exports=sym_conflict;

