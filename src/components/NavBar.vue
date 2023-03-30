<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
      rel="stylesheet"
    />

    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Noto+Serif+Lao&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap" rel="stylesheet">

  </head>

  <nav 
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    style="justify-content: center;"
    
    
  >



  <a>
        <router-link to="/">
          <h2 class="title">Pint Pals</h2>
        </router-link>
      </a>

</nav>

      <div class="navbar-end" style="background-color: black;">
      <div class="navbar-item" style="background-color: black;">
        <div class="buttons">

          <router-link

            to="/Mapapi"
            class="button is-white"
            data-tooltip="Sign Up"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
          >
            <strong><i class="fa-solid fa-compass fa-xl"></i></strong>
          </router-link>


          <router-link
            to="/Map"
            class="button is-white"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
          >
            <strong><i class="fa-solid fa-map-location-dot fa-lg"></i></strong>
          </router-link>


          <router-link
            to="/signup"
            class="button is-white"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
          >
            <strong><i class="fa-solid fa-user-plus fa-l"></i></strong>
          </router-link>

          <router-link
            id="login-link"
            to="/login"
            class="button is-white"
            data-tooltip="Login"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
          >
            <i class="fa-regular fa-circle-user fa-xl"></i>
          </router-link>

          
          <router-link
            id = "profile-link"
            to = "/profile"
            class="button is-white"
            data-tooltip="Profile"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
            >
            <i class="fa-solid fa-beer-mug-empty fa-lg"></i>
          </router-link>
        </div>
    
      </div>
    </div>
  
</template>




<style scoped>

  .navbar {
    
    animation: change-colors 50s ease forwards;
  }
  @keyframes change-colors {
  0% {
    background: linear-gradient(to top, #000000, #000000, #2e1d0c, #5c3b1c, #8a5a2c, #b78a4c, #e4ba6c, #f7f3e9, #f7f3e9);
  }
  10% {
    background: linear-gradient(to top, #000000, #000000, #2e1d0c, #5c3b1c, #8a5a2c, #b78a4c, #e4ba6c, #f7f3e9, #f7f3e9);
  }
  20% {
    background: linear-gradient(to top, #000000, #000000, #2e1d0c, #5c3b1c, #8a5a2c, #b78a4c, #e4ba6c, #f7f3e9, #f7f3e9);
  }
  30% {
    background: linear-gradient(to top, #000000, #000000, #271a0b, #4e3317, #754d23, #9c664f, #c38f7b, #f7f3e9, #f7f3e9);
  }
  40% {
    background: linear-gradient(to top, #000000, #000000, #1f1308, #3e2410, #5d3618, #7c4821, #9b5a2a, #f7f3e9, #f7f3e9);
  }
  50% {
    background: linear-gradient(to top, #000000, #000000, #191107, #321d0f, #4b2917, #643520, #7d4228, #f7f3e9, #f7f3e9);
  }
  60% {
    background: linear-gradient(to top, #000000, #000000, #130a04, #261308, #3d1e0c, #54270f, #6b3112, #f7f3e9, #f7f3e9);
  }
  70% {
    background: linear-gradient(to top, #000000, #000000, #0d0602, #1a0c04, #271107, #34240a, #412d0d, #f7f3e9, #f7f3e9);
  }
  80% {
    background: linear-gradient(to top, #000000, #000000, #080401, #110802, #1a0d03, #231204, #2c1605, #f7f3e9, #f7f3e9);
  }
  90% {
    background: linear-gradient(to top, #000000, #000000, #040200, #080401, #0c0602, #100803, #140a04, #f7f3e9, #f7f3e9);
  }
  100% {
    background: linear-gradient(to top, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #f7f3e9, #f7f3e9);
  }
}

@media screen and (max-width: 1023px) {
  .navbar-start .buttons {
    margin-right: auto;
  }
  .title {
    display: block;
    text-align: center;
    justify-content: center;
  }
  .title span {
    display: block;
    font-size: 0.8em;
    text-align: center;
  }  
}



.button.is-white:hover strong:before {
  
  position: absolute;
  top: -20px;
  left: -40px;
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0.5;
}


.button:hover {
  transform: translateY(-5px);
  opacity: 1;
 
}

.navbar-end {
  display: flex;
  justify-content: center; /* horizontally center the contents */
  grid-column: 3 / span 2; /* span 2 columns starting from the second column */
  
}

.title {
    font-size: 48px;
    font-family: 'Lora', serif;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 10px;
    color: #fefdfc; /* Darker shade of gold */
    text-shadow: #000;
    display: inline-block; /* Ensures that the border wraps around the text */
    padding-left: 20px; /* Adds some padding to the left of the text */
    padding-right: 20px; /* Adds some padding to the right of the text */
    animation-name: changeColor;
    animation-duration: 1s;
    animation-delay: 43s;
    animation-fill-mode: forwards;
    display: block;
    text-align: center;
    justify-content: center;
   
}

@keyframes changeColor {
  from {
    color: #fefdfc;
  }
  to {
    color: gold;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  opacity: 0.5; /* set opacity to 50% */
}

.button.is-Home {
  margin-right: 10px;
}






</style>
