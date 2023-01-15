<script lang="ts">
import { PropType, defineComponent } from 'vue';
import Article from '../models/article'
import News from '../models/news'
import { useRouter } from 'vue-router'
import {okuryazarStore} from '../stores/store'

export default defineComponent({
    data () {
        return {
            ids: [new URL('../assets/1.png', import.meta.url).href, new URL('../assets/2.png', import.meta.url).href, new URL('../assets/3.png', import.meta.url).href, new URL('../assets/4.png', import.meta.url).href],
            defaultImg: "https://i.sozcucdn.com/wp-content/uploads/2023/01/04/fed_16_9_1600279790-880x495-1.jpeg?w=776&h=436&mode=crop",
            router: useRouter()
        }
    },
    props: {
        item: {
            type: Object as (PropType<News | Article>)
        },
        i: {
            type: Number
        } 
    },
    methods: {
        goToContext() {
            var store = okuryazarStore();
            store.setContext(this.item!);
            this.$router.push('/icerik')
        }
    }
})
</script>

<template>
      
        <div class="relative flex flex-col grid-card hover:opacity-70 cursor-pointer" @click="goToContext">
            <img class="bg-white w-20 absolute right-0 z-10" :src="ids[(item!.newspaper_id)-1]" alt="">
            <div class="relative h-44">
                <img v-bind:src="item!.img_url || defaultImg" alt="BannerImage" class="z-0 absolute h-full w-full object-cover object-right" />
            </div>
            <div class="mt-2 mb-1 font-semibold text-base sm:text-xl">{{ item!.title }}</div>
            <div class="font-thin text-sm flex justify-between">
                <p>{{ item!.date.split('T')[0] }}</p>
                <p class="font-semibold">{{ ('author_name' in item!) ? item.author_name : '' }}</p>
            </div>
        </div>
</template>

<style scoped>
.grid-card {
    overflow: hidden;
}
</style>