<template>
    <div class="nav" >
     <ul>
      <li><van-icon name="wap-home" size="55px"/><router-link to="/" >首页</router-link> </li> 
      <li><van-icon name="cart-o" size="55px" /><router-link to="/about" >购物车</router-link></li>
      <li><van-icon name="manager-o" size="55px" /><router-link to="/info" >个人信息</router-link></li>
     </ul>
     </div>
</template>
<style lang="scss" scoped>
.nav{
 width: 100%;
  position: fixed;
  bottom: 5px;
}
ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;

}
</style>
