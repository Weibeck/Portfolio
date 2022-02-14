<template lang="">
 <div class="container mx-auto px-4 content-card-bg justify-center xl:w-4/5 text-white mb-8">
<div class="grid grid-cols-2 space-x-8">
<!-- skill sets -->
<div>
<h3 class="font-bold text-lg xl:font-medium tracking-wide text-center sm:text-4xl py-4 font-sans">Hard Skills</h3>
<ProgressBar skill='HTML/CSS' percent="85%"></ProgressBar>
<ProgressBar skill='JavaScript' percent="75%"></ProgressBar>
<ProgressBar skill='C#' percent="50%"></ProgressBar>
<ProgressBar skill='React.js' percent="35%"></ProgressBar>
<ProgressBar skill='Vue.js' percent="55%"></ProgressBar>
<ProgressBar skill='Phaser.js' percent="70%"></ProgressBar>
</div>

<div class="xl:border-l-4 xl:px-4 border-white">
  <h3 class="font-bold text-lg xl:font-medium tracking-wide text-center sm:text-4xl py-4 font-sans">Soft Skills</h3>
<ul class="list-disc sm:p-4 xl:p-7 font-sans tracking-wide w-auto text-left sm:text-xl xl:text-2xl font-semi-bold ">
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
</template>
<script>
import ProgressBar from "./ProgressBar.vue"

export default {
    components: {
        ProgressBar
    },
        
  data() {
    return {};
  },
  methods: {},
}
</script>
<style lang="">
    
</style>