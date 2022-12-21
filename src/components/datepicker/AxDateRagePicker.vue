<template>
    <div class="date-container">
      <div class="time-and-date border-0"  :class="{'d-none':!isDateShown}">
        <div class="d-flex ">
          <div class="past-date-selection">
            <ul class="date-past">
              <li @click="pastSevenDays()">Past 7 days</li>
              <li @click="thisMonth()">This Month</li>
              <li @click="past30Ddays()">Past 30 days</li>
              <li @click="thisQuarter()">This quarter</li>
              <li @click="thisYear()">This year</li>
            </ul>
          </div>
          <div class="calendar multiple border-end-0 border-start" :class="{'d-none':!calendar}">
            <div class="input-group p-2">
              <input type="text" class="form-control date-1" v-model="date1" readonly placeholder="" aria-label="" aria-describedby="basic-addon2">
             <span class="input-group-text" id="basic-addon2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.66667 7.40442H6V8.73775H4.66667V7.40442ZM14 4.07109V13.4044C14 14.1378 13.4 14.7378 12.6667 14.7378H3.33333C2.59333 14.7378 2 14.1378 2 13.4044L2.00667 4.07109C2.00667 3.33775 2.59333 2.73775 3.33333 2.73775H4V1.40442H5.33333V2.73775H10.6667V1.40442H12V2.73775H12.6667C13.4 2.73775 14 3.33775 14 4.07109ZM3.33333 5.40442H12.6667V4.07109H3.33333V5.40442ZM12.6667 13.4044V6.73775H3.33333V13.4044H12.6667ZM10 8.73775H11.3333V7.40442H10V8.73775ZM7.33333 8.73775H8.66667V7.40442H7.33333V8.73775Z" fill="#8C8C8C"/>
                </svg>
             </span>
           </div>
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
              v-bind:id="'date-'+day.year+'-'+String(day.month).padStart(2, '0')+'-'+String(day.date).padStart(2, '0')"
              v-bind:class="'date-day'"
              @click="selectedDays($event, day)"
              :key="day"  >{{day.date}}</div>
            </div>            
          </div>   

          <div class="calendar multiple" :class="{'d-none':!calendar}">
            <div class="input-group p-2">
              <input type="text" class="form-control date-2" v-model="date2" readonly  placeholder="" aria-label="" aria-describedby="basic-addon3">
              <span class="input-group-text" id="basic-addon3">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.66667 7.40442H6V8.73775H4.66667V7.40442ZM14 4.07109V13.4044C14 14.1378 13.4 14.7378 12.6667 14.7378H3.33333C2.59333 14.7378 2 14.1378 2 13.4044L2.00667 4.07109C2.00667 3.33775 2.59333 2.73775 3.33333 2.73775H4V1.40442H5.33333V2.73775H10.6667V1.40442H12V2.73775H12.6667C13.4 2.73775 14 3.33775 14 4.07109ZM3.33333 5.40442H12.6667V4.07109H3.33333V5.40442ZM12.6667 13.4044V6.73775H3.33333V13.4044H12.6667ZM10 8.73775H11.3333V7.40442H10V8.73775ZM7.33333 8.73775H8.66667V7.40442H7.33333V8.73775Z" fill="#8C8C8C"/>
                </svg>
              </span>
           </div>
            <div class="month">
              <i class=" prev"  @click="prev2()">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3417 6.175L9.16675 5L4.16675 10L9.16675 15L10.3417 13.825L6.52508 10L10.3417 6.175Z" fill="#8C8C8C"/>
                  <path d="M16.1751 6.175L15.0001 5L10.0001 10L15.0001 15L16.1751 13.825L12.3584 10L16.1751 6.175Z" fill="#8C8C8C"/>
                  <path d="M32.8417 6.175L31.6667 5L26.6667 10L31.6667 15L32.8417 13.825L29.0251 10L32.8417 6.175Z" fill="#8C8C8C"/>
                </svg>
              </i>             
              <div class="date">
                <div class="month-header">{{calendarHeader2}}</div>
              </div>
              <i class="next" @click="next2()">
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
              v-for="day in this.monthDays2"
              :class="{'prev-date':day.prev, 'next-date':day.next, 'today':day.isToday, 'selected-date':day.selected}" 
              v-bind:id="'date-'+day.year+'-'+String(day.month).padStart(2, '0')+'-'+String(day.date).padStart(2, '0')"
              v-bind:class="'date-day'"
              @click="selectedDays($event, day)"
              :key="day"  >{{day.date}}</div>
            </div>            
          </div>  
        </div>      
      </div>
    </div>
</template>
<style>
  .date-past{
    list-style-type: none;
    padding-left: 0px;
    font-family: "RubikRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    margin-top: 8px;
  }
  .date-past li{
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .date-past li:hover{
    background-color: #E3F1FF;
    cursor: pointer;
    color:#2C91FF;
  }
  .calendar.multiple .month{
    border-top:1px solid #EDEDED
  }
  .calendar.multiple .input-group-text{
    background: unset;
    border-radius: unset;
    border-top-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border: 1px solid #EDEDED;
  }
  .calendar.multiple .date-1, .calendar.multiple .date-2{
    border-right:none;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #27304C;
  }
  .past-date-selection{
    width: 120px;
  }

  .date-container:before, .date-container:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 100%;
      width: 0;
      height: 0;
  }
  .date-container:before {
      right: 38px;
      border: 11px solid transparent;
      border-bottom-color: #ffff;
  }
  .date-from-custom-blue{
      background: #2C91FF !important;
      color:white !important;
  }
  .date-to-custom-blue{
      background: #2C91FF !important;
      color:white !important;
  }

</style>
<script>
import helpers from '../../helper/dateandtime'

export default {
    name: 'AxDateRagePicker',
    data() {
        return {
          date1:'',
          date2:'',
          date:new Date(),
          dateCalendar2:new Date(),
          calendarHeader: '',       
          calendarHeader2: '',         
          timezones: {},         
          monthDays1: [],
          monthDays2: [],
          dateData:{},
          dateSelected:{
            from: {},
            to: {}
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
      var calendar1 = new Date(this.calendar);
      var calendar2  = calendar1.setMonth(calendar1.getMonth()+1);
      this.dateCalendar2 = new Date(calendar2);
      this.renderCalendar();
      this.renderCalendar2()
      this.date1 = moment(this.date).format('YYYY-MM-DD')
      this.date2 = moment(this.dateCalendar2).format('YYYY-MM-DD')

    },
    methods:{
      btnOk(){
        if(!this.dateData.date){
            alert('Please select date.');
            return false;
        }
        this.$emit('clicked', {showCalendar:false, dateData: this.dateData, timeData: this.timeData})
      },
      pastSevenDays(){
        let date  = new Date();
        var startdate = moment();
        startdate = startdate.subtract(7, "days");

        this.date1 = moment(startdate).format('YYYY-MM-DD');
        this.date2 = moment(date).format('YYYY-MM-DD')
        this. resetCalendar()
      },
      thisMonth(){
        let date  = new Date();
        this.date1 = moment().startOf('month').format('YYYY-MM-DD');
        this.date2 =  moment().endOf('month').format('YYYY-MM-DD');
        this. resetCalendar()
      },
      past30Ddays(){
        let date  = new Date();
        var startdate = moment();
        startdate = startdate.subtract(30, "days");

        this.date1 = moment(startdate).format('YYYY-MM-DD');
        this.date2 = moment(date).format('YYYY-MM-DD')
        this. resetCalendar()
      },
      thisQuarter(){
        let qnumber =moment('2014-12-01').utc().quarter();
        let quarter = moment().quarter(qnumber).startOf('quarter')

        this.date1 = moment(quarter).format('YYYY-MM-DD');
        this.date2 =  moment().endOf('month').format('YYYY-MM-DD');
        this. resetCalendar()
      },
      thisYear(){
        let date  = new Date();
        this.date1 = date.getFullYear()+'-01-01';
        this.date2 = moment([date.getFullYear()]).endOf('year').format('YYYY-MM-DD')
        this. resetCalendar()
      },

      resetCalendar(){
        let dateClasslist = document.querySelectorAll('.date-day');
        dateClasslist.forEach(a=>{
          a.style.border = 'unset'
        })
        const classList = document.querySelectorAll('.date-to-custom-blue');
        classList.forEach(a => {
          a.classList.remove('date-to-custom-blue')
        });   
        const classList1 = document.querySelectorAll('.date-from-custom-blue');
        classList1.forEach(a => {
          a.classList.remove('date-from-custom-blue')
        });    
        this.dateSelected.from = {};
        this.dateSelected.to = {};

        this.$emit('clicked', {dateFrom:this.date1, dateTo: this.date2})
      },
      selectedDays(e, day){      

        let dateClasslist = document.querySelectorAll('.date-day');
        dateClasslist.forEach(a=>{
          a.style.border = 'unset'
        })
       

        let dateFrom = this.dateSelected.from.year+''+(String(this.dateSelected.from.month).padStart(2, '0'))+''+(String(this.dateSelected.from.date).padStart(2, '0'))
        let dateTo = day.year+''+(String(day.month).padStart(2, '0'))+''+(String(day.date).padStart(2, '0'))
        
        if(this.dateSelected.from?.date && this.dateSelected.to?.date){         
            if(parseInt(dateFrom) < parseInt(dateTo)){                   
                const classList = document.querySelectorAll('.date-to-custom-blue');
                classList.forEach(a => {
                  a.classList.remove('date-to-custom-blue')
                });     
                e.target.classList.add('date-to-custom-blue'); 
                this.dateSelected.to = day;    
            }else{       

                if(parseInt(e.target.innerText) == parseInt(day.date)){
                  const classList = document.querySelectorAll('.date-to-custom-blue');
                  classList.forEach(a => {
                    a.classList.remove('date-to-custom-blue')
                  });   
                  const classList1 = document.querySelectorAll('.date-from-custom-blue');
                  classList1.forEach(a => {
                    a.classList.remove('date-from-custom-blue')
                  });     
                  this.dateSelected.from = {};
                  this.dateSelected.to = {};
                  this.date1 = "00-00-00"
                  this.date2 = "00-00-00"
                }else{
                  const classList = document.querySelectorAll('.date-to-custom-blue');
                  classList.forEach(a => {
                    a.classList.remove('date-to-custom-blue')
                  });   
                  const classList1 = document.querySelectorAll('.date-from-custom-blue');
                  classList1.forEach(a => {
                    a.classList.remove('date-from-custom-blue')
                  });          
                  e.target.classList.add('date-from-custom-blue');              
                  this.dateSelected.from = day;
                  this.dateSelected.to = {};
                }               
            }
              
        }else{
          if(this.dateSelected.from?.date){        
            if(parseInt(dateFrom) < parseInt(dateTo)){                   
                e.target.classList.add('date-to-custom-blue'); 
                this.dateSelected.to = day;        
            }else{       
                const classList = document.querySelectorAll('.date-to-custom-blue');
                classList.forEach(a => {
                  a.classList.remove('date-to-custom-blue')
                });   
                const classList1 = document.querySelectorAll('.date-from-custom-blue');
                classList1.forEach(a => {
                  a.classList.remove('date-from-custom-blue')
                });          
                e.target.classList.add('date-from-custom-blue');              
                this.dateSelected.from = day;
                this.dateSelected.to = {};
            }
        
          }else{

            if(!this.dateSelected.from?.date){
              const classList = document.querySelectorAll('.date-from-custom-blue');
                classList.forEach(a => {
                  a.classList.remove('date-from-custom-blue')
                });  
              e.target.classList.add('date-from-custom-blue');
              this.dateSelected.from = day;
            }       
          }
        }     
        
        if(this.dateSelected.from?.date){
          let d1 = new Date(this.dateSelected.from.year +'-'+(parseInt(this.dateSelected.from.month)+1)+'-'+this.dateSelected.from.date);
          this.date1 = moment(new Date(d1)).format('YYYY-MM-DD');
          if(this.dateSelected.to?.date){
            let d2 = new Date(this.dateSelected.to.year +'-'+(parseInt(this.dateSelected.to.month)+1)+'-'+this.dateSelected.to.date);
            this.date2 = moment(d2).format('YYYY-MM-DD')
          }   

          if(this.dateSelected.from?.date && this.dateSelected.to?.date){
            let d2 = new Date(this.dateSelected.to.year +'-'+(parseInt(this.dateSelected.to.month)+1)+'-'+this.dateSelected.to.date);
            let dateFr = moment(d1).format('YYYYMMDD')
            let dateT = moment(d2).format('YYYYMMDD')

            let dateBetween =  this.getDates(dateFr, dateT);

            dateBetween.forEach(a=>{
              let splitA = a.split('-');
              let combileMakeIds = 'date-'+splitA[0]+'-'+(String((splitA[1]-1)).padStart(2, '0'))+'-'+(String((splitA[2])).padStart(2, '0'));
              document.getElementById(combileMakeIds).style.border = '1px solid #2C91FF';
            });          
          }
          
        }

        console.log(day);

        this.$emit('clicked', {dateFrom:this.date1, dateTo: this.date2})

      },
      getDates(startDate, stopDate) {
          var dateArray = [];
          var currentDate = moment(startDate);
          var stopDate = moment(stopDate);
          while (currentDate <= stopDate) {
              dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
              currentDate = moment(currentDate).add(1, 'days');
          }

          return dateArray;
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
        );

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
              date: prevLastDay.getDate() - x + 1,
              isToday: false,
              prev: true,
              next: false,
              selected: false,
              month: prevLastDay.getMonth(),
              shortMonth: monthShort[prevLastDay.getMonth()].toUpperCase(),
              year: prevLastDay.getFullYear(),            
              
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
              isToday: false, // today change to false
              prev: false,
              next: false,
              selected: false,
              month: this.date.getMonth(),
              shortMonth: monthShortName,
              year: this.date.getFullYear(),
          
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
              year: this.date.getFullYear(),
          
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
              year: this.date.getFullYear(),
             
          }
            this.monthDays.push(days)
        }
      },

      renderCalendar2(){

        if(!this.isDateShown){
          return false;
        }
        this.dateCalendar2.setDate(1);

        const lastDay = new Date(
          this.dateCalendar2.getFullYear(),
          this.dateCalendar2.getMonth() + 1,
          0
        ).getDate();

        const prevLastDay = new Date(
          this.dateCalendar2.getFullYear(),
          this.dateCalendar2.getMonth(),
          0
        );

        const firstDayIndex = this.dateCalendar2.getDay();

        const lastDayIndex = new Date(
          this.dateCalendar2.getFullYear(),
          this.dateCalendar2.getMonth() + 1,
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

        this.calendarHeader2 = months[this.dateCalendar2.getMonth()] +' '+this.dateCalendar2.getFullYear();

        let monthShortName = monthShort[this.dateCalendar2.getMonth()].toUpperCase();
        let days = "";
        this.monthDays2 = [];

        for (let x = firstDayIndex; x > 0; x--) {
          let days = {
              date: prevLastDay.getDate() - x + 1,
              isToday: false,
              prev: true,
              next: false,
              selected: false,
              month: prevLastDay.getMonth(),
              shortMonth: monthShort[prevLastDay.getMonth()].toUpperCase(),
              year: prevLastDay.getFullYear(),
           
          }
            this.monthDays2.push(days)
        }

        for (let i = 1; i <= lastDay; i++) {
          if (
            i === new Date().getDate() &&
            this.dateCalendar2.getMonth() === new Date().getMonth() &&
            this.dateCalendar2.getFullYear() === new Date().getFullYear()
          ) {
            let days = {
              date: i,
              isToday: false, // today change to false
              prev: false,
              next: false,
              selected: false,
              month: this.dateCalendar2.getMonth(),
              shortMonth: monthShortName,
              year: this.dateCalendar2.getFullYear(),
            
            }
            this.monthDays2.push(days)
          } else {
            let days = {
              date: i,
              isToday: false,
              prev: false,
              next: false,
              selected: false,
              month: this.dateCalendar2.getMonth(),
              shortMonth: monthShortName,
              year: this.dateCalendar2.getFullYear(),
           
            }
            this.monthDays2.push(days)
          }
        }

        for (let j = 1; j <= nextDays; j++) {
          let days = {
              date: j,
              isToday: false,
              prev: false,
              next: true,
              selected: false,
              month: this.dateCalendar2.getMonth(),
              shortMonth: monthShortName,
              year: this.dateCalendar2.getFullYear(),
           
          }
            this.monthDays2.push(days)
        }

      },
      prev2(){
        this.dateCalendar2.setMonth(this.dateCalendar2.getMonth() - 1);    
        this.date2 = moment(this.dateCalendar2).format('YYYY-MM-DD')
        this.renderCalendar2();
      },
      next2(){
        this.dateCalendar2.setMonth(this.dateCalendar2.getMonth() + 1);
        this.date2 = moment(this.dateCalendar2).format('YYYY-MM-DD')
        this.renderCalendar2();
      },

      prev(){
        this.date.setMonth(this.date.getMonth() - 1);
        this.date1 = moment(this.date).format('YYYY-MM-DD')
        this.renderCalendar();
      },
      next(){
        this.date.setMonth(this.date.getMonth() + 1);
        this.date1 = moment(this.date).format('YYYY-MM-DD')
        this.renderCalendar();
      }
     
    },
}
</script>