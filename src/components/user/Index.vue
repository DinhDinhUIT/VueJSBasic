<template>
  <div class="container">
    <h1>StartUser page</h1>
    <div class="list-group">
        <router-link
            tag="li"
            to="/user/1"
            class="list-group-item"
            style="cursor: pointer;">User 01</router-link>
        <router-link
            tag="li"
            to="/user/2"
            class="list-group-item"
            style="cursor: pointer;">User 02</router-link>
        <router-link
            tag="li"
            :to="{name: 'userdetail', params: {id: 3}}"
            class="list-group-item"
            style="cursor: pointer;">User 03</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
        return {
        }
    },
  methods: {
     
  }
}
</script>

<style scoped>
    
</style>
