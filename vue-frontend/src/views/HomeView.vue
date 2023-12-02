<template>
  <div class='pt-3 main'>
    <div v-if="this.employees.length > 0" class="card col-md-10 col-12 mx-auto shadow-lg">
      <div class="card-body hm">
        <div class="d-flex justify-content-center">
          <h4 class="mb-0">Employees Details</h4>
        </div>
        <hr>
        <div class="d-flex justify-content-center table-responsive mt-4 mb-2 mx-3 overflow-auto">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope='col'>Contact Number</th>
                <th scope='col'>DOB</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="employee in employees" v-bind:key="employee.id">
                <td>{{ employee.id }}</td>
                <td>{{ employee.firstName }}</td>
                <td>{{ employee.lastName }}</td>
                <td>{{ employee.contactNumber }}</td>
                <td>{{ employee.dob }}</td>
                <td>{{ employee.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class=" col-lg-6 card shadow-lg align-items-center p-lg-5 m-lg-5 p-2 m-2 nf rounded-5">
        <h6 class=" display-5 p-2 m-5">Employee Not Found</h6>
        <button class="btn btn-primary" @click="this.$router.push('/form')">Add Employee</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllEmployees } from '../apis/index'

export default {
  data() {
    return {
      employees: []
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.allEmployees())
  },
  methods: {
    allEmployees() {
      getAllEmployees().then(resp => this.employees = resp.data).catch(err => console.log(err))
    }
  },
  mounted() {
    this.allEmployees()
  }
}
</script>

<style scoped>
.hm {
  background: linear-gradient(to top, #3299b3, #85d7e9);
}
</style>