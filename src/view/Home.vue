
<template>
<div class="item">
<div id="front">
  <!-- Front page-->
  <div class="flex justify-center text-7xl pt-72">
    <div class="main-wrap">
      <h1 class="text-white font-sans">Mathias Weibeck</h1>
      <p class="line-1 text-white pt-4">UX-Design / Front End - Denmark - Passion for technology</p>

      <ul class="list-none flex justify-center space-x-4 pt-20">
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
<div class="flex justify-center pt-12">
      <button v-on:click="scrollToElement({behavior: 'smooth'})" class="social-btn bg-transparent hover:bg-white text-white font-semibold hover:text-gray-900 py-2 px-12 mx-8 border border-white hover:border-transparent rounded">
 <div class="text-lg">Read More </div>
</button>

</div>
    </div>
  </div>
</div>
</div>

<div class="about-me item bg-gray-100"> 
<div class="container mx-auto px-4 bg-white shadow-lg">
<div class="grid grid-rows-3 grid-flow-col gap-4">
<div class="row-span-3 py-8 pl-16">
<img class="rounded-xl mx-auto shadow-xl" :src="CvImage" alt="Profile Picture" width="384" height="512">
</div>
<!-- quick about me -->
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

<div class="pt-6">
 <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  <a href="/about"> Read More</a>
</button>
</div>

</div>
</div>

</div>
<div class="container mx-auto px-4 bg-blue-900 justify-center text-white mb-8">
<div class="grid grid-cols-2 space-x-8">
<!-- skill sets -->
<div>
<h3 class="font-medium tracking-wide text-center text-4xl py-4 font-sans">Hard Skills</h3>
<ProgressBar skill='HTML/CSS' percent="85%"></ProgressBar>
<ProgressBar skill='JavaScript' percent="75%"></ProgressBar>
<ProgressBar skill='C#' percent="50%"></ProgressBar>
<ProgressBar skill='React.js' percent="45%"></ProgressBar>
<ProgressBar skill='Vue.js' percent="50%"></ProgressBar>
<ProgressBar skill='Phaser.js' percent="70%"></ProgressBar>
</div>

<div>
  <h3 class="font-medium tracking-wide text-center text-4xl py-4 font-sans">Soft Skills</h3>
<ul class="list-disc relative p-7 font-sans tracking-wide w-auto text-left text-2xl font-semi-bold">
  <li>
<p> Critical Thinker </p>
  </li>
  <li>
<p> Eager to learn and evolve skillset </p>
  </li>
    <li>
<p> Strong communication </p>
  </li>
    <li>
<p> Familiar with Agile Workflow / SCRUM </p>
  </li>
    <li>
<p> Quick Learner </p>
  </li>
      <li>
<p> Creative Mindset </p>
  </li>
    <li>
<p> Adaptability  </p>
  </li>
   <li>
<p> Teamplayer - Dependability within a team environment </p>
  </li>
  <li>
<p> Positive and Goal-oriented Personality </p>
  </li>
</ul>

</div>
</div>
</div>

<div class="container mx-auto pt-4 w-3/4">
  <h1 class="font-semi-bold text-center text-4xl pb-12 font-sans"> Projects  </h1>
</div>
<!-- github cards -->
<Projects></Projects>



<Footer></Footer>

</div>




</template>

<script>
    import CvImage from "../assets/cv_pic.webp"
    import ProgressBar from "../components/ProgressBar.vue"
    import GithubCard from "../components/GithubCard.vue"
    import Footer from "../components/Footer.vue"
    import Projects from "../components/Projects.vue"

    export default {
        components: {
          ProgressBar,
          GithubCard,
          Footer,
          Projects
        },
  data() {
    return {
        CvImage: CvImage
        
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
