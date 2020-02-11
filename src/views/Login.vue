<template>
    <div id='Login'>
        <div class="login_logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="login_button">
            <!-- <router-link to='/lo_login' is='a-button' type="primary" 
            :style="btn_style_login">登陆</router-link>
            <router-link to='/lo_register' is='a-button'
            :style="btn_style_reg">注册</router-link> -->
            <a-button type="primary" @click="page_to('lo_login')" :style="btn_style_login">Login</a-button>
            <a-button :style="btn_style_reg" @click="page_to('lo_register')">New curiosity</a-button>
        </div>
        <div class="login_notcie">
            <p>
                Forget
                <!-- <router-link to='/lo_forget' is='a'>password</router-link> -->
                <a @click="page_to('lo_forget')">password</a>
                or username
            </p>
        </div>
        <router-view class="login_routerView" />
    </div>
</template>
<script>
export default {
    name: 'Login',
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
            }
        }
    },
    methods:{
        page_to(key){
            // console.log(key);
            // console.log(event);
            this.$router.push({
                name:key,
                params:{
                    is_animation:true
                }
            }).catch(err => {err});
            // this.$router.push('/lo_login').catch(err => {err});
        }
    }
}
</script>
<style lang='stylus' scoped>
#Login
    height 100%
    display flex
    align-items center
    flex-direction column
    justify-content space-between
    position absolute
    width 100%
    padding 90px 0
    .login_button
        // width 80%
        display flex
        flex-direction column
        height 120px
        justify-content space-between
        margin-bottom 72px
    .login_notcie
        position absolute
        bottom 20px
</style>