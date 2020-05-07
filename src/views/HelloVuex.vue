<template>
  <div id="app">
    <h2>-----------mutations相关操作--------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="setCounter(20)">设置</button>
    <button @click="updateInfos()">同步更新信息</button>


    <h2>----------getters相关操作----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more15Stu}}</h2>
    <h2>{{$store.getters.more15StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>

    <h2>-----------mutations相关操作--------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfoWait()">异步更新信息</button>

    <h2>-----------moduleA中的内容--------------</h2>
    <h2>{{$store.state.a.name}}</h2>

  </div>
</template>

<script>
  import {INCREMENT} from '../store/mutations-types';

  export default {
    name: "HelloVuex",
    methods: {
      add() {
        this.$store.commit(INCREMENT);
      },
      sub() {
        this.$store.commit('decrement');
      },
      addCount(count) {
        // payload: 负载
        // 1.普通的提交封装
        // this.$store.commit('incrementCount', count);
        // 2.特殊的提交封装
        this.$store.commit({
          type: 'incrementCount',
          count
        });
      },
      setCounter(count) {
        this.$store.commit('setCount', count);
      },
      updateInfos() {
        this.$store.commit('updateInfo');
      },
      updateInfoWait() {
        // 1.通过回调返回操作成功信息
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '传递的信息',
        //   success: () => {
        //     console.log('操作成功！');
        //   }
        // });
        // 2.通过Promise返回
        this.$store.dispatch('aUpdateInfo').then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>
