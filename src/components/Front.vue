<script setup>
import { ref } from 'vue'


defineProps({
  name: String,
  sum: String,
  background: String
})

</script>

<template>

<!-- Background animation-->
<div id="backdrop"></div>
<div id="backcore"></div>
<div id="topcontrol"></div>

<!-- Nav bar transparent / white font -->
<nav class="bg-black bg-opacity-0 shadow-lg">
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

            <a href="#" class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-bold">CV</a>

            <a href="#" class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-bold">Projects</a>

            <a href="#" class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-bold">Skillset</a>

            <a href="#" class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-bold">About</a>
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


<!--<div class="min-h-screen"> </div>-->
<div class="flex justify-center text-7xl pt-72">
<div class="titleFade">
  <h1 class="text-white font-sans"> {{ name }}</h1>
  <!--<p class="">{{sum}}</p>-->
</div>
</div>


</template>

<style scoped>

</style>
