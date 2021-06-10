<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="MyGarden"
      title="MyGarden"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Accueil',
            icon: 'fas fa-home text-primary',
            path: '/home',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Mes modules',
            icon: 'fas fa-cube text-blue',
            path: '/icons',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Journal d\'activité',
            icon: 'fas fa-list text-orange',
            path: '/logs',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Mon profil',
            icon: 'fas fa-user text-yellow',
            path: '/profile',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
