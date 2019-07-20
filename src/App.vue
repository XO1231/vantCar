<template>
  <div id="app" class="main">
    <div class="box">
      <router-view/>
    </div>
   <div id="nav" v-if="$route.meta.footShow">
      <Nav></Nav>
   </div>
    </div>
  
</template>
<script>
import Nav from './views/nav'
export default {
  components:{Nav}
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
#nav{
  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

