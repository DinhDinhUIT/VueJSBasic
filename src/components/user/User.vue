<template>
  <div class="component">
      <h1>User page</h1>
      <button class="btn btn-danger" @click="backHome">Back home</button>
      <router-view></router-view>
  </div>
</template>

<script>
    export default{
         data(){
            return {
                id: this.$route.params.id
            }
        },
        methods: {
            backHome(){
                this.$router.push('/');
            }
        },
        components: {
        }
    }
</script>

<style scoped>
    div{
        background-color: lightblue;
    }
</style>
