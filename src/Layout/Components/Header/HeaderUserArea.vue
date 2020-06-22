<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                          <span slot="button-content">
                                                              <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                                                  <img width="42" class="rounded-circle"
                                                                       src="@/assets/images/avatars/1.jpg" alt="">
                                                              </div>
                                                          </span>
                        <!--                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" right>-->
                        <!--                            <span slot="button-content">-->
                        <!--                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">-->
                        <!--                                    <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">-->
                        <!--                                </div>-->
                        <!--                            </span>-->
                        <!--                            <button type="button" tabindex="0" class="dropdown-item">Menus</button>-->
                        <!--                            <button type="button" tabindex="0" class="dropdown-item">Settings</button>-->
                        <!--                            <h6 tabindex="-1" class="dropdown-header">Header</h6>-->
                        <!--                            <button type="button" tabindex="0" class="dropdown-item">Actions</button>-->
                        <!--                            <div tabindex="-1" class="dropdown-divider"></div>-->
                        <!--                            <button type="button" tabindex="0" class="dropdown-item">Dividers</button>-->
                        <!--                        </b-dropdown>-->
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
