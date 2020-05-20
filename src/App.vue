<template>
    <div class="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/share/Header';
export default{
    name: 'App',
    components: {
      'app-header': Header
    }
}
</script>

<style scoped>

</style>
