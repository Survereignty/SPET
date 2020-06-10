import Vue from 'vue'
import Vuex from 'vuex'

import students from './moduls/students'
import user from './moduls/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    students,
    user
  }
})
