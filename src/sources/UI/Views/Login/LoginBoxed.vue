<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <div class="alert alert-warning" v-if="loginError" role="alert">
                                        Les informations rentrées sont invalides
                                    </div>
                                    <h4 class="mt-2">
                                        <div>Bienvenue sur Wishopper</div>
                                        <span>Veuillez vous identifier</span>
                                    </h4>
                                </div>

                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                >
                                    <b-form-input id="email"
                                                  type="email"
                                                  required
                                                  autofocus
                                                  v-model="email"
                                                  placeholder="Adresse mail">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                              label-for="exampleInput2">
                                    <b-form-input id="password"
                                                  type="password"
                                                  v-model="password"
                                                  required
                                                  placeholder="Mot de passe">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-checkbox name="check" id="exampleCheck">
                                    Garder ma session ouverte
                                </b-form-checkbox>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    Pas encore de compte ?
                                    <router-link to="/register">
                                        <a class="text-primary">Créer un compte</a>
                                    </router-link>
                                </h6>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-left">
                                    <router-link to="/forgot-password">
                                        <a class="btn-lg btn btn-link">Mot de passe oublié</a>
                                    </router-link>
                                </div>
                                <div class="float-right">
                                    <b-button @click="handleSubmit" variant="primary" size="lg">S'authentifier
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; Wishopper
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'

    import {
        faAngleDown,
        faAngleUp,
        faCalendarAlt,
        faCheck,
        faPlus,
        faStar,
        faTh,
        faTrashAlt,
    } from '@fortawesome/free-solid-svg-icons'

    library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faStar, faPlus, faCalendarAlt,);

    export default {
        components: {},
        data() {
            return {
                loginError: false,
                email: "",
                password: ""
            }
        },

        methods: {

            //TODO : Remove in production
            localLogin: function () {

                if (this.email === "admin@admin.fr" && this.password === "admin") {
                    console.log("Still creating a fake account");

                    console.log("Setting default account [TESTING MODE]");

                    localStorage.setItem('user', JSON.stringify({
                        is_admin: true,
                        name: "Kevin Valerio",
                        credit: 108,
                        role: "Maison mère - Carrefour"
                    }));

                    localStorage.setItem('jwt', "WTF_TOKEN");
                    if (localStorage.getItem('jwt') != null) {
                        this.$emit('loggedIn')
                        if (this.$route.params.nextUrl != null) {
                            this.$router.push({path: this.$route.params.nextUrl});
                        } else {
                            this.$router.push({path: '/annonces/online'})
                        }
                    }
                } else {
                    this.$data.loginError = true;

                }
            },

            handleSubmit: function () {
                if (this.password.length > 0) {
                    this.$http.post('http://google.fr/', {
                            email: this.email,
                            password: this.password,
                        }
                    ).then(response => {


                        //TODO : Faire varier les variables (lol)
                        localStorage.setItem('user', JSON.stringify(response.data.user))
                        localStorage.setItem('jwt', response.data.token)

                        if (localStorage.getItem('jwt') != null) {
                            this.$emit('loggedIn')
                            if (this.$route.params.nextUrl != null) {
                                this.$router.push({path: this.$route.params.nextUrl});
                            } else {
                                this.$router.push({path: '/annonces/online'})
                            }
                        }


                    })
                        .catch(error => {
                            this.$data.loginError = true;
                            console.log(error.response);
                            this.localLogin();
                        });
                }
            }
        },

    }
</script>