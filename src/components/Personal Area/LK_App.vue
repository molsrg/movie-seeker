<template>
  <div class="lk-container">
    <header>
        <HomeHeader></HomeHeader>  
    </header>
    <main>
        <div class="lk-main-info">
            <button class="film-button" @click="out">Выйти</button>
        </div>
        
    </main>
  </div>
</template>

<script>
import HomeHeader from '../Home/HomeHeader.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            inputMail: '', 
            inputPassword: '',

            id: ''
            
        }
    },
    methods: {
        ...mapActions(['GET_USERS_FROM_FIREBASE', 'DELETE_USER_BY_FIREBASE']),
        out(){
            window.location.href = "/"
        }
    
    },
    computed: {
        ...mapGetters([
            'ALL_USERS', 'USER_INFO'
        ])
    },

    components: {
        HomeHeader
    }, 
    created(){
        this.GET_USERS_FROM_FIREBASE()
    }
}
</script>

<style scoped>

.lk-container {
    height: 100vh;
    max-width: 90%;
    margin: auto;
    }

.lk-main-info {
    margin-top: 5vh;
    display: flex;
    justify-content: center; 
}




</style>