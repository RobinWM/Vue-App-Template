<template>
  <div id="app">
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "views/HelloVuex";

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
