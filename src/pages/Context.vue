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
        if(item.title == undefined){
            alert('İçerik bulunamadı, tekrar deneyiniz.')
            this.$router.push('/')
        }
        return item;
        }
    }
})
</script>


<template>
    <div v-if="item.date != undefined" class="container px-4 mx-auto flex flex-col text-left text-gray-300">
        <div :class="{'justify-between': ('spot' in item), 'justify-start ':('author_name' in item)}" class="my-12 w-full flex sm:flex-row flex-col items-center">
            <div :class="{'sm:basis-1/2': ('spot' in item)}" >
                <img v-if="'spot' in item" class="object-cover w-full h-[40vh]" :src="item.img_url" alt="">
                <img v-else class="rounded-full object-cover w-24" :src="item.img_url" alt="">
            </div>
            <div :class="{'sm:basis-1/2 hidden': ('spot' in item)}" class="sm:block px-2 sm:px-4">
                <h2 class="font-semibold text-2xl text-gray-200">
                    {{ ('spot' in item) ? item.spot : item.author_name }}
                </h2>
            </div>
        </div>
        
        <div class=" flex-col px-2">
            <div class="w-full">
                <h2 class="md:text-left font-semibold text-4xl text-center py-5 text-white">
                    {{ item.title }}
                </h2>
            </div>

            <div class="flex flex-row justify-between h-20 items-center">
                <div class="flex gap-x-8 w-full">
                    <div class="contextDate flex">
                        <img class="invert w-6"  src="../assets/date-icon.svg" alt="">
                        <span class="self-center text-sm pl-2">{{new Date(item.date.replace(' ', 'T')).toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</span>
                    </div>
                    <div class="contextNewspaper flex items-center">
                        <img class="w-24" :src="ids[item!.newspaper_id-1]"  alt="">
                    </div>
                    <div class="flex items-center ml-auto"><p class="font-light text-xs text-blue-200 cursor-pointer hover:underline text-center">Kaynak sitede görüntüle</p></div>
                </div>

                
            </div>

            <div class="block sm:hidden my-3">
                <h2 class="font-semibold text-xl text-gray-200">
                    {{ ('spot' in item) ? item.spot : item.title }}
                </h2>
            </div>
            
            <div class="pb-3 w-12/12 text-justify">
                <p class="leading-loose">
                    {{ item.context }}
                </p>
            </div>

        </div>
    </div>
</template>