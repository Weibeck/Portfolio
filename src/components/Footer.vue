<template lang="">

<div class="container mx-auto xl:w-4/5">
<div class="grid grid-cols-6 gap-4 h-auto content-bg shadow-lg font-sans text-white">


<div class="col-span-6 pt-4">
    <h3 class="font-medium tracking-wide text-center text-3xl xl:text-5xl"> 
         Get in touch with me 
    </h3>
</div>

<div class="col-span-6">
    <h3 class="font-medium italic tracking-wide text-center text-sm xl:text-1xl"> 
      I'm Currently <span class="text-green-color underline font-semibold">available</span> and <span class="text-yellow-color underline font-semibold">searching</span> for new challenges!
    </h3>
</div>

<div class="col-span-2">
    <p class="text-center">
        <a href="mailto:weibeck@outlook.com" class="font-sans tracking-wide w-auto text-left text-lg xl:text-4xl font-light btn-footer">
           <fa :icon="['fa', 'envelope']" size="xl"/> Email Me
        </a>
    </p>
</div>

<div class="col-span-2 pb-6">
<div class="border-t-2 xl:border-t-4 border-white xl:pt-6">
<p class="text-center font-sans tracking-wide w-auto text-left text-1xl xl:text-4xl font-light">
    &lt;/Mathias &gt;
</p>
</div>
</div>

<div class="col-span-2">
    <p class="text-center">
      <a href="https://github.com/Weibeck" class="font-sans tracking-wide w-auto text-left text-lg xl:text-4xl font-light btn-footer">
         <fa :icon="['fab', 'github']" size="xl" /> Visit my Github 
      </a> 
    </p>
</div>
 
</div>
</div>



    <div class="footer footer-bg relative pt-1 border-b-2 border-black">
        <div class="container mx-auto p-2 xl:p-4 flex flex-col items-center">
           
        </div>

        <div class="container mx-auto px-4">
            <div class="border-t-2 border-white flex flex-col items-center">
                <p class="text-center text-white font-light pt-2 xl:pt-4">
                   © 2021 - Made with Vue.js and TailWind CSS
                </p>

                <p class="text-gray-400">
                  <!-- Project is open source @Github -->   
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
    .footer-bg{
        background-color: #181818;
    }
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