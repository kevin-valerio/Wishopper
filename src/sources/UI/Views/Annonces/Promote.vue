<template>
    <div class="content">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="row">


            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class=" card-body"><h5 class="card-title">Selectionnez les dates et horaires de publication </h5>
                        <br>
                        <H6>En promouvant votre annonce, tous les utilisateurs de Wishopper verront votre banière sur la
                            page principale
                            de l'application mobile</H6>

                        <br>

                        <H6><i>Vous pouvez rogner votre bannière <a target="_blank" rel="noopener noreferrer"
                                                                    href="https://www.iloveimg.com/crop-image"> sur ce
                            site</a></i></H6>
                        <form class="">
                            <div class="row">
                                <br>
                                <div class="ml-3">
                                    <img :src="uploadedFile" width="700" height="200" v-if="uploadedFile !== null">
                                </div>
                            </div>
                            <br>
                        </form>
                        <file-pond
                            name="advertiser_file"
                            ref="pond"
                            label-idle="Ajouter un média (taille 700*200) "
                            v-bind:allow-multiple="false"
                            :allowImagePreview="true"


                            v-bind:server="{
                                allowImageCrop: true,
                                url: '',
                                timeout: 5000,
                                process: {
                                    url: 'https://api.wishopper.com/v1/private/advertiser/upload/',
                                    method: 'POST',
                                    headers: {
                                         'Authorization': `Bearer ` + this.credentials
                                    },
                                    withCredentials: false
                                }
                            }"
                            accepted-file-types="image/*"
                            v-bind:files="uploadedFile"
                            v-on:processfile="handleProcessFile"/>


                    </div>
                    <div style="justify-content: flex-end; margin-right: 20px" class="center-elem custom-control mb-3">

                        <button :disabled="this.uploadedFile === null" type="button" @click="next()"
                                class="btn-group-lg btn-lg right btn btn-transition btn-outline-primary ">
                            <b>Suivant</b>
                        </button>


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
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);
library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt, faStar, faPlus);

export default {
    components: {
        PageTitle,
        FilePond

    },
    data: () => ({
        heading: 'Promouvoir une annonce',
        subheading: 'Vous pouvez, ici, promouvoir une annonce',
        icon: 'pe-7s-up-arrow icon-gradient bg-tempting-azure',

        uploadedFile: null,
        credentials: localStorage.getItem(`access_token`),

    }),

    methods: {

        handleProcessFile: function (error, file) {
            let fileName = JSON.parse(file.serverId).path;
            this.uploadedFile = ("https://api.wishopper.com/" + fileName);
        },


        next: function () {

            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }

            if(this.uploadedFile === null ){
                alert("Veuillez ajouter un média")
            } else {
                //On next()
                const uploadedFile = this.uploadedFile;
                this.$router.push({path: `/promote/steptwo/${this.$route.params.id}`, params: { uploadedFile }});
            }
        }
    },
}
</script>
