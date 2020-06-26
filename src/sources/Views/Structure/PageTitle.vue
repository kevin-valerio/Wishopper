<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
<!--            <div class="page-title-actions">-->
<!--                <button type="button" class="btn-shadow mr-3 btn btn-dark">-->
<!--                    <font-awesome-icon icon="star"/>-->
<!--                </button>-->
<!--                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">-->
<!--                    <font-awesome-icon class="mr-2" icon="plus"/>-->
<!--                    Create New-->
<!--                </button>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faPlus, faStar} from '@fortawesome/free-solid-svg-icons'

    library.add(
        faStar,
        faPlus,
    );

    export default {
        components: {
            // 'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,

        }
    }
</script>
