<template lang="">
<div class="row-span-1 w-auto h-auto">

<p class="font-sans tracking-wide w-auto text-left text-lg font-semibold"> 
{{skill}}
</p>

<div class="relative pt-2">
  <div class="overflow-hidden h-4 text-xs flex rounded bg-white shadow-lg">
    <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"> 
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
    props: ['skill'],

    data(){
        return{
            
        }
    }
}
</script>

<style lang="">
    
</style>