<template>
  <div class="home">
    <ul>
            <router-link :to="`/goods/${item.id}`" tag="li" v-for="item in state" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{ item.title }} </p>
            </router-link>
        </ul>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: 'home',
  computed: {
        ...mapState({
            state: state => state.list
        })
    }
}
</script>
