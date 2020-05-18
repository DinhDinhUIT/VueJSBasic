<template>
  <div>
  <router-view name="page-header"></router-view>
    <div class="container">
      <h1 class="text-center">Vue Routing</h1>
      <hr>
      <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style scoped>
  div.component{
    border: 1px solid black;
    padding: 30px;
  }
</style>
