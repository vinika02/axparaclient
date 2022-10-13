<template>
    <!-- <div class="s">
                        
    <div class="x " data-bs-dismiss="modal" aria-label="Close">
        <img src="@/assets/images/mytalents/close.png" alt="">
    </div>
</div>
<div class="error-outline">
    <div class="error-outline-img">
       
    </div>
</div> -->

    <!-- Book interview -->
    <div class="modal fade " id="editScheModal" tabindex="-1" aria-labelledby="editScheModal" aria-hidden="true">
        <div class="modal-dialog modal-lg body">
            <div class="modal-content  ">
                <div class=" f">
                    <div class="x" data-bs-dismiss="modal" aria-label="Close">
                        <img src="@/assets/images/mytalents/persona2/close.png" alt="">
                    </div>
                    <div class="outline-frame">
                        <img src="@/assets/images/mytalents/persona2/Warn.png" alt="">
                    </div>
                </div>
                <div class="book-interview-box">
                    <div class="book-interview-outline">
                        Book Interview?
                        <div class="book-candidate">
                            Book candidate XX-12345
                            <p>on 12 SEP | 10:35 AM</p>
                        </div>
                    </div>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>(GMT) Philippines Time</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="modal-close">
                        <button type="button" class="close-btn" data-bs-dismiss="modal">NO</button>
                        <button type="button" class="close-btn2">YES</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Schedule interview -->
    <!-- <div class="outline-interview">
                <div class="sch-interview">
                    Schedule Interview
                </div>
                <div class="schedule">

                    <div class="inside-sched">
                        Schedule: 25 Jun 2022 (sat), 3:00pm (GMT + 4hrs)

                    </div>
                    <div>asd</div>

                </div>

            </div> -->

    <!--  sched interview modal -->
    <div class="modal fade " id="Scheduleinterview" tabindex="-1" aria-labelledby="Scheduleinterview"
        aria-hidden="true">
        <div class="modal-dialog modal-lg body2">
            <div class="modal-content content">
                <div class="outline-interview">
                    <div class="asd">
                        Schedule Interview
                    </div>
                    <div class="box-schedule">
                        <div class="box-schedule-text">
                            Schedule: <span style="color:#00B600">25 Jun 2022 (sat), 3:00pm (GMT + 4hrs)</span>
                        </div>
                    </div>
                    
                    <div class="picksched">
                        <div class="ss">
                            Pick a Schedule
                        </div>
                        <div class="section">
                            <div class="section1">
                                <div class="component-radio">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Quick Schedule
                                    </label>
                                </div>

                            </div>
                            <div class="date">
                                <button type="button" class=" button-date">12 SEP | 10:35 AM</button>
                                <button type="button" class=" button-date">12 SEP | 10:35 AM</button>
                                <button type="button" class="button-date">12 SEP | 10:35 AM</button>
                            </div>
                            <div class="x">
                                <div class="component-radio2">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Custom Date & Time
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div class="schedule-interview-button">
                            <button type="button" class="interview-button">Schedule Interview</button>
                        </div>
                    </div>
                </div>
               </div>     
            </div>
    </div>
    <!-- edit sched modal -->
    <div class="modal fade " id="editScheduleinterview" tabindex="-1" aria-labelledby="editScheduleinterview"
        aria-hidden="true">
        <div class="modal-dialog modal-lg body2">
            <div class="modal-content content3">
                <div class="outline-interview3">
                    <div class="confirm">
                        Edit Confirmed Schedule
                    </div>
                    <div class="box-schedule2">
                        <div class="box-schedule-text2">
                         
                           Current:<span style="color:#00B600"> 25 Jun 2022 (sat), 3:00pm (GMT + 4hrs) </span>
                        </div>
                        <div class="box-schedule-text2">
                            New: <span style="color:#00B600">25 Jun 2022 (sat), 3:00pm (GMT + 4hrs)</span>
                        </div>
                    </div>
                    <div class="picksched2">
                        <div class="ss2">
                            Pick a Schedule
                        </div>
                        <div class="sched-outline">
                            <div class="quick">
                                <div class="inside-quick">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Quick Schedule
                                    </label>
                                </div>
                                <div class="date2">
                                    <button type="button" class=" button-date">12 SEP | 10:35 AM</button>
                                    <button type="button" class=" button-date">12 SEP | 10:35 AM</button>
                                    <button type="button" class="button-date">12 SEP | 10:35 AM</button>
                                </div>
                                <div class="custom-date">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Custom Date & Time
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="schedule-interview-button">
                        <button type="button" class="interview-button">Confirm Change</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Persona2Modal',
    data() {
        return {


        }
    },
}
</script>
<style>
.body {
    height: 402px;
    width: 350px;
}

.body2 {
    width: 524px;
    height: 317px;
}  

.form-select {
    border-radius: 1px;
}

.modal-content {
    height: 402px;
    width: 350px;
    
}

.content {
    height: 317px;
    width: 524px;
}

.content3 {

    width: 524px;
    height: 367px;

}

.ss {
    padding-top: 12px;
    padding-left: 12px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #27304C;
}
.ss2 {

    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #27304C;
}
.f {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 349px;
    height: 164px;
    background: #FFAE58;

}


.outline-close {
    width: 22px;
    height: 22px;
    flex: none;
    order: 0;
    flex-grow: 0;
  
}

.outline-close-beyond {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 218px 38px;
    gap: 10px;
    width: 350px;
    height: 126px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.outline-error {
    width: 88px;
    height: 88px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.outline-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 08px 08px;
    gap: 10px;
    width: 350px;
    height: 126px;
}

.book-interview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px;
    gap: 22px;
    width: 350px;
    height: 238px;
    background: #FFFFFF;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;



}

.book-interview-outline {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 306px;
    height: 86px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 136%;
    text-align: center;
    color: #27304C;

}

.book-candidate {
    width: 306px;
    height: 44px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    color: #6D6D6D;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.modal-close {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
    width: 306px;
    height: 32px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}

.close-btn {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 14px;
    gap: 8px;
    width: 146px;
    height: 32px;
    border: 1px solid #27304C;
    border-radius: 2px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    background-color: #fff;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
}

.close-btn2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 16px;
    gap: 8px;
    width: 146px;
    height: 32px;
    border: 1px solid #ffffff;
    background: #00B600;
    border-radius: 2px;
    flex: none;
    order: 1;
    align-self: stretch;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}

.outline-interview {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 12px;
    width: 524px;
    height: 317px;
    background: #FFFFFF;
    border-radius: 2px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.asd {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 12px;
    gap: 10px;
    width: 499px;
    height: 42px;
    border-bottom: 1px solid #EDEDED;
    border-radius: 2px 2px 0px 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    display: flex;
    align-items: center;
    color: #2C91FF;
}

.box-schedule {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    width: 499px;
    height: 64px;
    border-bottom: 1px solid #EDEDED;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.box-schedule-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 9px 12px;
    gap: 10px;
    width: 500px;
    height: 40px;
    border: 1px solid #EDEDED;
    border-radius: 2px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #27304C;

}

.picksched {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 12px;
    width: 499px;
    height: 156px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #27304C;

    opacity: 0.8;
}

.section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 12px 12px 12px;
    gap: 12px;
    width: 476px;
    height: 96px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.section2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 500px;
    height: 96px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.component-radio {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 500px;
    height: 22px;
    color: #2C91FF;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
}

.date {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
    width: 500px;
    height: 32px;

}

.date2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
    width: 500px;
    height: 32px;
}

.button-date {

    align-items: center;
    padding: 12px 12px;
    gap: 8px;
    width: 148px;
    height: 32px;
    border: 1px solid #2C91FF;
    border-radius: 2px;
    flex: none;
    order: 0;
    background-color: #fff;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #2C91FF;
}

.custom {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 500px;
    height: 22px;
}

.x {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 500px;
    height: 22px;
   
}

.component-radio2 {
    display: flex;
    flex-direction: start;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 500px;
    height: 22px;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #27304C;
}

.schedule-interview-button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 8px 12px;
    gap: 10px;
    width: 499px;
    height: 48px;

    border-radius: 0px 0px 2px 2px;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;

}

.interview-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 16px;
    gap: 8px;
    width: 163px;
    height: 32px;
    background: #2C91FF;
    border: #2C91FF;
    border-radius: 2px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}

.outline-interview3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    width: 524px;
    height: 367px;

    flex: none;
    order: 1;
    flex-grow: 0;
}

.box-schedule2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 12px;
    gap: 10px;
    border-bottom: 1px solid #EDEDED;
    width: 524px;
    height: 114px;
}

.box-schedule-text2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    gap: 10px;
    width: 480px;
    height: 40px;
    border: 1px solid #EDEDED;
    border-radius: 2px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #27304C;
}

.picksched2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 0px 12px;
    gap: 12px;
    width: 499px;
    height: 136px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #27304C;

    opacity: 0.8;
}

.confirm {
    width: 524px;
    height: 42px;
    width: 500px;
    height: 26px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    display: flex;
    align-items: center;
    color: #2C91FF;


}

.sched-outline {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 500px;
    height: 96px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.quick {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 500px;
    height: 62px;

}

.inside-quick {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 480px;
    height: 22px;
    font-family: 'RubikMediumr';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #2C91FF;
}

.custom-date {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 500px;
    height: 22px;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: #27304C;
}

.confirm-change {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 8px 12px;
    gap: 10px;
    width: 499px;
    height: 48px;
    border-top: 1px solid #EDEDED;
    border-radius: 0px 0px 2px 2px;
    flex: none;
    order: 3;
    flex-grow: 0;
}
</style>