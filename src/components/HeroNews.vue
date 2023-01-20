<script lang="ts">
import { defineComponent } from 'vue'
import {okuryazarStore} from '../stores/store'
import News from '../models/news'

export default defineComponent({  
    data(){
        return {
            ids: [new URL('../assets/1.png', import.meta.url).href, new URL('../assets/2.png', import.meta.url).href, new URL('../assets/3.png', import.meta.url).href, new URL('../assets/4.png', import.meta.url).href],
        }
    },
    computed: {
        firstOfNews() {
            var store = okuryazarStore();
            const first: News = store.getFirst;
            return first;
        },
    },
    methods: {
        goToContext() {
            var store = okuryazarStore();
            store.setContext(this.firstOfNews!);
            this.$router.push('/icerik')
        }
    }
})
</script>


<template>
    <div v-if="firstOfNews.title != undefined" class="relative flex h-[80vh] items-center">
        <img v-bind:src="firstOfNews.img_url" alt="BannerImage" class="z-0 absolute h-full w-full object-cover object-right" />
        <div class="opacity-80 absolute z-10 gradient-hero h-full w-full"></div>
        <div class="pt-28 md:pt-40 relative z-20 py-24 px-8 md:px-20 lg:px-32 mx-auto flex flex-col">
            <div><img class="mb-3 h-8 md:h-12" :src="ids[(firstOfNews!.newspaper_id)-1]" alt=""></div>
            <div><h2 class="mb-6 font-bold text-3xl md:text-5xl">{{firstOfNews.title}}</h2></div>
            <div><button @click="goToContext" class="bg-white border-2 text-black py-2 px-6 font-bold rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white">Oku</button></div>
        </div>
    </div>
</template>

<style>
.gradient-hero {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(4,4,4,1) 61%, rgba(253,253,255,0.5) 100%);
}
</style>