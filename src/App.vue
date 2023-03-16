<template>
  <div class="page-container">
    <NavBar />
    <div>
    <router-view />
  </div>
  <div class="bottom"> 
    <Footer />
  </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,

  }
}
</script>


