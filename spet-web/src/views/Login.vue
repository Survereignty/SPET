<template>
<v-app app dark class="spet-color">
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8>
        <v-card min-width="600">
            <v-card-title>
            <h1>Вход</h1>
            </v-card-title>
            <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Login"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="Пароль"
                    required
                    name="password"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                ></v-text-field>

                    <v-checkbox
                        v-model="checkbox"
                        label="Запомнить пароль?"
                        required
                    ></v-checkbox>

                    <v-btn class="green mr-4" dark @click="submit">Войти</v-btn>
                    <v-btn class="warning" dark @click="clear">Сбросить</v-btn>
            </v-form>
            </v-card-text>
        </v-card>
        </v-flex>
    </v-layout>
</v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
    name: "Login",
    mixins: [validationMixin],
    validations: {
        name: { required },
        password: {required},
        checkbox: {
            checked (val) {
                return val
            },
        },
    },
    data() {
        return {
            dialog: true,
            name: '',
            password: '',
            checkbox: false,
        }
    },
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.required && errors.push('Логин обязателен!')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('Пароль обязателен!')
            return errors
        },
        FROM() {
            return this.$store.state.user.from
        }
    },
    methods: {
        submit () {
            this.$v.$touch()
            this.$store.dispatch("LOGIN", {
                loginName: this.name,
                password: this.password
            })
            try {
                this.$router.push(this.FROM)
            } catch {
                this.$router.push("/")
            }
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.password = ''
            this.checkbox = false
        },
    },
 }
</script>

<style>
.spet-color {
    background: linear-gradient(to top, rgba(175, 255, 175, 0.7), #84bbff) !important;
}
</style>