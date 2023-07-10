<template>
  <div class="search-container">
    <header>
        <HomeHeader></HomeHeader>  
    </header>
    <main>
      <div class="search-input-container">
              <input type="text"
              placeholder="Введите имя актёра..."
              v-model="inputName">
              <button
              class="film-button"
              @click="searchActors">Искать</button>
      </div>
      
      <div class="search-container-main"
          v-if="ACTORS_MOVIE">
              <div 
              class="search-container-main-item"
              v-for="item in ACTORS_MOVIE"
              :key="item.id">
                  <router-link :to="'/film/' + item.id"><img :src="item.poster.url" alt=""></router-link>
               </div> 
      </div> 

      <div v-if="flagLoading && ACTORS_MOVIE.length === 0">
        <div class="search-container-main">
          <div class="loader"></div>
        </div>
      </div>
      
      
    </main>
  </div>
</template>

  
  <script>
  import HomeHeader from '../Home/HomeHeader.vue'
  import { mapActions, mapGetters } from 'vuex'
  export default {
      components: {
        HomeHeader
      }, 
      data(){
        return {
            inputName: '',

            flagLoading: false
        }
      },
      
      methods: {
          ...mapActions(['GET_ACTORS_MOVIE_FROM_API']),
  
           searchActors(){
              this.flagLoading = true
              this.GET_ACTORS_MOVIE_FROM_API(this.inputName)
              

              if(this.ACTORS_MOVIE.length > 0) {
                this.flagLoading = false
              }
          }
      }, 
      computed: {
          ...mapGetters(['ACTORS_MOVIE'])
      },
  
    
  
  }
  </script>

<style>

</style>