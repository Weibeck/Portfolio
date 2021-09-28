<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Persona from './components/Front.vue'
</script>

<template>
<Persona 
name="Mathias Weibeck"
sum="UX Designer"
github=""
facebook=""
twitter=""
linkedin=""
instagram=""
youtube=""
></Persona>
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

// Fade in name
.titleFade h1 {
  animation: fadeAnim ease 5s;
  text-shadow: 2px 2px 0px #212122;
}

@keyframes fadeAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.btn1-transition{
  transition: 0.3s;
}
.btn1-transition:hover{
  opacity: .7;
  font-weight: 400;
  -webkit-transform: scale(1.2);
}
</style>


