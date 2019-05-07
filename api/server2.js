const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db2");
const jwt = require("./module/jwt");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,"../src/assets/")));
app.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type,authorization");
    res.header("Access-Control-Allow-Methods","DELETE,PUT,GET,POST,OPTIONS");
    next();
})

//tl 登录
app.post("/login",function (req,res) {
    console.log(req.body.adminName,req.body.passWord)
    if(req.body.adminName/1 === 18234115020 && req.body.passWord/1 ===666666){
        res.json({
            ok:1,
            msg:"登录成功",
            userId:1,
            userName:18234115020
        })
    }else{
        res.json({
            data:{
                ok:-1,
                msg:"登录失败"
            }
        })
    }
});
//宠物
app.get("/animal",function(req,res){
	console.log(1111)
    res.json({
        data:{
            pageSum:1,
            pageIndex:1,
            pet:[{
                typeId:1,
                typeName:"哈士奇",
                price:2980,
                icon:"/hello/petmarket/img/20180820nsmqmz.jpg",
            },{
                typeId:2,
                typeName:"哈士奇",
                price:2980,
                icon:"/hello/petmarket/img/20180820nsmqmz.jpg",
            },{
                typeId:3,
                typeName:"哈士奇",
                price:2980,
                icon:"/hello/petmarket/img/20180820nsmqmz.jpg"
            },{
                typeId:4,
                typeName:"哈士奇",
                price:2980,
                icon:"/hello/petmarket/img/20180820nsmqmz.jpg"
            },{
                typeId:5,
                typeName:"哈士奇",
                price:2980,
                icon:"/hello/petmarket/img/20180820nsmqmz.jpg"
            },{
                typeId:6,
                typeName:"哈士奇",
                price:2980,
                icon:"/hello/petmarket/img/20180820nsmqmz.jpg"
            }]
        }
    })
})
//详情
app.get("/xq",function(req,res){
    res.json({
        data:{
            icon:["/hello/petmarket/img/210205623263.jpg","/hello/petmarket/img/210205623263.jpg","/hello/petmarket/img/210205623263.jpg"],
            petIntroduce:"出售纯种健康宠物狗哈士奇支持上门挑选送货上门",
            getPrice:2980,
            petNum:20,
            petAge:"3个月",
            dogOrCat:2,
            boyOrGirl:1
        }
    })
})
//购物车
app.get("/gwc",function(req,res){
    res.json({
        pageSum:1,
        data:
            [{
            icon:"/hello/petmarket/img/20180820nsmqmz.jpg",
            name:"哈士奇1",
            goodsNum:1,
            price:2980,
            pType:0,
            goodsId:1
        },{
            icon:"/hello/petmarket/img/4ce5c49d1451e641adacddcc5cbadfae.jpg",
            name:"鲜虾味大鸡腿",
            price:549,
            goodsNum:1,
            productDescription:"鲜虾味",
            pType:1,
            goodsId:2
            }]
    })
})
//食品
app.get("/goods",function(req,res){
    res.json({
        data:[{
            price:[290,300],
            stock:1989,
            pic:"/hello/daily/img/food1.jpg",
            goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
            goodsId:1,
        },{
            price:[462,600],
            stock:1701,
            pic:"/hello/petshop/img/food2.jpg",
            goodsName:"发育宝BD24天然活力繁育配方成犬犬粮16kg",
            goodsId:1
        },{
            price:[509,650],
            stock:1701,
            pic:"/hello/petshop/img/food3.jpg",
            goodsName:"发育宝BP28天然活力繁育配方幼犬犬粮16kg",
            goodsId:1
        },
            {
                price:[338,425],
                stock:1389,
                pic:"/hello/petshop/img/food4.jpg",
                goodsName:"佩玛思特深海鱼鸡肉成犬10KG",
                goodsId:1
            },
            {
                price:[240,300],
                stock:1579,
                pic:"/hello/petshop/img/food5.png",
                goodsName:"麦富迪牛肉钙奶成犬10kg",
                goodsId:1
            },{
                price:[67,115],
                stock:955,
                pic:"/hello/petshop/img/food6.jpg",
                goodsName:"皇家MIS30小型犬奶糕1kg",
                goodsId:1
            },
            {
                price:[173,245],
                stock:955,
                pic:"/hello/petshop/img/food7.jpg",
                goodsName:"皇家MIS30小型犬奶糕3kg",
                goodsId:1
            },
            {
                price:[128,230],
                stock:955,
                pic:"/hello/petshop/img/food8.jpg",
                goodsName:"皇家MIS30小型犬奶糕1kg*2",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food9.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food10.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food11.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food12.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food13.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food14.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/petshop/img/food15.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            }]
    })
})
//用品
app.get("/daily",function(req,res){
    res.json({
        data:[{
            price:[599,549],
            stock:1579,
            pic:"/hello/daily/img/one.jpg",
            goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
            goodsId:1
        },{
            price:[599,549],
            stock:1579,
            pic:"/hello/daily/img/one.jpg",
            goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
            goodsId:1
        },{
            price:[599,549],
            stock:1579,
            pic:"/hello/daily/img/one.jpg",
            goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
            goodsId:1
        },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },{
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            },
            {
                price:[599,549],
                stock:1579,
                pic:"/hello/daily/img/one.jpg",
                goodsName:"麦富迪双拼标准颗粒成犬粮10KG",
                goodsId:1
            }]
    })
})



//确定付款
app.post("/account",function(req,res){
    console.log(req.body.userName,req.body.userId)
    res.json({
        detailedAddress:"北京市昌平区沙河镇沙阳路振宇公寓422",
        detailedName:"刘鑫",
        contactNumber:18234115020,
    })
})





//后台登录
app.post("/logina",function (req,res) {
    console.log(req.body.adminName,req.body.passWord)
    if(req.body.adminName === "admin" && req.body.passWord/1 === 123456){
        res.json({
            ok:1,
            msg:"登录成功",
            adminId:1,
            adminName:req.body.adminName
        })
    }else{
        res.json({
            ok:-1,
            msg:"登录失败"
        })
    }
    })

app.get("/adminLog",function (req,res) {

})
/***************************删除图片**********************************/

app.delete("/adminLog",function(req,res){
    //获取传过来的Id
    console.log(req.query)
    // var id = req.query._id;
    // console.log(id)
    // //查找数据库中的ID 查找一条如果查找到info为true有值
    // db.findOneById("adminLog",id,function(err,info){
    //     console.log(info)
    //     //                  { _id: 5c9f0eef14d603cb59f57f35,
    //     // 					advTitle: '334',
    //     // 					advPic: '1553927919908.png',
    //     // 					advType: 1,
    //     // 					ddTime: '2019-03-30 14:38:39',
    //     // 					orderByNum: 234424324324342430000 }
    //     if(!info){
    //         tool.send(res,-1,"传入参数有误");
    //     }else{db.deleteOneById("adminLog",id,function(err){
    //         tool.send(res,1,"删除成功")
    //     })
    //
    //
    //         //删除数据库里的文件
    //
    //
    //     }
    // })
})
app.listen(8088,function(){
    console.log("成功");
})