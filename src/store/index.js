import Vue from 'vue';
import Vuex from 'vuex';
import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";
import {moduleA} from "./modules/modulesA";

// 1.安装插件
Vue.use(Vuex);

// 保存共享状态
const state = {
  counter: 10,
  students: [
    {id: 110, name: '王零', age: 19},
    {id: 111, name: '王一', age: 14},
    {id: 112, name: '王二', age: 17},
    {id: 113, name: '王三', age: 10},
  ],
  info: {
    name: 'Robin',
    age: 28,
    sex: 'male'
  }
};

// 2.创建对象
const store = new Vuex.Store({
  // 对state里的状态进行同步操作
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
});

// 3.导出store对象
export default store
