<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">

                <div class="widget-content-wrapper">

                    <div class="widget-content-right right">
                        <b-img src="https://picsum.photos/50/50/"/>
                    </div>

                    <div class="widget-content-left button-content mr-3">

                        <div class="dot-success vertical-timeline-element">

                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">

                                    <h1 class="timeline-title">
                                        <span class="widget-subheading">Crédits : </span>
                                        <router-link to="/account">
                                            <a class="widget-heading" style="color: #555abf">{{ user.credit }}</a>
                                        </router-link>
                                        <span class="widget-subheading"> Wi</span>
                                    </h1>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="widget-content-left  ml-3 header-user-info">
                        <div class="widget-heading"> {{ user.legal_name }}</div>
                        <div class="widget-subheading">{{ user.commercial_name }}</div>
                    </div>
                    <div class="widget-content-right header-user-info ml-3">
                        <button title="" type="button" @click="disconnect()"
                                class="pe-7s-close-circle  icon-gradient   btn-shadow mr-3 btn btn-danger">
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
        faAngleDown,
        faCalendarAlt,
        faCheck,
        faCloudDownloadAlt,
        faEllipsisH,
        faFileAlt,
        faFileArchive,
        faFileExcel,
        faFilePdf,
        faTrashAlt,
    } from '@fortawesome/free-solid-svg-icons'

    library.add(
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    );

    export default {
        components: {},
        data: () => ({
            user: JSON.parse(localStorage.getItem('user'))
        }),

        methods: {
            disconnect: function () {
                localStorage.clear();
                this.$router.push({path: '/'});
            }
        }
    }


</script>
