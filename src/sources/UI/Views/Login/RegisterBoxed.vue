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

                                    <div class="alert alert-warning" v-if="registerError" role="alert">
                                        Des informations manquent, ou sont éronnées
                                    </div>

                                </h5>
                                <div class="divider"/>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="contact@societe.com">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  v-model="email"
                                                  placeholder="Adresse mail">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup12"
                                              description="Company & Co."
                                              label-for="exampleInput12">
                                    <b-form-input id="exampleInput12"
                                                  required
                                                  v-model="commercial_name"
                                                  placeholder="Nom commercial de l'entreprise">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup12"
                                              description="362 521 879 00034"
                                              label-for="exampleInput12">
                                    <b-form-input id="exampleInput12"
                                                  required
                                                  v-model="siret"
                                                  placeholder="SIRET">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup12"
                                              description="123 Avenue Jean Costaud, Paris"
                                              label-for="exampleInput12">
                                    <b-form-input id="exampleInput12"
                                                  required
                                                  v-model="address"
                                                  placeholder="Adresse postale complète">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup12"
                                              description="06 12 34 56 78"
                                              label-for="exampleInput12">
                                    <b-form-input id="exampleInput12"
                                                  required
                                                  v-model="phone"
                                                  placeholder="Numéro de téléphone">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup13"
                                              description="Jean Dupond"
                                              label-for="exampleInput13">
                                    <b-form-input id="exampleInput13"
                                                  type="text"
                                                  required
                                                  v-model="legal_name"
                                                  placeholder="Nom et prénom">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup1222"
                                              description="Paris"
                                              label-for="exampleInput1222">
                                    <b-form-input id="exampleInput12222"
                                                  type="text"
                                                  required
                                                  v-model="town"
                                                  placeholder="Ville">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group id="exampleInputGroup1222"
                                              description="nourriture,bio,sucreries"
                                              label-for="exampleInput1222">
                                    <b-form-input id="exampleInput12222"
                                                  type="text"
                                                  required
                                                  v-model="tags"
                                                  placeholder="Tags de la boutique">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group id="exampleInputGroup1222"
                                              description="75000"
                                              label-for="exampleInput1222">
                                    <b-form-input id="exampleInput12222"
                                                  type="text"
                                                  required
                                                  v-model="postal_code"
                                                  placeholder="Code postal">
                                    </b-form-input>
                                </b-form-group>
                                <div class="row">
                                    <div class="col-md-12">
                                        <b-form-group id="exampleInputGroup2"
                                                      label-for="exampleInput2">
                                            <b-form-input id="exampleInput2"
                                                          type="password"
                                                          v-model="password"
                                                          required
                                                          placeholder="Mot de passe">
                                            </b-form-input>
                                        </b-form-group>
                                        <hr>
                                        <p>Organisation</p>
                                        <b-form-group id="exampleInputGroup1222"
                                                      description="XXX XXX XX"
                                                      label-for="exampleInput1222">
                                            <b-form-input id="exampleInput12222"
                                                          type="text"
                                                          required
                                                          v-model="organization_invite_code"
                                                          placeholder="Code d'invitation">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group id="exampleInputGroup1222"
                                                      description="Holding Group & Co"
                                                      label-for="exampleInput1222">
                                            <b-form-input id="exampleInput12222"
                                                          type="text"
                                                          required
                                                          v-model="organization_legal_name"
                                                          placeholder="Maison mère">
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
                                <b-form-checkbox v-model="cgu" name="check" id="exampleCheck">
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
                                <b-button variant="primary" @click="createAccount"
                                          class="btn-wide btn-pill btn-hover-shine"
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
                showModal: false,
                registerError: false,
                cgu: false,

                commercial_name: "",
                address: "",
                postal_code: "",
                town: "",
                phone: "",
                tags: "",
                username: "",
                email: "",
                password: "",
                latitude: 0,
                longitude: 0,
                legal_name: "",
                siret: "",
                organization_invite_code: "",
                organization_legal_name: ""
            }
        },

        methods: {
            createAccount: function () {

                if (!this.cgu) {
                    this.$data.registerError = true;
                    return;
                }
                this.$http.post('https://api.wishopper.com/v1/public/advertiser/', {
                        email: this.email,
                        commercial_name: this.commercial_name,
                        address: this.address,
                        postal_code: this.postal_code,
                        town: this.town,
                        phone: this.phone,
                        tags: this.tags.split(","),
                        username: this.email,
                        password: this.password,
                        first_name: this.legal_name.split(" ")[0],
                        last_name: this.legal_name.split(" ")[1],
                        latitude: 0,
                        longitude: 0,
                        legal_name: this.legal_name,
                        siret: this.siret,
                        organization_invite_code: this.organization_invite_code,
                        organization_legal_name: this.organization_legal_name,
                        organization_commercial_name: this.organization_legal_name
                    }
                ).then(response => {
                    this.$router.push({path: '/'})
                })
                    .catch(error => {
                        this.$data.registerError = true;
                        console.log(error.response);
                    });
            },

            show() {
                this.$modal.show('cgu');
            },

        }

    }
</script>