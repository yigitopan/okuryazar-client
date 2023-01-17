<script lang="ts">
import { defineComponent } from 'vue';
import NewsCard from '../components/NewsCard.vue';
import {okuryazarStore} from '../stores/store'
import Article from '../models/article'
import { useRoute } from 'vue-router';
export default defineComponent({
    data(){
        return {
        }
    },
    setup() {
            const route = useRoute();
            const fullname = route.params.fullname as string
            const store = okuryazarStore();
            store.fetchArticlesOfAuthor(fullname)
            console.log('gitti')
    },
    computed: {
        articles() {
            var store = okuryazarStore();
            const articles: Article[] = store.getArticlesOfAuthor;
            return articles;
        },
        name() {
            if(this.articles.length>0){
                return this.articles[0].author_name
            }
            return ''
        }
    },
    components: {
        NewsCard
    }
})
</script>

<template>
    <div>
        <div class="container mx-auto py-10 px-2 md:px-6">
            <h3 class="mb-5 font-signika font-bold text-3xl">Köşe yazıları - {{ name }}</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
                <NewsCard v-for="article in articles" :item="article"/>             
            </div>
        </div>
    </div>
   
</template>
