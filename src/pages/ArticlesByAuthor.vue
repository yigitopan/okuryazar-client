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
            var store = okuryazarStore();
            store.fetchArticlesOfAuthor(fullname)
            console.log('set')
    },
    computed: {
        articles() {
            console.log('fetch')
            var store = okuryazarStore();
            const articles: Article[] = store.getArticlesOfAuthor;
            return articles;
        },
    },
    components: {
        NewsCard
    }
})
</script>

<template>
    <div>
        <div class="container mx-auto py-10 px-2 md:px-6">
            <h3 class="mb-5 font-signika font-bold text-3xl">Köşe yazıları</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
                <NewsCard v-for="article in articles" :item="article"/>             
            </div>
        </div>
    </div>
   
</template>
