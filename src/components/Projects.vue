
<template>
<swiper :navigation="true" class="mySwiper">
 <swiper-slide>
    
<GithubCard>

<template v-slot:summary>

<div class="project1-bg grid grid-cols-6 grid-rows-2 gap-4 w-full h-80-screen mx-auto">

<div class="col-start-1 col-span-3 row-start-1 text-gray-900 font-sans font-semibold pl-20 pt-4">

<h2 class="my-4 text-6xl">
Personal Portfolio
</h2>

<p class="mb-4 text-xl">
Scope: UX-Design & Website
</p>

<a class="text-lg text-blue-600 hover:text-gray-600" href="https://github.com/Weibeck/Portfolio" title="View full project on github">
View Full Project

</a>

</div>

</div>

</template>

<template v-slot:footer>

<section>
Vue 92.5% - Javascript 6.0% - HTML 1.2% - CSS 0.3%

</section>

</template>
</GithubCard>

  </swiper-slide>
  
  <swiper-slide>
  
  <GithubCard>
<template v-slot:title>
Word Dictionary
</template>

<template v-slot:summary>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis earum sit facilis sequi deleniti fugit nobis? Animi eos tempore, minima facilis beatae accusantium voluptate maiores perferendis neque minus odit.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate corrupti reiciendis, aperiam, quisquam nihil, necessitatibus ipsam consequuntur fuga ex quidem a inventore. Dolorum aut eveniet saepe perferendis reprehenderit voluptatibus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam suscipit delectus laudantium deserunt vel facere quam asperiores labore minus? Earum reprehenderit temporibus aut maxime. Voluptatem aperiam reprehenderit sunt doloremque!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam aut eos est repellat fugiat odio nihil, accusamus molestias consequatur. Assumenda mollitia ipsam quibusdam dolores eaque ab nemo minus excepturi!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia porro tenetur corrupti sit asperiores. Asperiores eaque corporis voluptas laboriosam odit nihil suscipit quasi quis! Laborum quod asperiores atque non assumenda.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam fugit consequatur ad corporis magnam voluptatum, quam a alias, obcaecati consequuntur sequi illum, cumque voluptate possimus atque cupiditate dolorem voluptas.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae assumenda laudantium explicabo deserunt, soluta labore vitae esse veritatis repellendus eius quia quod magni molestias a enim nostrum eveniet sequi accusamus.

</template>

<template v-slot:footer>
JavaScript
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
</style>