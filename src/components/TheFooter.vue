<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});

</script>

<template>
    <footer class="border-t-2 border-gray-500">
        <div class="px-10 my-3 py-4 bg-black flex flex-col items-center">
            <div class="text-sm justify-center gap-y-2 sm:text-md flex flex-wrap gap-x-6 font-normal md:text-lg">
                <RouterLink to="/kategori/gundem"><div class="basis-3/12 sm:basis-0 self-center  text-center cursor-pointer hover:font-semibold">Gündem</div></RouterLink>
                <RouterLink to="/kategori/ekonomi"><div class="basis-3/12 sm:basis-0 self-center  text-center cursor-pointer hover:font-semibold">Ekonomi</div></RouterLink>
                <RouterLink to="/kategori/spor"><div class="basis-3/12 sm:basis-0 self-center  text-center cursor-pointer hover:font-semibold">Spor</div></RouterLink>
                <RouterLink to="/kategori/dunya"><div class="basis-3/12 sm:basis-0 self-center  text-center cursor-pointer hover:font-semibold">Dünya</div></RouterLink>
                <RouterLink to="/kose"><div class="basis-3/12 sm:basis-0 self-center text-center whitespace-nowrap cursor-pointer hover:font-semibold">Köşe Yazıları</div></RouterLink>
                <RouterLink to="/yazarlar"><div class="basis-3/12 sm:basis-0 self-center text-center cursor-pointer hover:font-semibold">Yazarlar</div></RouterLink>
            </div>


            <div class="mt-3 my-3 text-center"><span class="text-xs sm:text-sm text-gray-400">Okuryazar, bir açık kaynak gazete bundle uygulamasıdır.</span></div>
            
            <div class="flex gap-x-12 my-3">
                <a target="_blank" href="https://de.linkedin.com/in/yi%C4%9Fit-opan-1968b1218"><div><img class="w-10 cursor-pointer invert hover:" src="../assets/linkedin.svg" alt=""></div></a>
                <a target="_blank" href="https://github.com/yigitopan/okuryazar-server"><div><img class="w-10 cursor-pointer invert contrast-200" src="../assets/github.svg" alt=""></div></a>
            </div> 
        </div>
    </footer>
    
</template>
