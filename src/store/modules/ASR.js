import {get} from '../../utils/axios';

const state = {
  disabled: true,
  href: ''
};
const mutations = {
  callBackend: (state, response) => {
    console.log(response)
  }
};
const actions = {
    callBackend(context, name) {
      return new Promise((resolve, reject) => {
        get(`/test/getFromFrontEnd`)
          .then(response => {
            context.commit('callBackend', response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  }
;

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
