<template>
  <div class="component">
      <h1>The user component</h1>
      <p>I'm an Developer. I'm {{ name }}</p>
      <button @click="changeName">Change My name</button>
      <hr>
      <div class="row">
          <div class="col-xs-12 col-sm-6">
              <app-user-detail v-bind:nameTranfer="name" :resetNameFn="resetNameParent">
              </app-user-detail>
          </div>
          <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
          </div>
      </div>
  </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue'
    export default{
        data: function(){
            return {
                name: ' '
            }
        },
        methods: {
            changeName(){
                this.name='Dinh Dinh';
            },
            resetNameParent(){
                this.name="Developer"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div{
        background-color: lightblue;
    }
</style>
