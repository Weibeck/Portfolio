<template lang="">

<div class="border-b border-t border-grey-darkest border-solid mx-auto w-4/5"> 
    <h2 class="py-2 xl:py-4 font-medium tracking-wide text-center text-3xl xl:text-5xl">What i can offer &#128188;</h2>

</div>

<div class="container mx-auto p-4 w-4/5 pt-8 tracking-wide font-sans text-center">
<div class="grid grid-cols-3 xl:grid-rows-5 gap-4 font-sans">


<!-- Idea/Concept -->
<div class="col-span-3 xl:col-span-1 col-start-1 p-2">
    <h3 class="text-lg font-semibold uppercase pb-1"> idea and Concept </h3>
    <p>
        I can assist in product definition of an idea or concept. This is done through brainstorming of the concept/idea to meet the business' goal and keeping the user in mind. During this process the product will get a foundation and stakeholders requirements will be met.
</p>
</div>

<!-- User Research -->
<div class="col-span-3 xl:col-start-3 xl:row-start-2 p-2">
    <h3 class="text-lg font-semibold uppercase pb-1"> User and Market Research </h3>
    <p>
        Finding the correct target audience can be a challenge. I can complete user research for products, while keeping user aspects such as: needs, fears and motivation in mind. My aim is to figure out the industry standards during this process to put the business on a good mark.
    </p>
</div>

<!-- Analysis -->
<div class="col-span-3 xl:col-span-1 xl:col-start-1 xl:row-start-3 p-2">
    <h3 class="text-lg font-semibold uppercase pb-1"> Analysis </h3>
    <p>
        I can create analysis of users to pinpoint and explore the reason to why they want and need a product. I will create personas for the product and develop user stories, to fully understand the timeline and experience a user goes through purchasing the product. 
    </p> 
</div>

<!-- Sketching -->
<div class="col-span-3 xl:col-span-1 xl:col-start-3 xl:row-start-4 p-2">
    <h3 class="text-lg font-semibold uppercase pb-1"> Prototyping </h3>
    <p>
        I can create a simple visualization of the idea/concept for prototyping.  During the sketching process, I will create a fast sketch and illustration of how the concept/idea will look and function. This will help seeing how all the pieces will fit together in the product.
    </p>
</div>

<!-- Test Phase -->
<div class="col-span-3 xl:col-span-1 xl:col-start-1 xl:row-start-5 p-2">
    <h3 class="text-lg font-semibold uppercase pb-1"> Validation through Testing </h3>
    <p>
        I have experience getting feedback from end-users, and I am not shy to reach out for the feedback that is needed to get good results in the testing phase. This will help getting a new view on features, and much more in the product. 
    </p>
</div>

<img class="invisible xl:visible col-start-2 row-span-5 mx-auto pt-6" :src="UxProcess" alt="UX design process illustrated" width="250" height="900">

</div>
</div>

</template>
<script>
import UxProcess from "../assets/ux_process.webp"


export default {
    components: {},
        
  data() {
    return {
        UxProcess: UxProcess
        
    };
  },
  methods: {},    
}
</script>
<style lang="">
    
</style>