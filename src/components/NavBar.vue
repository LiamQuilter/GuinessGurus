<template>
<nav class="navbar has-background-primary-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <h2 class="is-size-2 has-text-black-bis">Guinness Gurus</h2>
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item  has-text-black-ter">
          Home
        </a>
  
        <a class="navbar-item  has-text-black-ter">
          Pubs
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link  has-text-black-ter">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item has-text-black-ter">
              About
            </a>
            <a class="navbar-item has-text-black-ter">
              Contact
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-white">
              <strong>Sign up</strong>
            </a>
            <a class="button is-link">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>