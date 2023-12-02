import { createStore } from 'vuex'

export const store = createStore({
    state: {
        login: false
    },
    getters: {
        isLoggedIn: (state) => {
            if (localStorage.getItem('login')) {
                store.commit('setLogIn')
            }
            return state.login ? true : false
        }
    },
    mutations: {
        setLogIn: (state) => {
            localStorage.setItem('login', true)
            state.login = true
        },
        setLogOut: (state) => {
            localStorage.removeItem('login')
            state.login = false
        }
    }
})