// 获取一个 express 的路由实例
var express = require('express');
var apiRoutes = express.Router();
var User = require('../models/user'); //获取 User model 信息



// 返回所有用户信息
apiRoutes.get('/users', function(req, res) {
	let oUser = new User({
		ID: 1,
		Username: 2,
	})

	oUser.find("",function(err,result){
		if (err) throw err;
		res.json(result);
	});
});


module.exports = apiRoutes;