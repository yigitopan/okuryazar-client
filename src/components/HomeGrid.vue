<script lang="ts">
import { defineComponent } from 'vue';
import NewsCard from './NewsCard.vue';
import {okuryazarStore} from '../stores/store'
import Article from '../models/article'
import News from '../models/news'

export default defineComponent({
    computed: {
        articles() {
            var store = okuryazarStore();
            const articles: Article[] = store.getArticles;
            return articles;
        },
        news() {
            var store = okuryazarStore();
            const news: News[] = store.getNews;
            news.length>0 ? store.loadingDone() : false
            return news;
        }
    },
    components: {
        NewsCard
    }
})
</script>

<template>
<div v-if="news.length>0">
    <div>
        <div class="container mx-auto py-10 px-2">
            <h3 class="mb-5 font-signika font-bold text-3xl">Yeni Haberler</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
                <NewsCard v-for="index in 8" :item="news[index]" :key="news[index].title"/>             
            </div>
        </div>
    </div>

    <div v-if="articles.length>0" class="bg-white">
        <div class="container mx-auto py-10 px-2">
            <h3 class="text-black mb-3 font-signika font-bold text-3xl">Köşe Yazıları</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 gap-y-12 md:gap-10 text-black">
                <NewsCard v-for="index in 12" :item="articles[index]"/>             
            </div>
        </div>
    </div>
</div>
</template>