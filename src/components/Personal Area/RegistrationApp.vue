<template>
    <div class="container">
        <div class="container-logo">
            <img src="../../assets/images/home-header/site_logo.png" alt="">
            <div>REGISTER</div>
        </div>
        <div class="container-form">
            <form action="#">
                <div class="form-group">
                    <input 
                    type="text" 
                    placeholder="Full Name"
                    v-model="userName">
                </div>
                <div class="form-group">
                    <input 
                    type="mail" 
                    placeholder="Email"
                    v-model="userMail">
                </div>
                <div class="form-group">
                    <input 
                    type="password" 
                    placeholder="Password"
                    v-model="userPassword">
                </div>
                <div class="form-group">
                    <input 
                    type="password" 
                    placeholder="Confirm Password"
                    v-model="userPassword_2">
                </div>
            </form>
        </div>
        <div class="container-button-form">
            <button  class="button" type="button" @click="createAccount"><router-link to="/">CREATE ACCOUNT</router-link></button>  
            <div class="buttom_agree">By clicking “Create Account” you agree to our terms and privacy policy.</div> 
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'

export default {    
    data(){
        return {
            userName: '', 
            userMail: '', 
            userPassword: '', 
            userPassword_2: '', 

            flagRegister: true 
        }
    }, 
    computed: {
        ...mapGetters(['ALL_USERS'])
    }, 

    methods: {
        ...mapActions(['POST_USER_BY_FIREBASE']),
        isEmpty(){
            return (this.userMail.length > 0 && this.userPassword.length > 0 && this.userName.length > 0 && this.userPassword_2.length > 0) ? true : false
        },
        checkDuplicate(){
            return this.userPassword === this.userPassword_2 ? true : false
        },
        checkRegisterMail(){
            for(let i = 0; i < this.ALL_USERS.length; i++){
                if(this.ALL_USERS[i].mail === this.userMail){
                    this.flagRegister = false 
                } 
            }
            return this.flagRegister
        },

        createAccount(){
            if (!this.isEmpty()) {
                alert('Заполните все поля!')
                return
            }

            if (!this.checkDuplicate()) {
                alert('Пароли не совпадают!')
                this.userPassword = ''
                this.userPassword_2 = ''
                return
            }

            if(!this.checkRegisterMail()){
                alert('Пользователь с таким email уже существует!')
                this.userMail = ''
                return 
            }



            const Data = {
                userName: this.userName, 
                userMail: this.userMail, 
                userPassword: this.userPassword
            }


            if(this.flagRegister) {
                axios.post('https://movie-seeker-d9219-default-rtdb.firebaseio.com/user.json', Data)
                .then(() => {
                    window.location.href = "/home"

                })
                .catch(() => {
                    alert('Ошибка регистрации пользователя в БД!')
                })   
            }
            
        }, 
       
    },
}
</script>