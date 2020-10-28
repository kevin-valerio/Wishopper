<template>
    <div class="content">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>


        <div class="col-lg-12">
            <div class="main-card mb-3 card">
                <div class=" card-body"><h5 class="card-title">Choisissez l'image de la bannière </h5>
                    <br>
                    <p>• En promouvant votre annonce, tous les utilisateurs de Wishopper verront votre banière sur la
                        page principale de l'application mobile.
                        <br>• Chaque publication dure <i> 20 secondes</i>, et apparaitra aléatoirement sur les dates et
                        horaires
                        choisies.
                    </p>

                    <form class="">
                        <div class="row">

                            <div class="calendar-parent">
                                <calendar-view
                                    :items="items"
                                    :show-date="showDate"
                                    :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
                                    :enable-drag-drop="true"
                                    :disable-past="disablePast"
                                    :disable-future="disableFuture"
                                    :show-times="showTimes"
                                    :display-period-uom="displayPeriodUom"
                                    :display-period-count="displayPeriodCount"
                                    :starting-day-of-week="startingDayOfWeek"
                                    :class="themeClasses"
                                    :period-changed-callback="periodChanged"
                                    :current-period-label="useTodayIcons ? 'icons' : ''"
                                    :displayWeekNumbers="displayWeekNumbers"
                                    :enable-date-selection="true"
                                    :selection-start="selectionStart"
                                    :selection-end="selectionEnd"
                                    @date-selection-start="setSelection"
                                    @date-selection="setSelection"
                                    @date-selection-finish="finishSelection"
                                    @drop-on-date="onDrop"
                                    @click-date="onClickDay"
                                    @click-item="onClickItem"
                                >
                                    <calendar-view-header
                                        slot="header"
                                        slot-scope="{ headerProps }"
                                        :header-props="headerProps"
                                        @input="setShowDate"
                                    />
                                </calendar-view>
                            </div>
                        </div>
                        <br>
                    </form>


                </div>

                <div class="center-elem custom-control mb-3">
                    <button type="button" @click="back()"
                            class="btn-group-lg btn-lg left btn btn-transition btn-outline-secondary">
                        <b>Précédent</b>
                    </button>
                </div>

                <div style="justify-content: flex-end; margin-right: 20px"
                     class="center-elem custom-control mb-3">

                    <div class="page-title-actions">


                        <button type="button" @click="validate()"
                                class="btn-group-lg btn-lg right btn btn-transition btn-outline-primary ">
                            <b>Valider</b>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
require("vue-simple-calendar/static/css/default.css")
require("vue-simple-calendar/static/css/holidays-us.css")
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

import PageTitle from "@/sources/UI/Views/Structure/PageTitle";
import {CalendarMathMixin, CalendarView, CalendarViewHeader,} from "vue-simple-calendar"

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt, faStar, faPlus);

export default {
    components: {
        PageTitle,
        CalendarView,
        CalendarViewHeader,
    },
    mixins: [CalendarMathMixin],

    data() {
        return {
            heading: 'Promouvoir une annonce - Etape 2',
            subheading: 'Dernière étape de la promotion d\'une annonce',
            icon: 'pe-7s-up-arrow icon-gradient bg-tempting-azure',

            uploadedFile: null,
            credentials: localStorage.getItem(`access_token`),

            showDate: this.thisMonth(1),
            message: "",
            startingDayOfWeek: 0,
            disablePast: false,
            disableFuture: false,
            displayPeriodUom: "week",

            displayPeriodCount: 1,
            displayWeekNumbers: false,
            showTimes: true,
            selectionStart: null,
            selectionEnd: null,
            useDefaultTheme: true,
            useHolidayTheme: true,
            useTodayIcons: false,
            items: [],
        }
    },

    computed: {
        userLocale() {
            return this.getDefaultBrowserLocale
        },
        dayNames() {
            return this.getFormattedWeekdayNames(this.userLocale, "long", 0)
        },
        themeClasses() {
            return {
                "theme-default": this.useDefaultTheme,
                "holiday-us-traditional": this.useHolidayTheme,
                "holiday-us-official": this.useHolidayTheme,
            }
        },
    },

    mounted() {

        this.$http.get('https://api.wishopper.com/v1/private/advertiser/advert/promotion/availability/', {headers: {'Authorization': `Bearer ${localStorage.getItem("access_token")}`}}).then(res => {

            for (let date in res.data) {
                for (let slot in res.data[date]) {
                    this.items.push({
                        startDate: this.thisMonthWithHour(date.split('-')[0], date.split('-')[1],
                            date.split('-')[2], slot, 0, 0
                        ),
                        endDate: this.thisMonthWithHour(date.split('-')[0], date.split('-')[1],
                            date.split('-')[2], slot, 59, 59
                        ),
                        title: res.data[date][slot]["available_slots"] + ". Cout: " + res.data[date][slot]["cost_per_slot"],
                        id: "e" + Math.random().toString(36).substr(2, 10),
                    })
                }
            }

        }).catch(error => {
            alert(error);
        });

        console.log(this.items);
    },

    methods: {

        validate: function () {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }

        },
        thisMonth(d, h, m) {
            const t = new Date()
            return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
        },
        back: function () {
            this.$router.go(-1);
        },

        periodChanged(range, eventSource) {
            // Demo does nothing with this information, just including the method to demonstrate how
            // you can listen for changes to the displayed range and react to them (by loading items, etc.)
            console.log(eventSource)
            console.log(range)
        },

        thisMonthWithHour(year, day, month, hours, minutes, seconds) {
            return new Date(year, month, day, hours, minutes, seconds)
        },
        onClickDay(d) {
            this.selectionStart = null
            this.selectionEnd = null
            this.message = `You clicked: ${d.toLocaleDateString()}`
        },
        onClickItem(e) {
            this.message = `You clicked: ${e.title}`
        },
        setShowDate(d) {
            this.message = `Changing calendar view to ${d.toLocaleDateString()}`
            this.showDate = d
        },
        setSelection(dateRange) {
            this.selectionEnd = dateRange[1]
            this.selectionStart = dateRange[0]
        },
        finishSelection(dateRange) {
            this.setSelection(dateRange)
            this.message = `You selected: ${this.selectionStart.toLocaleDateString()} -${this.selectionEnd.toLocaleDateString()}`
        },
        onDrop(item, date) {
            this.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`
            const eLength = this.dayDiff(item.startDate, date)
            item.originalItem.startDate = this.addDays(item.startDate, eLength)
            item.originalItem.endDate = this.addDays(item.endDate, eLength)
        },

    },
}
</script>

<style>
.calendar-controls {
    margin-right: 1rem !important;
    min-width: 14rem !important;
    max-width: 14rem !important;
}

.calendar-parent {
    display: flex !important;
    flex-direction: column !important;
    flex-grow: 1 !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    max-height: 80vh !important;
    background-color: white !important;
}

.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
    min-height: 6rem !important;
}

.theme-default .cv-item.birthday {
    background-color: #e0f0e0 !important;
    border-color: #d7e7d7 !important;
}

.theme-default .cv-item.birthday::before {
    content: "\1F382"; /* Birthday cake */
    margin-right: 0.5em !important;
}
</style>