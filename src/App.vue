<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import Persona from './components/Home.vue'
</script>

<template>

  <!-- Nav bar transparent / white font -->
<div id="nav"> 
<nav class="shadow-lg">
    <div class="max-w-16xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex item-left sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-left justify-left p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <router-link to="/" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l"><fa :icon="['fa', 'home']" size="lg"/></router-link>
            <router-link to="/resume" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">CV</router-link>
            <router-link to="/projects" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">Projects</router-link>
            <router-link to="/skillset" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">Skillset</router-link>
            <router-link to="/about" class="text-white hover:text-black btn1-transition px-3 py-2 rounded-md text-l">About</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >CV</a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Projects</a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Skillset</a>

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >About</a>
      </div>
    </div>
  </nav>
</div>
<router-view />




<!--
  Old Code - Remove Later
  <Persona name="Mathias Weibeck" sum="UX-Design / Front End - Denmark - Passion for technology"></Persona>
  
  -->
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

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
</style>


