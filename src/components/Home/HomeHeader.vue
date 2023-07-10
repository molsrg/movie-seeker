<template>
  <header class="home-header">
          <div class="home-header-logo">
              <img src="./../../assets/images/home-header/site_logo.png" alt="">
          </div>
          <div class="home-header-navigation">
                  <router-link to="/home"><div class="home-header-button">Home</div></router-link>
                  <router-link to="/new"><div class="home-header-button">New</div></router-link>
                  <router-link to="/actors"><div class="home-header-button">Actors</div></router-link>
                  <router-link to="/about"><div class="home-header-button">About</div></router-link>
          </div>
          <div class="home-header-support">
              <router-link to="/search"><img class="loop" src="./../../assets/images/home-header/lypa.png" alt=""></router-link>
              <router-link to="/lk"><img src="./../../assets/images/home-header/lk.png" alt=""></router-link>
          </div>
      </header>
</template>

<script>
export default {

}
</script>

<style>

</style>