<script setup>

// Old code - remove later
import { ref } from 'vue'


defineProps({
  name: String,
  sum: String
})

</script>

<template>
  <div class="flex justify-center text-7xl pt-60">
    <div class="main-wrap">
      <h1 class="text-white font-sans">Mathias Weibeck</h1>

      <p class="line-1 text-white">UX-Design / Front End - Denmark - Passion for technology</p>

      <ul class="list-none flex justify-center space-x-4 pt-14">
        <li>
          <a href="https://github.com/" class="social-btn hover:text-gray-800">
            <i>
              <fa :icon="['fab', 'github']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <i class="social-btn hover:text-gray-900">
              <fa :icon="['fab', 'youtube']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <i class="social-btn hover:text-gray-900">
              <fa :icon="['fab', 'twitter']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li> 
          <a href="https://www.linkedin.com/"> <i class="social-btn hover:text-gray-900"> <fa :icon="['fab', 'linkedin']" size="xs" href="#" /></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
// Fade in name

.main-wrap {
  margin: 10px;
}

.main-wrap h1 {
  animation: fadeAnim ease-in 2s;
  text-shadow: 2px 2px 0px #212122;
  text-align: center;
}

// Transition header buttons
.btn1-transition {
  transition: 0.3s;
}
.btn1-transition:hover {
  opacity: 0.7;
  font-weight: 400;
  -webkit-transform: scale(1.2);
}

// Transition social media buttons
.social-btn {
  animation: fadeAnim ease-in 3s;
  color: white;
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
  position: relative;
  animation: fade-in-move-down 2s ease-out;
  //animation-iteration-count:3;
  top: 30px;
  /* Safari and Chrome */
  -webkit-animation: fade-in-move-down 2s;
  //-webkit-animation-iteration-count:3;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}

@keyframes fade-in-move-down {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-move-down {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 30px;
    opacity: 1;
  }
}
</style>
