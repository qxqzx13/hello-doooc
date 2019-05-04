const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db2");
const jwt = require("./module/jwt");
const {upPic} = require("./module/upPic")
const app = express();
app.use(bodyParser.json());
app.all("*",function (req,res,next) {
    // res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Headers","content-type,authorization");
    // res.header("Access-Control-Allow-Methods","DELETE,PUT,GET,POST,OPTIONS");
    next();
})

//个人中心里的用户信息的中间层
app.get("/userInfo",function (req,res) {  
    let url = "https://XXXXXXXXXX";
    request(url,function (err,responesText,body) {  
        if(!err && responesText.statusCode === 200) {
            res.json({})
        }
    })
})
//tl 登录
app.post("/login",function (req,res) {
    db.findOne("adminList",{//查找账号密码
        adminName:req.body.adminName,
        passWord:req.body.passWord
    },function (err,info) {
        if(info){//如果存在,更新登录时间戳
            db.insertOne("adminLog",{
                adminName:info.adminName,
                addTime:Date.now()
            },function () {
                // 成功
                res.json({//返回token
                    ok:1,
                    adminName:info.adminName,
                    adminId:info._id,
                    token:jwt.getToken(info._id,info.adminName)
                })
            })
        }else{
            // 失败
            res.json({
                ok:-1,
                msg:"登陆失败"
            })
        }
    })
});
//tl 添加user
app.post("addUser",function(req,res){
    db.insertOne('adminList',{
        adminName:req.body.userName,

    },function(err){
        if(!err){
            res.json({
                ok:1,
                msg:"添加成功"
            })
        }else{
            res.json({
                ok:-1,
                msg:"添加失败"
            })
        }
    })
})
//tl 获取宠物市场页
app.get("getPet",function(req,res){
    let petAge = req.query.petAge || '';
    let dogOrCat = req.query.dogOrCat/1 || 1;
    let typeId = req.query.typeId || "";
    let pageIndex = req.query.pageIndex/1 || "";
    let boyOrGirl = req.query.boyOrGirl/1 || 1;
    db.count("petList",{
        petAge,
        dogOrCat,
        typeId,
        pageIndex,
        boyOrGirl
    },function(count){
        if(count){
            var pageSize = 6;
            var pageSum = Math.ceil(count/pageSize) ;
            if(pageSum<0)
                pageSum =1;
            if(pageIndex > pageSum)
                pageIndex = pageSum;
            if(pageIndex < 0)
                pageIndex = 1;
            db.find("petList",{
                whereObj:{
                    petAge,
                    dogOrCat,
                    typeId,
                    pageIndex,
                    boyOrGirl
                },
                skipNum:(pageIndex-1)*pageSize,
                limitNum:pageSize,
                sortObj:{
                    addTime:-1
                }
            },function (err,adminLog) {
                res.json(
                {
                    ok:1,
                    data:adminLog,
                    pageIndex,
                    pageSum
                }
                )
            })
        }else{
            res.json({
                ok:-1,
                msg:"查询失败"
            })
        }
    })
})
//tl 添加宠物
app.post("petList",function(req,res){
    var form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.keepExtensions = true;// 是否保留扩展名
    form.uploadDir = upPicUrl;
    // params:除了file类型以外其它的数据
    form.parse(req,function (err,params,file) {
        /*思路：“
        * 1、判断图片是否上传
        *   1、未上传
        *       删除空文件，返回结果。{state:-1,params}
        *   2、已上传
        *       1、格式对不对
        *           1、对
        *               将你图片的名字重命名，然后返回{state:0,params,newPicName}
        *           2、不对
        *               删除空文件，返回结果{state:-2}*/
        var fileInfo = file[picName];
        if(fileInfo.size>0){
            // 已上传
            var extList =[".gif",".png",".jpg"];// 允许提交的扩展名列表
            var extName = path.extname(fileInfo.path).toLowerCase();// 获得文件的扩展名
            if(extList.includes(extName)){// 格式正确
                var newPicName = Date.now()+extName;
                fs.rename(fileInfo.path,upPicUrl+"/"+newPicName,function (err) {
                    params.newPicName = newPicName;
                    db.insertOne("petList",{
                        typeId:req.query.typeId,//品种id
                        typeName:req.query.typeName,//品种名
                        boyOrGirl:req.query.boyOrGirl,//公母
                        petPic:req.query.petPic,//图片
                        petAge:req.query.petAge,
                        dogOrCat:req.query.dogOrCat,
                        petPrice:req.query.petPrice,
                        petIntroduce:req.query.Introduce,
                        petNum:req.query.petNum,
                        addTime:Date.now()
                    },function(err){
                        if(err){
                            res.json({
                                ok:-1,
                                msg:"添加失败"
                            })
                        }else{
                            res.json({
                                ok:1,
                                msg:"添加成功"
                            })
                        }
                    })
                })
            }else{
                fs.unlink(fileInfo.path,function (err) {
                    cb({
                        state:-2,
                        msg:"请选择.gif,.png,.jpg格式的图片"
                    })
                })
            }
        }else{
            // 未上传
            fs.unlink(fileInfo.path,function () {
                cb({
                    state:-1,
                    params,
                    msg:"请选择上传的图片"
                })
            })
        }
    })
})


app.listen(80,function(){
    console.log("成功");
})