<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="6" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="h5 modal-title">
                                    Vous avez oublié votre mot de passe ?
                                    <h6 class="mt-1 mb-0 opacity-8">
                                        <span>Utilisez le formulaire ci-dessous pour faire une demande de renouvellement de mot de passe</span>
                                    </h6>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <Form>
                                        <b-row form>
                                            <b-col md="12">
                                                <b-form-group>
                                                    <Label for="exampleEmail">Adresse mail</Label>
                                                    <b-form-input type="email" name="email" id="exampleEmail"
                                                                  placeholder="nom@societe.com"/>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                    </Form>
                                </div>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    <a href="/" class="text-primary">Se connecter</a>
                                </h6>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-right">
                                    <b-button variant="primary" size="lg">Renvoyer un mot de passe</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; Wishopper
                    </div>
                </b-col>
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
    import AnnonceTuile from "@/sources/UI/Elements/AnnonceTuile";
    import PageTitle from "@/sources/UI/Views/Structure/PageTitle";

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
        components: {},
        data: () => ({}),

        methods: {},

    }


</script>