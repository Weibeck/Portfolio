
<template>
<div class="item">
<div id="front">
  <div class="flex justify-center text-7xl pt-72">
    <div class="main-wrap">
      <h1 class="text-white font-sans">Mathias Weibeck</h1>
      <p class="line-1 text-white pt-4">UX-Design / Front End - Denmark - Passion for technology</p>

      <ul class="list-none flex justify-center space-x-4 pt-24">
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

<div class="item bg-gray-100"> 
<div class="container mx-auto px-4 bg-white">
<div class="grid grid-rows-3 grid-flow-col gap-4">
<div class="row-span-3 py-8 pl-16">
<img class="rounded-xl mx-auto shadow-xl" :src="CvImage" alt="" width="384" height="512">
</div>

<div class="col-span-2">
<blockquote>
      <h2 class="font-medium tracking-wide text-left text-7xl pt-16">
        Hello There!
      </h2>
    </blockquote>
</div>

<div class="row-span-2">
<blockquote>
      <p class="font-sans tracking-wide w-auto text-left text-2xl font-light">
        I'm Mathias Weibeck, <br>
        UX Designer - Graduate 2019 <span style='font-size:35px;'>&#127891;</span> <br>
        Southern University of Denmark
      </p>
    </blockquote>
</div>
</div>

</div>
<div class="container mx-auto px-4 bg-gradient-to-b from-blue-500">
<h3 class="font-medium tracking-wide text-center text-4xl py-4 text-white">Skills</h3>

<ProgressBar skill='HTML'></ProgressBar>
<ProgressBar skill='CSS'></ProgressBar>
<ProgressBar skill='JavaScript'></ProgressBar>
<ProgressBar skill='C#'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
<ProgressBar skill='Lorem ipsum'></ProgressBar>
</div>
</div>


</template>

<script>
    import CvImage from "../assets/cv_pic.png"
    import ProgressBar from "../components/ProgressBar.vue"

    export default {
        components: {
          ProgressBar
        },

        data: function () {
            return {
                CvImage: CvImage
            }
        }
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
