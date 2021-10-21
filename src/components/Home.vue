
<template>
<vue-scroll-snap :fullscreen="true">
<div class="item">
<div id="front">
  <div class="flex justify-center text-7xl pt-72 ">
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
</div>
</div>

<div class="item bg-gray-200">
<h2 class="justify-center pt-72">WIP WIP WIP WIP </h2>
</div>

<div class="item bg-blue-400">
<h3 class="justify-center pt-72">WIP WIP WIP WIP </h3>
</div>
</vue-scroll-snap>
</template>

<script>
    import VueScrollSnap from "vue-scroll-snap";
    export default {
      name: "FullscreenVertical",
        components: {VueScrollSnap}
    };

</script>

<style lang="scss">

#front {
  background: linear-gradient(-70deg, #7452ee, #c24e31, #208fb8, #1cac8a);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  min-height: 100vh;
  margin: 0;
}

@keyframes gradient {
  0% {
    background-position: 0% 25%;
  }
  25% {
    background-position: 25% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 25%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.main-wrap {
  margin: 10px;
}

.main-wrap h1 {
  animation: fadeAnim ease-in 2s;
  text-shadow: 2px 2px 0px #212122;
  text-align: center;
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
