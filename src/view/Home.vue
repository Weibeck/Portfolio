
<template>
<div class="item">
<div id="front">
  <!-- Front page-->
  <div class="flex justify-center text-7xl pt-72">
    <div class="main-wrap">
      <h1 class="text-white font-sans">Mathias Weibeck</h1>
      <p class="line-1 text-white pt-4">UX-Design / Front End Development - Passion for technology</p>

      <ul class="list-none flex justify-center space-x-4 pt-20">
        <li>
          <a href="https://github.com/" target="_blank">
            <i class="social-btn hover:text-gray-800">
              <fa :icon="['fab', 'github']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <i class="social-btn hover:text-gray-900">
              <fa :icon="['fab', 'youtube']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <i class="social-btn hover:text-gray-900">
              <fa :icon="['fab', 'twitter']" size="xs" href="#" />
            </i>
          </a>
        </li>
        <li> 
          <a href="https://www.linkedin.com/" target="_blank"> 
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

<div class="about-me bg-gray-100"> 
<div class="container mx-auto px-4 bg-white shadow-lg w-4/5">
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
 <button type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @click="showModal">
  About Me
</button>
</div>

</div>
</div>

</div>
    <Modal
      v-show="isModalVisible"
      @close="closeModal">
      
        <template v-slot:header>

  </template>

  <template v-slot:body>
    <div class="container">
    <div class="grid grid-cols-6 gap-4">

      <div class="col-span-2 pl-20">
<img class="rounded-xl mx-auto viking-icon:hover" :src="TreeImage" alt="Yggdrasil, the tree of life, also known as the world tree" width="384" height="512">
</div>

<div class="col-span-3 pt-12 pr-16">
    <blockquote>
      <p class="font-sans tracking-wide w-auto text-center text-lg font-light">
        Born and raised in Denmark &#x1F1E9;&#x1F1F0; I was the kid in high school that couldn’t wait to finish my homework, so I could go spend time on my interests which was computer games and bikes. I have always had an ambitious personality and I love a challenge. When I get my hands on something that is a real challenge, I charge towards it because I want to beat it. This especially showed in the games I played, the projects I gave myself, and I was always striving to put the hard work and effort in to win. 
      </p>
    </blockquote>
</div>

<div class="col-start-2 col-span-3 pt-12">
    <blockquote>
      <p class="font-sans tracking-wide w-auto text-center text-lg font-light pt-2">
        When I started college I initially decided to go into finance. While working towards this for a year, burgeoning passion began to emerge for the development of applications and coding. I initially taught myself through various forums and online communities. I was hooked on this whole internet thing; I want to develop and create awesome stuff, share my passion with others. My road was being laid down and I enrolled on a software related education. I ended with a bachelor’s degree in interaction / UX-Design and had software development as a big part of my time at the university.
      </p>
    </blockquote>
</div>

      <div class="col-span-2 pr-20">
<img class="rounded-xl mx-auto" :src="VegvisirImage" alt="The Vegvisir, also known as the viking compass" width="384" height="512">
</div>


      <div class="col-span-2 pl-20">
<img class="rounded-xl mx-auto" :src="HelmAweImage" alt="Aegishjalmur, also known as the helm of awe" width="384" height="512">
</div>

<div class="col-span-3 pt-12">
    <blockquote>
      <p class="font-sans tracking-wide w-auto text-center text-lg font-light pt-2">
        I work with front-end software development because I love it. I love the people; I like the industry and most of all I want the user to have an experience that will stick with them for many years to come. I want to make people feel the quality and care in a product. Set a standard that will make the user experience from A-to-Z shine through, be the hidden factor that makes people return and subconsciously have an amazing journey. I hope we will cross paths in the real world one day and create something great together.
      </p>
    </blockquote>
</div>
</div>
</div>
</template>

  <template v-slot:footer>

  </template>
      </Modal>

<div class="container mx-auto px-4 content-card-bg justify-center w-4/5 text-white mb-8">
<div class="grid grid-cols-2 space-x-8">
<!-- skill sets -->
<div>
<h3 class="font-medium tracking-wide text-center text-4xl py-4 font-sans">Hard Skills</h3>
<ProgressBar skill='HTML/CSS' percent="85%"></ProgressBar>
<ProgressBar skill='JavaScript' percent="75%"></ProgressBar>
<ProgressBar skill='C#' percent="50%"></ProgressBar>
<ProgressBar skill='React.js' percent="35%"></ProgressBar>
<ProgressBar skill='Vue.js' percent="55%"></ProgressBar>
<ProgressBar skill='Phaser.js' percent="70%"></ProgressBar>
</div>

<div>
  <h3 class="font-medium tracking-wide text-center text-4xl py-4 font-sans">Soft Skills</h3>
<ul class="list-disc p-7 font-sans tracking-wide w-auto text-left text-2xl font-semi-bold">
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

<div class="container mx-auto pt-4">
  <div class="p-8  border-b border-grey-darkest border-solid">   </div>
</div>

<!-- github cards -->
<Projects></Projects>

<Contact></Contact>

<Footer></Footer>

</div>




</template>

<script>
    import CvImage from "../assets/cv_pic.webp"
    import ProgressBar from "../components/ProgressBar.vue"
    import Footer from "../components/Footer.vue"
    import Projects from "../components/Projects.vue"
    import Modal from '../components/Modal.vue'
    import TreeImage from '../assets/tree.png'
    import HelmAweImage from '../assets/helm_of_awe.png'
    import VegvisirImage from '../assets/vegvisir.png'
    import Contact from "../components/Contact.vue"

    export default {
        components: {
          ProgressBar,
          Footer,
          Modal,
          Projects,
          Contact
        },
        
  data() {
    return {
        CvImage: CvImage,
        isModalVisible: false,
        TreeImage: TreeImage,
        HelmAweImage: HelmAweImage,
        VegvisirImage: VegvisirImage
        
    };
  },
  methods: {
     scrollToElement(options) {
      document.getElementsByClassName('about-me')[0].scrollIntoView(options);
      
     },

     showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
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

// Dark Mode
.dark-full-bg{
background-color: #121212;
}
.dark-full-light-bg{
  background-color: #181818;
}
.dark-light-focus-bg{
background-color: #404040;
}

.content-card-bg{
  background-color:#37475a;
}
// WIP ^^^ ^^^^^ ^^^

.viking-icon:hover{
filter: hue-rotate(180deg);
-webkit-filter: hue-rotate(180deg);
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
