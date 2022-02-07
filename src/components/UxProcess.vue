<template lang="">

<div class="container mx-auto px-4 w-4/5">
<div class="grid grid-cols-3 grid-rows-5 gap-4">

<!-- Idea/Concept -->
<div class="col-start-1 pt-8">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus assumenda aspernatur aliquid labore blanditiis tempora, sequi praesentium aperiam asperiores repellat vitae magni dolorum minus ut, ab laborum eos tempore voluptatem?
    </p>
</div>

<!-- User Research -->
<div class="col-start-3 row-start-2 pt-8">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus assumenda aspernatur aliquid labore blanditiis tempora, sequi praesentium aperiam asperiores repellat vitae magni dolorum minus ut, ab laborum eos tempore voluptatem?
    </p>
</div>

<!-- Analysis -->
<div class="col-start-1 row-start-3 pt-8">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus assumenda aspernatur aliquid labore blanditiis tempora, sequi praesentium aperiam asperiores repellat vitae magni dolorum minus ut, ab laborum eos tempore voluptatem?
    </p>
</div>

<!-- Sketching -->
<div class="col-start-3 row-start-4 pt-8">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus assumenda aspernatur aliquid labore blanditiis tempora, sequi praesentium aperiam asperiores repellat vitae magni dolorum minus ut, ab laborum eos tempore voluptatem?
    </p>
</div>

<!-- Test Phase -->
<div class="col-start-1 row-start-5 pt-8">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus assumenda aspernatur aliquid labore blanditiis tempora, sequi praesentium aperiam asperiores repellat vitae magni dolorum minus ut, ab laborum eos tempore voluptatem?
    </p>
</div>

<img class="col-start-2 row-span-5 mx-auto" :src="UxProcess" alt="UX design process illustrated">

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