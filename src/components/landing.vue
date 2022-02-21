<template lang="">
    <div class="item">
<div id="front">
  <!-- Front page-->
  <div class="flex justify-center text-7xl pt-56 sm:pt-72">
    <div class="main-wrap">
      <h1 class="text-white font-sans">Mathias Weibeck</h1>
      <p class="line-1 text-white pt-4">UX-Design / Front End Development - Passion for technology</p>

      <ul class="list-none flex justify-center space-x-4 pt-20">
        <li>
          <a href="https://github.com/Weibeck" target="_blank">
            <i class="social-btn hover:text-gray-800">
              <fa :icon="['fab', 'github']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC3_X_zajsSilbStdCx25ejg" target="_blank">
            <i class="social-btn hover:text-gray-900">
              <fa :icon="['fab', 'youtube']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mathiasweibeck" target="_blank">
            <i class="social-btn hover:text-gray-900">
              <fa :icon="['fab', 'twitter']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li> 
          <a href="https://www.linkedin.com/in/mathias-weibeck-60855618b/" target="_blank"> 
            <i class="social-btn hover:text-gray-900"> 
              <fa :icon="['fab', 'linkedin']" size="xs" href="#" />
              </i>
              </a>
        </li>
      </ul>
<div class="flex justify-center pt-12">
      <button v-on:click="scrollToElement({behavior: 'smooth'})" class="social-btn bg-transparent hover:bg-white text-white font-semibold hover:text-gray-900 py-2 px-12 mx-8 border border-white hover:border-transparent rounded">
 <div class="text-lg"> Read More </div>
</button>

</div>
</div>
</div>
</div>
</div>



</template>
<script>
    export default {
        components: {
        },
        
  data() {
    return {
        
    };
  },
  methods: {
     scrollToElement(options) {
      document.getElementsByClassName('about-me')[0].scrollIntoView(options);
      
     },
  },    
}
</script>
<style lang="scss">
    // Gradient background FRONT
#front {
  background: linear-gradient(-90deg, rgb(209, 144, 22), rgb(56, 56, 233), rgb(84, 11, 126), rgb(209, 144, 22));
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  min-height: 100vh;
  margin: 0;
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
.main-wrap {
  margin: 10px;
}

.main-wrap h1 {
  animation: fadeAnim ease-in 2s;
  text-shadow: 2px 2px 0px #212122;
  text-align: center;
}

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

// Text - Fade/Move 
.line-1 {
  font-size: 25%;
  text-align: center;
  position: relative;
  animation: fade-in-move-down 2s ease-out;
  top: 30px;
  /* Safari and Chrome */
  -webkit-animation: fade-in-move-down 2s;
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