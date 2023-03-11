<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Pacifico&family=Tilt+Prism&display=swap" rel="stylesheet">

  <div class="grid-container">
    <div class="left-column">
      <div class="image-container">
        <hr class="line-before-image" />
        <img class="images" src="../../Images/An-Pucan.jpg" />
        <hr class="line-after-image" />
      </div>
      <strong class="PubName">An Púcán</strong>

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
      <h1 class="heading">About An Púcán </h1>
      <p>
        An Púcán is a traditional Irish pub located in the heart of Galway City,
        just a stone's throw from Eyre Square. It's a favorite spot for locals
        and tourists alike, with a lively atmosphere, great music, and a wide
        range of drinks and food. Whether you're looking for a quiet pint, a
        night out with friends, or some live music, An Púcán is the place to be.
      </p>

      <h2 class="heading">Address</h2>
      <P>
        <span class="material-symbols-outlined red-pin"> pin_drop </span> 11 Forster
        Street, Galway City, Ireland
      </P>

      <h3 class="heading">Links</h3>
      <p>
        <a href="https://anpucan.ie/">
          <span class="material-symbols-outlined blue-world"> language </span> Website</a
        >
      </p>

      <p>
        
          <span class="material-symbols-outlined"> mail </span> info@anpucan.ie
      </p>

      <p>
        <span class="material-symbols-outlined"> phone_iphone </span> +353 91
        376 561
      </p>

      <h4 class="heading">An Púcán overall rating</h4>
      <span class="f" style="color: black; font-size: 2em">✰</span>
      <span class="f" style="color: black; font-size: 2em">✰</span>
      <span class="f" style="color: black; font-size: 2em">✰</span>
      <span class="f" style="color: gblack; font-size: 2em">✰</span>
      <p>rated 4.3 from 4 ratings</p>
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
        <div class="text">White only pub really enjoyed it</div>
      </div>
      <div class="comment">
        <div class="user">Jane Smith</div>
        <div class="text">They allow the right type of dogs in this pub</div>
      </div>
      <div class="comment">
        <div class="user">Mike Johnson</div>
        <div class="text">
          No Niggers no nonsence!
        </div>
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
export default {
  name: "AnPucan",
  data() {
    return {
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
