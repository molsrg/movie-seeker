import Vuex from 'vuex'
import kinopoisk from './modules/kinopoisk'
import firebase from './modules/firebase'

const store = new Vuex.Store ({
    
    modules: {
        kinopoisk, 
        firebase
    }
})


export default store 
