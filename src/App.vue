<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Persona from './components/Front.vue'
</script>

<template>
<Persona 
name="Mathias Weibeck"
sum="UX Designer"
background=""
></Persona>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

body {
  background-color: rgb(56, 56, 158);
}

// Background animated DOTs
/*
@mixin dots($count) {
    $text-shadow: ();
    @for $i from 0 through $count {
      $text-shadow: $text-shadow,
                   (-.5+(random()) * 3) + em
                   (-.5+(random()) * 3) + em
                   7px
                   hsla(random() * 200, 100%, 70%,.9);
    }
    text-shadow: $text-shadow;
  }
  
  body {
    background: rgb(1, 29, 10);
  }

  #backdrop {
    font: 5vmin/1.3 Serif;
    overflow: hidden;
  }
  
  #backcore, #topcontrol {
    display: block;
    font-size: 52px;
    color: transparent;
  }
  
  #topcontrol::before, #topcontrol::after,
  #backcore::before, #backcore::after {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 3em;
    content: '.';
    mix-blend-mode: screen;
    animation: 44s -27s move infinite ease-in-out alternate;
  }
  
  
  #backcore::before {
    @include dots(40);
    animation-duration: 44s;
    animation-delay: -27s;
  }
  
  #backcore::after {
    @include dots(40);
    animation-duration: 43s;
    animation-delay: -32s;
  }
  
  #topcontrol::before {
    @include dots(40);
    animation-duration: 42s;
    animation-delay: -23s;
  }
  
  #topcontrol::after {
    @include dots(40);
    animation-duration: 41s;
    animation-delay: -19s;
  }
  
  
  @keyframes move {
    from {
      transform: rotate(0deg) scale(12) translateX(-20px);
    }
    to {
      transform: rotate(360deg) scale(18) translateX(20px);
    }
  } */

/*
  @keyframes bgcolor {
    0% {
        background-color: #286b9b
    }

    30% {
        background-color: #499e1e
    }

    60% {
        background-color: #b45a1e
    }

    90% {
        background-color: rgb(196, 42, 67)
    }

    100% {
        background-color: #673896
    }
}

body {
    -webkit-animation: bgcolor 40s infinite;
    animation: bgcolor 30s infinite;
    -webkit-animation-direction: alternate;
    animation-direction: normal;
}
// TEXT WRITE
.writeText h1 {
  overflow: hidden;
  border-right: .15em solid white;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .10em;
  animation: 
  keystrokes 3.5s steps(60, end),
  blinking .75s step-end infinite;
}

@keyframes keystrokes {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blinking {
  from, to { border-color: transparent; }
  50% { border-color: rgb(255, 255, 255);}
}*/

.titleFade h1 {
  animation: fadeAnim ease 5s;
}

@keyframes fadeAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>


