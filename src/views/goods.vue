<template>
  <div >
    <van-nav-bar left-text="返回" :title="info.title" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    <div class="box">
      <div class="top">
        <img :src="info.img" alt />
      </div>
      <div class="spInfo">{{ info.info }}</div>
      <div>
        剩余数量
        <span>{{ info.num.number }}</span>
      </div>
    </div>
     <div>
      <van-goods-action-button
      type="warning"    
      :text="`加入购物车${num}`"
      @click="addCar($route.params.id)"
      :disabled="info.num.number == 0"
    /> 
     </div>
     

  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      info: function(state) {
        console.log( this, 111);
        var info = state.list.find(ele => ele.id == this.$route.params.id);
        return info;
      },
      num: state => {
        var num = 0;
        state.userCar.forEach(ele => {
          num += ele.num;
        });
        var nums = state.userCar.reduce(function(all, next) {
          return (all = all + next.num);
        }, 0);
        return nums;
      }
    })
  },
  methods: {
    ...mapMutations({
      addCar: "addUserCar"
    }),
  }
};
</script>