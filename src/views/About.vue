<template>
  <div class="box">
    <div v-if="list.length == 0">
            暂时没有上去 去首页购买吧
    </div>
    <div class="main" v-else>
            <div class="top">
                <ul>
                    <li v-for="item in list" :key="item.id">
                        <input type="checkbox" v-model="item.isChecked"> 
                        <div class="c">{{ item.title }} <span>单价{{item.price}}元</span> </div> 
                        <div class="r">
                            <button @click="update(item.id,-1)" :disabled="item.num == 0">-</button>
                            <div>{{ item.num }}</div>
                            <button @click="update(item.id,1)" :disabled="item.item.num.number == 0">+</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bot">
                <div >
                    <input type="checkbox" @click="updateChecked(isAllChecked)" :checked="isAllChecked"><div>全选</div>
                </div>
                <div>
                    总价{{ allPrice }}元
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import { mapState , mapGetters , mapMutations} from "vuex"
export default {
   computed: {
        ...mapState({
            list : state => state.userCar
        }),
        ...mapGetters({
            isAllChecked:"isAllChecked",
            allPrice:"allPrice"
        })
    },
    methods: {
        ...mapMutations({
            updateChecked:"updateChecked",
            add:"add",
            add1:"add1"
        }),
        update(id , val){
            this.add({id , val})
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        height: 100%;
    display: flex;
    flex-direction: column;
    }
    .top{
        flex: 1;
        overflow: auto;
        padding: 20px 0;
        ul{
            width: 90%;
            margin: 0 auto;
            li{
                display: flex;
                align-items: center;
                padding: 20px 0;
                border-bottom: 1px solid #ccc;
                .c{
                    flex: 1;
                    span{
                        color: red;
                    }
                }
                .r{
                    display: flex;
                    align-items: center;
                    button{
                        width: 20px;
                        height: 20px;
                        margin: 0 10px;
                    }
                }
            }
        }
    }
    .bot{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
        justify-content: space-between;
        >div{
            display: flex;
            align-items: center;
        }
    }
}
</style>

