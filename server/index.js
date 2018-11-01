/**
 * Created by Felix on 18/11/01.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('../config'); //读取配置文件config.js信息
// =======================
// 配置 =========
// =======================
var port = process.env.PORT || 3933; // 设置启动端口
app.set('superSecret', config.secret); // 设置app 的超级密码--用来生成摘要的密码

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));

// =======================
// 路由 ================
// =======================
// 基础路由
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API 路由 -------------------
var apiRoutes = require('../app/router');
app.use('/api', apiRoutes);


// =======================
// 启动服务 ======
// =======================
app.listen(port);
console.log('http://localhost:' + port);