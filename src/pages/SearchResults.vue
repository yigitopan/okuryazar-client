<script lang="ts">
import { defineComponent } from 'vue';
import NewsCard from '../components/NewsCard.vue';
import {okuryazarStore} from '../stores/store'
import Article from '../models/article'
import News from '../models/news'
import { useRoute } from 'vue-router';

export default defineComponent({
    data(){
        return {
        }
    },
    computed: {
        searchResults() {
            var store = okuryazarStore();
            const results: (Article | News)[] = store.getSearchResults;
            return results;
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
            <h3 class="mb-5 font-signika font-bold text-3xl">Arama Sonuçları</h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
                <NewsCard v-for="result in searchResults" :item="result"></NewsCard>
            </div>
        </div>
    </div>
   
</template>