import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mock from "mockjs";
var mocks = mock.Random;
var list = []
for(var i = 0;i<10;i++){
  var price = mock.mock({
      "price|1-100": 1
    });
var obj = {
    id:mocks.guid(),
    img:mocks.dataImage('200x100'),
    num:mock.mock({
        "number|1-5": 100
    }),
    title:mocks.ctitle(),
    info:mocks.cparagraph(),
    ...price,
};

list.push(obj)
}
export default new Vuex.Store({
  state: {
        list , 
        userCar:[] , 
        total : 0
  },
  getters: {
    isAllChecked(state){
        if(state.userCar.length == 0){
            return false;
        }
        return state.userCar.every(ele => ele.isChecked == true);
    },
    allPrice(state){
        console.log(444)
        var num = state.userCar.reduce(function(total,next){
            if(next.isChecked){
                return total = total + next.num * next.item.price;
            }
            return total
        },0);
        return num
    }
},
  mutations: {
    add(state,{id , val}){ // 如果为减的时候传val = -1 为加的时候传val = 1
      console.log(id,val,222)
      var item = state.userCar.find(ele => ele.id == id);
      item.num = item.num + val ;
      var old = state.list.find(ele => ele.id == id);
      old.num.number =  old.num.number - val;
  },
  updateChecked(state,val){
      console.log(222)
      if(val){
          state.userCar.forEach(ele => ele.isChecked = false);
      }else{
          state.userCar.forEach(ele => ele.isChecked = true);
      }
      
  },
    addUserCar(state,id){
      var item = state.list.find(ele => ele.id == id);
      item.num.number -- ;
      var userCarItem = state.userCar.find(ele => ele.id == id);
      if(userCarItem){
          userCarItem.num ++ 
      }else{
          var obj = {
              id:item.id,
              title:item.title,
              img:item.img,
              price:item.price,
              num:1,
              isChecked : false,
              item
          }
          console.log(state.list)
          state.userCar.push(obj);
      }
      
 }
  },
  actions: {

  }
})
