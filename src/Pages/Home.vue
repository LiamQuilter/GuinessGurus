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


<template>

  <div>
    <div class="container-grid rounded-corners">
      <PubListItem
        v-for="(pub, index) in Pubs"
        :key="index"
        :pub="pub"
      />
    </div>
  </div>
</template>



<style>
.container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  float: left;
  margin: 30px;
  position: relative;
}

.rounded-corners {
  border-radius: 25px;
  border: 2px solid #6f6e6e;
  padding: 20px;
}

@media only screen and (max-width: 767px) {
  .container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
    margin: 30px;
  }

  .rounded-corners {
    border-radius: 25px;
    border: 2px solid #6f6e6e;
    padding: 20px;
  }
}
</style>
