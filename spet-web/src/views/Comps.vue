<template>
      <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            color="grey lighten-4"
            >
            <v-list
                dense
                class="grey lighten-4"
            >
                <v-divider
                    dark
                    class="my-4"
                ></v-divider>
            </v-list>

                <v-card
                    v-for="item in TEMPLATES"
                    :key="item.id"
                    class="mx-auto ma-2"
                    max-width="240"
                >

                    <v-card-text class="text--primary">
                        <div>{{item.name}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="red"
                        text
                        @click="del_templ(item)"
                    >
                        Удалить
                    </v-btn>

                    <v-btn
                        color="green"
                        text
                        @click="use_templ(item)"
                    >
                        Применить
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-navigation-drawer>

        <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-4"
        >
            <span class="hidden-sm-and-down"></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn
            icon
            large
        >
            <v-avatar
            size="32px"
            item
            >
            <v-img
                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                alt="Vuetify"
            ></v-img></v-avatar>
        </v-btn>
        </v-app-bar>
        <v-content>
            <TableStudents></TableStudents>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "Comps"
}
</script>

<style>

</style>