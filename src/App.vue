<template>
  <div class="page-container">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  components: {
    NavBar,

  }
}
</script>


