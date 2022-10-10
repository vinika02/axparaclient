import { createStore } from "vuex";
import skills from "./modules/skills";

export const store = new createStore({
    modules: {
        skills
    },
    state: {},
    getters: {},
    actions: {},
    mutations: {},
});