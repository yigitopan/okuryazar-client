<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from './components/TheFooter.vue';
import Loading from './components/Loading.vue';
import { okuryazarStore } from './stores/store'

export default defineComponent({
  components: {
    Loading,
    TheHeader,
    TheFooter
  },
  setup() {
    const store = okuryazarStore()
    store.fetchAuthors();
    store.fetchArticles();
    store.fetchNews();
  },
  computed: {
    loading() {
      const store = okuryazarStore();
      const loading: Boolean = store.getLoadingState
      console.log(loading)
      return loading;
    }
  }
  
});
</script>

<template>
  <TheHeader/>
  <Loading v-if="loading" ></loading>
  <router-view />
  <TheFooter  v-if="!loading" />
</template>

<style>

body{
  font-family: Signika Negative;
  background-color: rgb(0, 0, 0)!important;
}

</style>
