<template>


    <div 
    class="film-container"
    v-if="FILM_INFO">
        
        <div class="film-poster">
            <img class="film-img" :src="FILM_INFO?.poster?.url" ref="photo">
        </div>

        <div class="film-description">
            <div class="film-title">{{ FILM_INFO?.name }}</div>
            <div class="film-subtitle">{{ FILM_INFO?.slogan }}</div>
            <div class="film-text">{{ FILM_INFO?.shortDescription }}</div>
            <button class="film-button" @click="watchFilm" v-if="FILM_INFO.watchability.items.length">Смотреть фильм</button>
        

            <div v-if="watchedFilm" class="film-container-watch">
                <div
                    v-for="(item) in FILM_INFO.watchability.items" 
                    :key="item.name"
                    >
                    <a :href="item.url">
                        <img :src="item.logo.url" alt="">
                    </a>                    
                </div>
            </div>
            
            <button class="film-button" @click="backToHome">Вернуться на главную</button>
        
            <h2 class="film-about">О фильме</h2>
            <ul class="film-params">
                <li><span>Год производства </span>{{ FILM_INFO?.year }}</li>
                <li><span>Страна </span>{{countriesToString() }}</li>
                <li><span>Жанр </span>{{ genresToString() }}</li>
                <li><span>Бюджет </span> {{ FILM_INFO.budget.value + " " + FILM_INFO.budget.currency }}</li>
                <li><span>Время </span>{{ FILM_INFO?.movieLength }} мин</li>
            </ul>
                
        </div>

        <div class="film-raiting">
            <div class="film-raiting-number">{{ FILM_INFO?.rating.kp }}</div>
            <div class="film-raiting-grade">{{ FILM_INFO?.votes.kp }} оценки</div>
            <div class="film-raiting-review">{{ FILM_INFO?.votes.filmCritics }} рецензий критиков</div>
        </div>

    </div>
   
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return {
            res: this.$route.params.idx, 
            genresString: '', 
            countriesString: '', 

            watchedFilm: false
        }
    },
    methods: {
        ...mapActions (['GET_FILM_BY_ID_FROM_API']), 
        backToHome(){
            this.FILM_INFO = []
            window.location.href = "/home" 
        }, 
        genresToString() {
            if (this.FILM_INFO.genres) {
                const genres = this.FILM_INFO.genres.map((genre) => genre.name)
                this.genresString = genres.join(', ')
            }
            return this.genresString
        }, 
        countriesToString() {
            if (this.FILM_INFO.countries) {
                const countries = this.FILM_INFO.countries.map((genre) => genre.name)
                this.countriesString = countries.join(', ')
            }
            return this.countriesString
        }, 
        watchFilm(){
            this.watchedFilm = !this.watchedFilm
        }
    },
    created(){
        this.GET_FILM_BY_ID_FROM_API(this.res)
    },
    computed: {
        ...mapGetters([
            'FILM_INFO'
        ]), 
    }, 

    
}
</script>
