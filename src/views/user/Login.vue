<template>
    <div class="container">
        <div class="login-panel">
            <div class="login-title">
                <el-text>welcome</el-text>
            </div>
            <div class="login-form">
                <el-form>
                    <el-form-item>
                        <el-input placeholder="登录"/>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="密码"/>
                    </el-form-item>
                    <el-button type="primary" @click="onSubmit">立即登录</el-button>
                </el-form>
            </div>
            <div class="link">
                <router-link to="/">忘记密码?</router-link>
                <el-divider direction="vertical" />
                <router-link to="/user/register">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
        padding: 20px 20px 0 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-panel {
        margin: 100px;
        width: 280px;
    }

    .login-title {
        width: 100%;
        height: 100px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-title .el-text {
        font-size: 48px;
    }

    .login-form{
        margin-bottom: 12px;
    }

    .link{
        display: flex;
        justify-content: center;
    }
    
    .el-input{
        border-radius: 100px;
    }

    .el-button{
        width: 100%;
    }

    a{
        text-decoration: none;
        font-size: 12px;
        color: var(--el-text-color);
    }
</style>