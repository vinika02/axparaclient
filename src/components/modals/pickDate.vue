<template>
    <div class="modal" tabindex="-1" aria-labelledby="datepick" aria-hidden="true" id="datepick">

        <div class="time-and-date" :class="{ 'd-none': !isDateShown }">
            <div class="d-flex ">
                <div class="calendar" :class="{ 'd-none': !calendar }">
                    <div class="month">
                        <i class=" prev" @click="prev()">
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.3417 6.175L9.16675 5L4.16675 10L9.16675 15L10.3417 13.825L6.52508 10L10.3417 6.175Z"
                                    fill="#8C8C8C" />
                                <path
                                    d="M16.1751 6.175L15.0001 5L10.0001 10L15.0001 15L16.1751 13.825L12.3584 10L16.1751 6.175Z"
                                    fill="#8C8C8C" />
                                <path
                                    d="M32.8417 6.175L31.6667 5L26.6667 10L31.6667 15L32.8417 13.825L29.0251 10L32.8417 6.175Z"
                                    fill="#8C8C8C" />
                            </svg>
                        </i>
                        <div class="date">
                            <div class="month-header">{{ calendarHeader }}</div>
                        </div>
                        <i class="next" @click="next()">
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.3415 5L4.1665 6.175L7.98317 10L4.1665 13.825L5.3415 15L10.3415 10L5.3415 5Z"
                                    fill="#8C8C8C" />
                                <path
                                    d="M10.3415 5L9.1665 6.175L12.9832 10L9.1665 13.825L10.3415 15L15.3415 10L10.3415 5Z"
                                    fill="#8C8C8C" />
                                <path
                                    d="M28.3334 5L27.1584 6.175L30.9751 10L27.1584 13.825L28.3334 15L33.3334 10L28.3334 5Z"
                                    fill="#8C8C8C" />
                            </svg>
                        </i>
                    </div>
                    <div class="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="days" ref="days">
                        <div ref="daysDisplay" v-for="day in this.monthDays"
                            :class="{ 'prev-date': day.prev, 'next-date': day.next, 'today': day.isToday, 'selected-date': day.selected }"
                            @click="selectedDays($event, day)" :key="day">{{ day.date }}</div>
                    </div>
                </div>
                <div :class="{ 'd-none': !startTime }">
                    <div class="time">
                        <div class="time-header"> Time Slot</div>
                    </div>
                    <div class="p-14">
                        <div class="time-header2 pt-0">Start Time</div>
                        <div class="d-flex time-select">
                            <div class="flex-fill pe-2">
                                <input type="text" class="form-control form-control-sm"
                                    v-model="timeData.startTime.time">
                            </div>
                            <div class="flex-fill">
                                <select class="form-select form-select-sm" v-model="timeData.startTime.timeConvention">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <div class="time-header2">End Time</div>
                        <div class="d-flex time-select">
                            <div class="flex-fill pe-2">
                                <input type="text" class="form-control form-control-sm" v-model="timeData.endTime.time">
                            </div>
                            <div class="flex-fill">
                                <select class="form-select form-select-sm" v-model="timeData.endTime.timeConvention">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <div class="time-header2">Time Zone</div>
                        <div class="d-flex time-select">
                            <div class="flex-fill">
                                <select class="form-select form-select-sm w-100 time-zone" v-model="timeData.timezone">
                                    <option v-for="timez in timezones" :key="timez" :value="timez">{{ timez }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="ax-calendar-button text-end">
                <button class="btn btn-sm btn-custom-blue btn-ok" @click="btnOk()">Ok</button>
            </div>
        </div>
    </div>
    <pickDate></pickDate>
</template>
<script>


export default {
    name: 'pickDate',
    data() {

    },
}
</script>
>