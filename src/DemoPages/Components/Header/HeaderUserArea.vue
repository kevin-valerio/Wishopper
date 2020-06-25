<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left button-content mr-3">
                        <div class="dot-success vertical-timeline-element">
                            <div><span class="vertical-timeline-element-icon bounce-in"></span>
                                <div class="vertical-timeline-element-content bounce-in">
                                    <h1 class="timeline-title">
                                        <span class="widget-heading" style="color: #555abf">31</span>
                                        <span class="widget-subheading"> Wee</span>
                                    </h1>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="widget-content-left  ml-3 header-user-info">
                        <div class="widget-heading">Kevin Valerio</div>
                        <div class="widget-subheading">Administrateur</div>
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
        data: () => ({}),

        methods: {}
    }


</script>
