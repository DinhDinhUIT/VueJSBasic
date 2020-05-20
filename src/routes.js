import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import Home from './components/Home.vue';

export const routes= [
  {path: '/', name: 'Home', components: Home},
  {path: '/login', name: 'Login', components: Login},
  {path: '/register', name: 'Register', components: Register},
  {path: '/profile', name: 'Profile', components: Profile}
];
