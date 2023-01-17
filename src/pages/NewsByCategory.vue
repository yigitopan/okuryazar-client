<script lang="ts">
import { defineComponent } from 'vue';
import NewsCard from '../components/NewsCard.vue';
import {okuryazarStore} from '../stores/store'
import News from '../models/news'
import { useRoute } from 'vue-router'


export default defineComponent({
    components: {
        NewsCard
    },
    setup() {
        const store = okuryazarStore()
        const route = useRoute()
        const param = route.params.category as 'gundem'|'dunya'|'ekonomi'|'spor'
        store.fetchNewsByCategory(param)
    },
    computed: {
        newsByCategory() {
            var store = okuryazarStore();
            const news: News[] = store.getNewsByCategory;
            news.length>0 ? store.loadingDone() : false
            return news;
        },
        category() {
            const store = okuryazarStore()
            let categoryName;
            let param = this.$route.params.category as 'gundem'|'dunya'|'ekonomi'|'spor';
            
            store.fetchNewsByCategory(param)
            if(param == 'gundem') {
            categoryName = 'Gündem'
            }
            else if (param == 'ekonomi') {
                categoryName = 'Ekonomi'
            }
            else if (param == 'spor') {
                categoryName = 'Spor'
            }
            else if (param == 'dunya') {
                categoryName = 'Dünya'
            }
            
            return categoryName;
        }
    },
})
</script>

<template>
    <div>
        <div class="container mx-auto py-10 px-2 md:px-6">
            <h3 class="mb-5 font-signika font-bold text-3xl">{{category}}</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
                <NewsCard v-for="news in newsByCategory" :item="news"/>             
            </div>
        </div>
    </div>
   
</template>