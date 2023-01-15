<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from './components/TheFooter.vue';
import { okuryazarStore } from './stores/store'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup() {
    const store = okuryazarStore()
    store.fetchAuthors();
    store.fetchArticles();
    store.fetchNews();
  }
});
</script>

<template>
  <TheHeader />
  <router-view/>
  <TheFooter />
</template>

<style>

body{
  font-family: Signika Negative;
  background-color: rgb(0, 0, 0)!important;
}

</style>
