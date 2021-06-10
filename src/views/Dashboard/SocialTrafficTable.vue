<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Journal d'activité</h3>
        </div>
        <div class="col text-right">
          <base-button size="sm" type="primary">Voir tout</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template v-slot:columns>
          <th>Date</th>
          <th>Utilisateur</th>
          <th>Type</th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            {{ row.item.date }}
          </th>
          <td>
            {{ row.item.user }}
          </td>
          <td>
            {{ row.item.type }}
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "social-traffic-table",
  data() {
    return {
      tableData: [
        {
          date: "11:36:02 03/06/2021",
          user: "Automatique",
          type: "Arrosage éteint",
        },
        {
          date: "11:35:00 03/06/2021",
          user: "Moi",
          type: "Données collectées",
        },
        {
          date: "11:30:02 03/06/2021",
          user: "Automatique",
          type: "Arrosage allumé",
        },
      ],
    };
  },
};
</script>
<style></style>
