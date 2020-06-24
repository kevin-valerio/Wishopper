<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div role="tablist">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" v-b-toggle.accordion1 class="p-1" role="tab">
                    <div class="pl-2 pr-2 d-block">
                        What is Lorem Ipsum?
                    </div>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <p class="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <p class="card-text">
                            {{ text }}
                        </p>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" v-b-toggle.accordion2 class="p-1" role="tab">
                    <div class="pl-2 pr-2 d-block">
                        Why do we use it?

                    </div>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <p class="card-text">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" v-b-toggle.accordion3 class="p-1" role="tab">
                    <div class="pl-2 pr-2 d-block">
                        Where can I get some?

                    </div>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <p class="card-text">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </b-card-body>
                </b-collapse>
            </b-card>
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
            PageTitle,

        },
        data: () => ({
            heading: 'FAQ',
            subheading: 'Foire Aux Questions. Vous retrouverez ici un ensemble de questions et leur réponse respective !',
            icon: 'pe-7s-info icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
