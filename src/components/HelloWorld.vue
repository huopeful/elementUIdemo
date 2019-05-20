<template>
  <div id="app">
    <alert
      title="设置了回调的 alert"
      type="warning"
      closeText="关闭"
      @close="hello"
      effect="dark"
      aaa="大头"
      @demoLog="log()"
      showIcon
      v-slot:default
    >
      <p>55555555</p>
    </alert>
  </div>
</template>

<script>
import alert from './alert.vue'

export default {
    name: 'app',
    data() {
        return {

        }
    },
    components: {
        alert
    },
    methods: {
        hello() {
            console.log('hello world');
        },
        log() {
            console.log('233333333333')
        }
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>