<template>
  <div id="app">
    <Navbar />
    <Sidebar />

    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'


export default {
  name: 'App',
  components: {
    Navbar,Sidebar,
  }
}
</script>
