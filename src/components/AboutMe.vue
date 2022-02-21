<template lang="">
<div class="container mx-auto px-4 bg-white shadow-lg xl:w-4/5">
<div class="grid grid-rows-3 grid-flow-col gap-2 xl:gap-4">
<div class="row-span-3 pt-8 xl:py-8 xl:pl-16">
<img class="rounded-xl mx-auto shadow-xl sm:pb-4 xl:pb-0" :src="CvImage" alt="Profile Picture" width="384" height="512">
</div>
<!-- quick about me -->

<div class="row-span-2">
  <blockquote>
      <h2 class="font-medium tracking-wide text-center xl:text-left text-2xl pt-8 pb-2 sm:text-5xl xl:text-7xl sm:pb-12 xl:pt-16 xl:pb-8">
        Hello There!
      </h2>
    </blockquote>

<blockquote>
      <p class="font-sans tracking-wide w-auto text-center xl:text-left sm:text-2xl font-light">
        I'm Mathias Weibeck, <br>
        UX Designer - Graduate 2019 <span class="hidden xl:inline-block" style='font-size:35px;'>&#127891;</span> <br>
        Southern University of Denmark
      </p>
    </blockquote>

<div class="pt-4 w-max mx-auto xl:mx-0">
 <button type="button" class="hidden bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @click="showModal">
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
<img class="rounded-xl mx-auto viking-icon:hover" :src="TreeImage" alt="Yggdrasil, the tree of life, also known as the world tree" width="235" height="234">
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
<img class="rounded-xl mx-auto" :src="VegvisirImage" alt="The Vegvisir, also known as the viking compass" width="235" height="234">
</div>


      <div class="col-span-2 pl-20">
<img class="rounded-xl mx-auto pb-8" :src="HelmAweImage" alt="Aegishjalmur, also known as the helm of awe" width="235" height="234">
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
</template>
<script>

    // Components
    import Modal from '../components/Modal.vue'

    // Assets
    import CvImage from "../assets/cv_pic.webp"
    import TreeImage from '../assets/tree.webp'
    import HelmAweImage from '../assets/helm_of_awe.webp'
    import VegvisirImage from '../assets/vegvisir.webp'

    export default {
        components: {
          Modal
        },
        
  data() {
    return {
        CvImage: CvImage,
        isModalVisible: false,
        TreeImage: TreeImage,
        HelmAweImage: HelmAweImage,
        VegvisirImage: VegvisirImage,
    };
  },
  methods: {
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

</style>