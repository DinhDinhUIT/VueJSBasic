<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Logo</a>
  
  <ul class="navbar-nav">
    <router-link active-class="active" exact  tag="li" class="nav-item" to="/" >
        <a class="nav-link">Home</a>
    </router-link>
    <router-link active-class="active"  tag="li" class="nav-item" to="/user">
        <a class="nav-link">User</a>
    </router-link>
  </ul>
</nav>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style scoped>
 
</style>
