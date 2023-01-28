<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>

<template>
    <div class="bg-black fixed top-0 w-full h-[100vh] z-100 flex justify-center items-center" >
            <img class="spin-logo" src="../assets/okuryazar-logo.svg" alt="">
    </div>
</template>

<style scoped>
.spin-logo {
    animation: lds-circle 8.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>