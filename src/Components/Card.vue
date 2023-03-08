<template>
  <div class="card m-2">
    <div class="card-image">
      <figure class="image is-4by3">
        <img class="imgSize" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    
    <div class="card-content">
        <div class="media-content">
          <p class="title is-4">An Púcán</p>
          <p class="subtitle is-6">@johnsmith</p>
          <button class="button is-primary">See more <span class="material-symbols-outlined pl-3">
            arrow_forward_ios
          </span></button>
        </div>
      </div>
  
      <div class="content">
        
11 Forster Street, Galway City, Ireland
Food & Drink, Pubs <a>Instagram</a>.
        <a href="#">Website</a> <a href="#">phone number</a>
        <br>
      </div>

    
    </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style>
  .card{
    width: 450px;
  }
  .content{
    background-color: rgb(185, 185, 185);
    border: 2px solid #6f6e6e;
  }
  .title{
    color: rgb(29, 235, 235);
  }
  
</style>
