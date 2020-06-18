//import {HTTP} from '../aixos/http'

export default {
    state: {
        from: {},
        login: false,
        loginName: "",
        password: "",
        role: "",
        save: false,
    },
    mutations: {
        UPDATE_USER(state, user) {
            state.loginName = user.loginName;
            state.password = user.password;
            state.role = user.role;
            state.login = true
        },
        LOGOUT(state) {
            state.loginName = "";
            state.password = "";
            state.role = 0;
            state.login = false
        },
        SET_SAVE(state, bool) {
            state.save = bool;
        }
    },
    actions: {
        async LOGIN({commit}, input) {
            if (input.loginName == "admin" & input.password == "admin") {
                commit("SET_SAVE", true);
                let user = {
                    loginName: input.loginName,
                    password: input.password,
                }
                localStorage.setItem("user", user);
            }
            commit('UPDATE_USER', {
                loginName: input.loginName,
                password: input.password,
                role: 1,
            })
        },
        async LOGOUT({commit}) {
            commit('LOGOUT');
        }
    }
}