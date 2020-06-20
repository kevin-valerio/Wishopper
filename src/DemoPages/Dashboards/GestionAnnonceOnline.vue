<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <annonce-tuile :heading=heading :subheading=subheading :icon=icon></annonce-tuile>
        <annonce-tuile :heading=heading :subheading=subheading :icon=icon></annonce-tuile>
        <annonce-tuile :heading=heading :subheading=subheading :icon=icon></annonce-tuile>
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
    import AnnonceTuile from "@/DemoPages/Elements/AnnonceTuile";
    import PageTitle from "@/Layout/Components/PageTitle";

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
        }),

        methods: {},

    }


</script>
