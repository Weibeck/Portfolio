<template>
    <div>
      
       <div class="item">
           <div class="container mx-auto">

       <div class="p-12">
                           <a href="https://raw.githubusercontent.com/Weibeck/resume/main/Mathias_Weibeck_CV.pdf" class="text-white float-right">Full Version (Download Here)</a>
                    <div class="">
                        <vue-pdf-embed :source="source1" />
                    </div>
                    

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
        background-color: rgb(105, 105, 105);
    }
</style>