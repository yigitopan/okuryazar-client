<script lang="ts">
import { defineComponent } from 'vue';
import { okuryazarStore } from '../stores/store';
import News from '../models/news';
import Article from '../models/article';
import { useRoute } from 'vue-router';
import NewsCard from '../components/NewsCard.vue';

export default defineComponent({
    components: {
        NewsCard
    },
    setup() {
        const store = okuryazarStore();
        const route = useRoute();
        const param  = route.params.newspaperName as String
        store.fetchByNewspaper(param)
    },
    computed: {
        news(){
            const store = okuryazarStore();
            const news: News[] = store.getNewsByNewspaper
            news.length>0 ? store.loadingDone() : false
            return news
        },
        articles(){
            const store = okuryazarStore();
            const articles: Article[] = store.getArticlesByNewspaper
            return articles
        },
        param(){
            const store = okuryazarStore()
            let param = this.$route.params.newspaperName as String
            let newspaperName;
            store.fetchByNewspaper(param)

            if(param == 'sozcu') {
            newspaperName = 'Sözcü'
            }
            else if (param == 'takvim') {
                newspaperName = 'Takvim'
            }
            else if (param == 'cumhuriyet') {
                newspaperName = 'Cumhuriyet'
            }
            else if (param == 'milliyet') {
                newspaperName = 'Milliyet'
            }
            
            return newspaperName
        }
    },
})
</script>

<template>
    <div>
        <div v-if="news.length>0">
            <div class="container mx-auto py-10 px-2">
                <h3 class="mb-5 font-signika font-bold text-3xl">{{param}} - Haberler</h3>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
                    <NewsCard v-for="index  in 24" :item="news[index]" />             
                </div>
            </div>
        </div>
    
        <div v-if="articles.length>0" class="bg-white">
            <div class="container mx-auto py-10 px-2">
                <h3 class="text-black mb-3 font-signika font-bold text-3xl">{{param}} - Köşe Yazıları</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 gap-y-12 md:gap-10 text-black">
                    <NewsCard v-for="index in 24" :item="articles[index]"/>             
                </div>
            </div>
        </div>
    </div>
    </template>