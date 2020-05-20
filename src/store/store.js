import Vue from 'vue';
import Vuex from 'vuex';
import Value from './module/Value.js'

Vue.use(Vuex);
export const store = new Vuex.Store({
  // state: {
  //   value: '1'
  // },
  // getters: {
  //   value: state=>{
  //     return state.value;
  //   }
  // },
  // mutations: {
  //   updateValue: (state, payload)=>{
  //     state.value=payload;
  //   }
  // },
  // actions: {
  //   updateValue: ({commit}, payload)=>{
  //     commit('updateValue', payload);
  //   }
  // }
  modules: {
    Value
  }

})
