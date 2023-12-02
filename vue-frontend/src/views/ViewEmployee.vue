<template>
    <div class="main sub">
        <div class="card viewBack shadow-lg rounded-4">
            <div class="d-flex justify-content-center align-items-center mb-0">
                <h4 class='mt-2 mb-0'>Employee Details</h4>
            </div>
            <hr />
            <div class='card-body'>
                <form class="pad">
                    <div class='col mb-3'>
                        <div class="form-floating">
                            <input type="text" class="form-control" name='first_name' id="first_name"
                                placeholder="First Name" autoComplete='off' disabled v-model="employee.id" />
                            <label htmlFor="first_name">ID</label>
                        </div>
                    </div>
                    <div class="d-flex gap-4">
                        <div class='col mb-3'>
                            <div class="form-floating">
                                <input type="text" class="form-control" name='first_name' id="first_name"
                                    placeholder="First Name" autoComplete='off' disabled v-model="employee.firstName" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                        </div>
                        <div class='col mb-3'>
                            <div class="form-floating">
                                <input type="text" class="form-control" name='last_name' id="last_name"
                                    placeholder="Last Name" autoComplete='off' disabled v-model="employee.lastName" />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div class='col mb-3'>
                        <div class="form-floating ">
                            <input type="text" class="form-control" name='email' id="email" autoComplete='off'
                                placeholder="name@example.com" disabled v-model="employee.email" />
                            <label htmlFor="email">Email address</label>
                        </div>
                    </div>
                    <div class="d-flex gap-4">
                        <div class='col mb-3'>
                            <div class="form-floating">
                                <input type="number" class="form-control" name='contact_number' id="contact_number"
                                    autoComplete='off' placeholder="Contact Number" disabled
                                    v-model="employee.contactNumber" />
                                <label htmlFor="contact_number">Contact Number</label>
                            </div>
                        </div>
                        <div class='col mb-3'>
                            <div class="form-floating ">
                                <input type="date" class="form-control" name='birth_date' id="birth_date" placeholder="DOB"
                                    autoComplete='off' disabled v-model="employee.dob" />
                                <label htmlFor="birth_date">DOB</label>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex justify-content-center gap-3'>
                        <button class='btn btn-primary' @click="this.$router.push('/manage')">Back</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { getEmployee } from '../apis';

export default {
    data() {
        return {
            employee: {
                id: '',
                firstName: '',
                lastName: '',
                contactNumber: '',
                dob: '',
                email: ''
            }
        }
    },
    methods: {
        findEmployee(id) {
            getEmployee(id).then(resp => this.employee = resp.data).catch(error => console.log(error))
        }
    },
    mounted() {
        this.findEmployee(this.$route.params?.id)
    }
}
</script>

<style>
.viewBack {
    background: linear-gradient(to right bottom, #8feefb, #d764fd);
}
</style>