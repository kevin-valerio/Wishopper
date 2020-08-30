<template>
    <div>

        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <annonce-tuile v-for="ad in ads" v-bind:key="ad.name" :ad=ad></annonce-tuile>

    </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import AnnonceTuile from "@/sources/UI/Elements/AnnonceTuile";
import PageTitle from "@/sources/UI/Views/Structure/PageTitle";
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
        AnnonceTuile,
        PageTitle,

    },
    data: () => ({
        heading: 'Annonces en ligne',
        subheading: 'Vous retrouverez ci-dessous toutes vos annonces actuellement en ligne',
        icon: 'pe-7s-ribbon icon-gradient bg-tempting-azure',
        ads: {}
    }),

    mounted() {+
        this.getAllAds();
    },

    methods: {
        getAllAds: function () {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }
            this.$http.get('https://api.wishopper.com/v1/private/advertiser/advert/all', config).then(res => {
                this.ads = res.data;
                console.log(this.ads);
            }).catch(error => {
                alert("❌ Impossible de charger les posts");
                console.log(error);
            });
        },
    },
}
</script>
