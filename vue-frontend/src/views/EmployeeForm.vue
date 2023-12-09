<template>
    <div class="main my-4">
        <div class="sub">
            <div class="form crd">
                <div class="card shadow-lg empForm rounded-4">
                    <div class="d-flex justify-content-center align-items-center mb-0 mt-2">
                        <h4 class='mt-2 mb-0' v-if="this.$route.params?.id">Update Employee</h4>
                        <h4 class='mt-2 mb-0' v-else-if="isLoggedIn">Add New Employee</h4>
                        <h4 class='mt-2 mb-0' v-else>SignUp</h4>
                    </div>
                    <hr />
                    <div class='card-body pt-0 mx-2'>
                        <form @submit.prevent="saveOrUpdate">
                            <div class='mb-3'>
                                <div class=" form-floating">
                                    <input type="text" class="form-control" name='first_name' id="first_name"
                                        placeholder="First Name" autoComplete='off' required
                                        v-model="employeeDTO.firstName" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                            </div>
                            <div class='mb-3'>
                                <div class="form-floating">
                                    <input type="text" class="form-control" name='last_name' id="last_name"
                                        placeholder="Last Name" autoComplete='off' required
                                        v-model="employeeDTO.lastName" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div class='mb-3'>
                                <div class="form-floating ">
                                    <input type="text" class="form-control" name='email' id="email"
                                        placeholder="name@example.com" autoComplete='off' required
                                        v-model="employeeDTO.email" />
                                    <label htmlFor="email">Email address</label>
                                </div>
                            </div>
                            <div class='mb-3'>
                                <div class="form-floating">
                                    <input type="number" class="form-control" name='contact_number' id="contact_number"
                                        placeholder="Contact Number" autoComplete='off' required
                                        v-model="employeeDTO.contactNumber" />
                                    <label htmlFor="contact_number">Contact Number</label>
                                </div>
                            </div>
                            <div class='mb-3'>
                                <div class="form-floating ">
                                    <input type="date" class="form-control" name='birth_date' id="birth_date"
                                        placeholder="DOB" autoComplete='off' required v-model="employeeDTO.dob" />
                                    <label htmlFor="birth_date">DOB</label>
                                </div>
                            </div>
                            <div class='mb-3'>
                                <div class="form-floating ">
                                    <input type="password" class="form-control" name='password' id="password"
                                        placeholder="Password" autoComplete='off' required v-model="employeeDTO.password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div class='d-flex justify-content-center gap-3' v-if="this.$route.params?.id">
                                <button type='submit' class='btn btn-success'>Update</button>
                                <button class='btn btn-secondary' @click="this.$router.push('/manage')">Back</button>
                            </div>
                            <div class='d-flex justify-content-center gap-3' v-else-if="isLoggedIn">
                                <button type='submit' class='btn btn-success'>Add</button>
                            </div>
                            <div class='d-flex justify-content-center gap-3' v-else>
                                <button type='submit' class='btn btn-success'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getEmployee, saveEmployee, updateEmployee } from '../apis/index'
//import { mapGetters } from 'vuex'
import { useAuth } from '../store'
import { storeToRefs } from 'pinia'

export default {
    data() {
        return {
            employeeDTO: {
                firstName: '',
                lastName: '',
                contactNumber: '',
                dob: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        addEmployee(employeeDTO) {
            saveEmployee(employeeDTO)
                .then(() => this.$router.push({ name: 'home' }))
                .catch(error => console.log(error))
        },
        updateEmployee(id, employeeDTO) {
            updateEmployee(id, employeeDTO)
                .then(() => this.$router.push({ name: 'manage' }))
                .catch(error => console.log(error))
        },
        getEmployee(id) {
            getEmployee(id).then(resp => this.employeeDTO = resp.data).catch(error => console.log(error))
        },
        saveOrUpdate() {
            if (this.$route.params?.id)
                this.updateEmployee(this.$route.params.id, this.employeeDTO)
            else
                this.addEmployee(this.employeeDTO)

        }
    },
    mounted() {
        if (this.$route.params?.id)
            this.getEmployee(this.$route.params?.id)
    },
    // computed: {
    //     ...mapGetters(['isLoggedIn'])
    // },
    setup() {
        const auth = useAuth()
        const { isLoggedIn } = storeToRefs(auth)

        return { isLoggedIn }
    }
}
</script>

<style scoped>
.empForm {
    background: linear-gradient(to bottom right, #e2d88d, #88e9b3, #6ecbea);
}

.crd {
    padding-left: 5vh;
    padding-right: 5vh;
    width: 50vw;
}
</style>    