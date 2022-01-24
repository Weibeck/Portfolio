<template>
    <div>
      
       <div class="item">
           <div class="container mx-auto">

       <div class="pt-16 pb-2 float-right">
             <a href="https://raw.githubusercontent.com/Weibeck/resume/main/Mathias_Weibeck_CV.pdf" class="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span></a>

       </div>
            <div class="">
               <vue-pdf-embed :source="source1" />
            </div>
    </div>
</div>

    </div>
</template>
<script>

import VuePdfEmbed from 'vue-pdf-embed'

export default {
    components: {
        VuePdfEmbed,
    },
    data(){
        return{
            source1: 'https://raw.githubusercontent.com/Weibeck/resume/main/Mathias_Weibeck_CV.pdf',
        }
    }
}
</script>
<style lang="scss">
    body {
        background-color: #181818;
    }

</style>