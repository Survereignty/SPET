//import {HTTP} from '../aixos/http'

export default {
    state: {
        TEMP: [
            {}
        ],
        TEMPLATES: JSON.parse(localStorage.getItem("Templates")) || [],
        HEADERS: {
            id: false,
            surname: true,
            middleName: true,
            name: true,
            date_b: false,
            city: false,
            street: false,
            house: false,
            flat: false,
            phone: false,
            info: false,
            gender: false,
            numGroup: true,
            status: false,
            login: false,
            password: false,
            budget: false,
            orphan: false,
            invalid: false,
            low_income: false,
            low_parents: false,
            idn: false,
            kdn: false,
            many_children: false,
        },
        FILTRES:
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
        },
        ITEMS: {
            dop: ["Сирота", "Инвалид", "Мал. Обес.", "ИДН", "КДН", "Многодет.", "Непол. семья"],
            budget: ["Бюджетная", "Платная"],
            gender: ["М", "Ж"],
            status: ["u", "i"]
        },
        STUDENTS: [
            {
                id: 1,
                surname: "Vasin",
                middleName: "Vasiliev",
                name: "Vasa",
                date_b: "12.12.2001",
                city: "Южно-Сахалинск",
                street: "Студенческая",
                house: "23",
                flat: "3",
                phone: "+79006647644",
                info: "Тут что то должно быть",
                gender: "муж",
                numGroup: "ОП1601",
                status: "Учиться",
                orphan: true,
                invalid: false,
                low_income: false,
                low_parents: false,
                idn: false,
                kdn: false,
                many_children: false,
                login: "",
                password: "",
                budget: "Бюджет",
            },
            {
                id: 2,
                surname: "Peta",
                middleName: "Petae",
                name: "Petae",
                date_b: "12.12.2001",
                city: "Южно-Сахалинск",
                street: "Студенческая",
                house: "23",
                flat: "3",
                phone: "+79006647644",
                info: "Тут что то должно быть",
                gender: "М",
                numGroup: "ОП1601",
                status: "Учиться",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: true,
                idn: false,
                kdn: false,
                many_children: false,
                login: "",
                password: "",
                budget: "Бюджет",
            }
        ],
        SORT_STUDENTS: [
            {
                id: 1,
                surname: "Vasin",
                middleName: "Vasiliev",
                name: "Vasa",
                date_b: "12.12.2001",
                city: "Южно-Сахалинск",
                street: "Студенческая",
                house: "23",
                flat: "3",
                phone: "+79006647644",
                info: "Тут что то должно быть",
                gender: "М",
                numGroup: "ОП1601",
                status: "Учиться",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: false,
                idn: false,
                kdn: false,
                many_children: false,
                login: "",
                password: "",
                budget: "Бюджет",
            },
            {
                id: 2,
                surname: "Peta",
                middleName: "Petae",
                name: "Petae",
                date_b: "12.12.2001",
                city: "Южно-Сахалинск",
                street: "Студенческая",
                house: "23",
                flat: "3",
                phone: "+79006647644",
                info: "Тут что то должно быть",
                gender: "М",
                numGroup: "ОП1601",
                status: "Учиться",
                orphan: false,
                invalid: false,
                low_income: false,
                low_parents: true,
                idn: false,
                kdn: false,
                many_children: false,
                login: "",
                password: "",
                budget: "Бюджет",
            }
        ],
        GROUP_LIST: [
        ],
        LOADING: false,
        SELECTED: [],
        TABLE_HEADERS: [
            { text: 'Фамилия', value: 'surname' },
            { text: 'Отчество', value: 'middleName' },
            { text: 'Имя', value: 'name' },
            { text: 'Группа', value: 'numGroup' },
        ]
    },
    mutations: {
        UPDATE_STUDENTS(state, students) {
            state.STUDENTS = students
        },
        UPDATE_FILTRES(state, filtres) {
            state.FILTRES = filtres
        },
        UPDATE_TEMPLATES(state, item) {
            item.id = state.TEMPLATES.length;
            state.TEMPLATES.push(item);
            let sItem = JSON.stringify(state.TEMPLATES);
            localStorage.setItem("Templates", sItem);
        },
        DELETE_TEMPLATES(state, id) {
            state.TEMPLATES = state.TEMPLATES.filter(i => {
                return i.id !== id
            })
            let sItem = JSON.stringify(state.TEMPLATES);
            localStorage.setItem("Templates", sItem);
        },
        UPDATE_HEADERS(state, headers) {
            state.HEADERS = headers
        },
        UPDATE_SORT_STUDENTS(state, students) {
            state.SORT_STUDENTS = students
        },
        UPDATE_SELECTED(state, students) {
            state.SELECTED = students
        },
        UPDATE_HEADERS_TABLES(state, {headers, filtres}) {
            state.TABLE_HEADERS = []
            for (let i in headers) {
                if (i === "id" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'ID', value: 'id' }
                )
                if (i === "surname" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Фамилия', value: 'surname' }
                )
                if (i === "middleName" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Отчетсво', value: 'middleName' }
                )
                if (i === "name" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Имя', value: 'name' }
                )
                if (i === "date_b" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Дата рождения', value: 'date_b' }
                )
                if (i === "city" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Нас. пункт', value: 'city' }
                )
                if (i === "street" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Улица', value: 'street' }
                )
                if (i === "house" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Дом', value: 'house' }
                )
                if (i === "flat" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Этаж', value: 'flat' }
                )
                if (i === "phone" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Дом. телефон', value: 'phone' }
                )
                if (i === "info" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Доп. информация', value: 'info' }
                )
                if (i === "gender" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Пол', value: 'gender' }
                )
                if (i === "numGroup" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Группа', value: 'numGroup' }
                )
                if (i === "status" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Статус', value: 'status' }
                )
                if (i === "login" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Логин', value: 'login' }
                )
                if (i === "password" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Пароль', value: 'password' }
                )
                if (i === "budget" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Основа', value: 'budget' }
                )
                if (i === "orphan" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Сирота', value: 'orphan' }
                )
                if (i === "invalid" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Инвалид', value: 'invalid' }
                )
                if (i === "low_income" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Мал. обес.', value: 'low_income' }
                )
                if (i === "low_parents" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Непол. семья', value: 'low_parents' }
                )
                if (i === "idn" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'ИДН', value: 'idn' }
                )
                if (i === "kdn" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'КДН', value: 'kdn' }
                )
                if (i === "many_children" & headers[i]) state.TABLE_HEADERS.push(
                    { text: 'Многодет.', value: 'many_children' }
                )
            }
            let Array = [];

            for (let el in state.STUDENTS) {
                let add = true;
                for (let i in state.STUDENTS[el]) {
                    if (filtres[i] != "")
                    {
                        if (state.STUDENTS[el][i] != filtres[i]) {
                            add = false;
                        }
                    }
                }
                if (add) {
                    Array.push(state.STUDENTS[el]);
                }
            }
            state.SORT_STUDENTS = Array
        }
    },
    actions: {
        async ADD_STUDENT({commit, state}, item) {
            state.STUDENTS.push(item)
            commit("UPDATE_HEADERS_TABLES", {
                headers: state.HEADERS,
                filtres: state.FILTRES
            })
        },
        async UPDATE_STUDENT({commit, state}, item) {
            state.STUDENTS =  state.STUDENTS.map(o => {
                if (o.id === item.id) {
                    return item;
                }
                return o;
            });
            commit("UPDATE_HEADERS_TABLES", {
                headers: state.HEADERS,
                filtres: state.FILTRES
            })
        },
        async DELETE_STUDENT({commit, state}, items) {
            items.map(a => {
                state.STUDENTS = state.STUDENTS.filter(i => {
                    return i.id !== a.id
                })
            })
            commit("UPDATE_HEADERS_TABLES", {
                headers: state.HEADERS,
                filtres: state.FILTRES
            })
        }
    }
}