<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"/>

  <div class="card m-2">
    <div class="card-image">
      <figure class="image is-4by3">
        <img class="imgSize" :src="pub.imageSrc" />
      </figure>
    </div>

    <div class="card-content">
      <div class="content-wrapper">
        <p class="title is-4" style="font-family: 'Lobster', cursive">
          {{ pub.title }}
        </p>
        <router-link :to="`/pubItem/${pub.id}`"  class="button is-primary">
          See more
          <span class="material-symbols-outlined pl-3">arrow_forward_ios</span>
        </router-link>
      </div>
    </div>

    <div class="content">
      <i 
      class="fa-solid fa-location-dot"
      style=" color: crimson; font-size: 23px"
    ></i>
      {{ pub.address }}
      <br />
      <i class="fa-sharp fa-solid fa-phone-volume"
      style=" color:black; font-size: 15px"
      ></i>
      {{ pub.phoneNumber }}
      <br />
      <div style="display: flex; align-items: center">
        <p style="margin-right: 10px">
          <i class="fa-solid fa-users" style="color:royalblue;"></i> Social media:
        </p>
        <a
          :href="pub.instagramLink"
          class="social-icon instagram"
          style="margin-right: 10px"
        >
          <span style="font-size: 2em; color: #e4405f">
            <i class="fa-brands fa-instagram pulse"></i>
          </span>
        </a>
        <a :href="pub.websiteLink" class="social-icon website">
          <span style="font-size: 2em; color: #00a0d2">
            <i class="fa-solid fa-globe pulse"></i>
          </span>
        </a>
      </div>

      

      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "PubListItem",
  props: {
    pub: Object,
  },
};
// Create a new <script> element
var script = document.createElement("script");

// Set the src attribute to the FontAwesome kit URL
script.src = "https://kit.fontawesome.com/aabd1a3a4c.js";

// Set the crossorigin attribute to 'anonymous'
script.setAttribute("crossorigin", "anonymous");

// Append the script element to the document body
document.body.appendChild(script);
</script>

<style>

.card {
  width: 440px;
}
.content {
  background-color: #f2f2f2; /* Change the background color to a lighter shade */
  border: none; /* Remove the border */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Add a box shadow for depth */
  padding: 5px; /* Add some padding for spacing */
  border-radius: 10px; /* Add a border-radius for a softer look */
}
.card-content {
  display: flex;
  justify-content: center;
  opacity: 0.8; /* or any value between 0 and 1 */
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: rgb(18, 19, 19);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

.imgSize {
  transition: transform 0.3s ease-in-out;
}
.imgSize:hover {
  transform: scale(1.05);
}
.button.is-primary {
  background-image: linear-gradient(to bottom, #3d2d63, #4e92ce);
  color: #fff;
  text-shadow: none;
  border-radius: 30px; /* Adjust the value to create a more circular or oval shape */
  transition: box-shadow 0.2s ease-in-out;
}

.button.is-primary:hover {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
}
.social-icon {
  display: inline-block;
  margin-right: 5px;
  color: #7a6d6d; /* Change this value to adjust the icon color */
  margin-left: 15px;
}
.social-icon:hover {
  color: #00a0d2; /* Change this value to adjust the hover color */
}
.social-icon i {
  animation: none;
}

.instagram:hover i {
  animation: pulse 2s infinite;
}

.website:hover i {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(-30deg);
  }
}

</style>
