const state = {
    auth: {
        isLogin: false,
    },
    count: 0
};


const getters = {
    // allSkill: state=>{
    //     return  state.skills;
    // }
}
const mutations = {
    SET_LOGIN(state, data) {       
        state.auth.isLogin = data;
    }
}
const actions = {
    setLogin({ state, commit, rootState }, data) {
        commit("SET_LOGIN", data);
    },    

}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
