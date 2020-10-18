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
                                maxlength="100"
                                v-model="ad.name"

                                placeholder="Promotion, 40% sur le rayon bio !"
                                type="text" class="form-control">
                            </div>

                            <div class="position-relative form-group">

                                <label class="">Description</label>
                                <b-textarea   maxlength="4000" name="address" v-model="ad.description" id="exampleAddress" placeholder="Profitez de 40% sur le rayon bio de votre épicerie
à compter du 18 janvier, pour les 30 ans du magasin !" type="text" class="form-control"/>

                            </div>


                            <div class="position-relative form-group"><label class="">Référence
                                produit
                            </label><input v-model="ad.reference"
                                           placeholder="1232991F"
                                           disabled
                                           class="form-control"></div>

                            <div class="position-relative form-group">

                                <label class="">Catégorie </label>
                                <br>

                                    <select class="form-control" v-model="shop_type_selected">
                                        <option v-bind:key="key1" v-for="(type, key1) in shop_type_flattened" :value="key1">
                                            {{ type }}
                                        </option>
                                    </select>

                            </div>
                            <div>
                                <div class="position-relative form-group">
                                    <label class="">Prix </label>
                                </div>
                                <div class="input-group" style="margin-top: -15px; !important;">
                                    <input placeholder="Prix de l'annonce" v-model="price" step="0.5" type="number" class="form-control">
                                    <div class="input-group-append"><span class="input-group-text">€</span></div>
                                </div>
                            </div>
                            <br>
                            <div class="position-relative form-group"><label class="">Type d'offre
                            </label>
                                <br>
                                <select class="form-control" v-model="promotion_type_selected">
                                    <option v-bind:key="key1" v-for="(type, key1) in promotion_types" :value="key1">
                                        {{ type }}
                                    </option>
                                </select>
                            </div>

                            <label>Période de validité (début)</label>
                            <input type="datetime-local" class="input-group"
                                   value="2018-07-22" v-model="ad.validity_start">

                            <label>Période de validité (fin)</label>

                            <input type="datetime-local" name="trip-start" class="input-group"
                                   value="2020-09-01" v-model="ad.validity_end">

                            <label>Date d'affichage (début)</label>
                            <input type="datetime-local" name="trip-start" class="input-group"
                                   value="2018-07-22" v-model="ad.appearance_start">

                            <label>Date d'affichage (fin)</label>

                            <input type="datetime-local" class="input-group"
                                   value="2020-09-01" v-model="ad.appearance_end">
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
                                                                   v-bind:checked="this.$data.youtube !== null"
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

                                                                   :checked="this.ad.pdf_url !== undefined || this.ad.images !== undefined"

                                                                   @change="resetMessage()">
                                                            <a href="#" style="color: #5A5A5A">Autres fichiers
                                                                (images/PDF)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 class="widget-subheading opacity-5 center-elem margin-h-center">
                                                    {{ pdfMessage }}
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
                            label-idle="Modifier le média ... "
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
                            <b>Appliquer les modifications</b>
                        </button>

                        <b-img v-if="successApply" class="ml-2" width="30" height="30"
                               src="https://image.flaticon.com/icons/svg/845/845646.svg"/>
                        <span v-if="successApply"
                              class="ml-2 "><i>Annonce modifiée ! Vous pouvez retourner à l'accueil</i></span>
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
        heading: 'Edition d\'une annonce',
        subheading: 'Vous vous appretez à éditer une annonce',
        icon: 'pe-7s-edit icon-gradient bg-tempting-azure',
        successApply: false,
        messageError: 'Mettez une vidéo YouTube ',
        ad: '',
        uploadedFile: [],
        imageUrls: [],
        pdfMessage: 'Mettez un PDF ou une image en ligne',
        credentials: localStorage.getItem(`access_token`),
        promotion_type_selected: null,
        promotion_types: [],

        isForbidden16: false,
        isForbidden18: false,
        price: '',
        shop_type: [],
        shop_type_selected: null,
        shop_type_flattened: []
    }),

    mounted() {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            }
        }

        this.$http.get('https://api.wishopper.com/v1/public/promotiontype/').then(res => {
            this.promotion_types = res.data;
        }).catch(error => {
            console.log(error);
        });

        this.$http.get('https://api.wishopper.com/v1/private/advertiser/advert/?advert_reference=' + this.$route.params.id, config).then(res => {
            this.ad = res.data;
            if (this.ad.youtube !== null) {
                this.messageError = "✅" + this.ad.youtube.substr(this.ad.youtube.length - 11) + "    ";
            } else if (this.ad.images !== null) {
                let image = this.ad.images[0];
                this.pdfMessage = "✅ " + image.substring(image.lastIndexOf('/') + 1);
            } else if (this.ad.pdf_url !== null) {
                let pdf = this.ad.pdf;
                this.pdfMessage = "✅ " + pdf.substring(pdf.lastIndexOf('/') + 1);
            }
            if (this.ad.tags === null || this.ad.tags === undefined) {
                this.ad.tags = 'no-tag';
            }
            this.promotion_type_selected =  this.ad.promotion_type;
            this.shop_type_selected =  this.ad.subcategories_references[0];
            this.price = this.ad.price;
        }).catch(error => {
            alert("❌ Impossible de charger les informations de l'offre : " + error.message);
        });

        this.$http.get('https://api.wishopper.com/v1/public/category/').then(res => {
            this.shop_type = res.data;

            let ingredients = {};
            for (let category in this.shop_type.categories) {
                for (let type in this.shop_type.categories[category]) {
                    ingredients[type] = (this.shop_type.categories[category][type][0]);
                }
            }
            this.shop_type_flattened = ingredients;

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

            let real_age = null;
            if (this.isForbidden16 === true) {
                real_age = "min_16";
            } else if (this.isForbidden18 === true) {
                real_age = "min_18";
            }

            this.$http.patch('https://api.wishopper.com/v1/private/advertiser/advert/?advert_reference=' + this.$route.params.id,
                {
                    name: this.ad.title,
                    description: this.ad.description,
                    appearance_start: this.ad.appearance_start,
                    appearance_end: this.ad.appearance_end,
                    validity_start: this.ad.validity_start,
                    images: this.ad.imageUrls,
                    youtube: this.youtubeUrl,
                    price: this.price,
                    min_age: real_age,
                    pdf_url: "https://api.wishopper.com/" + this.pdfUrl,
                    validity_end: this.ad.validity_end,
                    // grouped_advert_list_advertiser_reference: this.ad.,
                    promotion_details: this.ad.description,
                    subcategories_references: [this.shop_type_selected],
                    promotion_type: this.ad.promotion_type,
                }, config
            ).then(response => {
                this.successApply = true;

            }).catch(error => {
                alert("❌ Impossible d'éditer l'annonce... [ " + error + " ]");
            });
        }
    },
}
</script>
