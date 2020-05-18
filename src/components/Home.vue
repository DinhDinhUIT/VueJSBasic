<template>
  <div class="container">
    <h1>Home Page</h1>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
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
