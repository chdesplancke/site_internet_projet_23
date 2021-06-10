<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <stats-card
            title="Nombre de modules"
            type="gradient-info"
            sub-title="1"
            icon="fas fa-bookmark"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="mr-2"
                > Module(s) connecté(s)</span
              >
            </template>
          </stats-card>
        </div>
        <div class="col-xl-6 col-lg-6">
          <stats-card
            title="Ajouter un module"
            type="gradient-green"
            sub-title=""
            icon="fas fa-plus"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <base-button type="primary" size="sm">Ajouter un module</base-button>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <modules-table title="Liste de mes modules"></modules-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModulesTable from "./Tables/ModulesTable";
export default {
  name: "tables",
  components: {
    ModulesTable,
  },
};
</script>
<style></style>
