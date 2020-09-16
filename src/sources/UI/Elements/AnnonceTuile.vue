<template>
    <div>

        <div class="content">
            <div class="main-card mb-3 card">
                <ul class="todo-list-wrapper list-group list-group-flush">

                    <li class="list-group-item">
                        <div class="todo-indicator bg-info"></div>
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <!-- TODO : Décomenter ceci, lorsque l'application sera viable-->
                                <!-- TODO (suite) : Il s'agit du compteur de vu-->
                                <!--                                <div class="widget-content-left mr-3">-->
                                <!--                                    <img src="https://image.flaticon.com/icons/svg/709/709612.svg" alt="vu">-->
                                <!--                                    <div class="widget-subheading" style="display: inline;">{{ ad.visits }}</div>-->
                                <!--                                </div>-->
                                <div class="widget-content-left mr-3">
                                    <div class="widget-content-left">
                                        <b-img thumbnail left width="200"
                                               v-bind:src="getUrlImage(ad)"/>
                                    </div>
                                </div>
                                <div class="widget-content-left">
                                    <div class="widget-subheading opacity-10">
                                        <span class="pr-2">
                                            Postée le <i> {{ ad.date_creation }}</i>
                                          </span>

                                        <span>
                                        valide du <b class="text-success">{{ ad.appearance_start }}</b> jusqu'au <b
                                            class="text-success"> {{ ad.appearance_end }}</b>
                                        </span>
                                    </div>
                                    <br>
                                    <div class="widget-heading">{{ ad.name }}</div>
                                    <div class="widget">➡ {{ ad.description }}</div>
                                    <div class="widget">
                                        {{ ad.min_age === "min_18" ? "Offre -18 ans" : (ad.min_age === "min_16" ? "Offre -16 ans" : "") }}
                                    </div>
                                    <!--                                    <div class="widget-subheading">➡ {{ ad.subcategories_references }}</div>-->
                                    <div class="widget-subheading"><i>{{ ad.promotion_type }}</i></div>
                                </div>
                                <div class="widget-content-right">
                                    <button @click="edit(ad.reference)"
                                            class="btn-pill btn-hover-shine btn btn-focus btn-lg">
                                        <b> Editer l'annonce</b>
                                    </button>
                                    <br>
                                    <br>
                                    <button @click="archive(ad.reference)"
                                            class="btn-pill btn-hover-shine btn-secondary btn ">
                                        Archiver
                                    </button>
                                </div>
                                <div class="widget-content-right mr-2">
                                    <div class="form-check mr-5">
                                        <!-- <input type="checkbox" class="form-check-input" id="exampleCheck1"-->
                                        <!-- @click="tuileSelected()"-->
                                        <!-- >-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    </div>
</template>

<script>


import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(
    faTrashAlt,
    faCheck
);

export default {
    components: {},

    mounted() {
        var dateFormat = require('dateformat');
        this.ad.date_creation = dateFormat(new Date(this.ad.date_creation), "dd/mm/yyyy à HHxxxxMM").replace('xxxx', 'h');
        this.ad.validity_start = dateFormat(new Date(this.ad.validity_start), "dd/mm/yyyy à HHxxxxMM").replace('xxxx', 'h');
        this.ad.date_creation = dateFormat(new Date(this.ad.validity_end), "dd/mm/yyyy à HHxxxxMM").replace('xxxx', 'h');
        this.ad.appearance_start = dateFormat(new Date(this.ad.appearance_start), "dd/mm/yyyy à HHxxxxMM").replace('xxxx', 'h');
        this.ad.appearance_end = dateFormat(new Date(this.ad.appearance_end), "dd/mm/yyyy à HHxxxxMM").replace('xxxx', 'h');
    },

    methods: {
        tuileSelected: function () {
            this.$root('selected')
            this.$emit('selected')
        },

        getUrlImage: function (ad) {
            let finalLink;

            if (ad.youtube !== null) {
                finalLink = 'http://i3.ytimg.com/vi/' + ad.youtube.substr(ad.youtube.length - 11) + '/hqdefault.jpg';
            } else if (ad.images !== null) {
                finalLink = ad.images[0];
            } else {
                finalLink = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
            }

            return finalLink;
        },

        edit: function (id) {
            this.$router.push({path: `/annonces/edit/${id}`});
        },

        archive: function (id) {
            //TODO : L'archive
            alert("TODO: Archive function");
        }
    },

    data: () => ({}),

    props: {
        ad: Object
    }
}
</script>
