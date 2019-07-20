import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("username");
  if(to.path== '/about'){
    if(user){
      next() 
    }else{
      alert('暂未登录,跳转到登录页')
      next({ path: '/info' })
    }
  }else{
    next()
  }
})
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
