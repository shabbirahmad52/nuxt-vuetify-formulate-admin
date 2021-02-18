<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      :mini-variant="mini"
      permanent
    >
    <AppDrawer />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-icon medium @click.stop="mini = !mini" class="mr-3" v-text="mini ? 'mdi-arrow-right' : 'mdi-arrow-left'"></v-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
  import AppDrawer from '~/components/AppDrawer.vue'

  export default {
    components: {
      AppDrawer
    },
    data: () => (
      { mini: false }
    ),
  }
</script>