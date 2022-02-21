
<template>

<LandingPage/>

<div class="about-me bg-gray-100"> 
<AboutMe/>
<Skillset/>
<UxProcess/>

<div class="xl:pt-28">
<div class="py-2 xl:py-4 border-b border-t border-grey-darkest border-solid mx-auto w-4/5"> 
    <h2 class="font-medium tracking-wide text-center text-3xl xl:text-5xl">Open Source Projects</h2>
</div>
</div>

<Projects/>
<Footer/>

</div>




</template>

<script>

    // Components
    import Modal from '../components/Modal.vue'
    import Skillset from "../components/Skillset.vue"
    import UxProcess from "../components/UxProcess.vue"
    import Projects from "../components/Projects.vue"
    import Footer from "../components/Footer.vue"
    import LandingPage from "../components/landing.vue"
    import AboutMe from "../components/AboutMe.vue"
    
    export default {
        components: {
          Skillset,
          Footer,
          Modal,
          Projects,
          UxProcess,
          LandingPage,
          AboutMe
        },
        
  data() {
    return {
  
    };
  },
  methods: {

  },    
}
</script>

<style lang="scss">


</style>
