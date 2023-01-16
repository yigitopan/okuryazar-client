<script lang="ts">
import { defineComponent } from 'vue'
import { okuryazarStore } from '../stores/store';

export default defineComponent({  
  data () {
    return {
      searchQuery:"",
      searchMode: false,
      scrolled: false,
      mobileNavActive:false
    };
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0;
    },
    setSearchMode(mode: boolean) {
      this.searchMode = mode
    },
    searchEnterHandler() {
      const store = okuryazarStore()
      const param = this.$route.params.query as String
      store.search(this.searchQuery)
      this.$router.push(`/ara/${this.searchQuery}`)
    },
    mobileNav(){
      this.mobileNavActive = !this.mobileNavActive
    }
  },
  watch:{
    $route (to, from){
        this.mobileNavActive = false;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
}
})


</script>


<template>
  <header :class="{'bg-unscrolled opacity-80	 backdrop-blur-xl': scrolled,'bg-white': !scrolled }" class="transition ease-in-out duration-300 border-b-2 border-gray-500 w-full z-50 sticky">
      <div class="flex-col flex relative">
          <div class="flex flex-row items-center px-8 md:px-20 lg:px-32 justify-between sm:justify-between py-4 sm:space-x-12 font-signika z-20">
            
            <RouterLink to="/">
            <div class="okuryazar-logo cursor-pointer">
                <img :class="{'invert':!scrolled}" class="h-12" src="../assets/okuryazar-logo.svg" alt="">
              </div>
            </RouterLink>

              <div class="hidden sm:flex flex-row items-center justify-between" :class="{'text-black':!scrolled, '!hidden':searchMode}">
                  <div class="relative group group-hover:block px-4 transition ease-in-out duration-300 text-lg font-normal cursor-pointer hover:font-semibold">
                    Kategoriler
                    <ul :class="{'bg-black':scrolled}" class="pt-6 left-[0px] absolute hidden group-hover:block text-black w-full font-light">
                      <RouterLink to="/kategori/gundem"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Gündem</li></RouterLink>
                      <RouterLink to="/kategori/ekonomi"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Ekonomi</li></RouterLink>
                      <RouterLink to="/kategori/spor"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Spor</li></RouterLink>
                      <RouterLink to="/kategori/dunya"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Dünya</li></RouterLink>
                    </ul>
                  </div>
                  <div class="px-4 group group-hover:block relative transition ease-in-out duration-300 text-lg font-normal cursor-pointer hover:font-semibold">
                    Gazeteler
                    <ul :class="{'bg-black':scrolled}" class="pt-6 left-[0px] absolute hidden group-hover:block text-black w-full font-light">
                      <RouterLink to="/gazete/sozcu" @click.prevent="mobileNav"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Sözcü</li></RouterLink>
                      <RouterLink to="/gazete/cumhuriyet"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Cumhuriyet</li></RouterLink>
                      <RouterLink to="/gazete/takvim"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Takvim</li></RouterLink>
                      <RouterLink to="/gazete/milliyet"><li class=" bg-white py-3 text-sm text-center cursor-pointer hover:font-semibold border-b-2 border-gray-500">Milliyet</li></RouterLink>
                    </ul>
                  </div>
                  <div class="px-4 transition ease-in-out duration-300 text-lg font-normal cursor-pointer hover:font-semibold"><RouterLink to="/kose">Köşe Yazıları</RouterLink></div>
                  <div class="px-4 transition ease-in-out duration-300 text-lg font-normal cursor-pointer hover:font-semibold"><RouterLink to="/yazarlar">Yazarlar</RouterLink></div>
                  <div class="pl-4 transition ease-in-out duration-300 hover:scale-125 cursor-pointer" @click="setSearchMode(true)"><img :class="{'invert':!scrolled}" class="h-4 hover:scale-110" src="../assets/searchIcon.png" alt=""></div>
              </div>

              <div class="md:w-1/3 flex" :class="{'hidden':!searchMode}">
                <input @keyup.enter="searchEnterHandler" v-model="searchQuery" class="basis-11/12 p-3 w-full" type="text" name="" id="">
                <div :class="{'invert':scrolled}" @click="setSearchMode(false)" class="cursor-pointer hover:font-extrabold basis-1/12 flex items-center justify-center text-3xl text-black">✖ </div>
              </div>

             
                <div @click="mobileNav" :class="{'invert':!scrolled, 'hidden':searchMode}" class="flex text-2xl justify-center sm:hidden">
                  <span v-if="!mobileNavActive">☰</span>
                  <span v-if="mobileNavActive">✖</span>
                </div>
          </div>
          
          <!-- <div class="flex items-center flex-col border-t-2 border-gray-500" :class="{'text-black':!scrolled}">
              <div class="pt-2 pb-2 text-xl font-semibold"><span class="cursor-pointer hover:underline">Anasayfa</span> / <span class="cursor-pointer hover:underline">Gündem</span> / MİNERALLER GERÇEKTEN BU KADAR ÖNEMLİ Mİ?</div>
          </div> -->
          <div :class="{'active-mobile':mobileNavActive, 'inactive-mobile':!mobileNavActive}" class="z-10 flex flex-col items-center pt-10 absolute h-[100vh] bg-black w-full transition-all ease-in-out duration-300">
              <div class="px-4 mb-4 transition ease-in-out duration-300 text-4xl font-semibold cursor-pointer hover:font-semibold">
                      Kategoriler
                      <ul class="w-full font-light">
                        <RouterLink to="/kategori/gundem"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Gündem</li></RouterLink>
                        <RouterLink to="/kategori/ekonomi"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Ekonomi</li></RouterLink>
                        <RouterLink to="/kategori/spor"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Spor</li></RouterLink>
                        <RouterLink to="/kategori/dunya"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Dünya</li></RouterLink>
                      </ul>
              </div>

              <div class="mb-4 relative transition ease-in-out duration-300 text-4xl font-semibold cursor-pointer hover:font-semibold">
                      Gazeteler
                      <ul class="w-full font-light">
                        <RouterLink to="/gazete/sozcu"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Sözcü</li></RouterLink>
                        <RouterLink to="/gazete/cumhuriyet"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Cumhuriyet</li></RouterLink>
                        <RouterLink to="/gazete/takvim"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Takvim</li></RouterLink>
                        <RouterLink to="/gazete/milliyet"><li class="py-1 text-sm text-center cursor-pointer hover:font-semibold">Milliyet</li></RouterLink>
                      </ul>
              </div>

              <div class="mb-4 px-4 transition ease-in-out duration-300 text-4xl font-semibold cursor-pointer hover:font-semibold"><RouterLink to="/kose">Köşe Yazıları</RouterLink></div>
              <div class="mb-4 px-4 transition ease-in-out duration-300 text-4xl font-semibold cursor-pointer hover:font-semibold"><RouterLink to="/yazarlar">Yazarlar</RouterLink></div>
              <div class="transition ease-in-out duration-300 hover:scale-125 cursor-pointer" @click="setSearchMode(true)"><img class="h-8 hover:scale-110" src="../assets/searchIcon.png" alt=""></div>        
          </div>
      </div>
  </header>
</template>

<style scoped>
.inactive-mobile {
  top: -75px;
  transform: translateY(-100%);
  height: calc(100vh - 75px);
}
.active-mobile {
  top: 75px;
  transform: translateY(0%);
}

header {
  top:0;
}

.bg-unscrolled {
background-color: rgba(0,0,0,0.95);
}
</style>