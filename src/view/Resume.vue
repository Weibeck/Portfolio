<template>
    <div>
      
       <div class="item">
           <div class="container mx-auto">

       <div class="p-12">
             <a href="https://raw.githubusercontent.com/Weibeck/resume/main/Mathias_Weibeck_CV.pdf" class="text-white float-right">Full Version (Download Here)</a>
                    <div class="pt-12">
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
        background-color: #181818;
    }
    .download-text{
        color: #b3b3b3;
    }
    .download-text:hover{
        color: #FFFFFF;
    }
</style>