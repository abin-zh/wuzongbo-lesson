<template>
    <el-card>
        <el-text>{{title}}</el-text>
    </el-card>
</template>

<script>
export default{
    props:{
        title:{
            type:String,
            required:true,
        },
    }    
}
</script>

<style>

</style>