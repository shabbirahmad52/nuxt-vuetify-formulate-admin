<template>
    <div>
    <v-toolbar >
      <v-avatar size=28>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Vue Material Admin Template" > 
      </v-avatar>
      <v-toolbar-title class="pl-3">
        <span class="hidden-sm-and-down">Vue Portal</span>
      </v-toolbar-title>
    </v-toolbar>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item  
            v-for="(item, i) in items" 
            :key="i" :to="item.href"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'Home', icon: 'mdi-folder', href: '/'},
        { text: 'Shared with me', icon: 'mdi-account-multiple', href: '/counter' },
        { text: 'Starred', icon: 'mdi-star', href: '/starred' },
        { text: 'Recent', icon: 'mdi-history', href: '/recent' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }),
  }
</script>