<template>
    <div class="">
        <div class="login">
            <ul>
                <li>账号登录</li>
                <li><input type="text" placeholder="请输入手机号" style="background: transparent;"></li>
                <li><input type="text" placeholder="请输入验证码" style="background: transparent;">|<a href="#">获取验证码</a></li>
                <li><input type="button" value="登录"></li>
                <li><a href="#">快速注册</a></li>
                <li>——————————<span> OR </span>——————————</li>
            </ul>
            <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    </div>
</template>

<script>
    import "../assets/petshop/login.css";
    export default {
        name: "login",
        components:{

        }
    }
</script>

<style scoped>

</style>