<script lang="ts">
import { defineComponent } from 'vue';
import {okuryazarStore} from '../stores/store'
import News from '../models/news'
import Article from '../models/article'

export default defineComponent({
    data(){
        return {
            ids: [new URL('../assets/1.png', import.meta.url).href, new URL('../assets/2.png', import.meta.url).href, new URL('../assets/3.png', import.meta.url).href, new URL('../assets/4.png', import.meta.url).href],
        }
    },
    computed:{
        item() {
        const store = okuryazarStore()
        const item: News | Article = store.getContext
        return item;
        }
    }
})
</script>


<template>
    <div class="container px-4 mx-auto flex flex-col text-left text-gray-300">
        <div class="my-12 w-full flex sm:flex-row flex-col items-center justify-between">
            <div class="hidden sm:block sm:basis-1/2 px-2 sm:px-4">
                <h2 class="font-semibold text-2xl text-gray-200">
                    {{ ('spot' in item) ? item.spot : item.author_name }}
                </h2>
            </div>

            <div class="sm:basis-1/2">
                <img class="object-cover w-full h-[40vh]" :src="item.img_url" alt="">
            </div>
        </div>
        
        <div class=" flex-col px-2">
            <div class="w-full">
                <h2 class="md:text-left font-semibold text-4xl text-center py-5 text-white">
                    {{ item.title }}
                </h2>
            </div>

            <div class="flex flex-row justify-between h-20 items-center">
                <div class="flex gap-x-8">
                    <div class="contextDate flex">
                        <img class="w-8"  src="../assets/github.svg" alt="">
                        <span class="self-center pl-2">07/01/2022</span>
                    </div>
                    <div class="contextNewspaper">
                        <img class="w-24" :src="ids[item!.newspaper_id-1]"  alt="">
                    </div>
                </div>

                <div><p class="font-light text-xs text-blue-200 cursor-pointer hover:underline">Kaynak sitede görüntüle</p></div>
                
            </div>

            <div class="block sm:hidden my-3">
                <h2 class="font-semibold text-xl text-gray-200">
                    {{ ('spot' in item) ? item.spot : item.title }}
                </h2>
            </div>
            
            <div class="pb-3 text-lg">
                <p>
                    {{ item.context }}
                </p>
            </div>

        </div>
    </div>
</template>