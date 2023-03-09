<script>


  export default {
    name: "PubListItem",
    props: {
      pub: Object,
    }
 
  }
</script>

<template>
  <div class="card m-2">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          class="imgSize"
          :src="pub.imageSrc"
        >
      </figure>
    </div>

    <div class="card-content">
      <div class="media-content">
        <p class="title is-4">{{ pub.title }}</p>
        <router-link to="/pubItem" class="button is-primary">
          See more
          <span class="material-symbols-outlined pl-3">
            arrow_forward_ios
          </span>
        </router-link>
      </div>
    </div>

    <div class="content">
      {{ pub.address }} 
      <a :href="pub.instagramLink">Instagram</a>
      <a :href="pub.websiteLink">Website</a>
      {{pub.phoneNumber}}
      <br />
    </div>
  </div>
</template>

<style>
  .card {
    width: 450px;
  }
  .content {
    background-color: rgb(185, 185, 185);
    border: 2px solid #6f6e6e;
  }
  .title {
    color: rgb(29, 235, 235);
  }
</style>
