const mysqlDB = require('./mysql-db');
const utils = require('../common/utils');
const conn = require('./mysql-con');


const model= (table,schema)=>{
	return function(data){
		let obj = new Object();
		let Pool = conn();
		let db  = mysqlDB(table,schema,Pool);
		obj.data	= utils.store(schema, {}, data);

		obj.set = function(cal,val){
			obj.data[cal] = val;
		}

		obj.get = function(cal){
			return obj.data[cal];
		}

		obj.find	= async function(where,cb){
			db.find(where,function(err,result){
				cb(err,result);
				//Pool.end();
			});
		};
		obj.save	= async function(cb){
			db.save(obj.data,function(err,result){
				cb(err,result);
				//Pool.end();
			});
		};
		obj.del		= async function(where,cb){
			db.del(where,function(err,result){
				cb(err,result);
				//Pool.end();
			});
		};

		/*
		@where  string 为where sql语句
				ojb    key:value 形式的键值对，搜索二者相等
		*/
		obj.update	= async function(where,cb){
			db.update(obj.data,where,function(err,result){
				cb(err,result);
				//Pool.end();
			});
		};

		return obj
	};
}


module.exports=model;


/************************************  使用范例 *********************************************/
/*
let Friend = mysql('friend', {
    FriendID: 1,
    UserID: 0,
    FriendName: String,
    ID: 0
});

let oFriend = new Friend({
    FriendID: 1,
    UserID: 2,
    FriendName: 'felix',
    ID: 1
})



console.log(oFriend.data.FriendName);
oFriend.find("where `ID` < '10' ",function(err,result){
	console.log(result)
});

oFriend.set('FriendName',"eric");
oFriend.save(function(err,result){
	console.log(result)
});

oFriend.update({ID:1},function(err,result){
	console.log(result)
});


oFriend.del("where `ID` > 33",function(err,result){
	console.log(result)
});

*/
