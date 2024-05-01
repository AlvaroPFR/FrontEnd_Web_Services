<template>
  <div class="main" role="main" aria-label="Lista de tareas pendientes">
    <h1>Pending Tasks</h1> <br>
    <DataTable :value="tasks" tableStyle="min-width: 50rem" aria-label="Tabla de tareas pendientes">
      <Column field="task_id" header="ID"></Column>
      <Column field="description" header="Descripción"></Column>
      <Column field="task_status" header="Estado"></Column>
    </DataTable>
  </div>

</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {UserApiService} from "@/services/user-api.service.api.js";

export default {
  name: 'the-home-table',
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      tasks: [],
      userApiService: new UserApiService()
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      try {
        const response = await this.userApiService.getAllTasks();
        this.tasks = response.data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    }
  }
}
</script>

<style scoped>
.main {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-datatable-tbody .p-datatable-row {
  transition: background-color 0.3s ease;
}

.p-datatable-tbody .p-datatable-row:hover {
  background-color: #f0f0f0;
}
h1 {
  font-size: 36px;
  color: #75aa9c;
}

</style>
