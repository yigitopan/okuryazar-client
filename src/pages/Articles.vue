<script lang="ts">
import { defineComponent } from 'vue';
import NewsCard from '../components/NewsCard.vue';
import {okuryazarStore} from '../stores/store'
import Article from '../models/article'

export default defineComponent({
    data(){
        return {
        }
    },
    computed: {
        articles() {
            var store = okuryazarStore();
            const articles: Article[] = store.getArticles;
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
            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-2 md:gap-10">
                <NewsCard v-for="article in articles" :item="article"/>             
            </div>
        </div>
    </div>
   
</template>