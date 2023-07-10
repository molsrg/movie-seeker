<template>
  <div class="new-container">
    <header>
        <HomeHeader></HomeHeader>  
    </header>
    <main>
      <div class="search-container-main"
            v-if="NEW_FILMS">
                <div 
                class="search-container-main-item"
                v-for="item in NEW_FILMS"
                :key="item.id">
                    <router-link :to="'/film/' + item.id"><img :src="item.poster.url" alt=""></router-link>
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
    methods: {
        ...mapActions(['GET_NEW_FILM_FROM_API']),

        searchFilms(){
            this. GET_NEW_FILM_FROM_API()
        }
    }, 
    computed: {
        ...mapGetters(['NEW_FILMS'])
    },

    created(){
        this.GET_NEW_FILM_FROM_API()
    }, 

}
</script>

