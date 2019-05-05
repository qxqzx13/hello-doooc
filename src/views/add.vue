<template>
    <div class="add">
        <h1>添加宠物信息</h1>
        <form name="petForm">

        </form>
        <input type="button" value="提交" @click="addPet">
    </div>
</template>

<script>
    export default {
        name: "add",
        methods:{
            addPet(){
                var formdata = new FormData(document.advForm);
                this.$axios.post()
            }
        }
    }
</script>
<style scoped>

</style>