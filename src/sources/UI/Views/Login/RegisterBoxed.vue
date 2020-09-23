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
                                <b-form-group
                                    description="Company & Co."
                                >
                                    <b-form-input
                                        required
                                        v-model="commercial_name"
                                        placeholder="Nom commercial de l'entreprise">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    description="36252187900034"
                                >
                                    <b-form-input
                                        required
                                        v-model="siret"
                                        placeholder="SIRET">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    description="1 Avenue de Toulon"
                                >
                                    <b-form-input
                                        required
                                        v-model="address"
                                        placeholder="Adresse postale complète">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    description="0612345678"
                                >
                                    <b-form-input
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
                                <b-form-group
                                    description="Hyeres"
                                >
                                    <b-form-input
                                        type="text"
                                        required
                                        v-model="town"
                                        placeholder="Ville">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group description="Catégorie du commerce">

                                    <div>
                                        <select class="form-control" v-model="shop_type_selected">
                                            <option v-bind:key="key1" v-for="(type, key1) in shop_type_flattened" :value="key1">
                                                {{ type }}
                                            </option>
                                        </select>

                                    </div>


                                </b-form-group>

                                <b-form-group description="83400">
                                    <b-form-input
                                        type="text"
                                        required
                                        v-model="postal_code"
                                        placeholder="Code postal">
                                    </b-form-input>
                                </b-form-group>
                                <div class="row">
                                    <div class="col-md-12">
                                        <b-form-group>
                                            <b-form-input
                                                type="password"
                                                v-model="password"
                                                required
                                                placeholder="Mot de passe">
                                            </b-form-input>
                                        </b-form-group>
                                        <hr>
                                        <p>Organisation</p>
                                        <b-form-group description="6cc0503f6e044435bab06143451fXXXX"
                                        >
                                            <b-form-input
                                                type="text"
                                                required
                                                v-model="organization_invite_code"
                                                placeholder="Code d'invitation">
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group description="Holding Group & Co">
                                            <b-form-input
                                                type="text"
                                                required
                                                v-model="organization_legal_name"
                                                placeholder="Nom de l'organisation mère">
                                            </b-form-input>
                                        </b-form-group>
                                    </div>

                                </div>
                                <div name="cgu" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
                                     aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                                    ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                                    auctor.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
            username: "",
            email: "",
            password: "",
            latitude: 0,
            longitude: 0,
            legal_name: "",
            siret: "",
            organization_invite_code: "",
            organization_legal_name: "",

            shop_type: [],
            shop_type_selected: [],
            shop_type_flattened: []
        }
    },

    mounted() {
        this.$http.get('https://api.wishopper.com/v1/public/category/').then(res => {
            this.shop_type = res.data;

            let ingredients = {};
            for (let category in this.shop_type.categories) {
                for (let type in this.shop_type.categories[category]) {
                    ingredients[type] = (this.shop_type.categories[category][type][0]);
                }
            }
            this.shop_type_flattened = ingredients;
            console.log(ingredients);

        }).catch(error => {
            console.log(error);
        });
    },

    methods: {
        createAccount: function () {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Origin': 'wishopper.com'

                }
            }
            if (!this.cgu) {
                this.$data.registerError = true;
                return;
            }
            this.$http.get('https://api-adresse.data.gouv.fr/search/?q=' + this.address + "&postcode=" + this.postal_code, {}
            ).then(res => {
                this.latitude = res.data.features[0].geometry.coordinates[0];
                this.longitude = res.data.features[0].geometry.coordinates[1];

                this.$http.post('https://api.wishopper.com/v1/public/advertiser/', {
                        email: this.email,
                        commercial_name: this.commercial_name,
                        address: this.address,
                        postal_code: this.postal_code,
                        town: this.town,
                        phone: this.phone,
                        tags: [this.shop_type_selected],
                        username: this.email,
                        password: this.password,
                        first_name: this.legal_name.split(" ")[0],
                        last_name: this.legal_name.split(" ")[1],
                        latitude: this.latitude,
                        longitude: this.longitude,
                        legal_name: this.legal_name,
                        siret: this.siret,
                        organization_invite_code: this.organization_invite_code,
                        organization_legal_name: this.organization_legal_name,
                        organization_commercial_name: this.organization_legal_name
                    }, config
                ).then(() => {
                    this.$router.push({path: '/'})
                }).catch(error => {
                    this.$data.registerError = true;
                    console.log(error.response);
                });
            })
        },

        show() {
            this.$router.push({path: '/cgu/'})
        },

    }

}
</script>