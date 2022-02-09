<template lang="">
<div class="grid grid-cols-1 xl:h-4/5 xl:w-4/5 p-2 font-sans mx-auto xl:mb-12">

<!-- Title Slot -->


 

<!-- Summary Slot-->
<div>
<section class="p-4">
  <slot name="summary">
     Summary
  </slot>
</section>

</div>
  
 <!-- Code Language, creds, etc.--> 

<footer class="text-center pb-4 font-semibold text-gray-800 border-b border-grey-darkest border-solid">
  <slot name="footer">
          Footer
  </slot>
</footer>

</div>


</template>
<script>
export default {
    props: [

        ],

    data(){
        return{

        }
    }
}
</script>
<style lang="scss">

.bottom-drop-border{
    border: 5px solid rgba(255, 255, 255, .5);
    border-radius: 50%
}

</style>