<template>
    <div class="content">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="row">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class=" card-body"><h5 class="card-title">Choisissez l'image de la bannière </h5>
                        <br>
                        <ul>En promouvant votre annonce, tous les utilisateurs de Wishopper verront votre banière sur la
                            page principale
                            de l'application mobile
                        </ul>
                        <ul>Chaque publication dure 20 secondes, et apparaitra aléatoirement sur les dates et horaires
                            choisies
                        </ul>

                        <form class="">
                            <div class="row">


                            </div>
                            <br>
                        </form>


                    </div>

                    <div class="center-elem custom-control mb-3">
                            <button type="button" @click="back()"
                                    class="btn-group-lg btn-lg left btn btn-transition btn-outline-secondary">
                                <b>Précédent</b>
                            </button>
                    </div>

                        <div style="justify-content: flex-end; margin-right: 20px"
                             class="center-elem custom-control mb-3">

                            <div class="page-title-actions">


                                <button type="button" @click="validate()"
                                        class="btn-group-lg btn-lg right btn btn-transition btn-outline-primary ">
                                    <b>Valider</b>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faAngleDown, faAngleUp, faCalendarAlt, faCheck, faPlus, faStar, faTh, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import PageTitle from "@/sources/UI/Views/Structure/PageTitle";

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt, faStar, faPlus);

export default {
    components: {
        PageTitle,

    },
    data: () => ({
        heading: 'Promouvoir une annonce - Etape 2',
        subheading: 'Dernière étape de la promotion d\'une annonce',
        icon: 'pe-7s-up-arrow icon-gradient bg-tempting-azure',

        uploadedFile: null,
        credentials: localStorage.getItem(`access_token`),

    }),

    methods: {


        validate: function () {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }

        },

        back: function () {
            this.$router.go(-1);
        }
    },
}
</script>
