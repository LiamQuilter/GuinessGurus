<template>
  <div class="page-container">
    <NavBar />
    <div>
    <router-view />
  </div>
  <Map />

    
  <div class="bottom"> 
    <Footer />
  </div>
  
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
//import { computed, ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  components: {
    NavBar,
    Footer,
    
  }
}
</script>


