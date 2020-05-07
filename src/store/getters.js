// 类似组件里的计算属性
export const getters = {
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
}
