<template>
    <div>
        <div class="  bg-premium-dark">
            <div class="d-flex   justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100">
                        <div class="modal-content">
                            <div class="modal-body">
                                <h5 class="modal-title">
                                    <h4 class="mt-2">
                                        <div>Bienvenue,</div>
                                        <span>Cela ne vous prendra seulement<span class="text-success"> quelques secondes</span> pour créer votre compte</span>
                                    </h4>
                                </h5>
                                <div class="divider"/>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  placeholder="Adresse mail">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup12"
                                              description="Numéro de SIRET de l'entreprise (ex: 362 521 879 00034)"
                                              label-for="exampleInput12">
                                    <b-form-input id="exampleInput12"
                                                  type="number"
                                                  required
                                                  placeholder="SIRET">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup13"
                                              label-for="exampleInput13">
                                    <b-form-input id="exampleInput13"
                                                  type="text"
                                                  required
                                                  placeholder="Nom et prénom">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup14"
                                              description=""
                                              label-for="exampleInput14">
                                    <b-form-input id="exampleInput14"
                                                  type="text"
                                                  required
                                                  placeholder="Ville">
                                    </b-form-input>
                                </b-form-group>
                                <div class="row">
                                    <div class="col-md-6">
                                        <b-form-group id="exampleInputGroup2"
                                                      label-for="exampleInput2">
                                            <b-form-input id="exampleInput2"
                                                          type="password"
                                                          required
                                                          placeholder="Mot de passe">
                                            </b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-group id="exampleInputGroup2"
                                                      label-for="exampleInput2">
                                            <b-form-input id="exampleInput2"
                                                          type="password"
                                                          required
                                                          placeholder="Confirmer">
                                            </b-form-input>
                                        </b-form-group>
                                    </div>
                                </div>
                                <modal name="cgu">
                                    <div class="ml-3 mt-3">
                                        <h5 class="card-title">Conditions d'utilisation</h5>
                                        <hr>
                                        <h6 class="card-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit</h6>

                                    </div>
                                </modal>
                                <b-form-checkbox name="check" id="exampleCheck">
                                    J'accepte les <a @click="show()" href="#"> conditions d'utilisation</a>.
                                </b-form-checkbox>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    Vous avez déjà un compte ?
                                    <router-link to="/">
                                        <a class="text-primary">S'authentifier</a>
                                    </router-link>
                                </h6>
                            </div>
                            <div class="modal-footer d-block text-center">
                                <b-button variant="primary" class="btn-wide btn-pill btn-hover-shine"
                                          size="lg">Créer le compte
                                </b-button>
                            </div>
                        </div>

                        <div class="text-center text-white opacity-8 mt-3">
                            Copyright &copy; Wishopper
                        </div>
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>


<script>


    export default {
        components: {},

        data() {
            return {
                showModal: false
            }
        },

        methods: {
            show() {
                this.$modal.show('cgu');
            }
        }

    }
</script>