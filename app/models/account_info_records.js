
let mysql = require('../common/mysql-model');

let account_info_records = mysql('account_info_records',{
    "id": "int",
    "user_id": "int",
    "senior_id": "int",
    "domain_id": "int",
    "order_type": "varchar",
    "amount": "int",
    "pos_no": "varchar",
    "serial_no": "varchar",
    "business_date": "timestamp",
    "deleted": "tinyint",
    "status": "int",
    "order_no": "varchar",
    "payment_mode": "varchar",
    "id_in_source": "int",
    "creator_id_in_source": "int",
    "create_time_in_source": "timestamp",
    "last_modify_time_in_source": "timestamp"
});

module.exports=account_info_records;

