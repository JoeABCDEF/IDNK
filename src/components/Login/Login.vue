<template>
    <div id="Login_">
        <Icon type="left" class="icon" @click="backRouter" />
        <div class="body">
            <div class="header">
                <h1>
                    Login
                </h1>
                <div>
                    <Input id="uname_input" class="login_input" placeholder="Username" allowClear
                        @change="input_uname" v-model="uname">
                        <Tooltip slot="suffix" title="Extra information">
                            <Icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </Tooltip>
                    </Input>
                    <Input id="pwd_input" class="login_input" placeholder="Password"  
                        @change="input_pwd" v-model="pwd" :type="pwd_type">
                        <Icon slot="suffix" @click="pwd_type_change" :type="pwd_is_show" style="color: rgba(0,0,0,.45)" />
                    </Input>
                    <!-- <InputPassword placeholder="input password" /> -->
                </div>
            </div>
            <div class="login_button">
                <a-button type="primary" :style="btn_style_login" @click="login_click" :loading="loading">
                    {{btn_log}}
                </a-button>
                <a-button :disabled="disabled" :style="btn_style_reg" @click="page_to('lo_register')"> 
                    New curiosity
                </a-button>
            </div>
        </div>
        <div class="login_notcie">
            <p>
                Forget
                <!-- <router-link to='/lo_forget' is='a'>password</router-link> -->
                <a :disabled="disabled" @click="page_to('lo_forget')">password</a>
                or username
            </p>
        </div>
    </div>
</template>
<script>
import { Icon, Input, Tooltip } from 'ant-design-vue';
export default {
    name: 'Login_',
    props:{
        is_animation:{
            type:Boolean,
            default:false
        }
    },
    components:{
        Icon,
        Input,
        Tooltip
    },
    data(){
        return{
            btn_style_login:{
                width:'210px',
                height:'50px',
                backgroundColor:'#00b1a1',
                borderColor:'#00b1a1',
                borderRadius:'50px'
            },
            btn_style_reg:{
                width:'210px',
                height:'50px',
                borderColor:'#00b1a1',
                borderRadius:'50px'
            },
            //用户名密码
            uname:'',
            pwd:'',
            //
            btn_log:"Login",
            loading:false,
            disabled:false,
            //
            pwd_is_show:"eye-invisible",
            pwd_type:'password'
        }
    },
    mounted(){
        if(this.$props.is_animation){
            setTimeout(() => {
                this.$el.style.right = "0";
            }, 10);
        }else{
            this.$el.style.right = "0";
        }
    },
    methods:{
        backRouter(){//返回按钮
            if(!this.disabled){
                this.$el.style.right = '-100%';
                setTimeout(() => {
                    this.$router.push('/');
                }, 390);
            }
        },
        login_click(){//登录按钮
            this.loading = true;
            this.btn_log = "";
            this.disabled = true;
        },
        page_to(key){//路由跳转
            this.$router.push({
                name:key,
                params:{
                    is_animation:true
                }
            }).catch(err => {err});
            // this.$router.push('/lo_login').catch(err => {err});
        },
        input_uname(){//input uname 的 change 事件
            console.log(this.uname);
        },
        input_pwd(){//input pwd 的 change 事件
            console.log(this.pwd);
        },
        pwd_type_change(){
            this.pwd_is_show == "eye" ?
            (this.pwd_is_show = "eye-invisible", this.pwd_type = "password")
            : (this.pwd_is_show = "eye", this.pwd_type = "text");
        }
    }
}
</script>
<style lang='stylus' scoped>
#Login_
    position absolute
    height 100%
    top 0
    width 100%
    background-color white
    right -100%
    transition all .5s ease-in-out
    padding 20px 10px
    display flex
    flex-direction column
    align-items center
    .icon
        font-size 24px
        position relative
        width 100%
        text-align left
        display block
    .body
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        padding 90px 0
        padding-top 60px
        h1
            font-size 40px
        .login_input
            height 50px
            margin-top 30px
            // input
            //     border 0!important
            //     border-bottom 1px solid #d9d9d9
            //     border-radius 0
        .login_button
            display flex
            flex-direction column
            height 120px
            justify-content space-between
            margin-bottom 72px
    .login_notcie
        position absolute
        bottom 20px
        width 100%
        display flex
        justify-content center
</style>