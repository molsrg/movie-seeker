import axios from 'axios'
export default {
    state() {
        return {
            users: {},

        }
        
    }, 
    getters: {
        ALL_USERS: state => {
            return state.users
        }
    }, 
    mutations: {
        SET_USERS_FROM_FIREBASE: (state, response) => {
            state.users = response
        }, 
    }, 
    actions: {
        GET_USERS_FROM_FIREBASE({commit}){
            axios.get('https://movie-seeker-f790d-default-rtdb.europe-west1.firebasedatabase.app/user.json')
                .then((res) => {
                    let data = res.data
                    const response = Object.keys(data).map(key => {
                        return {
                            id:key, 
                            name: data[key].userName, 
                            mail: data[key].userMail, 
                            password: data[key].userPassword
                        }
                    })
                    commit('SET_USERS_FROM_FIREBASE', response)
                })
                .catch(() => {
                    alert('Ошибка получения данных пользователей с БД!')
                })  
        }, 

        // DELETE_USER_BY_FIREBASE(userID) {
        //     axios.delete(`https://movie-seeker-d9219-default-rtdb.firebaseio.com/user/${userID}.json`)
        //       .then(() => {
        //         alert("Пользователь удалён! Всё прошло успешно!");
        //       })
        //       .catch(() => {
        //         alert("Ошибка при удалении! Попробуйте позже!");
        //       });
        // },


        // POST_USER_BY_FIREBASE(Data) {
        //     axios.post('https://movie-seeker-d9219-default-rtdb.firebaseio.com/user.json', Data)
        //         .then(() => {
        //             alert('Пользователь зарегестрирован! Перезагрузите страницу и зайдите в свой аккаунт!')
        //         })
        //         .catch(() => {
        //             alert('Ошибка отправки данных в БД!')
        //         })   
        // }, 
   
    }
       
}