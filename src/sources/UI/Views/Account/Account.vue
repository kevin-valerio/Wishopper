<template>
    <div class="content">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="row">
            <div class="col-lg-6">

                <div class="main-card mb-3 card">

                    <div class="card-body"><h5 class="card-title">Informations sur la société</h5>
                        <form class="">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label class="">Numero
                                        de
                                        SIRET</label><input
                                        v-model="siret" placeholder="36252187900034"
                                        type="text"
                                        class="form-control"></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label>Nom commercial</label><input
                                        name="password" id="examplePassword11" v-model="nom_commercial"
                                        placeholder="Wishopper"
                                        type="text" class="form-control"></div>
                                </div>
                            </div>

                            <div style="width: 100%;">


                                <label for="exampleInput11" class="">Horaires du commerce
                                </label>
                                <br>
                                <div class="btn-group v-size--large" style="width: 100%;" role="group">
                                    <input id="exampleInput11"
                                           placeholder='[[1, "08:00", "12:00"], [1, "15:00", "17:00"], [3, "00:00", "00:00"]]'
                                           required="required"
                                           v-model="horaires"
                                           aria-required="true" class="form-control"
                                           aria-describedby="exampleInputGroup1__BV_description_">

                                    <button type="button"
                                            @click="applyHoraires()"
                                            class="ml-2 custom-control-inline  btn btn-transition btn-outline-primary">
                                        <small>Appliquer</small>
                                    </button>


                                    <b-img v-if="successApplyHoraires" class="ml-2" width="30" height="30"
                                           src="https://image.flaticon.com/icons/svg/845/845646.svg"/>
                                    <span v-if="successApplyHoraires" class="ml-2 "><i>Horaires changés</i></span>
                                </div>
                                <small tabindex="-1" id="exampleInputGroup1__BV_description_"
                                       class="form-text text-muted">
                                    Dans l'exemple (supprimez le texte ci-dessus pour le faire apparaitre si besoin), le
                                    magasin est ouvert le lundi de 8h à 12h, puis de 15h à 17.
                                    Ensuite, il est ouvert le mercredi toute la journée.

                                </small>
                                <br>

                            </div>


                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Adresse de
                                <i>localisation
                                    du commerce</i>
                            </label><input name="address2" v-model="adresse_localisation" id="exampleAddress2"
                                           placeholder="42 Avenue De Gaulle, Paris"
                                           class="form-control"></div>
                            <!--                            <fieldset class="position-relative row form-group">-->
                            <!--                                <legend class="col-form-label ml-3">Se connecter à un groupe</legend>-->
                            <!--                                <div class="col-sm-10">-->
                            <!--                                    <div class="position-sticky form-check custom-control-inline"><label-->
                            <!--                                        class="form-check-label"><input name="radio2" type="radio"-->
                            <!--                                                                        class="form-check-input"> Oui</label>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="position-sticky form-check custom-control-inline"><label-->
                            <!--                                        class="form-check-label"><input name="radio2" type="radio"-->
                            <!--                                                                        class="form-check-input"> Non</label>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="position-relative form-group custom-control-inline">-->
                            <!--                                        <input name="address2" id="idGroupe" placeholder="Identifiant du groupe"-->
                            <!--                                               type="text" class="form-control"></div>-->

                            <!--                                </div>-->
                            <!--                            </fieldset>-->


                            <!--                                <label for="exampleAddress2" class="">Tags du commerce-->
                            <!--                                </label>-->
                            <!--                                <input name="password" v-model="tags" id="tags" placeholder="nourriture, bio"-->
                            <!--                                       type="text" class="form-control">-->
                            <div class="position-relative form-group"><label class="">Type de magasin
                            </label>
                                <br>
                                <select class="form-control" v-model="shop_type_selected">
                                    <option v-bind:key="key1" v-for="(type, key1) in shop_type_flattened" :value="key1">
                                        {{ type }}
                                    </option>
                                </select>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Responsable de l'édition</h5>
                        <form class="">
                            <div class="form-row">
                                <!--                                <b-dropdown no-flip text="Civilité" class="mb-0 mr-0" variant="outline-dark">-->
                                <!--                                    <button type="button" tabindex="0" class="dropdown-item">Monsieur</button>-->
                                <!--                                    <button type="button" tabindex="0" class="dropdown-item">Madame</button>-->
                                <!--                                </b-dropdown>-->


                            </div>
                            <br>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Nom</label>

                                        <input name="password" v-model="nom" placeholder="Dupont"
                                               type="text" class="form-control">

                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label
                                        class="">Prénom</label>

                                        <input v-model="prenom" placeholder="Jean"
                                               type="text" class="form-control">

                                    </div>
                                </div>

                            </div>

                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Email</label>
                                        <input v-model="mail_edition"
                                               placeholder="responsable-edition@company.fr"
                                               type="email" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label
                                        class="">Téléphone</label>

                                        <input v-model="phone" placeholder="0601020304"
                                               type="text" class="form-control">

                                    </div>
                                </div>

                            </div>
                            <div class="form-row position-relative form-group">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label
                                        class="">Mot de
                                        passe</label>
                                        <input name="password" v-model="password" placeholder="********"
                                               type="password" class="form-control">
                                    </div>
                                    <span
                                        style="color: #ff4925"><i>Veuillez toujours saisir votre mot de passe !</i></span>
                                </div>


                            </div>
                        </form>
                    </div>

                    <div class="center-elem custom-control mb-3">
                        <div>
                            <button type="button" @click="changeParams()"
                                    class="btn-group-lg btn-lg  btn btn-transition btn-outline-primary ">
                                <b>Enregistrer toutes les modifications</b>
                            </button>
                        </div>


                        <b-img v-if="successApply" class="ml-2" width="30" height="30"
                               src="https://image.flaticon.com/icons/svg/845/845646.svg"/>
                        <span v-if="successApply" class="ml-2 "><i>Modifications appliquées</i></span>

                        <div class="ml-5">
                            <button type="button"
                                    class=" align-self-end btn btn-group-lg btn-lg btn-transition btn-outline-danger">
                                <i> Supprimer mon compte </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Crédits Wee</h5>
                        <span> Au <b> {{
                                new Date().getDate() + "/" + (parseInt(new Date().getMonth().toString()) + 1) + "/" + new Date().getFullYear()
                            }}</b>, vous disposez d'un crédit de {{ user.balance }} Wee</span><br><br>
                        <form class="">
                            <div class="row">
                                <div class="ml-3">
                                    <div
                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-secondary">
                                        <div class="widget-chat-wrapper-outer" id="#offre">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div class="widget-chart-flex">
                                                            <div class="fsize-3 ">
                                                                <a href="#" v-on:click="addMoney(5)"
                                                                   style="color: #5A5A5A">Court-terme</a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">
                                                    5€ de crédit Wi</h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="ml-3">
                                    <div
                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-dark">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div class="widget-chart-flex">
                                                            <div class="fsize-3 ">
                                                                <a href="#" v-on:click="addMoney(10)"
                                                                   style="color: #5A5A5A">Moyen-terme</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">
                                                    10€ de crédit Wi</h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="ml-3">
                                    <div
                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-primary">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div class="widget-chart-flex">
                                                            <div class="fsize-3 ">
                                                                <a href="#" v-on:click="addMoney(20)"
                                                                   style="color: #5A5A5A">Long-terme</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">
                                                    20€ de crédit Wi</h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Logo</h5>
                        <span>Déposez votre logo ci-dessous, il servira à être affiché sur la plateforme afin de pouvoir être repéré facilement
                            par les utilisateurs</span><br><br>
                        <form class="">
                            <div class="row">
                                <div class="ml-3" style="width: 100%;">
                                    <div
                                        class="card  widget-chart text-center card-btm-border border-light">
                                        <file-pond
                                            name="advertiser_file"
                                            ref="pond"
                                            label-idle="Ajoutez votre logo ... "
                                            v-bind:allow-multiple="false"
                                            v-bind:server="{
                                                url: 'https://api.wishopper.com/',
                                                timeout: 7000,
                                                process: {
                                                    url: 'v1/private/advertiser/upload/',
                                                    method: 'POST',
                                                    headers: {
                                                         'Authorization': `Bearer ` + this.credentials
                                                    },
                                                    withCredentials: false
                                                }
                                            }"
                                            accepted-file-types="image/jpeg, image/png"
                                            v-bind:files="logo"
                                            v-on:processfile="handleProcessFile"/>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';


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
import vueFilePond from 'vue-filepond';
import PageTitle from "@/sources/UI/Views/Structure/PageTitle";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

library.add(
    faTrashAlt,
    faCheck,
    faAngleDown,
    faAngleUp,
    faTh,
    faCalendarAlt,
);
library.add(
    faStar,
    faPlus,
);

export default {
    components: {
        PageTitle,
        FilePond
    },

    data: () => ({
        heading: 'Mes informations',
        user: JSON.parse(localStorage.getItem('user')),
        subheading: 'Visionnez et modifiez les informations relatives à votre compte ici',
        icon: 'pe-7s-users icon-gradient bg-tempting-azure',
        dropzoneOptions: {
            url: 'https://httpbin.org/post',
            thumbnailWidth: 200,
            addRemoveLinks: true,
            maxFilesize: 3
        },
        successApply: false,
        successApplyHoraires: false,
        phone: "",
        nom: "",
        prenom: "",
        adresse_localisation: "",
        nom_commercial: "",
        mail_edition: "",
        password: "",
        mail: "",
        siret: "",
        logo_url: null,
        logo: "",
        horaires: "",
        tag: '',
        tags: '',
        debounce: null,
        autocompleteItems: [],
        credentials: localStorage.getItem(`access_token`),
        shop_type_selected: '',
        shop_type_flattened: [],
        shop_type: [],

    }),
    watch: {
        'tag': 'initItems',
    },


    methods: {

        addMoney: function (quantity) {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            };

            this.$http.post('https://api.wishopper.com/v1/private/advertiser/wallet/?amount=' + quantity, {}, config,
            ).then(() => {
                this.$router.push({path: '/'})
            }).catch(error => {
                alert("Impossible d'ajouter de l'argent")
                console.log(error.response);
            });
        },

        handleProcessFile: function (error, file) {
            this.logo_url = "https://api.wishopper.com/" + JSON.parse(file.serverId).path;
        },

        feedInformations: function () {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }
            this.$http.get('https://api.wishopper.com/v1/private/advertiser/',
                config).then(res => {
                this.nom_commercial = res.data.commercial_name;
                this.adresse_localisation = res.data.address;
                this.postal_code = res.data.postal_code;
                this.town = res.data.town;
                this.phone = res.data.phone;
                this.prenom = res.data.first_name;
                this.nom = res.data.last_name;
                this.tags = res.data.tags;
                this.latitude = res.data.latitude;
                this.siret = res.data.siret;
                this.username = res.data.username;
                this.mail_edition = res.data.email;
                this.longitude = res.data.longitude;


            }).catch(error => {
                console.log(error);
            });

            this.$http.get('https://api.wishopper.com/v1/private/advertiser/opening-hours/',
                config).then(res => {
                this.horaires = JSON.stringify(res.data.opening_hours);

            }).catch(error => {
                console.log(error);
            });
        },

        applyHoraires: function () {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }
            this.$http.post('https://api.wishopper.com/v1/private/advertiser/opening-hours/',
                {
                    opening_hours: JSON.parse(this.horaires)
                }
                , config
            ).then(() => {
                this.successApplyHoraires = true;

            }).catch(error => {
                alert("Impossible d'enregistrer les horaires. Veuillez vérifier le format du champ");
                console.log(error);
            });

        },

        initItems: function () {

            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.$http.get(`https://api.wishopper.com/v1/public/category/`).then(response => {
                    this.autocompleteItems = response.data.results.map(a => {
                        return {text: a.categories};
                    });
                }).catch(error => console.error(error));
            }, 600);
        },

        changeParams: function () {
            const config = {
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }
            this.$http.patch('https://api.wishopper.com/v1/private/advertiser/',
                {
                    commercial_name: this.nom_commercial,
                    address: this.adresse_localisation,
                    phone: this.phone,
                    first_name: this.prenom,
                    last_name: this.nom,
                    advert_order: "name_asc",
                    email: this.mail_edition,
                    password: this.password,
                    logo_url: this.logo_url,
                    tags: this.shop_type_selected
                }
                , config
            ).then(() => {
                this.successApply = true;
                localStorage.clear();
                this.$router.push({path: '/'});

            }).catch(error => {
                alert("Impossible d'enregistrer les informations. Veuillez vérifier vos informations");
                console.log(error);
            });
        }
    },

    mounted() {
        this.feedInformations();
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
}
</script>