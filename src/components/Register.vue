<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form @submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" v-model="first_name" class="form-control" name="first_name" placeholder="Enter First Name">
          </div>
          <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" v-model="last_name" class="form-control" name="last_name" placeholder="Enter Last Name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter eemail">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Enter password">
            <hr>
            <button class="btn btn-lg btn-success btn-block" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index';
import EventBus from './EventBus';
export default {
  data(){
    return{
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    register(){
      axios.post('http://localhost:3000/register', {
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('usertoken', res.data);
        this.email="";
        this.password="";
        router.push({name: 'Login'});
      }).catch(error=>{
        console.log(error);
      });
      this.emitMethod();
    },
    emitMethod(){
      EventBus.$emit('logged-in', 'loggedin');
    }
  }
}
</script>

<style scoped>

</style>
