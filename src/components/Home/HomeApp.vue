<template>
  <div class="home-container">
      <HomeHeader></HomeHeader>   
      <main class="home-main" v-if="BEST_FILMS.length > 0" >
          
          <div class="home-main-best-films-header">
              WORLD BEST FILM
          </div>

          <div class="home-main-best-films-container">

              <div>
                  <button 
                  @click="prevSlide"
                  v-if="currentSlideIdx > 0"
                  ><img class="img" src="./../../assets/images/left.png" alt=""></button>
              </div>

              <div 
                  v-for="(item) in visibleFilms" 
                  :key="item.id"
                  class="home-main-best-films-container-item"
                  >
                  <router-link :to="'/film/' + item.id"><img :src="item.poster.url" alt=""></router-link>
              </div> 

              <div>
                  <button 
                  @click="nextSlide"
                  v-if="currentSlideIdx < BEST_FILMS.length - 5"
                  >
                  <img  src="./../../assets/images/right.png" alt=""></button>
              </div>

          </div>

      </main>     

      <main class="home-main" v-if="RUSSIAN_BEST_FILMS" >
          
          <div class="home-main-best-films-header">
              RUSSIAN BEST FILM
          </div>
          <div class="home-main-best-films-container">

              <div>
                  <button 
                  @click="prevSlideRU"
                  v-if="currentSlideIdxRU > 0"
                  ><img class="img" src="./../../assets/images/left.png" alt=""></button>
              </div>

              <div 
                  v-for="(item) in visibleFilmsRU" 
                  :key="item.id"
                  class="home-main-best-films-container-item"
                  >
                  <router-link :to="'/film/' + item.id"><img :src="item.poster.url" alt=""></router-link>
              </div> 

              <div>
                  <button 
                  @click="nextSlideRU"
                  v-if="currentSlideIdxRU < RUSSIAN_BEST_FILMS.length - 5"
                  >
                  <img  src="./../../assets/images/right.png" alt=""></button>
              </div>

          </div>

      </main>     

      <main class="home-main" v-if="BEST_CARTOON" >
          
          <div class="home-main-best-films-header">
              BEST CARTOON
          </div>
          <div class="home-main-best-films-container">

              <div>
                  <button 
                  @click="prevSlideCartoon"
                  v-if="currentSlideIdxCartoon> 0"
                  ><img class="img" src="./../../assets/images/left.png" alt=""></button>
              </div>

              <div 
                  v-for="(item) in visibleFilmsCartoon" 
                  :key="item.id"
                  class="home-main-best-films-container-item"
                  >
                  <router-link :to="'/film/' + item.id"><img :src="item.poster.url" alt=""></router-link>
              </div> 

              <div>
                  <button 
                  @click="nextSlideCartoon"
                  v-if="currentSlideIdxCartoon < BEST_CARTOON.length - 5"
                  >
                  <img  src="./../../assets/images/right.png" alt=""></button>
              </div>

          </div>

      </main>     
  
      
              
  </div>
  
</template>




<script>
import {mapActions, mapGetters} from 'vuex'
import HomeHeader from './HomeHeader.vue'
export default {
  
  data(){
      return {
          currentSlideIdx: 0, 
          currentSlideIdxRU: 0, 
          currentSlideIdxCartoon: 0, 
          
      }
  }, 

  methods: {
      ...mapActions(['GET_BEST_FILMS_FROM_API', 'GET_BEST_RUSSIAN_FILM_FROM_API', 'GET_CARTOON_FROM_API']),
      prevSlide() {
          if (this.currentSlideIdx > 0) {
              this.currentSlideIdx--;
          }
      },
      nextSlide() {
          if (this.currentSlideIdx < this.BEST_FILMS.length - 5) {
              this.currentSlideIdx++;
          }           
      }, 

      prevSlideRU() {
          if (this.currentSlideIdxRU > 0) {
              this.currentSlideIdxRU--;
          }
      },
      nextSlideRU() {
          if (this.currentSlideIdxRU < this.RUSSIAN_BEST_FILMS.length - 5) {
              this.currentSlideIdxRU++;
          }           
      }, 

      prevSlideCartoon() {
          if (this.currentSlideIdxCartoon > 0) {
              this.currentSlideIdxCartoon--;
          }
      },
      nextSlideCartoon() {
          if (this.currentSlideIdxCartoon < this.BEST_CARTOON.length - 5) {
              this.currentSlideIdxCartoon++;
          }           
      }
      
  }, 
  computed: {
      ...mapGetters([
          'BEST_FILMS', 'RUSSIAN_BEST_FILMS', 'BEST_CARTOON'
      ]),
      visibleFilms() {
          return this.BEST_FILMS.slice(this.currentSlideIdx, this.currentSlideIdx + 5);
      }, 
      visibleFilmsRU() {
          return this.RUSSIAN_BEST_FILMS.slice(this.currentSlideIdxRU, this.currentSlideIdxRU + 5);
      }, 
      visibleFilmsCartoon() {
          return this.BEST_CARTOON.slice(this.currentSlideIdxCartoon, this.currentSlideIdxCartoon + 5);
      }
  },
  created(){
      this.GET_BEST_FILMS_FROM_API()
      this.GET_BEST_RUSSIAN_FILM_FROM_API()
      this.GET_CARTOON_FROM_API()
  }, 

  components: {
      HomeHeader
  }
  
}
</script>