<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/" v-if="isLoggedIn">HRM App</RouterLink>
            <h3 class="mb-0 text-light" v-else>HRM APP</h3>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="isLoggedIn">
                    <li class="nav-item">
                        <RouterLink to='/' class="nav-link" aria-current="page">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to='/form' class="nav-link">Add New</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to='/manage' class="nav-link">Manage</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else></ul>4
                <ul class="navbar-nav">
                    <li class="nav-item" v-if="!isLoggedIn">
                        <RouterLink to="/form" class="nav-link">Sign Up</RouterLink>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <RouterLink to="/signin" class="nav-link">Sign In</RouterLink>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn">
                        <button class="nav-link" @click="handleLogOut">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import { RouterLink } from 'vue-router'
//import { mapGetters } from 'vuex'
import { useAuth } from '../store'
import { storeToRefs } from 'pinia';

export default {
    methods: {
        handleLogOut() {
            //store.commit('setLogOut')
            this.auth.setLogOut()
            this.$router.push('/signin')
        }
    },
    // computed: {
    //     ...mapGetters(['isLoggedIn'])
    // }
    setup() {
        const auth = useAuth()
        const { isLoggedIn } = storeToRefs(auth)

        return { isLoggedIn, auth }
    }
}
</script>