import * as types from './types'
export default {
  increase: ({commit}) => {
    commit(types.INCREASE);
  },
  decrease: ({commit}) => {
    commit(types.DECREASE);
  },
  clickEven: ({commit, state}) => {
    if (state.mutations.count % 2 == 0) {
      commit(types.INCREASE);
    }
  },
  clickAsync: ({commit}) => {
    new Promise((resolve) =>
      setTimeout(function () {
        commit(types.INCREASE)
      }, 1000)
    )
  }

}
