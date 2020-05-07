import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from "./mutations-types";

// 1.安装插件
Vue.use(Vuex);

const moduleA = {
  state: {
    name: 'Robin'
  },
  mutations: {},
  actions: {},
  getters: {}
};

// 2.创建对象
const store = new Vuex.Store({
  // 保存共享状态
  state: {
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
  },

  // 对state里的状态进行同步操作
  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, payload) {
      state.counter += payload.count;
    },
    setCount(state, count) {
      state.counter = count
    },
    updateInfo(state) {
      state.info.name = 'lian';

      // 响应式添加对象的属性
      // Vue.set(state.info, 'address', 'GZ');

      // 响应式删除对象的某个属性
      // Vue.delete(state.info, 'age');
    }
  },

  // 对state里的状态进行异步操作
  actions: {
    // 1.返回操作成功的信息：回调函数
    // aUpdateInfo(context, payload) {
    // setTimeout(() => {
    //   context.commit('updateInfo');
    //   console.log(payload.message);
    //   payload.success();
    // }, 1000);
    // }

    // 2. 回操作成功的信息：Promise
    aUpdateInfo(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('updateInfo');

          resolve('操作成功！');
        }, 1000);
      })
    }
  },

  // 类似组件里的计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more15Stu(state) {
      return state.students.filter(s => s.age > 15)
    },
    more15StuLength(state, getters) {
      return getters.more15Stu.length
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },

  modules: {
    a: moduleA
  }
});

// 3.导出store对象
export default store
