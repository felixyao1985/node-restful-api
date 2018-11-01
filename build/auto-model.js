const Config = require('../config');
const conn = require('../app/common/mysql-con');
let fs = require('fs')
let files = '../app/models'
let Pool = conn();


/*
SELECT * FROM information_schema.COLUMNS WHERE TABLE_NAME = 'TableName';
'SELECT * FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = '+Config.database;
*/
Pool.getConnection(async function(err,connection) {	
	
	connection.query('SELECT `TABLE_NAME` FROM information_schema.TABLES WHERE TABLE_SCHEMA = "'+Config.mysql.database+'"',(err,result)=>{
		let string=JSON.stringify(result); 
		let data = JSON.parse(string);

		connection.release();
		connection.destroy();
		for(let key in data) {
			GET_COLUMNS(data[key].TABLE_NAME);
		}

	})
	
});

let GET_COLUMNS = function(TABLE_NAME) {
	Pool.getConnection(async function(err,connection) {	
	
		connection.query('SELECT `COLUMN_NAME`,`DATA_TYPE` FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = "'+Config.mysql.database+'" and TABLE_NAME = "'+TABLE_NAME+'"',(err,result)=>{
			let string=JSON.stringify(result); 
			let data = JSON.parse(string);
			connection.release();
			connection.destroy();
			CreatFile(data,TABLE_NAME);
		})
	});	
}


let CreatFile = function(COLUMN_NAME,TABLE_NAME) {
	// 文件内容模板
	let models = {};
	COLUMN_NAME.forEach(item => {
		models[item.COLUMN_NAME] = item.DATA_TYPE;
	})

	const template = `
let mysql = require('../common/mysql-model');

let ${TABLE_NAME} = mysql('${TABLE_NAME}',${JSON.stringify(models, null, 4)});

module.exports=${TABLE_NAME};

`
	fs.writeFile(files+"/"+TABLE_NAME+".js", template, function () {
		console.log('创建成功',TABLE_NAME)
	})
}

//Pool.end();