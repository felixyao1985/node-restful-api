/*
let User = require('./models/User');
let Friend = require('./models/friend');

let oFriend = new Friend({
    FriendID: 1,
    UserID: 2,
    FriendName: 'felix',
    ID: 0
})



oFriend.find("where `ID` < '10' ",function(err,result){
	console.log('find-oFriend',result)
});

let oUser = new User({
    ID: 1,
    Username: 2,
})



oUser.find("where `ID` < '10' ",function(err,result){
	console.log('find-oUser',result)
});

*/

let auto = require('../build/auto-model');

