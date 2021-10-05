<script setup>
import { ref } from 'vue'


defineProps({
  name: String,
  sum: String
})

</script>

<template>

<!-- Nav bar transparent / white font -->
<nav class="shadow-lg">
<div class="max-w-16xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex item-left sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-left justify-left p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!--<a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>-->

            <a href="#" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">CV</a>

            <a href="#" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">Projects</a>

            <a href="#" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">Skillset</a>

            <a href="#" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">About</a>
          </div>
        </div>
      </div>
</div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">CV</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skillset</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
    </div>
  </div>
</nav>

<div class="flex justify-center text-7xl pt-60">
<div class="main-wrap">

 <h1 class="text-white font-sans">{{ name }} </h1>

 <p class="line-1 text-white">{{sum}}</p>

  <ul class="list-none flex justify-center space-x-4 pt-14">
     <li><a href="https://github.com/" class="social-btn hover:text-gray-800"><i><fa :icon="['fab', 'github']" size="xs" href="#"/></i></a></li>
     <li><a href="https://www.youtube.com/"><i class="social-btn hover:text-gray-900" ><fa :icon="['fab', 'youtube']" size="xs" href="#"/></i></a></li>
     <li><a href="https://twitter.com"><i class="social-btn hover:text-gray-900" ><fa :icon="['fab', 'twitter']" size="xs" href="#"/></i></a></li>
     <li><a href="https://www.linkedin.com/"><i class="social-btn hover:text-gray-900" ><fa :icon="['fab', 'linkedin']" size="xs" href="#"/></i></a></li>
  </ul>
</div>
</div>

</template>

<style lang="scss">
// CSS Background/Gradiant
body {
  background: linear-gradient(-45deg, #7452ee, #c24e31, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

// Fade in name

.main-wrap {
  margin: 10px;
}

.main-wrap h1{
  animation: fadeAnim ease-in 2s;
  text-shadow: 2px 2px 0px #212122;
  text-align: center;
 }

// Transition header buttons
.btn1-transition{
  transition: 0.3s;
}
.btn1-transition:hover{
  opacity: .7;
  font-weight: 400;
  -webkit-transform: scale(1.2);
}

// Transition social media buttons
.social-btn {
  animation: fadeAnim ease-in 3s;
  color:white;
}

@keyframes fadeAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// Summary text fade in - move down
.line-1 {
font-size: 25%;
text-align: center;
position:relative;
animation:fade-in-move-down 2s ease-out;
//animation-iteration-count:3;
top: 30px;
/* Safari and Chrome */
-webkit-animation:fade-in-move-down 2s;
//-webkit-animation-iteration-count:3;
opacity: 0;
animation-fill-mode: forwards;
animation-delay: 2s;
}

@keyframes fade-in-move-down
{ 0% {top:-25px; opacity: 0;}
  100% {top:30px; opacity: 1}
}

@-webkit-keyframes fade-in-move-down
{
0% {top:-25px; opacity: 0;}
100% {top:30px; opacity: 1;}
}

</style>
