<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="main-card mb-3 center-elem ">



                <b-dropdown no-flip text="Filtrer par" class="mb-2 mr-2" variant="outline-dark">
                    <h6 tabindex="-1" class="dropdown-header">Dates</h6>
                    <button type="button" tabindex="0" class="dropdown-item">Croissantes</button>
                    <button type="button" tabindex="0" class="dropdown-item">Décroissantes</button>
                    <div tabindex="-1" class="dropdown-header">Nombre de visionnages</div>
                    <button type="button" tabindex="0" class="dropdown-item">Croissantes</button>
                    <button type="button" tabindex="0" class="dropdown-item">Décroissantes</button>
                </b-dropdown>

                <button class="btn-pill btn-shadow btn-wide mb-2 mr-2 fsize-1 btn btn-alternate btn-sm">
                    Supprimer la selection
                </button>

        </div>

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
            heading: 'Annonces archivées',
            subheading: 'Vous retrouverez ci-dessous toutes vos anciennes annonces dorénavant archivées',
            icon: 'pe-7s-ribbon icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
