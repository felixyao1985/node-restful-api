const objectAssign = require('object-assign');
const utils = require('../common/utils');

const schema = function(TABLE,dataSchemas,Pool) {

	//connection.connect();
    let gettype=Object.prototype.toString;
    let utility={
          isObj:function(o){
               return    gettype.call(o)=="[object Object]";

          }
    }

	
	// 查询所有数据
	let find = (sql,callback)=>{

		Pool.getConnection(function(err,connection) {	  
			connection.query("SELECT * FROM "+TABLE.toLowerCase()+' '+sql,(err,result)=>{
				if(err){
					console.log('错误信息-',err.sqlMessage);
					let errNews = err.sqlMessage;
					callback(errNews,'');
					return;
				} 

				let string=JSON.stringify(result); 
				let data = JSON.parse(string);
				//callback('',data);
				callback('',utils.storeList(dataSchemas, null, data));
				connection.release();
				connection.destroy();
			})
		})
	}

	// 插入一条数据
	let save = (datas,callback)=>{
		Pool.getConnection(function(err,connection) {	  
			let fields='';
			let values='';
			for( let k in datas){
			  fields+=k+',';
			  values=values+"'"+datas[k]+"',"
			}
			fields=fields.slice(0,-1);
			values=values.slice(0,-1);
			let sql="INSERT INTO "+TABLE+'('+fields+') VALUES('+values+')';
			connection.query(sql,(err,result)=>{
				if(err){
					callback(err,0);
				}else{
					callback('',result.insertId);
				}

				connection.release();
				connection.destroy();	
			});
		})
	}

	// 更新一条数据
	let update =function(sets,where,callback){
		Pool.getConnection(function(err,connection) {	
			let _SETS='';
			let _WHERE='';
			let keys='';
			let values='';
			for(let k in sets){
				_SETS+=k+"='"+sets[k]+"',";
			}
			_SETS=_SETS.slice(0,-1);
			if(utility.isObj(where)) {
				_WHERE=' WHERE ';
				for(let k2 in where){
				  _WHERE+= k2+"=' "+where[k2]+"'  AND";
				}
				_WHERE+= " 1 "
			}else{
				 _WHERE = where;
			}
			let sql="UPDATE "+TABLE+' SET '+_SETS+' '+_WHERE;
			connection.query(sql,(err,result,f)=>{
				callback('',sets);

				connection.release();
				connection.destroy();		
			});
		})
	}

	// 删除一条数据
	let del =function(where,callback){
		Pool.getConnection(function(err,connection) {	
			let _WHERE='';
			if(utility.isObj(where)) {
				_WHERE=' WHERE ';
				for(let k2 in where){
				  _WHERE+= k2+"=' "+where[k2]+"'  AND";
				}
				_WHERE+= " 1 "
			}else{
				 _WHERE = where;
			}

			let sql="DELETE  FROM "+TABLE+' '+_WHERE;
			connection.query(sql,(err,result,f)=>{
				callback('',result.affectedRows);

				connection.release();
				connection.destroy();	
			});
		})
	}

	let end = function() {

	}

	return {
		find:find,
		save:save,
		del:del,
		update:update
	}
}


module.exports = schema;