<template>
  <div class="text-center">
    <h3>Errors</h3>
    <p>Have some errors</p>
    <button class="btn btn-primary" @click="backHome">Back home</button>
  </div>
</template>

<script>
export default{
         data(){
            return {
                
            }
        },
        methods: {
            backHome(){
                this.$router.push({name: 'homepage'});
            }
        },
        components: {
        }
    }
</script>

<style scoped>
  
</style>
