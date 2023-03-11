<template>

  

<nav class="navbar has-background-primary-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to ="/" class="navbar-item is-size-2 has-text-black-bis">
        Guinness Gurus
      </router-link>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item has-text-black-ter">
          Home  <span class="material-symbols-outlined">
            home
            </span>
        </router-link>
        <router-link to="/aboutUs" class="navbar-item  has-text-black-ter">
          About Us 
        </router-link>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/signup" class="button is-white">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/login" class="button is-link">
              Log in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

