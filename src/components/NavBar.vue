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
    
    
  >
    <div class="navbar-end">
      <a>
        <router-link to="/">
          <h2 class="title">&nbsp;&nbsp;&nbsp;&nbsp; Guinness Gurus</h2>
        </router-link>
      </a>
    </div>

    


    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link
            to="/signup"
            class="button is-white"
            data-tooltip="Sign Up"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
          >
            <strong><i class="fa-solid fa-user-plus fa-l"></i></strong>
          </router-link>

          <router-link
            id="login-link"
            to="/login"
            class="button is-link"
            data-tooltip="Login"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
          >
            <i class="fa-regular fa-circle-user fa-xl"></i>
          </router-link>
          
          <router-link
            id = "profile-link"
            to = "/profile"
            class="button is-link"
            data-tooltip="Profile"
            onmouseover="this.dispatchEvent(new Event('mouseenter'))"
            onmouseout="this.dispatchEvent(new Event('mouseleave'))"
            >
            <i class="fa-regular fa-face-smile fa-xl"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>




<style scoped>
  .navbar {
    
  
    animation: change-colors 100s ease forwards;
  
  
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
    background: linear-gradient(to top, #000000, #000000, #0d0602, #1f0e05, #251007, #34240a, #412d0d, #f7f3e9, #f7f3e9);
  }
  80% {
    background: linear-gradient(to top, #000000, #000000, #080401, #110802, #1d0f03, #201003, #2c1605, #f7f3e9, #f7f3e9);
  }
  90% {
    background: linear-gradient(to top, #000000, #000000, #040200, #080401, #0c0602, #100803, #140a04, #f7f3e9, #f7f3e9);
  }
  100% {
    background: linear-gradient(to top, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #f7f3e9, #f7f3e9);
  }
}


.navbar-start {
  display: flex;
  align-items: center;
}

.navbar-start .buttons {
  display: flex;
  align-items: center;
}

.navbar-start .buttons a:not(:last-child) {
  margin-right: 10px;
}



@media screen and (max-width: 1023px) {
  .navbar-start .buttons {
    margin-right: auto;
  }
  .title {
    display: block;
    text-align: center;
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
}

.button.is-link:hover strong:before {
  
  position: absolute;
  top: -20px;
  left: 60px;
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;

  
}

.button.is-link:hover ~ .button.is-white:hover strong:before {
  left: -80px;
}

.button.is-link:hover ~ .button.is-white:hover strong:after {
  
  position: absolute;
  top: 10px;
  left: 110px;
  border-left: 10px solid transparent;
  border-right: 10px solid #000;
  border-bottom: 10px solid transparent;
}

.button.is-link:hover ~ .button.is-white:hover strong:before,
.button.is-white:hover ~ .button.is-link:hover strong:before {
  opacity: 1;
}

.button:hover + .tooltip {
  display: block;
  left: -80px;
}

.tooltip {
  position: absolute;
  display: none;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  white-space: nowrap;
}

.button:hover {
  transform: translateX(-10px);
}

.button.is-link + .tooltip:before {
  content: attr(data-tooltip);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
}

.button.is-link:hover + .tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%);
}

.button.is-link + .tooltip {
  content: attr(data-tooltip);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s, transform 0.5s;
}



.button.is-white:hover + .tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%);
}

.title {
    font-size: 48px;
    font-family: 'Lora', serif;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 30px;
    color: #fefdfc; /* Darker shade of gold */
    text-shadow: #000;
    display: inline-block; /* Ensures that the border wraps around the text */
    padding-left: 20px; /* Adds some padding to the left of the text */
    padding-right: 20px; /* Adds some padding to the right of the text */
  }

.buttons {
  display: flex;
  justify-content: space-between;
}

.button.is-Home {
  margin-right: 10px;
}


</style>
