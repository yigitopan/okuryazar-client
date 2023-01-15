<script lang="ts">
import { defineComponent } from 'vue';
import {okuryazarStore} from '../stores/store'
import Author from '../models/author'

export default defineComponent({
    computed: {
       authors() {
           var store = okuryazarStore();
           let authors: Author[] = store.getAuthors
           return authors;
       }
    },
    methods: {
        authorClickHandler(fullname: string) {
            const nameParam = fullname.replaceAll(' ','+').toLowerCase();
            this.$router.push(`/kose/${nameParam}`)
        }
    }
})
</script>

<template>
    <div class="container mx-auto px-2">
        <h2 class="font-semibold text-3xl py-5 text-center sm:text-left">Yazarlar</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6 md:grid-cols-4 lg:grid-cols-5">

            <div v-for="author in authors" @click="authorClickHandler(author.author_name)" class="group flex flex-col justify-between items-center bg-gray-700 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-white">
                <div class="w-36 h-36 pt-3">
                    <img class="w-full h-full  mx-auto object-cover rounded-full" :src="author.img_url" alt="">
                </div>
                <div class="pt-5 pb-3 group-hover:text-black">
                    <p>{{author.author_name}}</p>
                </div>
            </div>

        </div>
    </div>
</template>



