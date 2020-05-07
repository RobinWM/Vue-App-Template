import {INCREMENT} from "./mutations-types";

export const mutations= {
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
}
