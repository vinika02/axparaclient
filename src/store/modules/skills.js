const state = {
    skills: {
        backend: [],
        frontend: []
    },
    count: 0
};


const getters = {
    // allSkill: state=>{
    //     return  state.skills;
    // }
}
const mutations = {
    SET_SKILLSS(state, data) {       
        state.skills = data;
        console.log(state);
    }
}
const actions = {
    setSkills({ state, commit, rootState }, data) {
        commit("SET_SKILLSS", data);
    },    

}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
