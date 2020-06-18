import {HTTP} from '../aixos/http'

export default {
    state: {
        DOCS: [],
        CURRENT_DOC: {},
        CURRENT_DOC_RED: {},
        CURRENT_DOC_NAME: ""
    },
    mutations: {
        UPDATE_DOCS(state, docs) {
            state.DOCS = docs
        },
        UPDATE_CURRENT_DOC(state, data) {
            state.CURRENT_DOC = data
        },
        UPDATE_CURRENT_DOC_RED(state, data) {
            state.CURRENT_DOC_RED = data
        },
        UPDATE_CURRENT_DOC_NAME(state, name) {
            state.CURRENT_DOC_NAME = name
        },
    },
    actions: {
        async GET_DOCS({commit}) {
            HTTP.get("/getDocs")
            .then(({data}) => {
                commit("UPDATE_DOCS", data)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        async GET_DOCS_NAME({commit}, file) {
            HTTP.post("/getDocs", {file})
            .then(({data}) => {
                commit("UPDATE_CURRENT_DOC", data)
                commit("UPDATE_CURRENT_DOC_RED", data)
                commit("UPDATE_CURRENT_DOC_NAME", file)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        async CREATE_DOCS_NAME({commit, state}, obj) {
            let file = state.CURRENT_DOC_NAME
            console.log({obj, file})
            HTTP.post("/createDocs", {obj, file})
            .then(({data}) => {
                console.log(data)
                console.log(commit)
                var a = document.createElement("a")
                a.setAttribute("href", "http://local.spet.pro:15280/docs/temp/"+file +"_new.docx");
                a.click();
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}