<script setup>
import Nav from './components/Nav.vue' 
import Display from './components/Display.vue'
import Customization from './components/Customization.vue'
import FontSetting from './components/FontSetting.vue'
import Sidebar from './components/Sidebar.vue'
</script>
<template>
  <div>
    <Sidebar/>
    <Nav/>
    <Display/>
    <div class="flex-col md:flex md:flex-row gap-2 flex ">
      <Customization class="flex-grow"/>
      <FontSetting class="flex-grow" />
    </div>
  </div>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
