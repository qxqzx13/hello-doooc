// 模块： 1、生成的模块尽量不要再改动。   2、尽量满足更多种的情况。（提高我的访问效率。） 3、将使用频率比较高的情况设置为模块下的一方法。
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

// 连接mongodb
function _connect(cb) {
    mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
        if(err){
            console.log("连接失败");
        }else{
            const db = client.db("zhang");
            cb(db);
        }
    })

}
/*
* 插入一条记录
* coll:指定集合，
* insertObj:指定插入的内容
* db:返回结果的回调函数*/
module.exports.insertOne= function(coll,insertObj,cb){
    _connect(function (db) {

        // db.collection(coll).insertOne(insertObj,cb)
        db.collection(coll).insertOne(insertObj,cb)


        // db.collection(coll).insertOne(insertObj,function (err,results) {
        //      cb(err,results);
        // })


        // db.collection(coll).insertOne(insertObj,function (err,results) {
        //     if(err){
        //         console.log("失败");
        //     }else{
        //         console.log("成功")
        //     }
        // })
    })
}
module.exports.insertMany = function(coll,insertArr,cb) {
    _connect(function (db) {
        db.collection(coll).insertMany(insertArr,cb)
    })
}



// function insertOne() {
//     mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
//         if(err){
//             console.log("连接失败");
//         }else{
//             // 增加一条记录
//             const db = client.db("zhang");// 指定你要操作的数据库
//             db.collection("score").insertOne({},function () {
//
//             })
//         }
//     })
// }
// function insertMany() {
//     mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
//         if(err){
//             console.log("连接失败");
//         }else{
//             // 增加一条记录
//             const db = client.db("zhang");// 指定你要操作的数据库
//             db.collection("score").insertMany({},function () {
//
//             })
//         }
//     })
// }
