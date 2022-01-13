<template lang="">
<div class="row-span-1 w-auto h-auto">

<p class="font-sans w-auto text-left text-base font-semibold"> 
{{skill}}
</p>

<div class="pt-2 py-2">
  <div class="overflow-hidden h-4 text-xs flex rounded bg-white shadow-lg">
    <div :style="style" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"> 
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
    props: [
        'skill',
        'percent'
        ],

    data(){
        return{
            style: {
                'width': this.percent
            }
        }
    }
}
</script>

<style lang="scss">
.percent-class{
    width: var(--width);
}
    
</style>