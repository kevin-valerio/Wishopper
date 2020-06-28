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
                                    <a href="/#/register/" class="text-primary">Créer un compte</a>
                                </h6>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-left">
                                    <a href="/#/password/" class="btn-lg btn btn-link">Mot de passe oublié</a>
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
        data: () => ({}),

        methods: {},

    }
</script>