<script lang="ts">
import { defineComponent } from "vue";
import HeroNews from "../components/HeroNews.vue";
import HomeGrid from '../components/HomeGrid.vue';
export default defineComponent({
  components: {
    HeroNews,
    HomeGrid,
  }
});
</script>

<template>
  <HeroNews />
  <HomeGrid />
</template>
