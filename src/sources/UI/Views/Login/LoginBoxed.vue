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
                                <b-form-checkbox name="check" checked="true" id="exampleCheck">
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


    function feedLocalStorageUser($http) {

        const token = localStorage.getItem("access_token");

        return $http.get('https://api.wishopper.com/v1/private/advertiser/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    export default {
        components: {},
        mounted: function () {

            if (localStorage.getItem("access_token") !== null || localStorage.getItem("access_token") !== "") {
                this.$router.push({path: '/annonces/online'})
            }
        },
        data() {
            return {
                loginError: false,
                email: "",
                password: ""
            }
        },

        methods: {

            handleSubmit: function () {
                const config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }

                if (this.password.length > 0) {
                    let $http = this.$http;
                    $http.post('https://api.wishopper.com/token_advertiser', this.$qs.stringify({
                            username: this.email,
                            password: this.password,
                        }), config
                    ).then(response => {
                        localStorage.setItem('access_token', response.data.access_token);

                        feedLocalStorageUser($http).then(res => {
                            localStorage.setItem('user', JSON.stringify(res.data))
                            if (localStorage.getItem('access_token') != null) {
                                this.$emit('loggedIn')
                                if (this.$route.params.nextUrl != null) {
                                    this.$router.push({path: this.$route.params.nextUrl});
                                } else {
                                    this.$router.push({path: '/annonces/online'})
                                }
                            }
                        }).catch(error => {
                            this.$data.loginError = true;
                            console.log(error);
                        });
                    })
                        .catch(error => {
                            this.$data.loginError = true;
                            console.log(error);
                        });
                }
            }
        },

    }
</script>