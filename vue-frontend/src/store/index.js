import { defineStore } from 'pinia'
//import { createStore } from 'vuex'

// export const store = createStore({
//     state: {
//         login: false
//     },
//     getters: {
//         isLoggedIn: (state) => {
//             if (localStorage.getItem('login')) {
//                 store.commit('setLogIn')
//             }
//             return state.login ? true : false
//         }
//     },
//     mutations: {
//         setLogIn: (state) => {
//             localStorage.setItem('login', true)
//             state.login = true
//         },
//         setLogOut: (state) => {
//             localStorage.removeItem('login')
//             state.login = false
//         }
//     }
// })

export const useAuth = defineStore('Auth', {
    state: () => ({
        login: false
    }),
    getters: {
        isLoggedIn: (state) => {
            if (localStorage.getItem('login')) {
                state.login = true
            }
            return state.login ? true : false
        }
    },
    actions: {
        setLogIn() {
            localStorage.setItem('login', true)
            this.login = true
        },
        setLogOut() {
            localStorage.removeItem('login')
            this.login = false
        }
    }
})