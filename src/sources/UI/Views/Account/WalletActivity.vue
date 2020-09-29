<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="card main-card mb-4">
            <div class="card-body"><h4 class="card-title">Achats effectués</h4>
                <span>Nombre d'achats effectués{{ achats.length > 1 ? "s" : "" }} : <b style="color: rgb(85, 90, 191);">{{
                        achats.length
                    }}</b></span>
                <table aria-busy="false" aria-colcount="3"
                       class="table b-table mt-3 table-striped table-hover table-bordered"
                       id="__BVID__200">
                    <thead role="rowgroup" class="">
                    <tr role="row">
                        <th role="columnheader" scope="col" aria-colindex="1" class="">Date</th>
                        <th role="columnheader" scope="col" aria-colindex="2" class="">Quantité</th>
                        <th role="columnheader" scope="col" aria-colindex="3" class="">Référence</th>
                    </tr>
                    </thead>
                    <tbody role="rowgroup" class="">
                    <tr v-bind:key="achat.reference" role="row" class="" v-for="achat in achats">

                        <td role="cell" aria-colindex="1" class=""><b>{{ achat.date.replace("T", " ") }}</b></td>
                        <td role="cell" aria-colindex="2" class="">{{ achat.amount_points }}</td>
                        <td role="cell" aria-colindex="3" class=""><i>{{ achat.reference }}</i></td>


                    </tr>
                    </tbody>
                </table>
            </div>


            <div v-if="usage.length !== 0" class="card-body">

                <h4 class="card-title">Utilisation des points</h4>

                <table aria-busy="false" aria-colcount="3"
                       class="table b-table mt-3 table-striped table-hover table-bordered"
                >
                    <thead role="rowgroup" class="">
                    <tr role="row">
                        <th role="columnheader" scope="col" aria-colindex="1" class="">Date</th>
                        <th role="columnheader" scope="col" aria-colindex="2" class="">Quantité</th>
                        <th role="columnheader" scope="col" aria-colindex="3" class="">Utilisation</th>
                        <th role="columnheader" scope="col" aria-colindex="3" class="">Référence</th>
                    </tr>
                    </thead>
                    <tbody role="rowgroup" class="">
                    <tr v-bind:key="us.reference" role="row" class="" v-for="us in usage">

                        <td role="cell" aria-colindex="1" class=""><b>{{ us.date.replace("T", " ") }}</b></td>
                        <td role="cell" aria-colindex="2" class="">{{ us.amount_points }}</td>
                        <td role="cell" aria-colindex="2" class="">{{ us.usage_type }}</td>
                        <td role="cell" aria-colindex="3" class=""><i>{{ us.reference }}</i></td>


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
        heading: 'Activité du porte-feuille',
        subheading: 'Gerez l\'activité du porte-feuille ici. Pour ajouter des crédits, veuillez vous rendre dans "Compte"',
        icon: 'pe-7s-wallet icon-gradient bg-tempting-azure',

        achats: [],
        usage: [],
    }),

    mounted() {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            }
        };

        this.$http.get("https://api.wishopper.com/v1/private/advertiser/wallet/activity",
            config).then(res => {
            console.log(res.data);
            this.achats = res.data.points_purchase;
            this.usage = res.data.usage;

        }).catch(error => {
            console.log(error);
        });
    },

    methods: {},

}
</script>
