<template>
  <div class="container">
    <div class="pub-list">
      <PubListItem v-for="(pub, index) in Pubs" :key="index" :pub="pub" />
    </div>
  </div>
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

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
}

.pub-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  border: 2px solid #6f6e6e;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

@media only screen and (max-width: 767px) {
  .pub-list {
    gap: 10px;
  }
}
</style>