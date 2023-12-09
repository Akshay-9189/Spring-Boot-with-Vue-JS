<template>
    <div class="main sub">
        <div class="form rounded-4 shadow-lg">
            <div class="d-flex justify-content-center">
                <h3>Sign In</h3>
            </div>
            <hr>
            <form @submit.prevent="onSubmit">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <div class="d-flex justify-content-center mt-3 gap-4">
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="reset" class="btn btn-warning" @click="handleReset">Reset</button>
                </div>
            </form>
            <div class="pt-3">
                <RouterLink to="/form">Don't have a account?</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { signIn } from '../apis/index';
import { useAuth } from '../store';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            signIn(this.email, this.password).then(resp => {
                //store.commit('setLogIn')
                this.auth.setLogIn()
                this.$router.push("/")
            }).catch(err => window.alert(err.response.data))
        },
        handleReset() {
            this.email = '', this.password = ''
        }
    },
    setup() {
        const auth = useAuth()

        return { auth }
    }
}
</script>

<style scoped>
.form {
    background: linear-gradient(to bottom right, #9398a5, #88b1f3);
    padding: 7vh;
    margin: 10px;
    width: 40vw;
}
</style>
