import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/HomePage.vue'
import Context from './pages/Context.vue'
import Authors from './pages/Authors.vue'
import Articles from './pages/Articles.vue'
import ArticlesByAuthor from './pages/ArticlesByAuthor.vue'
import NewsByCategory from './pages/NewsByCategory.vue'
import searchResults from './pages/SearchResults.vue'
import ByNewspaper from './pages/ByNewspaper.vue'

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    history: createWebHistory(),
    routes: [
        {path:'/', name: 'homepage', redirect:'/anasayfa' },
        {path:'/anasayfa', component: HomePage },
        {path:'/icerik', component: Context },
        {path:'/yazarlar', component: Authors },
        {path:'/kose', component: Articles },
        {path:'/kose/:fullname', component: ArticlesByAuthor },
        {path:'/kategori/:category', component: NewsByCategory },
        {path:'/ara/:query', component: searchResults },
        {path:'/gazete/:newspaperName', component: ByNewspaper },
    ],
    
});

export default router;