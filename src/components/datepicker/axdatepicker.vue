<template>
    <div class="date-container">
      <!-- <input type="text" v-if="type=='text-box'" @click="showDatePicker($event)"> 
      <div class="form-check mt-3" v-if="type=='radio'">
        <input class="normal-check-box  normal-radio input-radio" type="radio" id="ax-date" @click="showDatePicker($event)">
        <label class="form-check-label custoDateTime" for="ax-date">
          {{label}}
        </label>
      </div> -->
      <div class="time-and-date"  :class="{'d-none':!isDateShown}">
        <div class="d-flex ">
          <div class="calendar" :class="{'d-none':!calendar}">
            <div class="month">
              <i class=" prev"  @click="prev()">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3417 6.175L9.16675 5L4.16675 10L9.16675 15L10.3417 13.825L6.52508 10L10.3417 6.175Z" fill="#8C8C8C"/>
                  <path d="M16.1751 6.175L15.0001 5L10.0001 10L15.0001 15L16.1751 13.825L12.3584 10L16.1751 6.175Z" fill="#8C8C8C"/>
                  <path d="M32.8417 6.175L31.6667 5L26.6667 10L31.6667 15L32.8417 13.825L29.0251 10L32.8417 6.175Z" fill="#8C8C8C"/>
                </svg>
              </i>             
              <div class="date">
                <div class="month-header">{{calendarHeader}}</div>
              </div>
              <i class="next" @click="next()">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.3415 5L4.1665 6.175L7.98317 10L4.1665 13.825L5.3415 15L10.3415 10L5.3415 5Z" fill="#8C8C8C"/>
                  <path d="M10.3415 5L9.1665 6.175L12.9832 10L9.1665 13.825L10.3415 15L15.3415 10L10.3415 5Z" fill="#8C8C8C"/>
                  <path d="M28.3334 5L27.1584 6.175L30.9751 10L27.1584 13.825L28.3334 15L33.3334 10L28.3334 5Z" fill="#8C8C8C"/>
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
              <div 
              ref="daysDisplay"
              v-for="day in this.monthDays"
              :class="{'prev-date':day.prev, 'next-date':day.next, 'today':day.isToday, 'selected-date':day.selected}" 
              @click="selectedDays($event, day)"
              :key="day"  >{{day.date}}</div>
            </div>            
          </div>   
          <div :class="{'d-none':!startTime}">
              <div class="time">
                <div class="time-header">  Time Slot</div>              
              </div>
              <div class="p-14">
                <div class="time-header2 pt-0">Start Time</div>
                  <div class="d-flex time-select">
                      <div class="flex-fill pe-2">
                        <input type="text" class="form-control form-control-sm" v-model="timeData.startTime.time">
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
                          <option v-for="timez in timezones" :key="timez" :value="timez">{{timez}}</option>
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
</template>
<script>
import helpers from '../../helper/dateandtime'

export default {
    name: 'axdatepicker',
    data() {
        return {
          date:new Date(),
          calendarHeader: '',         
          timezones: {},         
          monthDays: [],
          dateData:{},
          timeData:{
              startTime: {
                time:'10:00',
                timeConvention: 'AM'
              },
              endTime: {
                time:'10:00',
                timeConvention: 'AM'
              },
              timezone: this.timeZone
          }
        }
    },
    props: {
      type: String,
      label: String,
      calendar: Date,
      startTime: Object,
      endTime: Object,
      timeZone: String,
      isDateShown: Boolean,
    },
    mounted(){
      this.timezones = helpers.getTimezone();
      this.date = this.calendar;
      this.renderCalendar();
    },
    methods:{
      // showDatePicker(e){
      //   this.isDateShown = !this.isDateShown;

      //   if(e.target.checked){      
      //     if(this.calendar){
      //       this.date = this.calendar;
      //     }
      //     this.renderCalendar();
      //   }       
      // },
      btnOk(){
        if(!this.dateData.date){
            alert('Please select date.');
            return false;
        }
        this.$emit('clicked', {showCalendar:false, dateData: this.dateData, timeData: this.timeData})
      },
      selectedDays(e, day){
        
        let date = new Date();
            date = date.getFullYear()+''+helpers.pad(date.getMonth(), 2)+''+helpers.pad(date.getDate(), 2);

      
        this.monthDays.map(d=>{
           d.selected =false;
            if(!d.next && !d.prev){
              if(d.year+''+helpers.pad(d.month, 2)+''+helpers.pad(d.date, 2) == d.year+''+helpers.pad(d.month, 2)+''+helpers.pad(e.target.outerText, 2)){
                let selectedDate = d.year+''+helpers.pad(d.month, 2)+''+helpers.pad(d.date, 2);
                 if(parseInt(selectedDate) >= parseInt(date)){
                    d.selected = true;
                    this.dateData = d;
                 }              
              }
              return d;
            }        
          }
        )      
      },
      renderCalendar(){

        if(!this.isDateShown){
          return false;
        }
        this.date.setDate(1);

        const lastDay = new Date(
          this.date.getFullYear(),
          this.date.getMonth() + 1,
          0
        ).getDate();

        const prevLastDay = new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          0
        ).getDate();

        const firstDayIndex = this.date.getDay();

        const lastDayIndex = new Date(
          this.date.getFullYear(),
          this.date.getMonth() + 1,
          0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const monthShort = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        this.calendarHeader = months[this.date.getMonth()] +' '+this.date.getFullYear();

        let monthShortName = monthShort[this.date.getMonth()].toUpperCase();
        let days = "";
        this.monthDays = [];

        for (let x = firstDayIndex; x > 0; x--) {
          let days = {
              date: prevLastDay - x + 1,
              isToday: false,
              prev: true,
              next: false,
              selected: false,
              month: this.date.getMonth(),
              shortMonth: monthShortName,
              year: this.date.getFullYear()
          }
            this.monthDays.push(days)
        }

        for (let i = 1; i <= lastDay; i++) {
          if (
            i === new Date().getDate() &&
            this.date.getMonth() === new Date().getMonth() &&
            this.date.getFullYear() === new Date().getFullYear()
          ) {
            let days = {
              date: i,
              isToday: true,
              prev: false,
              next: false,
              selected: false,
              month: this.date.getMonth(),
              shortMonth: monthShortName,
              year: this.date.getFullYear()
            }
            this.monthDays.push(days)
          } else {
            let days = {
              date: i,
              isToday: false,
              prev: false,
              next: false,
              selected: false,
              month: this.date.getMonth(),
              shortMonth: monthShortName,
              year: this.date.getFullYear()
            }
            this.monthDays.push(days)
          }
        }

        for (let j = 1; j <= nextDays; j++) {
          let days = {
              date: j,
              isToday: false,
              prev: false,
              next: true,
              selected: false,
              month: this.date.getMonth(),
              shortMonth: monthShortName,
              year: this.date.getFullYear()
          }
            this.monthDays.push(days)
        }
      },
      prev(){
        this.date.setMonth(this.date.getMonth() - 1);
        this.renderCalendar();
      },
      next(){
        this.date.setMonth(this.date.getMonth() + 1);
        this.renderCalendar();
      }
    },
}
</script>