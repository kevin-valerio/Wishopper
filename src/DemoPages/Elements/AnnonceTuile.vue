<template>
    <div>

        <div class="content">
            <div class="main-card mb-3 card">
                <ul class="todo-list-wrapper list-group list-group-flush">

                    <li class="list-group-item">
                        <div class="todo-indicator bg-info"></div>
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left mr-3">

                                    <img src="https://image.flaticon.com/icons/svg/709/709612.svg" alt="vu">
                                    <div class="widget-subheading" style="display: inline;">18</div>
                                </div>
                                <div class="widget-content-left mr-3">
                                    <div class="widget-content-left">
                                        <b-img thumbnail left src="https://picsum.photos/300/200/"/>
                                    </div>
                                </div>
                                <div class="widget-content-left">
                                    <div class="widget-heading">Offre numéro une</div>
                                    <div class="widget-subheading">Une description de l'offre numéro une</div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn btn-outline-success">
                                        <font-awesome-icon  icon="check"/>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <font-awesome-icon icon="trash-alt"/>
                                    </button>
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
        components: {
            // PageTitle,
        },
        data: () => ({
            heading: 'Annonces en ligne',
            subheading: 'Vous retrouverez ci-dessous toutes vos annonces actuellement en ligne',
            icon: 'pe-7s-ribbon icon-gradient bg-tempting-azure',
        }),


    }
</script>
