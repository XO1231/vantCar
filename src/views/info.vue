<template>
    <div class="info">
<van-cell-group v-if='loginshow'>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('正确输入')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
  <van-button type="info" class="login" @click="login">登录</van-button>
</van-cell-group>

<van-cell-group v-else>
  <van-cell title="用户名" :value="username" />
  <van-cell title="密码" :value="password" />
  <van-button type="info" class="logout" @click="logout">退出登录</van-button>
</van-cell-group>
    </div>
</template>
<script>
import { mapState , mapGetters , mapMutations , mapActions } from "vuex"
export default {
    data(){
          return{
              username: "",
              password: "",
              loginshow:true
          }
    },
    computed: {
        ...mapState({
           
        })
    },
    created() {
        this.init()
    },
    methods: {
        login(){
             localStorage.setItem("username", this.username);
             localStorage.setItem("password", this.password);
             this.loginshow =false
             this.username = localStorage.getItem("username")
             this.password = localStorage.getItem("password")
        },
        logout(){
            localStorage.removeItem("username")
            localStorage.removeItem("password")
            this.loginshow =true
            this.username=this.password=""
        },
        init(){
            if(localStorage.getItem("username")){
                this.loginshow =false
                this.username = localStorage.getItem("username")
                this.password = localStorage.getItem("password")
            }
        }

    },
}
</script>
<style lang="scss" scoped>
 .info{
    background: #f8f8f8;
     margin-top:15px;
 }
 .login{
     margin-top:15px;
 }
</style>
