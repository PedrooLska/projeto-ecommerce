<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Pedro Lucas</v-list-item-title>

        <v-btn icon @click.stop="hiddenOrShowMenu">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="menu in listMenus"
          :key="menu.title"
          link
          :to="menu.to"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data: () => ({
    drawer: true,
    mini: true,
  }),
  computed: {
    ...mapState({
      listMenus: (state) => state.menus.listMenus,
    }),
  },
  methods: {
    hiddenOrShowMenu() {
      this.mini = !this.mini;
    },
  },
};
</script>
