<template>
  <div id="app">
    <Header/>
    <div id="cover-wrap" style="position:relative;z-index:-999;height:100vh">
      <Cover/>
    </div>
    <Sections/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cover from './components/Cover.vue'
import Sections from './components/Sections.vue'

export default {
  name: 'App',
  components: {
    Header,
    Cover,
    Sections
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: -9999;
}
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 1000%;
  top: 0px;
  position: absolute;
  z-index: -9998;
}
</style>
