
<template>
<swiper :navigation="true" class="mySwiper">
 <swiper-slide>
    
<GithubCard>

<template v-slot:summary>

<div class="project2-bg grid grid-cols-6 grid-rows-3 gap-4 w-full h-55-screen xl:h-80-screen mx-auto">

<div class="col-start-1 col-span-3 row-start-1 text-gray-900 font-sans font-semibold xl:pt-4">

<h2 class="my-4 text-3xl xl:text-5xl">
Browser Math Game
</h2>

<p class="mb-4 text-base xl:text-xl">
Scope: Gamification & Web Development
</p>

<a class="text-blue-600 font-medi hover:text-gray-600 text-sm xl:text-lg" href="https://github.com/Weibeck/QuickMathPhaserJS" title="View full project on github" target="_blank">
View Full Project
</a>
<span class="text-gray-900"> | </span>
<a class="text-blue-600 font-medi hover:text-gray-600 text-sm xl:text-lg" href="https://weibeck.github.io/QuickMathPhaserJS/" title="View full project on github" target="_blank">
Live Demo
</a>

</div>

</div>

</template>

<template v-slot:footer>

<section class="text-sm xl:text-base">
Javascript 93.9% - CSS 3.3% - HTML 2.8%

</section>

</template>
</GithubCard>

  </swiper-slide>
  
  <swiper-slide>
  
<GithubCard>

<template v-slot:summary>

<div class="project1-bg grid grid-cols-6 grid-rows-2 gap-4 w-full h-55-screen xl:h-80-screen mx-auto">

<div class="col-start-1 col-span-3 row-start-1 text-gray-900 font-sans font-semibold xl:pt-4">

<h2 class="my-4 text-3xl xl:text-5xl">
Personal Portfolio
</h2>

<p class="mb-4 text-base xl:text-xl">
Scope: Website Development
</p>

<a class="text-blue-600 font-medi hover:text-gray-600 text-sm xl:text-lg" href="https://github.com/Weibeck/Portfolio" title="View full project on github" target="_blank">
View Full Project
</a>

</div>

</div>

</template>

<template v-slot:footer>

<section class="text-sm xl:text-base">
Vue 91.7% - Javascript 5.5% - HTML 2.5% - CSS 0.3%

</section>

</template>
</GithubCard>
  </swiper-slide>
  
  </swiper>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"

import portfolio_bg from '../assets/project_1.webp'

import GithubCard from "../components/GithubCard.vue"

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


export default {
  components: {
    Swiper,
    SwiperSlide,
    GithubCard
  },
  data() {
    return {
        portfolio_bg: portfolio_bg
        
    };
  },
  methods: {
    
  }
  
}
</script>

<style>
.project1-bg{
   background-image: url("../assets/project_1.webp");
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center center; 
}

.project2-bg{
   background-image: url("../assets/project_2.webp");
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center center; 
}
</style>