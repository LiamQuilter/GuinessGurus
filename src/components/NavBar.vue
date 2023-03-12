<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
  </head>

  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    style="background: linear-gradient(to right, #845ec2, #00c9ff)"
  >

  


  
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-end">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/">
            <h2 class="title">Guinness Gurus</h2>
          </router-link>
        </a>
      </div>
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
.router-link-active .button {
  background-color: #eee;
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

.button {
  position: relative;
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
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s, transform 0.5s;
}

.button.is-white:hover + .tooltip:before {
  content: "Click to sign up";
}

.button.is-white:hover + .tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%);
}

.title {
  font-size: 48px;
  font-family: "Pacifico", cursive;
  left: 60%; /* add this line */
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.button.is-Home {
  margin-right: 10px;
}
</style>
