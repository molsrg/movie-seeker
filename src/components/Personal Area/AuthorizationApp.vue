<template>
    <div class="container">
        <div class="container-logo">
            <img src="../../assets/images/home-header/site_logo.png" alt="">
            <div>Login into your account</div>
        </div>
        <div class="container-form">
            <form action="#">
                <div class="form-group">
                    <label for="mail">Email adress</label>
                    <input 
                    type="mail" 
                    placeholder="Введите email"
                    v-model="userMail">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                    type="password" 
                    placeholder="Password"
                    v-model="userPassword">
                </div>
            </form>
        </div>
        <div class="container-form-checkbox">
            <a href="#">Forgot password?</a>
        </div>

        <div class="container-button-form">
            <button  class="button button_1" type="button" @click="AuthorizationUser">LOGIN NOW</button>
            <div>OR</div>
            <button class="button button_2" type="button"><router-link to="/registration">SIGN UP NOW</router-link></button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    created(){
        this.GET_USERS_FROM_FIREBASE()
    },
    
    data(){
        return {
            userMail: '', 
            userPassword: '',
            flagUser: false
        }
    }, 
    computed: {
        ...mapGetters(['ALL_USERS'])
        
    }, 
    methods: {
        ...mapActions(['GET_USERS_FROM_FIREBASE']),

        isEmpty(){
            return (this.userMail.length > 0 && this.userPassword.length > 0) ? true : false
        },
        userRegister(){
            for(let i = 0; i < this.ALL_USERS.length; i++){
                if(this.ALL_USERS[i].mail === this.userMail && this.ALL_USERS[i].password == this.userPassword){
                    this.flagUser = true 
                } 
            }
            return this.flagUser
        },

        AuthorizationUser(){
            if(!this.isEmpty()){
                alert('Заполните все поля!')
                return 
            }

            if(!this.userRegister()){
                alert('Пользователь не найден... Пройдите процедуру регистрации или попробуйте снова')
                this.userPassword = ''
                return 
            }
            
            if (this.flagUser){
                window.location.href = "/home"
            }
        }, 
    }, 
    
}
</script>
