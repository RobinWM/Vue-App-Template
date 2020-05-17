<template>
  <div>
    <h1>--------操作对象--------</h1>
    <h1>响应式：{{keys}}</h1>
    <div>
      <button @click="btnClick1">响应式</button>
    </div>

    <h1>---------操作数组-------</h1>
    <h1>{{hobbies}}</h1>
    <div>
      <button @click="btnClick2">操作数组</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReactivityTest",
    data() {
      return {
        testObj: {
          name: 'Robin',
          age: 29,
          sex: 1,
        },
        keys: [],
        hobbies: ['1', '2', '4']
      }
    },
    created() {
      this.keys = Object.keys(this.testObj);
    },
    methods: {
      btnClick1() {
        // this.testObj.hobby = 'code';                                                     // 方法1
        // Object.assign(this.testObj, {hobby: 'code'});                                    // 方法2
        // this.testObj = Object.assign({}, this.testObj, {hobby: 'code'});                 // 方法3
        // this.keys = Object.keys(this.testObj);
      },
      btnClick2() {
        // this.hobbies[0] = '4';                           // 非响应式
        this.$set(this.hobbies, 0, '4');                    // 响应式
      }
    }
  }
</script>

<style scoped>

</style>
