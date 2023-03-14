<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
    rel="stylesheet"
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Pacifico&family=Tilt+Prism&display=swap"
    rel="stylesheet"
  />

  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet">

  <div class="grid-container">
    <div class="left-column">
      <div class="image-container">
        <hr class="line-before-image" />
        <img class="images" :src="pub.imageSrc" />
        <hr class="line-after-image" />
      </div>
      <strong class="PubName">{{ pub.title }}</strong>

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
    </div>
    <div class="right">
      <h1 class="heading">{{ pub.about }}</h1>
      <p>
        {{ pub.AboutParagraph }}
      </p>

      <h2 class="heading">Address</h2>
      <P style="background-color: white; border-radius: 10px; padding: 10px; display: inline-block;">
        <i 
          class="fa-solid fa-location-dot fa-flip"
          style="--fa-animation-duration: 3s; color: crimson;"
        ></i>
        {{ pub.address }}
      </P>

      <h3 class="heading">Links</h3>
      <P class="links">
      <p>
        <a :href="pub.WebsiteLink"  style="color:blue">
          <i class="fa-solid fa-globe"></i>
          Website</a
        >
      </p>

      <p>
        <a :href="pub.websiteLink"  style="color:forestgreen;"
          ><i class="fa-solid fa-envelope"></i> Email now!</a
        >
      </p>

      <p>
        <i class="fa-sharp fa-solid fa-phone-volume" style="color:black;"></i> {{ pub.phoneNumber }}
      </p>

      <p>
        <a :href="pub.instagramLink" class="insta">
          <i class="fa-brands fa-instagram pulse"></i> Instagram
        </a>
      </p>
    </p>

      <h4 class="heading">{{ pub.title }} overall rating</h4>
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
    </div>
  </div>

  

  <div class="comment-section">
    <h2 class="question">Tell us what you think!</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment"></textarea>
      <button class="submit-comment" type="submit">Submit</button>
    </form>
    <div class="comments">
      <div class="comment">
        <div class="user">John Doe</div>
        <div class="text">nice pub really enjoyed it</div>
      </div>
      <div class="comment">
        <div class="user">Jane Smith</div>
        <div class="text">They allow the right type of dogs in this pub</div>
      </div>
      <div class="comment">
        <div class="user">Mike Johnson</div>
        <div class="text">No</div>
      </div>
      <div class="comment">
        <div class="user">Sarah Wilson</div>
        <div class="text">
          The staff is friendly and the drinks are delicious. Can't wait to come
          back!
        </div>
      </div>
      <div class="comment">
        <div class="user">David Lee</div>
        <div class="text">
          I had a great time here with friends. The live music was fantastic.
        </div>
      </div>
      <div class="comment">
        <div class="user">Mary Chen</div>
        <div class="text">
          I'm so glad I found this place. The food is delicious and the
          atmosphere is cozy.
        </div>
      </div>
    </div>
  </div>
</template>

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
  },
};
</script>

<style lang="css">
@import "..\Pub..css";
</style>
