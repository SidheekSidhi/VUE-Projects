<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <Form />

    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Form from './components/Sidebar.vue'


export default {
  name: 'App',
  components: {
    Navbar,Sidebar,Form,
  },
   methods:{
    saveData(e){
      console.log(e)
    }
  }

}
</script>
