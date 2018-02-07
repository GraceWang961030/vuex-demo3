import * as types from './types'
import {INCREASE,DECREASE} from "./types"
import getters from './getters'
const state={
  count:10
};

const mutations={
  [INCREASE](state){
    state.count++;
  },
  [DECREASE](state){
    state.count--;
  }
};

export default {
  state,
  mutations,
  getters
}
