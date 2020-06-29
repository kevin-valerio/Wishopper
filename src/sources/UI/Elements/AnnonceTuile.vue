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
                                    <div class="widget-subheading opacity-10">
                                        <span class="pr-2">
                                            Posté le <i>23/03/2020,</i>
                                         </span>

                                        <span>
                                        valide jusqu'au <b class="text-success">12/04/2021</b>
                                        </span>
                                    </div>
                                    <br>
                                    <div class="widget-heading">Offre numéro une</div>
                                    <div class="widget-subheading">Une description de l'offre numéro une</div>
                                </div>
                                <div class="widget-content-right">
                                    <button class="btn-pill btn-hover-shine btn btn-focus btn-lg">Editer l'annonce
                                    </button>
                                </div>
                                <div class="widget-content-right mr-2">
                                    <div class="custom-checkbox custom-control">
                                        <input type="checkbox" id="checkbox2"
                                               class="custom-control-input">
                                        <label for="checkbox2" class="custom-control-label">&nbsp;</label>
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
        methods: {



        },
        data: () => ({}),

    }
</script>
