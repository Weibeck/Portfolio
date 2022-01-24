
<template>
<swiper :navigation="true" class="mySwiper">
 <swiper-slide>
    
<GithubCard>
<template v-slot:title>
Example Project
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
C#
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
        
        
    };
  },
  methods: {
    
  }
  
}
</script>