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
                                        name="email" id="exampleEmail11" placeholder="362 521 879 00034" type="text"
                                        class="form-control"></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Nom
                                        commercial</label><input
                                        name="password" id="examplePassword11" placeholder="Wishopper"
                                        type="text" class="form-control"></div>
                                </div>
                            </div>
                            <div class="position-relative form-group"><label for="exampleAddress" class="">Dénomination
                                légale</label><input
                                name="address" id="exampleAddress" placeholder="SARL" type="text" class="form-control">
                            </div>
                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Email du
                                compte
                            </label><input name="address2" id="exampleAddress2" placeholder="contact@societe.com"
                                           type="email" class="form-control"></div>

                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Adresse du
                                siege social
                            </label><input name="address2" id="exampleAddress2"
                                           placeholder="123 Avenue Jean-Moulin, Paris"
                                           type="email" class="form-control"></div>

                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Adresse de
                                <i>localisation
                                    du commerce</i>
                            </label><input name="address2" id="exampleAddress2" placeholder="42 Avenue De Gaulle, Paris"
                                           type="email" class="form-control"></div>
                            <fieldset class="position-relative row form-group">
                                <legend class="col-form-label ml-3">Se connecter à un groupe</legend>
                                <div class="col-sm-10">
                                    <div class="position-sticky form-check custom-control-inline"><label
                                        class="form-check-label"><input name="radio2" type="radio"
                                                                        class="form-check-input"> Oui</label>
                                    </div>
                                    <div class="position-sticky form-check custom-control-inline"><label
                                        class="form-check-label"><input name="radio2" type="radio"
                                                                        class="form-check-input"> Non</label>
                                    </div>
                                    <div class="position-relative form-group custom-control-inline">
                                        <input name="address2" id="idGroupe" placeholder="Identifiant du groupe"
                                               type="text" class="form-control"></div>

                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Crédits Wee</h5>
                        <span> Au <b>14/11/2018</b>, vous disposez d'un crédit de <b>0 Wee</b></span><br><br>
                        <form class="">
                            <div class="row">
                                <div class="ml-3">
                                    <div
                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-secondary">
                                        <div class="widget-chat-wrapper-outer">
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
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">5€ de crédit Wee</h6>
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
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">10€ de crédit Wee</h6>
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
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">20€ de crédit Wee</h6>
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

        </div>

        <div class="row">
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
                                        <input name="password" id="nom" placeholder="Dupont"
                                               type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Prénom</label>
                                        <input name="password" id="prenom" placeholder="Jean"
                                               type="text" class="form-control">
                                    </div>
                                </div>

                            </div>

                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">E-mail</label>
                                        <input name="password" id="nom"
                                               placeholder="responsable-edition@company.fr"
                                               type="email" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Téléphone</label>
                                        <input name="password" id="prenom" placeholder="0601020304"
                                               type="text" class="form-control">
                                    </div>
                                </div>

                            </div>
                            <div class="form-row position-relative form-group">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Mot de
                                        passe</label>
                                        <input name="password" id="nom" placeholder="********"
                                               type="password" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="examplePassword11"
                                                                                     class="">Confirmation du
                                        mot de
                                        passe</label>
                                        <input name="password" id="prenom" placeholder="********"
                                               type="password" class="form-control">
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Information sur votre compte bancaire</h5>
                        <form class="">
                            <div class="col-md-6">
                                <b-dropdown no-flip text="Devise" class="col-md-5" variant="outline-dark">
                                    <button type="button" tabindex="0" class="dropdown-item">EURO (€)</button>
                                    <button type="button" tabindex="0" class="dropdown-item">DOLLARS U.S ($)
                                    </button>
                                    <button type="button" tabindex="0" class="dropdown-item">POUDS (£)</button>
                                </b-dropdown>

                                <b-dropdown no-flip text="Pays du compte bancaire" class="col-md-6"
                                            variant="outline-dark">
                                    <button type="button" tabindex="0" class="dropdown-item">France</button>
                                    <button type="button" tabindex="0" class="dropdown-item">Etats-Unis</button>
                                    <button type="button" tabindex="0" class="dropdown-item">Belgique</button>
                                </b-dropdown>

                            </div>
                            <br>

                            <div class="form-row position-relative form-group">
                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="exampleEmail11"
                                                                                     class="">IBAN</label><input
                                        name="email" id="exampleEmail11"
                                        placeholder="FR35 5000 0000 0549 1000 0003" type="text"
                                        class="form-control"></div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group"><label for="exampleEmail11"
                                                                                     class="">Confirmation de
                                        l'IBAN</label><input
                                        name="email" id="exampleEmail11"
                                        placeholder="FR35 5000 0000 0549 1000 0003" type="text"
                                        class="form-control"></div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div class="main-card mb-3 card ">
                    <div class="card-body"><h5 class="card-title">Validation</h5>
                        <form class="center-elem">

                            <button type="button" class="btn btn-lg  btn-transition btn-outline-primary ">
                                Enregistrer
                            </button>

                            <button type="button"
                                    class="btn  btn-lg ml-lg-5  btn-transition btn-outline-danger">
                                Supprimer mon compte
                            </button>


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

    import PageTitle from "@/sources/Components/PageTitle";
    import Paiement from "@/sources/Views/Account/Stripe/Paiement";

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
            Paiement,
            PageTitle,

        },
        data: () => ({
            heading: 'Mes informations',
            subheading: 'Visionnez et modifiez les informations relatives à votre compte ici',
            icon: 'pe-7s-users icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
