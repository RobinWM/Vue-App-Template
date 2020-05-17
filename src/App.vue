<template>
  <div id="app">
<!--    <hello-vuex/>-->
    <reactivity-test/>
  </div>
</template>

<script>
  // import HelloVuex from "views/HelloVuex";
  import ReactivityTest from "views/ReactivityTest";

  export default {
    name: 'App',
    components: {
      // HelloVuex,
      ReactivityTest
    },
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
