<template>
    <div class="search-container">
        <header>
            <HomeHeader></HomeHeader>  
        </header>
         <main>
            <div class="search-input-container">
                <input type="text"
                placeholder="Введите название..."
                v-model="inputFilm">
                <button
                class="film-button"
                @click="searchFilms">Искать</button>
            </div>

            <div class="search-container-main" v-if="SEARCH_FILMS_INFO">
                <div class="search-container-main-item" v-for="item in SEARCH_FILMS_INFO" :key="item.id">
                    <router-link :to="'/film/' + item.id" v-if="item.poster.url">
                        <img :src="item.poster.url" alt="">
                    </router-link>
                 </div> 
            </div> 


            <div v-if="flagLoading && SEARCH_FILMS_INFO.length === 0">
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
    data(){
        return {
            inputFilm: '',
            flagLoading: false
        }
    }, 
    methods: {
        ...mapActions(['GET_FILM_BY_TITLE_FROM_API']),

        searchFilms(){
            this.flagLoading = true
            this.GET_FILM_BY_TITLE_FROM_API(this.inputFilm)

            if(this.SEARCH_FILMS_INFO.length > 0) {
                this.flagLoading = false
              }
        }
    }, 
    computed: {
        ...mapGetters(['SEARCH_FILMS_INFO'])
    },
    components: {
        HomeHeader
    }
}
</script>
