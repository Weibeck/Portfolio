<template>
<nav :class="{ 'scrolled': !atTopOfPage }" class="mx-auto px-2 sm:px-6 lg:px-8 rounded-lg">
  <div>
    <div class="flex items-center h-16">
      <router-link
        class="space-x-4"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
      >{{ item.title }}
      </router-link>
      </div>
  </div>
</nav>
<router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: "Routing",
    data() {
      return {
        menuItems: [
          {title: "Home", link: "/"},
          {title: "Resume", link: "/resume"}
        ],
        atTopOfPage: true  
      };
    },
beforeMount () {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
},

methods: {
    handleScroll(){
        if(window.pageYOffset>920){
            if(this.atTopOfPage) this.atTopOfPage = false
        }else{
            if(!this.atTopOfPage) this.atTopOfPage = true
        }
    }
  }
};


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  position: fixed;
  z-index: 99;
  padding-top: 0px;
  transition: ease-in 250ms;
  }

nav a {
  text-decoration: none;
  margin: 7px;
  font-size: 1em;
  font-weight: 200;
  color: whitesmoke;
  letter-spacing: 1px;
  }
  
nav a:hover {
 color: rgb(32, 32, 32);
 font-weight: 400;
  }

nav a.router-link-exact-active {
  text-decoration: underline;
  font-weight: 500;
  }

nav.scrolled {
  transition: ease-in 250ms;
a{
  color: rgba($color: #181818, $alpha: 1.0);
}
a:hover {
  font-weight: 500;
  color: rgba($color: rgb(83, 140, 247), $alpha: 1.0);
}
  }

</style>


