<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
    rel="stylesheet"
  />
  <link href="../Map.js"
  >
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Pacifico&family=Tilt+Prism&display=swap"
    rel="stylesheet"
  />

  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap" rel="stylesheet">

  <div class="grid-container">
    <div class="left-column">
      <div class="image-container">
        <hr class="line-before-image" />
        <img class="images" :src="pub.imageSrc" />
        <hr class="line-after-image" />
      </div>
      <strong class="PubName">{{ storePubs.Pubs.title }}</strong>

      <div class="rating-section">
        <h2>Taste</h2>
        <div class="rating">
          <div class="stars">
            <button
              class="star"
              v-for="n in 5"
              :key="'taste' + n"
              :disabled="yourRated"
              @click="setRating('taste', n)"
              :class="{ 'star-selected': n <= tasteRating }"
              @mouseover="setHoverRating('taste', n)"
              @mouseleave="clearHoverRating('taste')"
            >
              <span class="f">✰</span>
            </button>
          </div>
          <div class="rating-label">{{ tasteRating }}/5 stars</div>
        </div>
      </div>

      <div class="rating-section">
        <h2>Price</h2>
        <div class="rating">
          <div class="stars">
            <button
              class="star"
              v-for="n in 5"
              :key="'price' + n"
              :disabled="yourRated"
              @click="setRating('price', n)"
              :class="{ 'star-selected': n <= priceRating }"
              @mouseover="setHoverRating('price', n)"
              @mouseleave="clearHoverRating('price')"
            >
              <span class="f">✰</span>
            </button>
          </div>
          <div class="rating-label">{{ priceRating }}/5 stars</div>
        </div>
      </div>
    

      <div class="rating-section">
        <h2>Shtick</h2>
        <div class="rating">
          <div class="stars">
            <button
              class="star"
              v-for="n in 5"
              :key="'shtick' + n"
              :disabled="yourRated"
              @click="setRating('shtick', n)"
              :class="{ 'star-selected': n <= shtickRating }"
              @mouseover="setHoverRating('shtick', n)"
              @mouseleave="clearHoverRating('shtick')"
            >
              <span class="f">✰</span>
            </button>
          </div>
          <div class="rating-label">{{ shtickRating }}/5 stars</div>
        </div>
      </div>

      <div class="rating-section">
        <h2>Consistency</h2>
        <div class="rating">
          <div class="stars">
            <button
              class="star"
              v-for="n in 5"
              :key="'consistency' + n"
              :disabled="yourRated"
              @click="setRating('consistency', n)"
              :class="{ 'star-selected': n <= consistencyRating }"
              @mouseover="setHoverRating('consistency', n)"
              @mouseleave="clearHoverRating('consistency')"
            >
              <span class="f">✰</span>
            </button>
          </div>
          <div class="rating-label">{{ consistencyRating }}/5 stars</div>
        </div>
      </div>
      <div class="submit-section">
        <button
          class="submit-rating"
          :disabled="yourRating"
          @click="submitRating"
        >
          Submit Rating
        </button>
        <div v-if="yourRated" class="your-rating-label">
          Your Rating: {{ yourRating }}/5 stars
        </div>
      </div>

      <div class="comment-section">
       <h2 class="question">Tell us what you think!</h2>
         <form @submit.prevent="addcomments">
    <div class="form-control">
      <input v-model="newCommentsContent" class="input" type="text" placeholder="Write your comment here!">
    </div>
    <div class="form-control">
      <button :disabled="!newCommentsContent" class="button is-primary">Submit</button>
    </div>
          </form>

  <div class="comment-container">
    <div v-for="comment in comments" class="card">
      <div class="card-content">
        <div class="comment-content">
          {{ comment.content }}
          <button class="comment-submit" @click="deleteComment(comment.id)"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>
  </div>


</div>
      </div>

    <div class="right">
      <h2 class="heading">{{ storePubs.Pubs.about }}</h2>
      <p>
         {{storePubs.Pubs.aboutparagraph }}
      </p>

      <h2 class="heading">Address</h2>
      <P style="background-color: white; border-radius: 10px; padding: 10px; display: inline-block;">
        <i 
          class="fa-solid fa-location-dot fa-flip"
          style="--fa-animation-duration: 3s; color: crimson;"
        ></i>
        {{ storePubs.Pubs.address }}
      </P>

      <h3 class="heading">Links</h3>
      <P class="links">
      <p>
        <a :href="pub.websiteLink"  style="color:blue">
          <i class="fa-solid fa-globe"></i>website
          </a>
        
      </p>

      <p>
        <a :href="storePubs.Pubs.websiteLink"  style="color:forestgreen;"
          ><i class="fa-solid fa-envelope"></i> Email now!</a
        >
      </p>

      <p>
        <i class="fa-sharp fa-solid fa-phone-volume" style="color:black;"></i> {{ storePubs.Pubs.phoneNumber }}
      </p>

      <p>
        <a :href="pub.instagramLink" class="insta">
          <i class="fa-brands fa-instagram pulse"></i> Instagram
        </a>
      </p>
    </p>

      <h4 class="heading">{{ storePubs.Pubs.title }} overall rating</h4>
      <p class="whiteBorderStar">
      <i
        class="fa-solid fa-star fa-lg fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: gold; margin-right: 5px"
      ></i>
      <i
      class="fa-solid fa-star fa-lg fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: gold; margin-right: 5px"
      ></i>
      <i
      class="fa-solid fa-star fa-lg fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: gold; margin-right: 5px"
      ></i>
      <i
      class="fa-solid fa-star fa-lg fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: gold; margin-right: 5px"
      ></i>
      <p class="ratingStatment">Rated 4.3 from 4 Ratings!</p>
      </p>

      
      <h3 class="heading">Directions</h3>

<div style="position:relative; padding-bottom:56.25%; height:0;">
   <iframe :src= "pub.Maps"
style="border:0; position:absolute; top:0; left:0; width:100%; height:100%;" 
allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
</div>

    </div>
  </div>



  <div style="padding: 100px;"></div>
 

  <div>
    

  </div>
  
</template>


<script setup>

import {ref, onMounted} from "vue"
import{ useRoute} from "vue-router"
 import { collection, getDocs, query, where } from "firebase/firestore";
 import {db} from "@/fb/firebase"
 import { usestoreAuth } from "@/stores/storeauth"
 import { usestorepubs} from "@/stores/storePubs"
 


const storeAuth = usestoreAuth()
const storePubs = usestorepubs()
const route = useRoute()

const comments = ref([




  
])

const newCommentsContent = ref("")

const addcomments = () => {

const newComment ={
  id: "id1",
  content: newCommentsContent.value
}
comments.value.unshift(newComment)
newCommentsContent.value = ""
}

const deleteComment = id => {

comments.value = comments.value.filter(comment =>comment.id !==id)

}


onMounted(() =>{
        storeAuth.init()
        storePubs.getpub(route.params.id)
        
        
        
  })

</script> 

<script>

import Pubs from "../data";


export default {
  
  name: "AnPucan",

  data() {
    return {
      pub: Pubs.find((pub) => pub.id == this.$route.params.id),
      tasteRating: 0,
      priceRating: 0,
      shtickRating: 0,
      consistencyRating: 0,
      hoverRatings: {
        taste: 0,
        price: 0,
        shtick: 0,
        consistency: 0,
      },
      yourRating: 0,
      yourRated: false,
    };
  },

  

  methods: {

    
    
    setRating(type, value) {
      this[type + "Rating"] = value;
    },
    setHoverRating(type, value) {
      this.hoverRatings[type] = value;
    },
    clearHoverRating(type) {
      this.hoverRatings[type] = 0;
    },
    submitRating() {
      const { tasteRating, priceRating, shtickRating, consistencyRating } =
        this;

      // Calculate the average rating
      const yourRating =
        (tasteRating + priceRating + shtickRating + consistencyRating) / 4;

      // Round the rating to the nearest 0.5
      this.yourRating = Math.round(yourRating * 2) / 2;

      // Set yourRated to true so the your rating label is displayed
      this.yourRated = true;
    },
    addComment() {
      const commentInput = document.getElementById('comment');
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.style.color = this.getRandomColor();
        userDiv.innerHTML = '<i class="fa-solid fa-circle-user fa-xl"></i> Anonymous';
        newComment.appendChild(userDiv);
        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.textContent = commentText;
        newComment.appendChild(textDiv);
        const comments = document.querySelector('.comments');
        comments.appendChild(newComment);
        commentInput.value = ''; // Clear the input field

        const commentCount = comments.childElementCount;
        if (commentCount > 20) {
          const hiddenComments = commentCount - 4;
          for (let i = 1; i <= hiddenComments; i++) {
            comments.querySelector(`:nth-last-child(${i+4})`).style.display = 'none';
          }
        }
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script> 


<style lang="css">
@import "..\Pub..css";
</style>
