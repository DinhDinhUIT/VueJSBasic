<template>
  <div class="component">
    <h3>Information User Details</h3>
    <p>List Details</p>
    <p>My name: {{ reverseName() }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFn">Call back</button>
  </div>
</template>

<script>
export default {
  props: {
    nameTranfer: {
        type: String,
        required: false
    },
    resetNameFn: Function
  },

  methods: {
      reverseName: function(){
          console.log(this.nameTranfer);
          return this.nameTranfer;
      },
      resetName: function(){
          this.nameTranfer="Dinh Dinh";
          this.$emit('nameWasReset', this.nameTranfer);
      }
  }
}
</script>

<style scoped>
    div{
        background-color: lightcoral;
    }
</style>
