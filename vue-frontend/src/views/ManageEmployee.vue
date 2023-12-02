<template>
  <div class='py-4'>
    <div v-if="this.employees.length > 0" class="card col-md-10 col-12 mx-auto shadow-lg ">
      <div class="card-body mng">
        <div class="d-flex justify-content-center">
          <h4 class="mb-0">Manage Employees</h4>
        </div>
        <hr>
        <div class="d-flex justify-content-center table-responsive mb-2 mx-3 overflow-auto">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col" class="col-2">First Name</th>
                <th scope="col" class="col-2">Last Name</th>
                <th scope='col' class="col-2">Contact Number</th>
                <th scope="col" class="col-2">Email</th>
                <th scope="col" class="col-4">Actions</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="employee in employees" v-bind:key="employee.id">
                <td>{{ employee.firstName }}</td>
                <td>{{ employee.lastName }}</td>
                <td>{{ employee.contactNumber }}</td>
                <td>{{ employee.email }}</td>
                <td>
                  <div class="d-flex gap-3 justify-content-center">
                    <button class="btn btn-primary" @click="this.$router.push(`/get/${employee.id}`)">View</button>
                    <button class="btn btn-warning" @click="push(employee.id)">Update</button>
                    <button class="btn btn-danger" @click="remove(employee.id)">Delete</button>
                  </div>
                </td>
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
import { deleteEmployee, getAllEmployees } from '../apis/index'

export default {

  data() {
    return {
      employees: []
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    getAll() {
      getAllEmployees().then(resp => this.employees = resp.data).catch(err => console.log(err))
    },
    remove(id) {
      deleteEmployee(id).then(() => this.getAll()).catch(error => console.log(error))
    },
    push(id) {
      this.$router.push(`/edit/${id}`)
    }
  }
}
</script>

<style scoped>
.mng {
  background: linear-gradient(to top, #c2e59c, #64b3f4);
}
</style>
