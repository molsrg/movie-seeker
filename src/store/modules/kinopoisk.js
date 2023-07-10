import axios from 'axios'

export default {
    state() {
        return {
            bestFilms: [], 
            russianFilms: [],
            searchFilms: [],
            newFilms: [], 
            actorsMovie: [],
            bestCartoon: []
        }
        
    }, 
    getters: {
        BEST_FILMS: state => {
            return state.bestFilms
        }, 

        BEST_CARTOON: state => {
            return state.bestCartoon
        },

        RUSSIAN_BEST_FILMS: state => {
            return state.russianFilms
        }, 

        SEARCH_FILMS_INFO: state => {
            return state.searchFilms
        },

        NEW_FILMS: state => {
            return state.newFilms
        }, 

        ACTORS_MOVIE: state => {
            return state.actorsMovie
        }, 

        FILM_INFO: state => {
            return state.filmInfo
        }
    }, 
    mutations: {
        SET_BEST_FILMS: (state, response) => {
            state.bestFilms = response
        }, 

        SET_SEARCH_FILMS: (state, data) => {
            state.searchFilms = data
        }, 

        SET_NEW_FILMS:(state, response) => {
            state.newFilms = response
        }, 

        SET_ACTORS_MOVIE: (state, response) => {
            state.actorsMovie = response
        }, 

        SET_FILM_INFO: (state, response) => {
            state.filmInfo = response
        }, 

        SET_BEST_RUSSIAN_FILMS: (state, response) => {
            state.russianFilms = response
        }, 

        SET_CARTOON: (state, response) => {
            state.bestCartoon = response
        }, 
    },

    actions: {
        GET_BEST_FILMS_FROM_API({commit}){
            axios({
                method: 'GET', 
                url: 'https://api.kinopoisk.dev/v1.3/movie?selectFields=id&selectFields=name&selectFields=poster.url&page=1&limit=50&poster.url=%21null&top250=%21null',
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                    commit('SET_BEST_FILMS', response.data.docs)
                })
            .catch(() => {
                alert("Запрос лучших фильмов не удался!")
                })   
        }, 

        GET_BEST_RUSSIAN_FILM_FROM_API({commit}){
            axios({
                method: 'GET', 
                url: 'https://api.kinopoisk.dev/v1.3/movie?sortField=votes.kp&page=1&limit=50&type=movie&year=2015-2030&poster.url=%21null&countries.name=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F',
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                    commit('SET_BEST_RUSSIAN_FILMS', response.data.docs)

                })
            .catch(() => {
                alert("Запрос лучших фильмов из Росии не удался!")
                })   
        }, 

        GET_CARTOON_FROM_API({commit}){
            axios({
                method: 'GET', 
                url: 'https://api.kinopoisk.dev/v1.3/movie?page=1&limit=50&type=cartoon&year=2000-2030&poster.url=%21null&top250=%21null',
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                    commit('SET_CARTOON', response.data.docs)
                })
            .catch(() => {
                alert("Запрос мультиков не удался!")
                })   
        }, 

        GET_FILM_BY_ID_FROM_API({commit}, id){
            axios({
                method: 'GET', 
                url: `https://api.kinopoisk.dev/v1.3/movie/${id}`,
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                    commit('SET_FILM_INFO', response.data)
                })
            .catch(() => {
                alert("Запрос фильма по ID не удался!")
            })   
        }, 
        GET_FILM_BY_TITLE_FROM_API({commit}, title){
            axios({
                method: 'GET', 
                url: `https://api.kinopoisk.dev/v1.3/movie?selectFields=id&selectFields=name&selectFields=poster&selectFields=year&sortField=votes.kp&sortType=-1&page=1&limit=15&name=${title}&poster.url=%21null`,
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                    commit('SET_SEARCH_FILMS', response.data.docs)

                })
            .catch(() => {
                alert("Запрос фильма по Названию не удался!")
            })   
        }, 

        GET_NEW_FILM_FROM_API({commit}){
            axios({
                method: 'GET', 
                url: 'https://api.kinopoisk.dev/v1.3/movie?page=1&limit=50&year=2021-2023&poster.url=%21null',
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                    commit('SET_NEW_FILMS', response.data.docs)
                })
            .catch(() => {
                alert("Запрос новых фильмов не удался!")
                })   
        },
        
        GET_ACTORS_MOVIE_FROM_API({commit}, name){
            axios({
                method: 'GET', 
                url: `https://api.kinopoisk.dev/v1.3/movie?selectFields=id&selectFields=name&selectFields=persons.name&selectFields=year&selectFields=poster.url&sortField=votes.kp&sortType=-1&page=1&limit=20&backdrop.url=%21null&persons.name=${name}`,
                headers: {
                    'accept': 'application/json', 
                    'X-API-KEY': '9PRCJQN-50B4RSN-H1AFN30-AQM1V9G'
                }
            })
            .then((response) => {
                commit('SET_ACTORS_MOVIE', response.data.docs)
            })
            .catch(() => {
                alert(`Запрос фильмов с участием ${name} не удался! (1 уровень)`)
                })   
            },
        }

}