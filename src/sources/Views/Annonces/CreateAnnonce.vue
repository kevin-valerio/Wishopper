<template>
    <div class="content">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="row center-elem">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Informations sur l'offre</h5>
                        <form class="">
                            <div class="position-relative form-group"><label for="exampleAddress" class="">Titre de
                                l'offre</label><input
                                name="address" id="exampleAddress" placeholder="Promotion, 40% sur le rayon bio !"
                                type="text" class="form-control">
                            </div>
                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Référence
                                produit
                            </label><input name="address2" id="exampleAddress2" placeholder="1232991F"
                                           type="email" class="form-control"></div>

                            <div class="position-relative form-group"><label for="exampleAddress2" class="">Catégories
                            </label><input name="address2" id="exampleAddress2"
                                           placeholder="high-tech, technologie, electronic"
                                           type="email" class="form-control"></div>

                            <label for="start">Période de validité</label>

                            <input type="date" id="start" name="trip-start" class="input-group"
                                   value="2018-07-22">
                        </form>
                    </div>
                </div>
            </div>


        </div>

        <div class="row center-elem">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Ciblage</h5>
                        <form class="">
                            <label>Sexe : </label>
                            <div class="ml-2 position-sticky form-check custom-control-inline"><label
                                class="form-check-label">
                                <input name="radio1" type="radio" class="form-check-input">Homme</label>
                            </div>
                            <div class="position-sticky form-check custom-control-inline"><label
                                class="form-check-label">
                                <input name="radio1" type="radio" class="form-check-input">Femme</label>
                            </div>

                            <div class="position-relative form-group">
                                <label for="exampleSelect">Age de départ</label>
                                <select
                                name="select" id="exampleSelect" is="18" class="form-control">
                                <option>1</option>
                                <option>2</option>
                            </select>
                                <label class="custom-control-inline" for="exampleSelect">Age d'arrivé</label>
                                <select
                                    name="select" id="exampleSelect" class="custom-control-inline form-control">
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>

        <div class="row center-elem">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Visuel de l'offre</h5>
                        <form class="">
                            <div class="row">
                                <div class="ml-3">
                                    <div
                                        style="padding: 1px;"
                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-primary">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div style="margin-left:60%; "
                                                             class="  widget-chart-flex">
                                                            <i class="pe-7s-film"></i>
                                                        </div>
                                                        <div class="ml-5 fsize-1 ">
                                                            <input name="radio1" type="radio" class="form-check-input">
                                                            <a href="#" style="color: #5A5A5A">Vidéo unique</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading opacity-5 center-elem margin-h-center">
                                                    Mettez une vidéo en ligne</h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="ml-3">
                                    <div
                                        style="padding: 1px;"

                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-primary">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div style="margin-left:55%; "
                                                             class="  widget-chart-flex">
                                                            <i class="pe-7s-photo"></i>
                                                        </div>
                                                        <div class="fsize-1 ml-5">
                                                            <input name="radio1" type="radio" class="form-check-input">
                                                            <a href="#" style="color: #5A5A5A">Image unique</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">
                                                    Mettez une image en ligne</h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="ml-3">
                                    <div
                                        style="padding: 1px;"

                                        class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-primary">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div style="margin-left:60%; "
                                                             class="  widget-chart-flex">
                                                            <i class="pe-7s-photo-gallery"></i>
                                                        </div>
                                                        <div class="fsize-1 ml-5">
                                                            <input name="radio1" type="radio" class="form-check-input">
                                                            <a href="#" style="color: #5A5A5A">Plusieurs images</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading mb-0 opacity-5 center-elem margin-h-center">
                                                    Mettez plusieurs images en ligne</h6>
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

        },
        data: () => ({
            heading: 'Création d\'une annonce',
            subheading: 'Mettez en ligne votre nouvelle annonce afin de la rendre visible sur l\'application mobile',
            icon: 'pe-7s-upload icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
