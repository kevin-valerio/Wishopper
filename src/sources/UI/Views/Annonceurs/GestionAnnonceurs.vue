<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="main-card mb-3 center-elem ">

            <b-dropdown no-flip text="Filtrer par" class="mb-2 mr-2" variant="outline-dark">
                <h6 tabindex="-1" class="dropdown-header">Ville</h6>
                <button type="button" tabindex="0" class="dropdown-item">Croissantes</button>
                <button type="button" tabindex="0" class="dropdown-item">Décroissantes</button>
                <div tabindex="-1" class="dropdown-header">Identifiant</div>
                <button type="button" tabindex="0" class="dropdown-item">Croissantes</button>
                <button type="button" tabindex="0" class="dropdown-item">Décroissantes</button>

            </b-dropdown>

            <b-button v-b-modal.getCode class="btn-pill  btn-shadow btn-wide mb-2 mr-2 fsize-1 btn btn-primary btn-sm">
                <b>Obtenir son code</b>
            </b-button>
            <button @click="generateNewCode()"  class="btn-pill  btn-shadow btn-wide mb-2 mr-2 fsize-1 btn btn-outline-success btn-sm">
                <b>Regénérer un code</b>
            </button>
        </div>


        <div class="card main-card mb-4">
            <div class="card-body"><h4 class="card-title">Liste des enseignes</h4>
                <span>Nombre d'enseignes : <b style="color: rgb(85, 90, 191);">32</b></span>
                <table aria-busy="false" aria-colcount="3"
                       class="table b-table mt-3 table-striped table-hover table-bordered"
                       id="__BVID__200">
                    <thead role="rowgroup" class="">
                    <tr role="row">
                        <th role="columnheader" scope="col" aria-colindex="1" class="">Nom de l'enseigne</th>
                        <th role="columnheader" scope="col" aria-colindex="2" class="">Ville</th>
                        <th role="columnheader" scope="col" aria-colindex="3" class="">Date d'ajout</th>
                        <th role="columnheader" scope="col" aria-colindex="3" class="">Nombre d'annonces</th>
                    </tr>
                    </thead>
                    <tbody role="rowgroup" class="">
                    <tr role="row" class="">
                        <td role="cell" aria-colindex="1" class="">Dickerson</td>
                        <td role="cell" aria-colindex="2" class="">Macdonald</td>
                        <td role="cell" aria-colindex="3" class="">40</td>
                        <td role="cell" aria-colindex="3" class="">40</td>
                    </tr>
                    <tr role="row" class="">
                        <td role="cell" aria-colindex="1" class="">Larsen</td>
                        <td role="cell" aria-colindex="2" class="">Shaw</td>
                        <td role="cell" aria-colindex="3" class="">21</td>
                        <td role="cell" aria-colindex="3" class="">21</td>
                    </tr>
                    <tr role="row" class="">
                        <td role="cell" aria-colindex="1" class="">Geneva</td>
                        <td role="cell" aria-colindex="2" class="">Wilson</td>
                        <td role="cell" aria-colindex="2" class="">Wilson</td>
                        <td role="cell" aria-colindex="3" class="">89</td>
                    </tr>
                    </tbody>
                </table>
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

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt,);
library.add(faStar, faPlus,);


export default {
    components: {
         PageTitle,
    },
    data: () => ({
        heading: 'Gestion des enseignes',
        subheading: 'Gerez les différernts annonceurs de l\'organisation',
        icon: 'pe-7s-portfolio icon-gradient bg-tempting-azure',
    }),

    methods: {
        generateNewCode: function(){
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            };
            this.$http.get('https://api.wishopper.com/v1/private/advertiser/organization/invite/new', config).then(res => {
               alert("✔️Le code a bien été généré. Cliquez sur \"Obtenir son code\" pour le voir !");
            });
        }
    },

}
</script>
