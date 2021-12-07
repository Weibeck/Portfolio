<template>
    <div>
      
       <div class="item">
           <div class="container mx-auto">

       <div class="p-12">
                           <a href="https://raw.githubusercontent.com/Weibeck/resume/main/Mathias_Weibeck_CV.pdf" class="text-white p-4 right">Full Version (Download Here)</a>
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
        background-color: rgb(66, 66, 66);
    }
</style>