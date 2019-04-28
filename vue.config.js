module.exports={
    devServer:{
        open:true,
        port:80,
        host:"127.0.0.1",
        proxy:{
            "/hello":{
                target:"http://10.9.20.246:8080",
                changeOrigin:true,
                pathRewrite:{
                    "^/hello":"/"
                }
            }
        }
    }
}