
<template>
<swiper :navigation="true" class="mySwiper">
  <swiper-slide>
    

  </swiper-slide>
  
  <swiper-slide>
    

  </swiper-slide>
  
  <swiper-slide>
    

  </swiper-slide>
  
  <swiper-slide>
    

  </swiper-slide>
  
  <swiper-slide>
    

  </swiper-slide>
  
  <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/navigation"


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
  },
  data() {
    return {
        
        
    };
  },
  methods: {
    
  }
  
}
</script>