<template>
    <div class="content">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="row">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Informations sur l'offre</h5>
                        <form class="">
                            <div class="position-relative form-group"><label class="">Titre de
                                l'offre</label><input
                                name="address" v-model="title"
                                placeholder="Promotion, 40% sur le rayon bio !"
                                type="text" class="form-control">
                            </div>

                            <div class="position-relative form-group">

                                <label class="">Description</label>
                                <b-textarea name="address" v-model="description" id="exampleAddress" placeholder="Profitez de 40% sur le rayon bio de votre épicerie
à compter du 18 janvier, pour les 30 ans du magasin !" type="text" class="form-control"/>

                            </div>


                            <div class="position-relative form-group"><label class="">Catégories
                            </label><input v-model="tags"
                                           placeholder="high-tech, technologie, electronique"
                                           class="form-control"></div>

                            <div class="position-relative form-group"><label class="">Type de promotion
                            </label>
                                <br>
                                <select class="form-control" v-model="promotion_type_selected">
                                    <option v-for="type in promotion_types" v-bind:value="type">
                                        {{ type }}
                                    </option>
                                </select>
                            </div>

                            <label>Période de validité (début)</label>
                            <input type="datetime-local" class="input-group"
                                   value="2018-07-22" v-model="validity_start">

                            <label>Période de validité (fin)</label>

                            <input type="datetime-local" name="trip-start" class="input-group"
                                   value="2020-09-01" v-model="validity_end">

                            <label>Date d'affichage (début)</label>
                            <input type="datetime-local" name="trip-start" class="input-group"
                                   value="2018-07-22" v-model="appearance_start">

                            <label>Date d'affichage (fin)</label>

                            <input type="datetime-local" class="input-group"
                                   value="2020-09-01" v-model="appearance_end">
                        </form>
                    </div>

                </div>
            </div>

            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class=" card-body"><h5 class="card-title">Visuel de l'offre</h5>
                        <form class="">
                            <div class="row">
                                <div class="ml-3">
                                    <div
                                        style="padding: 1px;"
                                        class="col-sm-12 col-md-12 col-xl-12 card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-primary">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div style="margin-left:60%; "
                                                             class="  widget-chart-flex">
                                                            <i class="pe-7s-film"></i>
                                                        </div>
                                                        <div class="ml-5 fsize-1 ">
                                                            <input name="radio1" type="radio"
                                                                   @change="selectVideo($event)"
                                                                   class="form-check-input">
                                                            <a href="#" style="color: #5A5A5A">Vidéo YouTube</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading opacity-5 center-elem margin-h-center">
                                                    {{ messageError }}</h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="ml-3">
                                    <div
                                        style="padding: 1px;"
                                        class="col-sm-12 col-md-12 col-xl-12 card ml-6 mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-primary">
                                        <div class="widget-chat-wrapper-outer">
                                            <div class="widget-chart-content ">
                                                <div class="widget-chart-flex">
                                                    <div class="widget-numbers">
                                                        <div style="margin-left:60%; "
                                                             class="  widget-chart-flex">
                                                            <i class="pe-7s-file"></i>
                                                        </div>
                                                        <div class="fsize-1 ml-5">
                                                            <input name="radio1" type="radio"
                                                                   class="form-check-input"
                                                                   @change="resetMessage()">
                                                            <a href="#" style="color: #5A5A5A">Autres fichiers
                                                                (images/PDF)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading opacity-5 center-elem margin-h-center">
                                                    Mettez un <i>PDF</i> ou une <i>image</i> en ligne
                                                </h6>
                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </form>
                        <file-pond
                            name="advertiser_file"
                            ref="pond"
                            label-idle="Ajoutez un média ... "
                            v-bind:allow-multiple="true"
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
                            accepted-file-types="image/jpeg, image/png, application/pdf"
                            v-bind:files="uploadedFile"
                            v-on:processfile="handleProcessFile"/>


                    </div>

                </div>
                <div class="center-elem custom-control mb-3">
                    <div>
                        <button type="button" @click="publish()"
                                class="btn-group-lg btn-lg  btn btn-transition btn-outline-primary ">
                            <b>Créer et publier l'annonce</b>
                        </button>

                        <b-img v-if="successApply" class="ml-2" width="30" height="30"
                               src="https://image.flaticon.com/icons/svg/845/845646.svg"/>
                        <span v-if="successApply"
                              class="ml-2 "><i>Annonce créee ! Vous pouvez retourner à l'accueil</i></span>
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
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
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
        heading: 'Création d\'une annonce',
        subheading: 'Mettez en ligne votre nouvelle annonce afin de la rendre visible sur l\'application mobile',
        icon: 'pe-7s-upload icon-gradient bg-tempting-azure',
        validity_end: '',
        validity_start: '',
        successApply: false,
        appearance_start: '',
        messageError: 'Mettez une vidéo YouTube ',
        appearance_end: '',
        title: '',
        uploadedFile: [],
        imageUrls: [],
        pdfUrl: '',
        credentials: localStorage.getItem(`access_token`),
        youtubeUrl: '',
        description: '',
        promotion_type_selected: 'percentage_immediate_discount',
        promotion_types: [],
        tags: []

    }),

    mounted() {
        this.$http.get('https://api.wishopper.com/v1/public/promotiontype/').then(res => {
            this.promotion_types = res.data;
        }).catch(error => {
            console.log(error);
        });
    },

    methods: {

        resetMessage: function () {
            this.messageError = 'Mettez une vidéo YouTube';
        },

        handleProcessFile: function (error, file) {
            let fileName = JSON.parse(file.serverId).path;
            if (fileName.endsWith('pdf')) {
                this.pdfUrl = fileName;
            } else {
                this.imageUrls.push("https://api.wishopper.com/" + fileName);
            }
        },

        selectVideo: function (event) {
            let urlVideo = prompt("Entrez le lien de la vidéo");
            var pattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
            if (pattern.test(urlVideo)) {
                this.youtubeUrl = urlVideo;
                this.messageError = "✅" + urlVideo.substr(urlVideo.length - 11);
            } else {
                this.messageError = "❌ Le lien entré n'est pas valide"
            }
        },

        publish: function () {

            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }

            this.$http.post('https://api.wishopper.com/v1/private/advertiser/advert/',
                {
                    name: this.title,
                    description: this.description,
                    appearance_start: this.appearance_start,
                    appearance_end: this.appearance_end,
                    validity_start: this.validity_start,
                    images: this.imageUrls,
                    youtube: this.youtubeUrl,
                    pdf_url: "https://api.wishopper.com/" + this.pdfUrl,
                    validity_end: this.validity_end,
                    // grouped_advert_list_advertiser_reference: this.,
                    promotion_details: this.description,
                    subcategories_references: this.tags.split(','),
                    promotion_type: this.promotion_type_selected,
                }, config
            ).then(response => {
                this.successApply = true;

            }).catch(error => {
                alert("❌ Impossible de créer l'annonce... [ " + error + " ]");
            });
        }
    },
}
</script>
