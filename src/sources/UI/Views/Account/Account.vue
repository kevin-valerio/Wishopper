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
                                    <div class="position-relative form-group"><label for="exampleEmail11" class="">Numero
                                        de
                                        SIRET</label><input
                                        name="email" id="exampleEmail11" v-model="siret" placeholder="36252187900034"
                                        type="text"
                                        class="form-control"></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Nom
                                        commercial</label><input
                                        name="password" id="examplePassword11" v-model="nom_commercial"
                                        placeholder="Wishopper"
                                        type="text" class="form-control"></div>
                                </div>
                            </div>
                            <div class="position-relative form-group"><label for="exampleAddress" class="">Dénomination
                                légale</label><input
                                name="address" id="exampleAddress" placeholder="SARL" v-model="denomination" type="text"
                                class="form-control">
                            </div>
                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Email du
                                compte
                            </label><input name="address2" id="exampleAddress2" v-model="mail"
                                           placeholder="contact@societe.com"
                                           type="email" class="form-control"></div>


                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Adresse de
                                <i>localisation
                                    du commerce</i>
                            </label><input name="address2" v-model="adresse_localisation" id="exampleAddress2"
                                           placeholder="42 Avenue De Gaulle, Paris"
                                           type="email" class="form-control"></div>
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

                            <div>
                                <label for="exampleAddress2" class="">Tags du commerce
                                </label>
                                <vue-tags-input

                                    placeholder="alimentation, bio..."
                                    v-model="tag"
                                    :tags="tags"
                                    :autocomplete-items="autocompleteItems"
                                    :add-only-from-autocomplete="true"
                                    @tags-changed="update"

                                />
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
                                <b-dropdown no-flip text="Civilité" class="mb-0 mr-0" variant="outline-dark">
                                    <button type="button" tabindex="0" class="dropdown-item">Monsieur</button>
                                    <button type="button" tabindex="0" class="dropdown-item">Madame</button>
                                </b-dropdown>


                            </div>
                            <br>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Nom</label>
                                        <input name="password" v-model="nom" id="nom" placeholder="Dupont"
                                               type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Prénom</label>
                                        <input name="password" v-model="prenom" id="prenom" placeholder="Jean"
                                               type="text" class="form-control">
                                    </div>
                                </div>

                            </div>

                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">E-mail</label>
                                        <input name="password" v-model="mail_edition" id="nom"
                                               placeholder="responsable-edition@company.fr"
                                               type="email" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Téléphone</label>
                                        <input name="password" id="prenom" v-model="phone" placeholder="0601020304"
                                               type="text" class="form-control">
                                    </div>
                                </div>

                            </div>
                            <div class="form-row position-relative form-group">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Mot de
                                        passe</label>
                                        <input name="password" v-model="password" id="nom" placeholder="********"
                                               type="password" class="form-control">
                                    </div>
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
                        <span> Au <b> {{ new Date().getDate() + "/" + (parseInt(new Date().getMonth().toString()) + 1) + "/" + new Date().getFullYear() }}{{ user.credit }} Wee</b>, vous disposez d'un crédit de </span><br><br>
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
                                                                <a href="#" style="color: #5A5A5A">Court-terme</a>

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
                                                                <a href="#" style="color: #5A5A5A">Moyen-terme</a>
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
                                                                <a href="#" style="color: #5A5A5A">Long-terme</a>
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
                                        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions">
                                        </vue-dropzone>

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

    import PageTitle from "@/sources/UI/Views/Structure/PageTitle";
    import vue2Dropzone from "vue2-dropzone";
    import VueTagsInput from '@johmun/vue-tags-input';


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
            vueDropzone: vue2Dropzone,
            PageTitle,
            VueTagsInput,

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
            phone: "",
            nom: "",
            prenom: "",
            adresse_localisation: "",
            nom_commercial: "",
            mail_edition: "",
            password: "",
            mail: "",
            denomination: "",
            siret: "",


            tag: '',
            tags: [],
            debounce: null,
            autocompleteItems: [],
        }),
        watch: {
            'tag': 'initItems',
        },

        methods: {
            update: function (newTags) {
                this.autocompleteItems = [];
                this.tags = newTags;
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
                        password: this.password
                    }
                    , config
                ).then(response => {
                    this.successApply = true;

                }).catch(error => {
                    alert("Impossible d'enregistrer les informations. Veuillez vérifier vos informations");
                    console.log(error);
                });
            }
        },
    }
</script>