<template>
  <body>
  <div class="container">
    <div class="pub-list">
      <PubListItem v-for="(pub, index) in Pubs" :key="index" :pub="pub" />
    </div>
  </div>
</body>
</template>

<script>
import PubListItem from '../components/PubListItem.vue'
import PropDemo from '../Components/PropDemo.vue'
import Pubs from '../data'

export default {
  components: {
    PubListItem,
  },
  data() {
    return {
      Pubs,
    };
  },
};
</script>

<style scoped>

body{
  background-image: url(../../Images/gettyimages-994055538-612x612.jpg);
  background-repeat: no-repeat;
    background-size: contain;   
  
    background-size: cover;
    background-position: center;
  
    background-repeat: no-repeat;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.pub-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

@media only screen and (max-width: 767px) {
  .pub-list {
    gap: 10px;
  }
}
</style>