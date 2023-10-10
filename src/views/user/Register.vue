<template>
    <div class="container">
        <div class="login-panel reg-panel">
            <div class="login-title reg-title">
                <el-text>Register</el-text>
            </div>
            <div class="login-form">
                <el-form>
                    <el-form-item label="用户姓名">
                        <el-input v-model="username" />
                    </el-form-item>
                    
                    <el-form-item label="用户密码">
                        <el-input type="password" v-model="password" show-password/>
                    </el-form-item>

                    <el-form-item label="确认密码">
                        <el-input type="password" v-model="password" show-password/>
                    </el-form-item>

                    <el-form-item label="用户类型">
                        <el-select v-model="select" placeholder="Select" style="width: 115px">
                            <el-option label="学生" value="1" />
                            <el-option label="老师" value="2" />
                            <el-option label="宿管" value="3" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="用户性别">
                        <el-radio-group v-model="sex">
                            <el-radio label="男" size="default">男</el-radio>
                            <el-radio label="女" size="default">女</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="出生日期">
                        <el-date-picker v-model="birthday"></el-date-picker>
                    </el-form-item>

                    <el-form-item label="兴趣爱好">
                        <el-checkbox label="阅读" />
                        <el-checkbox label="音乐" />
                        <el-checkbox label="阅读" />
                    </el-form-item>

                    <el-form-item label="电子邮件">
                        <el-input type="email"></el-input>
                    </el-form-item>

                    <el-form-item label="自我介绍">
                        <el-input
                            v-model="textarea1"
                            :autosize="{ minRows: 5}"
                            type="textarea"
                        />
                    </el-form-item>
                    
                    <el-form-item class="reg-button-group">
                        <el-button type="primary">提交</el-button>
                        <el-button type="primary">重置</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>
            <!-- <div class="link">
                <router-link to="/">忘记密码?</router-link>
                <el-divider direction="vertical" />
                <router-link to="/user/register">注册</router-link>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                username:"",
                password:"",
                sex:"",
                birthday:""
            }
        }
    }

</script>

<style scoped>
    .reg-panel{
        margin: 25px;
    }
    .reg-title{
        height: 50px;
        margin-bottom: 25px;
    }
    .reg-title .el-text {
        font-size: 24px;
    }

    .el-button{
        width: 47.5%;
    }


</style>