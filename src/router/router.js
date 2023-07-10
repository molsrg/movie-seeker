import { createRouter, createWebHistory } from 'vue-router'
import Authorization from './../components/Personal Area/AuthorizationApp.vue'
import Registration from './../components/Personal Area/RegistrationApp.vue'
import LK from './../components/Personal Area/LK_App.vue'
import Home from './../components/Home/HomeApp.vue'
import Film from './../components/Film/FilmApp.vue'
import Search from './../components/Film/SearchApp.vue'
import NewFilm from './../components/Film/NewFilmApp.vue'
import FilmActors from './../components/Film/FilmActorsApp.vue'
import About from './../components/Home/AboutMe.vue'


const routes = [
    {
        path:'/',
        name:'Authorization',
        component: Authorization,
    }, 
    {
        path:'/registration',
        name:'Registration',
        component: Registration,
    }, 
    {
        path:'/home',
        name:'Home',
        component: Home,
        props: true 
    }, 
    {
        path:'/film/:idx?',
        name:'Film',
        component: Film,
        props: true 
    }, 
    {
        path:'/search',
        name:'Search',
        component: Search,

    }, 
    {
        path:'/lk',
        name:'LK',
        component: LK,

    }, 
    {
        path:'/new',
        name:'NewFilm',
        component: NewFilm,

    }, 
    {
        path:'/actors',
        name:'Actors',
        component: FilmActors,

    },
    {
        path:'/about',
        name:'About',
        component: About,

    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;