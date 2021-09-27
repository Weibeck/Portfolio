<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Persona from './components/Front.vue'
</script>

<template>
<Persona 
name="Mathias Weibeck"
sum="UX Designer"
background=""
></Persona>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
// Color body
body {
  background-color: rgb(56, 56, 158);
}

// Fade in name
.titleFade h1 {
  animation: fadeAnim ease 5s;
}

@keyframes fadeAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>


