import Vue from 'vue'
import Vuex from 'vuex'
import root_state from './root/index';
Vue.use(Vuex)

export default new Vuex.Store({
  state: root_state,
  mutations: {
    /**
     * 选择当前手机设计的操作类型
     * @param {object} state root_state中定义的state
     * @param {number} payload 所选择的操作类型
     */
    selectActionType(state, payload) {
      if (state.current_action_type != payload) {
        state.current_action_type = payload;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
