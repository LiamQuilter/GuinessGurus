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
    style= "background: linear-gradient(to top, #1c1201,#000000,#000000, #4c2e10, #8b572a, #b58d68, #f7f3e9,#f7f3e9)"
    
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
        </div>
      </div>
    </div>
  </nav>
</template>




<style scoped>
  .navbar {
    opacity: 0; /* Set initial opacity to 0 */
    animation: fadeInNav 1s ease-in-out forwards; /* Set animation properties */
  }
  
  @keyframes fadeInNav {
    from {
      opacity: 0; /* Start with opacity 0 */
    }
    to {
      opacity: 1; /* End with opacity 1 */
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
  content: "Sign Up";
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
  content: "Login";
  position: absolute;
  top: -20px;
  left: -20px;
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
  content: " ";
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
