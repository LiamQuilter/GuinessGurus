<script setup>
  import NavBar from './components/NavBar.vue'
</script>


<template>  
<div>
  <NavBar />
  <h1 style="color: Green">There is a nav bar now</h1>
  
</div>

  <div>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div class="container-grid rounded-corners">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from './Components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style>
.container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  float: left;
  margin: 100px;
  position: relative; /* To position the image inside the container */
}

.rounded-corners {
  border-radius: 25px;
  border: 2px solid #6f6e6e;
  padding: 20px;
}
/* Add any custom styles for the App component here */
</style>
