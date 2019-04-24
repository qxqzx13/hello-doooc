let express = require("express");
let app = express();
let request = require("request");


//个人中心里的用户信息的中间层
app.get("/userInfo",function (req,res) {  
    let url = "https://XXXXXXXXXX";
    request(url,function (err,responesText,body) {  
        if(!err && responesText.statusCode === 200) {
            res.json({})
        }
    })
})



app.listen(80,function(){
    console.log("成功");
})