import { createStore } from "vuex";
import skills from "./modules/skills";
import auth from "./modules/auth";
export const store = new createStore({
    modules: {
        skills,
        auth
    },
    state: {},
    getters: {},
    actions: {},
    mutations: {},
});