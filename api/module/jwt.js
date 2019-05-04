const jwt = require("jwt-simple");
const KEY = "%^&%&^((*()"
module.exports.getToken = function (adminId,adminName) {
    return jwt.encode({
        adminId,
        adminName,
        exp:Date.now()+1000*60*10
    },KEY);
}
module.exports.deToken = function (token) {
    try{
        var info = jwt.decode(token,KEY);
        console.log(info);
        if(info.exp > Date.now()){
            return {
                ok:1,
                info,
                msg:"成功"
            }
        }else{
            return {
                ok:2,
                msg:"token已过期"
            }
        }
    }
    catch (err){
        return {
            ok:3,
            msg:"token异常"
        }
    }

}