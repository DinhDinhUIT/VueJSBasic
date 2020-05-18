<template>
  <div class="component">
    <h1>Userdetail page</h1>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data(){
        return {
          id: this.$route.params.id
        }
    },
  methods: {
     
  }
}
</script>

<style scoped>
    div{
        background-color: lightcoral;
    }
</style>
