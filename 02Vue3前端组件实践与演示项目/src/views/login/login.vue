<template>
    <body>
        <div class="login">
        <div class="login_content">
            <div class="login_title">
                Vue3前端组件综合演示系统
            </div>
            <el-form  ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules"label-width="auto">
            <el-form-item label="用户名" prop="name">
                <el-input  v-model="ruleForm.name"/>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input  v-model="ruleForm.password"/>
            </el-form-item>
            <div class="login_button">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </div>
        </el-form>
        </div>
    </div>
    </body>
   
</template>

<script>
    export default{
        data(){
            return{
               ruleForm:{
                    name:'',
                    password:''
               },
               rules:{
                    name:
                        [ 
                            { required: true, message: 'Please input Activity name', trigger: 'blur' },
                            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                        ],
                    password:
                        [ 
                            { required: true, message: 'Please input Activity name', trigger: 'blur' },
                            { min: 7, max: 16, message: 'Length should be 7 to 16', trigger: 'blur' }
                        ]
               }
            }
        },

        methods:{
            onSubmit(){
                this.$router.push('./index')
            }
        }
        
    }
</script>

<style scoped>
    body{
        width: 100%;
        height: 100vh;
        /* border: 1px blue solid; */
        background-image: url('../../assets/img.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .login{
        width: 300px;
        height: 200px;
        /* border: 1px red solid; */
        text-align: center;
        padding: 10px;
        background-color: aliceblue;
        position: relative;
        top: 200px;
        left:50%;
        transform: translate(-50%);
        border-radius: 20px ;       
    }
    .login_content{
        width: 280px;
        height: 160px;
        position: relative;
        top: 30px;
    }
    .login_button{
        position: relative;
        left: 120px;
    }
    .login_title{
        font-weight: bold;
        width: 200px;
        height: 30px;
        position: relative;
        top: -20px;
        left: 45px;
    }
</style>