<template lang="">
<div class="container mx-auto w-4/5">
<div class="grid grid-cols-6 gap-4 h-auto content-bg shadow-lg p-2 font-sans text-white">


<div class="col-span-6 pt-4">
    <h3 class="font-medium tracking-wide text-center text-5xl"> 
         Get in touch with me 
    </h3>
</div>

<div class="col-span-6">
    <h3 class="font-medium italic tracking-wide text-center text-1xl"> 
      I'm Currently <span class="text-green-color underline font-semibold">available</span> and <span class="text-yellow-color underline font-semibold">searching</span> for new challenges!
    </h3>
</div>

<div class="col-span-2 pb-12 pt-8">
    <p class="text-center">
        <a href="mailto:weibeck@outlook.com" class="font-sans tracking-wide w-auto text-left text-4xl font-light btn-footer">
           <fa :icon="['fa', 'envelope']" size="xl"/> Email Me
        </a>
    </p>
</div>

<div class="col-span-2">
<div class="border-t-4 border-white pt-6">
<p class="text-center font-sans tracking-wide w-auto text-left text-4xl font-light">
    &lt;/Mathias &gt;
</p>
</div>
</div>

<div class="col-span-2 pb-12 pt-8">
    <p class="text-center">
      <a href="https://github.com/Weibeck" class="font-sans tracking-wide w-auto text-left text-4xl font-light btn-footer">
         <fa :icon="['fab', 'github']" size="xl" /> Visit my Github 
      </a> 
    </p>
</div>
 
</div>
</div>

</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .btn-footer{
        padding: 10px;
        transition: 150ms ease;
    }
    .btn-footer:hover{
        color: black;
    }

    .content-bg{
        background-color: #37475a;
    }

    .text-green-color{
        color:#50C878;
    }

    .text-yellow-color{
  color:#febd69;
}
</style>