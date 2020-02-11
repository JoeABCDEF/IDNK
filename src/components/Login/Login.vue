<template>
    <div id="Login_">
        <Icon type="left" class="icon" @click="backRouter" />
        <div class="body">
            <div class="header">
                <h1>
                    Login
                </h1>
                <div>
                    <Input class="login_input" placeholder="Username" v-model="uname" ref="userNameInput">
                        <Tooltip slot="suffix" title="Extra information">
                            <Icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </Tooltip>
                    </Input>
                    <Input class="login_input" placeholder="Password" v-model="pwd" ref="userNameInput">
                        <Tooltip slot="suffix" title="Extra information">
                            <Icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                        </Tooltip>
                    </Input>
                    <!-- <InputPassword placeholder="input password" /> -->
                </div>
            </div>
            <div class="login_button">
                <a-button type="primary" :style="btn_style_login" loading=false>
                    {{btn_log}}
                </a-button>
                <a-button :style="btn_style_reg">
                    Loading
                </a-button>
            </div>
        </div>
        <div class="login_notcie">
            <p>
                Forget
                <!-- <router-link to='/lo_forget' is='a'>password</router-link> -->
                <a @click="page_to('lo_forget')">password</a>
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
            btn_log:"登陆"
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
        backRouter(){
            this.$el.style.right = '-100%';
            setTimeout(() => {
                this.$router.push('/');
            }, 390);
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
        .login_input
            height 50px
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