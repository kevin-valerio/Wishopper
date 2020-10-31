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
                                    :items="itemsPerDay"
                                    :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
                                    :disable-past="disablePast"
                                    :show-date="showDate"

                                    :disable-future="disableFuture"
                                    :show-times="showTimes"
                                    :display-period-uom="displayPeriodUom"
                                    :display-period-count="displayPeriodCount"
                                    :starting-day-of-week="startingDayOfWeek"
                                    :class="themeClasses"
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
                                    @click-item="onClickItem">

                                    <calendar-view-header
                                        slot="header"
                                        slot-scope="{ headerProps }"

                                        :header-props="headerProps"
                                        @input="setShowDate"/>

                                </calendar-view>
                            </div>

                        </div>
                        <br>
                    </form>


                </div>
                <div class="card-body">
                    <h4 class="card-title">Choix de la plage horaire</h4>
                    <table aria-busy="false" aria-colcount="3" class="table b-table table-striped table-bordered">
                        <thead role="rowgroup" class="">
                        <tr role="row">
                            <th role="columnheader" scope="col" aria-colindex="1" class="">Plage horaire</th>
                            <th role="columnheader" scope="col" aria-colindex="2" class="">Wi par annonce</th>
                            <th role="columnheader" scope="col" aria-colindex="3" class="">Apparition par jour</th>
                            <th role="columnheader" scope="col" aria-colindex="3" class="">Nombre total d'apparitions
                            </th>
                            <th role="columnheader" scope="col" aria-colindex="3" class="">Total</th>
                        </tr>
                        </thead>
                        <tbody role="rowgroup" class="">

                        <tr role="row" class="" v-bind:key="horraire" v-for="horraire in this.$data.horraires">
                            <td role="cell" aria-colindex="1" class="">{{ horraire }}</td>
                            <td role="cell" aria-colindex="2" class="">Macdonald</td>
                            <td role="cell" aria-colindex="2" class="">Macdonald</td>
                            <td role="cell" aria-colindex="2" class="">Macdonald</td>
                            <td role="cell" aria-colindex="3" class="">40</td>
                        </tr>
                        </tbody>
                    </table>
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
            horraires: [],

            message: "",
            startingDayOfWeek: 1,
            disablePast: false,
            disableFuture: false,
            displayPeriodUom: "month",
            showDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay()),
            displayPeriodCount: 1,
            displayWeekNumbers: false,
            showTimes: true,
            selectionStart: null,
            selectionEnd: null,
            useDefaultTheme: true,
            useHolidayTheme: true,
            useTodayIcons: false,
            itemsCreneau: [],
            itemsPerDay: [],
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

            this.$data.horraires = res.data;
            for (let date in res.data) {
                let minimumCost = 999999999999999999;
                for (let slot in res.data[date]) {
                    let currentTime = res.data[date][slot];
                    if (currentTime["cost_per_slot"] < minimumCost) {
                        minimumCost = currentTime["cost_per_slot"];
                    }
                }
                this.itemsPerDay.push({
                    startDate: date,
                    id: Math.random().toString(36).substr(2, 9),
                    title: "A partir de " + minimumCost + " Wi" + (minimumCost > 1 ? "s" : ""),
                });
            }

        }).catch(error => {
            alert("X " + error);
        });
    },

    methods: {

        validate: function () {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }

        },

        back: function () {
            this.$router.go(-1);
        },

        onClickDay(d) {
            alert(d.toLocaleDateString());
        },
        onClickItem(e) {
            alert(e.title);
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

.calendar-parent {
    display: flex !important;
    flex-direction: column !important;
    flex-grow: 1 !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    max-height: 80vh !important;
    background-color: white !important;
    height: 67vh;
    width: 90vw;
}
</style>