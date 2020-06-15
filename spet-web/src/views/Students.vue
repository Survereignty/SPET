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
                <v-list-item
                    @click="CREATE"
                >
                    <v-list-item-action>
                    <v-icon>{{ items[0].icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                    <v-list-item-title class="grey--text">
                        {{ items[0].text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="CREATE_GROUP"
                >
                    <v-list-item-action>
                    <v-icon>{{ items[5].icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                    <v-list-item-title class="grey--text">
                        {{ items[5].text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="CREATE_ON_TABLE"
                >
                    <v-list-item-action>
                    <v-icon>{{ items[1].icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                    <v-list-item-title class="grey--text">
                        {{ items[1].text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="$router.push({ path: 'table' })"
                >
                    <v-list-item-action>
                    <v-icon>{{ items[2].icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                    <v-list-item-title class="grey--text">
                        {{ items[2].text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="CREATE_EDIT"
                >
                    <v-list-item-action>
                    <v-icon>{{ items[3].icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                    <v-list-item-title class="grey--text">
                        {{ items[3].text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="OPEN_WAR"
                >
                    <v-list-item-action>
                    <v-icon>{{ items[4].icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                    <v-list-item-title class="grey--text">
                        {{ items[4].text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
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
        <v-dialog
        v-model="dialog"
        width="800px"
        >
        <v-card>
            <v-card-title class="blue lighten-1 darken-2">
            Добавить студента
            </v-card-title>
            <v-container>
            <v-row class="mx-2">
                <v-col
                cols="6"
                >
                <v-text-field
                    v-model="red_student.name"
                    placeholder="Имя"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.middleName"
                    placeholder="Отчетство"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.surname"
                    placeholder="Фамилия"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.date_b"
                    placeholder="Дата рождения"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.city"
                    placeholder="Нас. пункт"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.street"
                    placeholder="Улица"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.house"
                    placeholder="Дом"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.flat"
                    placeholder="Квартира"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.phone"
                    placeholder="Домашний телефон"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.activs"
                    placeholder="Активность"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                <v-text-field
                    v-model="red_student.info"
                    placeholder="Доп. информация"
                ></v-text-field>
                </v-col>
                <v-col cols="6" v-if="!mode">
                <v-text-field
                    v-model="red_student.login"
                    placeholder="Логин"
                ></v-text-field>
                </v-col>
                <v-col cols="6" v-if="!mode">
                <v-text-field
                    v-model="red_student.password"
                    placeholder="Пароль"
                ></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-select
                        v-model="red_student.numGroup"
                        :items="GROUP_LIST"
                        label="Группа"
                    ></v-select>
                </v-col>
                <v-col cols="6">
                    <v-select
                        v-model="red_student.gender"
                        :items="ITEMS.gender"
                        label="Пол"
                    ></v-select>
                </v-col>
                <v-col cols="6">
                    <v-select
                    v-model="red_student.status"
                    :items="ITEMS.status"
                    label="Статус"
                    ></v-select>
                </v-col>
                <v-col cols="6">
                    <v-select
                    v-model="red_student.budget"
                    :items="ITEMS.budget"
                    label="Основа"
                    ></v-select>
                </v-col>
                <v-row cols="3"
                    class="pa-12"
                >
                    <v-col>
                        <v-row>
                            <v-checkbox v-model="red_student.orphan" :label="'Сирота'"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-checkbox v-model="red_student.invalid" :label="'Инвалид'"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-checkbox v-model="red_student.kdn" :label="'КДН'"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-checkbox v-model="red_student.idn" :label="'ИДН'"></v-checkbox>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-checkbox v-model="red_student.low_income" :label="'Мал. обес.'"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-checkbox v-model="red_student.many_children" :label="'Многодет.'"></v-checkbox>
                        </v-row>
                        <v-row>
                            <v-checkbox v-model="red_student.low_parents" :label="'Непол. семья'"></v-checkbox>
                        </v-row>
                    </v-col>
                </v-row>
            </v-row>
            </v-container>
            <v-card-actions>
            <transition name="spet_fade">
                <div class="spet_alert" v-show="created">
                    <v-alert type="success">
                    Успешно!
                    </v-alert>
                </div>
            </transition>
            <v-spacer></v-spacer>
                <v-btn
                    @click="CLOSE"
                    color="red"
                    dark
                >
                Отмена
                </v-btn>
                <v-btn v-if="mode"
                    @click="ADD_STUDENTS"
                    color="green"
                    dark
                >
                Сохранить
                </v-btn>
                <v-btn v-if="!mode"
                    @click="EDIT"
                    color="green"
                    dark
                >
                Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialog_war"
            max-width="420"
            >
            <v-card>
                <v-card-title class="headline">Будут удалены:</v-card-title>
                <v-card-text>
                    <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">ID</th>
                        <th class="text-left">Фамилия</th>
                        <th class="text-left">Отчество</th>
                        <th class="text-left">Имя</th>
                        <th class="text-left">Группа</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in SELECTED" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.surname }}</td>
                        <td>{{ item.middleName }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.numGroup }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog_war = false"
                >
                    Отмена
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="DELETE"
                >
                    Потверждаю
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
            <v-dialog
            v-model="dialog_group"
            max-width="420"
            >
            <v-card>
                <v-card-title class="headline">Удалить группу {{select_group}}?</v-card-title>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog_group = false"
                >
                    Отмена
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="DELETE_GROUP_YES"
                >
                    Потверждаю
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog_templ" persistent max-width="600px">
            <v-card>
                <v-card-title>
                <span class="headline">Дайте имя новой группе</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-text-field v-model="groupName" label="Название" required></v-text-field>
                </v-container>
                    <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Группа</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in GROUP_LIST" :key="item.id">
                        <td @click="DELETE_GROUP(item)">{{ item }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog_templ = false">Отмена</v-btn>
                <v-btn color="blue darken-1" text @click="SAVE_GROUP">Сохранить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
import TableStudents from '../components/TableStudents'

export default({
    name: "Students",
    components: {
        TableStudents
    },
    data () {
        return {
            dialog_templ: false,
            groupName: "",
            dialog_group: false,
            select_group: "",
            created: false,
            dialog: false,
            mode: false,
            dialog_war: false,
            drawer: null,
            items: [
                { icon: 'mdi-plus', text: 'Добавить студента' },
                { icon: 'mdi-credit-card', text: 'Загрузить таблицу' },
                { icon: 'mdi-printer', text: 'Печать' },
                { icon: 'mdi-pencil', text: 'Изменить' },
                { icon: 'mdi-delete', text: 'Удалить' },
                { icon: 'mdi-account-group', text: 'Добавить группу' },
            ],
            red_student:
            {
                id: "",
                surname: "",
                middleName: "",
                name: "",
                date_b: "",
                city: "",
                street: "",
                house: "",
                flat: "",
                activs: "",
                phone: "",
                info: "",
                gender: "",
                numGroup: "",
                status: "",
                login: "",
                password: "",
                budget: "",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: false,
                idn: false,
                kdn: false,
                many_children: false,
            }
        }
    },
    computed: {
        ITEMS() {
            return this.$store.state.students.ITEMS
        },
        GROUP_LIST() {
            return this.$store.state.students.GROUP_LIST
        },
        SELECTED() {
            return this.$store.state.students.SELECTED
        },
        TEMPLATES() {
            return this.$store.state.students.TEMPLATES
        },
    },
    created() {
        this.$store.dispatch("GET_GROUPS");
    },
    methods: {
        del_templ({id}) {
            this.$store.commit("DELETE_TEMPLATES", id)
        },
        use_templ(i) {
            if (Object.prototype.hasOwnProperty.call(i.dop, "key")) {
                i.filtres.orphan = false;
                i.filtres.invalid = false;
                i.filtres.low_income = false;
                i.filtres.many_children = false;
                i.filtres.idn = false;
                i.filtres.low_parents = false;
            }
            for(let e in i.dop) {
                if (i.dop[e] == "Сирота") {
                    i.filtres.orphan = true;
                } else {
                    i.filtres.orphan = false;
                }
                if (i.dop[e] == "Инвалид") {
                    i.filtres.invalid = true;
                } else {
                    i.filtres.invalid = false;
                }
                if (i.dop[e] == "Мал. Обес.") {
                    i.filtres.low_income = true;
                } else {
                    i.filtres.low_income = false;
                }
                if (i.dop[e] == "Многодет.") {
                    i.filtres.many_children = true;
                } else {
                    i.filtres.many_children = false;
                }
                if (i.dop[e] == "ИДН") {
                    i.filtres.idn = true;
                } else {
                    i.filtres.idn = false;
                }
                if (i.dop[e] == "КДН") {
                    i.filtres.kdn = true;
                } else {
                    i.filtres.kdn = false;
                }
                if (i.dop[e] == "Непол. семья") {
                    i.filtres.low_parents = true;
                } else {
                    i.filtres.low_parents = false;
                }
            }
            this.$store.commit("UPDATE_HEADERS_TABLES", {
                headers: i.headers,
                filtres: i.filtres
            })
            this.$store.commit("UPDATE_FILTRES", {
                filtres: i.filtres,
            })
            this.$store.commit("UPDATE_HEADERS", {
                headers: i.headers,
            })
        },
        OPEN_WAR() {
            this.dialog_war = true;
        },
        OPEN_LOAD() {
            this.dialog_load = true;
        },
        LOAD_FILE() {
            this.dialog_load = true;
        },
        CREATE() {
            this.red_student = {
                id: "",
                surname: "",
                middleName: "",
                name: "",
                date_b: "",
                city: "",
                street: "",
                house: "",
                flat: "",
                phone: "",
                activs: "",
                info: "",
                gender: "",
                numGroup: "",
                status: "",
                login: "",
                password: "",
                budget: "",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: false,
                idn: false,
                kdn: false,
                many_children: false,
            }
            this.mode = true;
            this.dialog = true;
        },
        CREATE_EDIT() {
            if (this.SELECTED.length != 0) {
                this.red_student = this.SELECTED[0];
                this.dialog = true;
                this.mode = false;
            }
        },
        CREATE_GROUP() {
            this.dialog_templ = true
        },
        DELETE_GROUP(item) {
            this.dialog_group = true
            this.select_group = item
        },
        DELETE_GROUP_YES() {
            this.dialog_group = false
            this.$store.dispatch("DELETE_GROUP", this.select_group);
        },
        SAVE_GROUP() {
            this.$store.dispatch("CREATE_GROUP", this.groupName);
            this.dialog_templ = false
        },
        CLOSE() {
            this.dialog = false;
        },
        CREATE_ON_TABLE() {
            console.log("CREATE_ON_TABLE")
        },
        EDIT() {
            this.$store.dispatch("UPDATE_STUDENT", this.red_student);
            this.dialog = false;
            this.red_student = {
                id: "",
                surname: "",
                middleName: "",
                name: "",
                date_b: "",
                city: "",
                street: "",
                house: "",
                flat: "",
                phone: "",
                info: "",
                activs: "",
                gender: "",
                numGroup: "",
                status: "",
                login: "",
                password: "",
                budget: "",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: false,
                idn: false,
                kdn: false,
                many_children: false,
            }
        },
        DELETE() {
            this.dialog_war = false;
            this.$store.dispatch("DELETE_STUDENT");
        },
        ADD_STUDENTS() {
            this.$store.dispatch("ADD_STUDENT", this.red_student);
            this.red_student = {
                id: "",
                surname: "",
                middleName: "",
                name: "",
                date_b: "",
                city: "",
                street: "",
                house: "",
                flat: "",
                phone: "",
                info: "",
                activs: "",
                gender: "",
                numGroup: "",
                status: "",
                login: "",
                password: "",
                budget: "",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: false,
                idn: false,
                kdn: false,
                many_children: false,
            }
            this.created = true;
            setTimeout(() => {
                this.created = false;
            }, 2000);
        }
    }
})
</script>

<style>
.spet_alert {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 30px;
}

.spet_fade-enter-active, .spet_fade-leave-active {
    transition: opacity .5s;
}
.spet_fade-enter, .spet_fade-leave-to {
    opacity: 0;
}
</style>