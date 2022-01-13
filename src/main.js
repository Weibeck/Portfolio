import { createApp } from 'vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
import router from './router'



library.add(faGithub, faYoutube, faTwitter, faLinkedin, faFacebook, faInstagram, faHome);



const app = createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
