<template>
<div id="nav">
  <div class="max-w-16xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <router-link
        class="flex space-x-4"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
      >{{ item.title }}
      </router-link>
      </div>
  </div>
</div>
<router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
    name: "App",
    data() {
      return {
        menuItems: [
          {title: "Home", link: "/"},
          {title: "Projects", link: "/projects"},
          {title: "Skills", link: "/skills"},
          {title: "About", link: "/about"},
        ]
      };
    },
  };

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

 #nav {
    position: fixed;
    z-index: 99;
    padding-top: 0px;
  }

  #nav a {
    text-decoration: none;
    margin: 10px;
    font-size: 1.1em;
    font-weight: 200;
    color: whitesmoke;
    letter-spacing: 1px;
  }

  #nav a:hover {
  color: rgb(32, 32, 32);
  font-weight: 400;
  }

  #nav a.router-link-exact-active {
    text-decoration: underline;
    font-weight: 550;
  }
 

</style>


