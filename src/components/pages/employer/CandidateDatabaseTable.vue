<template>
    <div class="bg-custom-gray pb-5" @click="containerClick($event)">
        <Banner></Banner>
        <div class="container-fluid app-container p-t-24">
            <div class="content-container dashboard ">
                <div class="Table-1">
                    <div class="modal-header p-0">
                        <div class="input-group search-skill"
                                >
                            <input type="text" class="form-control input-skill-scanner-keyword"
                                v-model="addSkillFilter"
                                @click="openSkills($event, true)"
                                :data-skills="true"
                                @keyup="suggestSkills($event)"
                                placeholder="Search keywords or select skills"
                                aria-label="Search keywords or select skills" aria-describedby="input-skill-scanner-keyword">
                            <span class="input-group-text search-icon" id="input-skill-scanner-keyword" @click="filterData($event)">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="#EDEDED"/>
                                </svg>
                            </span>
                            <div class="skills-dropdown" @click="skillsDropdown($event)" v-if="showSkills">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="filter-primary-skills" v-for="(s, index) in skills.primarySkills" :key="index">
                                            <div @click="addToFilter($event, s)" class="cursor-pointer">
                                                {{s}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="most-search">
                                            Most searched skills:
                                        </div> 
                                        <div class="" >                                            
                                            <button v-for="(o, index) in moreSkill" :key="index" class="btn btn-sm btn-sky-blue btn-filter-skill cursor-pointer">
                                                +
                                                <span @click="addToFilter($event, o)">
                                                    {{o}}
                                                </span>
                                            </button>
                                        </div>
                                        <div class="text-end">
                                            <button class="btn btn-sm btn-custom-blue btn-see-all-skills" @click="seeAll($vent)" v-if="seeAllSkill">
                                                See All Skills
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="all-skills" v-if="otherSkillsPopup" @click="skillsDropdown($event)">
                                <div class="input-group other-skill-search mb-3">
                                    <input type="text" class="form-control" data-skills="other-skills" placeholder="Search skills" v-model="filter.otherSkill" @keyup="suggestSkills($event)" aria-label="Search skills" aria-describedby="basic-addon2">
                                    <span class="input-group-text clear-other-skill bg-white" id="basic-addon2" @click="clearOtherSkill($event)">
                                        <svg width="15" height="15" class=" " viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.0399 8.99906L15.3134 2.71312C15.4018 2.60866 15.3274 2.44995 15.1908 2.44995H13.5877C13.4933 2.44995 13.4029 2.49214 13.3406 2.56446L8.99129 7.7495L4.64196 2.56446C4.58169 2.49214 4.49129 2.44995 4.39486 2.44995H2.79173C2.65513 2.44995 2.5808 2.60866 2.66919 2.71312L7.94263 8.99906L2.66919 15.285C2.64939 15.3083 2.63669 15.3368 2.63259 15.367C2.62849 15.3973 2.63317 15.4282 2.64607 15.4559C2.65898 15.4836 2.67956 15.507 2.70538 15.5234C2.7312 15.5397 2.76117 15.5483 2.79173 15.5482H4.39486C4.48928 15.5482 4.57968 15.506 4.64196 15.4337L8.99129 10.2486L13.3406 15.4337C13.4009 15.506 13.4913 15.5482 13.5877 15.5482H15.1908C15.3274 15.5482 15.4018 15.3895 15.3134 15.285L10.0399 8.99906Z" fill="#EDEDED"/>
                                        </svg>
                                    </span>                                    

                                    <span class="input-group-text border-left-6D6D6D search-icon bg-white" id="basic-addon3" @click="filterData($event)">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="#EDEDED"/>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <div class="d-flex align-content-start flex-wrap">
                                        <div class="other-skill-card" v-for="otherSkill in otherSkills" :key="otherSkill">
                                            <div class="other-skill-name">{{otherSkill.name}}</div>
                                            <div class="other-skill-data" v-for="s, index in otherSkill.data" :key="index">
                                                <div class="mt-2" :class="{'other-skill-name':s.skill=='Design'}">{{s.skill}}</div>                                                
                                                <button v-for="(o, index) in s.data" :key="index" class="btn btn-sm btn-sky-blue btn-filter-skill cursor-pointer">
                                                    +
                                                    <span @click="addToFilter($event, o)">
                                                        {{o}}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>                                       
                                    </div>
                                    <div class="p-3">
                                        <div class="text-end">
                                            <button class="btn btn-custom-blue btn-see-all-skills" @click="closeOtherSkills($event)">
                                                Back to Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input-group search-skill w-378 ps-3">
                            <div class="d-flex select-country form-control">
                                <div class="flex-fill d-flex cursor-pointer"  @click="countryDropdownEvent($event)">
                                    <div class="flex-fill country-name">Country</div>
                                    <div class="flex-fill text-end">
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.825 0.158203L5 3.97487L1.175 0.158203L0 1.3332L5 6.3332L10 1.3332L8.825 0.158203Z" fill="#27304C"/>
                                        </svg>
                                    </div>
                                </div>
                                
                                <div class="country-dropdown" :class="{'d-none':!countryDropdown}">
                                    <div class="form-check" v-for="(ctry, index) in countries" :key="index">
                                        <input class="form-check-input country-check" :data-checkbox="true" :checked="ctry == 'All Country'" type="checkbox" @change="filterData($event)" :value="ctry" :id="ctry">
                                        <label class="form-check-label" :for="ctry">
                                           {{ctry}}
                                        </label>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="input-group w-835 ps-3">
                            <div class="d-flex">
                                <div class="monthly-rate">Monthly Rate</div>
                                <div >
                                    <input type="number" class="form-control select-input w-100 " @keyup="filterData($event)" placeholder="Min" v-model="filter.monthlyRateMin">
                                </div>
                                <div class="to-separator">to</div>
                                <div c>
                                    <input type="number" class="form-control select-input w-100 " @keyup="filterData($event)" placeholder="Max" v-model="filter.monthlyRateMax">
                                </div>
                            </div>                           
                        </div>                       

                        
                    </div>
                    <!-- table view -->

                    <div>
                        <table class="candidate-data" id="cadidate-db">
                            <tr>
                                <th>
                                    <div class="d-flex">
                                        <div>  Talent ID/Name  </div>
                                        <div>  <img src="@/assets/images/mytalents/persona2/Sort.png" alt="">    </div>
                                    </div>
                                                                   
                                </th>
                                <th width="300">
                                    <div class="d-flex">
                                        <div>  Skills  </div>
                                        <div>  <img src="@/assets/images/mytalents/persona2/Sort.png" alt=""> </div>
                                    </div>                                                                        
                                </th>
                                <th>
                                    Monthly Rate     <img src="@/assets/images/mytalents/persona2/Sort.png" alt="">
                                </th>
                                <th>
                                    Country     <img src="@/assets/images/mytalents/persona2/Sort.png" alt="">
                                </th>
                                <th>
                                    CV / Intro Video   
                                </th>
                                <th >
                                    Schedule Interview 
                                </th>
                                <th></th>
                            </tr>
                            <tr v-for="data in candidateDBdata" :key="data" class="tr-list-data">
                                <td> <a :href="data.CVLink" class="talent-id" target="_blank">{{data.TalentID}}</a></td>
                                <td>
                                    <div class="d-flex flex-wrap skills-badge-content">
                                        <div v-for="skill, index in data.Skills" :key="index">                                           
                                            <span class="badge item-skill" :title="skill" :class="{'tag-pink': index == 0, 'tag-violet': index > 0 }">
                                                {{skill}}
                                            </span>                                      
                                        </div>                                         
                                    </div>            
                                </td>
                                <td :data-monthly-rate="data.SalaryRate">{{data.MonthlyRate}}</td>
                                <td>{{data.Country}}</td>
                                <td> 
                                    <div class="d-flex cv-intro-content">                                       
                                             <div class="cv-intro" v-if="data.CVLink">              
                                                <a :href="data.CVLink" target="_blank">                             
                                                  <img src="@/assets/images/mytalents/persona2/cv.svg" alt="">
                                                </a>
                                            </div>
                                            <div class="cv-intro" v-else>              
                                                <img src="@/assets/images/mytalents/persona2/cv-gray.svg" alt="">
                                            </div>
                                            <div class="cv-intro" v-if="data.VideoLink">
                                                 <a :href="data.VideoLink" target="_blank">                            
                                                    <button class="btn playIcon">
                                                        <img src="@/assets/images/mytalents/persona2/play.png" alt="">
                                                    </button>
                                                 </a>
                                            </div>  
                                            <div class="cv-intro" v-else>     
                                                <button class="btn grayPlayIcon">
                                                    <img src="@/assets/images/mytalents/persona2/grayplay.png" alt="">
                                                </button>
                                            </div>                                           
                                    </div>

                                    
                                </td>   
                                <td width="300">
                                    <div class="d-flex justify-content-end schedule-button ">
                                        <button class="btn btn-outline-blue buttonSchedule" v-for="slot, index in data.InterviewSlots" :key="index" data-bs-toggle="modal" data-bs-target="#LoginModal">{{slot.toUpperCase()}}</button>
                                    </div>
                                    
                                </td>
                                <td width="20">
                                    <div class="more" 
                                       data-bs-toggle="modal" data-bs-target="#LoginModal"
                                       >
                                        more
                                    </div>
                                </td>
                            </tr>
                            
                        </table>
                        
                    </div>                  
                    <nav class="mt-5" aria-label="Page navigation">
                        <ul class="pagination custom-pagination justify-content-end">
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link  border-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#8C8C8C"/>
                                            <path d="M14.41 1.41L13 0L7 6L13 12L14.41 10.59L9.83 6L14.41 1.41Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link border-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="page-item "><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">2</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">3</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">4</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">5</a></li>
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link border-0" href="#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link border-0" href="#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#8C8C8C"/>
                                            <path d="M7.41 0L6 1.41L10.58 6L6 10.59L7.41 12L13.41 6L7.41 0Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div class="popover sched-interview-popup-over arrow-popup"  :style="popupStyle" v-if="popupSchedInterview">
            <div class="popover-arrow  sched-interview-popover-arrow"></div>
                <div class="popover-inner">
                    <div class="popupHead">
                            Schedule Interview    
                    </div>
                    <div class="popupSubHead">
                        <div>
                            <span>Schedule:</span> <span class='text-green'>25 Jun 2022 (sat), 3:00pm (GMT + 4hrs)</span> 
                        </div> 
                    </div>
                    <div class="p-14">
                        <div class='pick-a-sched'>
                            Pick a Schedule
                        </div>
                        <div>
                            <div class="form-check mt-3"> 
                                <input class="normal-check-box  normal-radio input-radio" type="radio"  name="sched"  v-on:click="showCustomDate($event)" id="quickSched" checked >
                                <label class="form-check-label quickSched" for="quickSched">
                                    Quick Schedule
                                </label>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-custom-outline-blue px-3 me-2" >12 SEP | 10:35 AM</button>
                            <button class="btn btn-custom-outline-blue px-3 me-2">12 SEP | 10:35 AM</button>
                            <button class="btn btn-custom-outline-blue px-3">12 SEP | 10:35 AM</button>
                        </div>
                        <div>
                            <div class="form-check mt-3">
                                <input class="normal-check-box  normal-radio input-radio" type="radio" v-on:click="showCustomDate($event)" value="customDate" name="sched" id="custoDateTime">
                                <label class="form-check-label custoDateTime" for="custoDateTime">
                                    Custom Date & Time
                                </label>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button v-if="customeDate" class="btn btn-sm btn-outline-blue fw-bold px-3 me-2" >{{customeDate}}</button>
                        </div>
                </div>
                <div class="popupFooter text-end">
                    <button type="button" class="btn btn-primary btn-save-changes " data-bs-toggle="modal" data-bs-target="#editScheModal">Schedule Interview</button>
                </div>
            </div>
        </div>    
        <div class="popover sched-interview-popup-over arrow-popup" :style="popupStyle1" v-if="popupEditConfirm">
            <div class="popover-arrow  sched-interview-popover-arrow"></div>
                <div class="popover-inner">
                    <div class="popupHead">
                        Edit Confirmed Schedule
                    </div>
                    <div class="popupSubHead">
                        <div>
                            <span>Current:</span> <span class='text-green'>25 Jun 2022 (sat), 3:00pm (GMT + 4hrs)</span> 
                        </div> 
                        <div>
                            <span>New:</span> <span class='text-green'>25 Jun 2022 (sat), 3:00pm (GMT + 4hrs)</span> 
                        </div> 
                    </div>
                    <div class="p-14">
                        <div class='pick-a-sched'>
                            Pick a Schedule
                        </div>
                        <div>
                            <div class="form-check mt-3">
                                <input class="normal-check-box  normal-radio input-radio" type="radio"  name="sched"  v-on:click="showCustomDate($event)" id="quickSched" checked >
                                <label class="form-check-label quickSched" for="quickSched">
                                    Quick Schedule
                                </label>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-custom-outline-blue px-3 me-2" >12 SEP | 10:35 AM</button>
                            <button class="btn btn-custom-outline-blue px-3 me-2">12 SEP | 10:35 AM</button>
                            <button class="btn btn-custom-outline-blue px-3">12 SEP | 10:35 AM</button>
                        </div>
                        <div>
                            <div class="form-check mt-3">
                                <input class="normal-check-box  normal-radio input-radio" type="radio" v-on:click="showCustomDate($event)" value="customDate"  name="sched" id="custoDateTime">
                                <label class="form-check-label custoDateTime" for="custoDateTime">
                                    Custom Date & Time
                                </label>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button v-if="customeDate" class="btn btn-sm btn-outline-blue fw-bold px-3 me-2" >{{customeDate}}</button>
                        </div>
                </div>
                <div class="popupFooter text-end">
                    <button type="button" class="btn btn-primary btn-save-changes " data-bs-toggle="modal" data-bs-target="#LoginModal">Schedule Interview</button>
                </div>
            </div>            
        </div> 
        <axdatepicker 
            :style="dateStyle"
            v-if="datePopUp"
            :isDateShown="dateConfig.isDateShown" 
            :type="dateConfig.type" 
            :label="dateConfig.label" 
            :calendar="dateConfig.calendar" 
            :startTime="dateConfig.startTime" 
            :endTime="dateConfig.endTime" 
            @clicked="onClickOkBtn"
            :timeZone="dateConfig.timeZone">
        </axdatepicker>   
        <Persona2Modal></Persona2Modal>
        <SkillScannerModal></SkillScannerModal>
       </div>
     
</template>
<style>
    /* Begin Other Skill Popup */
    .clear-other-skill:hover{
        background: #ccc !important;
    }
    .other-skill-search input,.other-skill-search .input-group-text{
        border:unset;
    }
    .other-skill-search{
        padding: 3px;
        border-bottom:1px solid #EDEDED;
    }
    .other-skill-search input{
        box-shadow:unset;
        border-radius: unset;
    }
    .other-skill-card{
        width: 345px;
        max-width: 345px;
        padding: 14px;
    }
    .other-skill-name{
        color: #27304C;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }
    .other-skill-data{
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 170%;
        color: #27304C;
    }
    /* End Other Skill Popup */
   
    .select-country{
        height: 43px;    
        border-radius: 2px;
        border: 1px solid #EDEDED;       
    }
    .country-dropdown{
        position: absolute;
        background: white;
        width: 100%;
        border: 1px solid #EDEDED;   
        border-radius: 2px;
        padding: 10px;  
        font-family: "RubikRegular";
        font-size: 14px;
        color: #6D6D6D;
        left: 0px;
        top: 45px;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none;
    }
    .country-name{
        font-family: "RubikRegular";
        font-size: 14px;
        color: #6D6D6D;
        align-self: center;
    }
    .tr-list-data{
        height: 70px;
    }
    .talent-id{
        color: #6D6D6D;
        text-decoration: none;
    }
    .talent-id:hover{
        color: #2C91FF;
        text-decoration: underline;
    }
    .item-skill{
        margin-top: 4px;
        margin-bottom: 4px;
    }
    /* Begin Skills Dropdown */
    .dropdown-toggle.select-input::after {
        display: none;
    }
    .monthly-rate{
        font-family: "RubikRegular";
        font-size: 14px;
        color: #6D6D6D;
        width: 140px;
        align-self: center;
    }
    .all-skills{
        background: #fff;
        position: absolute;
        width: 150%;
        top: 0px;
        left: 2px;
        box-shadow: 0px 1px 1px #ccc;
        border:1px solid #eee;
        border-radius: 2px;
        z-index: 2;
    }
    .skills-dropdown{
        background: #fff;
        position: absolute;
        width: 99.8%;
        top: 44px;
        left: 2px;
        box-shadow: 0px 1px 1px #ccc;
        border:1px solid #eee;
        border-radius: 2px;
        padding:14px;       
    }
    .btn-see-all-skills{
        font-family: "RubikRegular";
        font-size: 12px;
        color: #FFFF;
        padding-right: 15px;
        padding-left: 15px;
    }
    .most-search{
        font-family: "RubikRegular";
        font-size: 12px;
        color: #6D6D6D;
    }
    .filter-primary-skills{
        font-family: "RubikRegular";
        font-size: 14px;
        color: #6D6D6D;
    }
    .filter-primary-skills:hover{
        color: #2C91FF;
    }
    .btn-filter-skill{
        color: #2C91FF;
        font-size: 12px;
        font-family: "RubikRegular";
        margin-right: 8px;
        margin-top: 8px;
    }
    .dollar-sign{
        position: absolute;
        margin-left: 10px;
        margin-top: 3px;
    }
    .to-separator{
        width: 50px;
        text-align: center;
        align-self: center;
        font-family: "RubikRegular";
        color: #6D6D6D;
    }
    /* End Skills Dropdown */

    /* Begin Candidate Table */
    .candidate-data{
        width: 100%;
        margin-top: 12px;
    }
    .candidate-data tr:nth-child(odd) {
        background: #FAFAFA
    }
    .candidate-data th{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #27304C;
        font-family: RubikMedium;
        background: #FAFAFA;
        height: 38px;
        padding: 12px;
    } 
    .candidate-data td{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #6D6D6D;
        font-family: RubikRegular;
        height: 38px;
        padding-left: 12px;
        padding-right: 12px;
    }
    .candidate-data tr{
        border:1px solid #EDEDED;
    }
    .skills-badge-content .badge {
        margin-right:8px;
       
        display: flex;
        align-items: center;
        padding: 3px 8px;
        height: 26px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
    }
    
    .candidate-data .cv-intro{
        margin-right:18px;    
        cursor: pointer;
    } 
    .candidate-data .schedule-button button{
        margin-right:12px;    
    }
    .cv-intro-content{
        align-items: center;
    }
   
    .usd {
        width: 25px;
        height: 20px;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 170%;
        display: flex;    
        color: #6D6D6D;
    }

    .sgd {
        width: 24px;
        height: 20px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #8C8C8C;
    }

    .Table-1 {
        /* margin-top: 24px;   */
        padding: 16px;
        background: #FFFFFF;
        box-shadow: 0px 8px 15px #F3F4F5;
        border-radius: 6px;   
    }

    .input-skill-scanner-keyword {
        border-right: none !important;
        border-top-left-radius: 3px !important;
        border-bottom-left-radius: 3px !important;
        padding: 10px !important;
        font-size: 14px !important;
        font-family: RubikRegular;
        font-weight: 400 !important;
        color: #8C8C8C !important;
        box-shadow: none !important;
        border-color: #EDEDED !important;
    }
    .search-icon:hover{
        background: #2C91FF !important;
    }
    .select-input {
        border-radius: 2px !important;
        padding: 10px !important;
        font-size: 14px !important;
        font-family: RubikRegular;
        font-weight: 400 !important;
        color: #8C8C8C !important;
        box-shadow: none !important;      
        border-color: #EDEDED !important;
    }

    .search-icon {
        background: white !important;
        border-left: unset;
        border-top-right-radius: 3px !important;
        border-bottom-right-radius: 3px !important;
        border-color: #EDEDED !important;
    }


    .input-skill-scanner-keyword::placeholder, .select-input::placeholder {
        color: #C9C9C9 !important;
        opacity: 1;
    }


    .form-check1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 8px;
        width: 109px;
        height: 24px;
    }
    .usd-checkbox{
        height: 20px;
        width: 40px !important;
    }


    .playIcon {
        display: flex;
        padding: 3px 16px;
        width: 52px;
        height: 26px;
        background: #2C91FF;
        border-radius: 2px;
    }
    .playIcon:hover{
        background: #1764b8 !important;
    }
    .grayPlayIcon {
        display: flex;
        padding: 3px 16px;
        width: 52px;
        height: 26px;
        background: #EDEDED;
        border-radius: 2px;
    }
    .grayPlayIcon:hover{
        background: #A8B2BA !important;
    }


    .buttonSchedule {
        
        padding: 3px 16px;
        width: 135px;
        border-radius: 2px;   
        font-family: 'RubikMedium' !important;
        font-style: normal;
        font-weight: 500 ;
        font-size: 12px;
        line-height: 170%;

    }

    .morepen {
        color: #A8B2BA;
        cursor: pointer; 
    }

    .more {
        cursor: pointer; 
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #A8B2BA;
    }
    .more:hover{
        color:#2C91FF;
    }
        
    .filter {
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
        margin-left: 14px;
        width: 96px;
        height: 42px;
    }
    .filter-img{
        margin-top: -3px;
    }

    .list-group .list-group-item {
        cursor: pointer;
    }
    .start-get-started-container{
        align-items: center;
    }

     /* End Candidate Table */
</style>
<script>
import Banner from './components/Banner';
import Persona2Modal from '../../modals/Persona2Modal';
import SkillScannerModal from '../../modals/SkillScannerModal';
import axdatepicker from '../../datepicker/axdatepicker.vue';
import candidatecsv from '../../../helper/candidatecsv'
export default {
    name: 'CandidateDatabaseTable',
    props: {
    msg: String
    },
    data() {
        return{
            popupSchedInterview: false,   
            popupEditConfirm: false,   
            datePopUp: false,   
            popupStyle:{},
            dateConfig:{
                isDateShown:true,
                type:"radio",
                label:"Custom Date & Time",
                calendar:new Date(),
                startTime:{time:'10:00',timeConvention:'AM'},
                endTime:{time:'10:00',timeConvention:'AM'},
                timeZone:'(GMT -05:00) Eastern Time (US & Canada)'
            },
            skills:{},
             moreSkill:[],      
             seeAllSkill:true,      
             showSkills:false, 
             addSkillFilter:'',     
             candidateDBdata: [],
             filter:{
                skill: '',
                otherSkill: '',
                country: 'All Country',
                monthlyRateMin: '',
                monthlyRateMax: '',
             },
             countryDropdown: false,
             otherSkillsPopup: false,
             countries:[
                'All Country',
                'Philippines',
                'Vietnam',
                'Indonesia',
                'Sri Lanka'
             ],
             selecteCountry: [],
             otherSkills: [],
        }
       
    },
    components:{
        Banner,
        axdatepicker,
        Persona2Modal,
        SkillScannerModal
    },
    mounted(){
        this.skills = candidatecsv.getSkills();
        this.otherSkills = candidatecsv.getOtherSkills();
        let count = 0;
        this.moreSkill = this.skills.otherSkills.filter(a=>{
            count++;
            if(count <= 24){
                return a;
            }
        })
        this.candidateDBdata = candidatecsv.getData();

    },
    methods: {
        clearOtherSkill(e){
            e.stopPropagation();
            this.filter.otherSkill = ''
            this.filter.skill = ''
            this.addSkillFilter = ''
        },
        closeOtherSkills(e){
            e.stopPropagation();
            this.otherSkillsPopup= false;
        },
        suggestSkills(e){            
            e.stopPropagation();
            if(e.target.getAttribute("data-skills") == 'other-skills'){
                this.showSkills = false;
                let otherSkills = candidatecsv.getOtherSkills();
                let stringFilter = this.filter.otherSkill.split(', ');
                let arrayString = stringFilter.slice(-1)[0];
                this.otherSkills = otherSkills.filter(a=>{
                    for(var i=0; a.data.length > i; i++){
                        for(var l=0; a.data[i].data.length > l; l++){
                            if(a.data[i].data[l].toUpperCase().match(arrayString.toUpperCase())){
                                return a;
                            }   
                        }  
                    }        
                });                    
              
            }else{
                this.showSkills = true;
                let stringFilter = this.addSkillFilter.split(', ');
                let arrayString = stringFilter.slice(-1)[0];

                let matchSkills= this.skills.otherSkills.filter((a, index)=>{
                    if(a.toUpperCase().match(arrayString.toUpperCase())){
                        return a;
                    }             
                });

                if(arrayString != ""){
                    this.skills.primarySkills = matchSkills.slice(0, 15);
                }else{
                    this.skills.primarySkills = [];
                }
            }
      
        },
        countryDropdownEvent(e){
            e.stopPropagation();
            this.countryDropdown = !this.countryDropdown
        },
        containerClick(e){
            this.filterData(e)
        },
        skillsDropdown(e){
            e.stopPropagation();
        },
        addToFilter(e, skills){
            e.stopPropagation();
            if(this.addSkillFilter){
                this.addSkillFilter += ', '+skills
            }else{
                this.addSkillFilter += skills
            }
            

            var uniqueList=this.addSkillFilter.split(', ').filter(function(item,i,allItems){
                const data = allItems.map(element => {
                     return element.toUpperCase();
                });
                return i== data.indexOf(item.toUpperCase());          
            }).join(', ');

            this.addSkillFilter = uniqueList
            this.filter.skill = this.addSkillFilter;
            this.filter.otherSkill = this.addSkillFilter;
           
        },
        filterData(e){
            e.stopPropagation();
            if(e.target.getAttribute("data-skills") == null){
                this.showSkills = false;
                this.otherSkillsPopup= false;
            }
            if(e.target.getAttribute("data-checkbox") == null){
                this.countryDropdown = false;             
            }             

            var countryName = document.querySelectorAll('.country-check');
            this.selecteCountry = [];
            countryName.forEach(checkbox =>{
                if(e.target.value == "All Country"){
                    checkbox.checked = false;
                    e.target.checked = true;    
                }else{
                    if(e.target.getAttribute("data-checkbox") && checkbox.value == "All Country"){
                        checkbox.checked = false;
                    }                    
                }

                if(checkbox.checked){
                    this.selecteCountry.push(checkbox.value)
                }
            });

            let data = candidatecsv.getData();
            var fRateMin = (this.filter.monthlyRateMin) ? parseFloat(this.filter.monthlyRateMin) : 0;
            var fRateMax = (this.filter.monthlyRateMax) ? parseFloat(this.filter.monthlyRateMax) : 0;
            this.filter.skill = this.addSkillFilter;                  
            var filterSkill = this.filter.skill;  
         
         
            this.candidateDBdata = data.filter(a=>{

                if(this.filter.skill != "" && this.selecteCountry[0] == "All Country" && fRateMax == 0){
                    for(var i=0; a.Skills.length > i; i++){
                        if(filterSkill.toUpperCase().indexOf(a.Skills[i].toUpperCase()) > -1){
                             return a;
                        }
                    }                   
                }
                if(this.filter.skill != "" && this.selecteCountry[0] == "All Country" && fRateMax > 0){
                    for(var i=0; a.Skills.length > i; i++){
                        if(filterSkill.toUpperCase().indexOf(a.Skills[i].toUpperCase()) > -1 && parseFloat(a.SalaryRate) >= fRateMin && parseFloat(a.SalaryRate)<= fRateMax){
                             return a;
                        }
                    }                   
                }
                if(this.filter.skill != "" && this.selecteCountry[0] != "All Country" && fRateMax == 0){
                    for(var i=0; a.Skills.length > i; i++){
                        if(filterSkill.toUpperCase().indexOf(a.Skills[i].toUpperCase()) > -1 && this.selecteCountry.includes(a.Country)){
                             return a;
                        }
                    }                   
                }
                if(this.filter.skill != "" && this.selecteCountry[0] != "All Country" && fRateMax > 0){
                    for(var i=0; a.Skills.length > i; i++){
                        if(filterSkill.toUpperCase().indexOf(a.Skills[i].toUpperCase()) > -1 && this.selecteCountry.includes(a.Country)  && parseFloat(a.SalaryRate) >= fRateMin && parseFloat(a.SalaryRate)<= fRateMax){
                             return a;
                        }
                    }                   
                }
                if(this.filter.skill == "" && this.selecteCountry[0] != "All Country" && fRateMax == 0){
                    if(this.selecteCountry.includes(a.Country)){                     
                            return a;
                    }                  
                }
                if(this.filter.skill == "" && this.selecteCountry[0] == "All Country" && fRateMax == 0){
                    return a    ;             
                }
                if(this.filter.skill == "" && this.selecteCountry[0] != "All Country" && fRateMax > 0){
                    if(this.selecteCountry.includes(a.Country) && parseFloat(a.SalaryRate) >= fRateMin && parseFloat(a.SalaryRate)<= fRateMax){                     
                            return a;
                    }                  
                }
                if(this.filter.skill == "" && this.selecteCountry[0] == "All Country" && fRateMax > 0){
                    if(parseFloat(a.SalaryRate) >= fRateMin && parseFloat(a.SalaryRate) <= fRateMax){                  
                        
                            return a;
                    }                  
                }
                
            });
        },
        seeAll(e){
            // this.moreSkill = this.skills.otherSkills;
            this.seeAllSkill = false;
            this.otherSkillsPopup = true;
            this.filter.otherSkill = '';
        },
       
        openSkills(e, state){
            e.stopPropagation();
            this.showSkills = true;
            this.seeAllSkill = true;
        },
        onClickOkBtn(data){
            this.datePopUp = false;
            this.customeDate = data.dateData.date+" "+data.dateData.shortMonth+" | "+data.timeData.startTime.time+" "+data.timeData.startTime.timeConvention;;
        },   
        showCustomDate(e){     
            this.customeDate = ''          
             if(e.target.value == "customDate"){
                this.datePopUp = true;
                this.dateConfig = {
                    isDateShown:true,
                    type:"radio",
                    label:"Custom Date & Time",
                    calendar:new Date(),
                    startTime:{time:'10:00',timeConvention:'AM'},
                    endTime:{time:'10:00',timeConvention:'AM'},
                    timeZone: '(GMT -05:00) Eastern Time (US & Canada)'
                }
             }else{
                this.datePopUp = false;
                this.dateConfig = {                      
                    isDateShown:true,
                    type:"radio",
                    label:"Custom Date & Time",
                    calendar:new Date(),
                    startTime:{time:'10:00',timeConvention:'AM'},
                    endTime:{time:'10:00',timeConvention:'AM'},
                    timeZone: '(GMT -05:00) Eastern Time (US & Canada)'
                }
               
            }
        },  
        schecduleInterview(e){
            this.customeDate = '';  
            this.popupSchedInterview = !this.popupSchedInterview
            this.datePopUp = false;
            this.popupStyle = {
                "left": (e.layerX-480)+'px',
                "top": (e.layerY+30)+'px',
            }
            this.dateStyle = {
                "left": (e.layerX-995)+'px',
                "top": (e.layerY+30)+'px',
            }
        },
        editConfirm(e){
            this.customeDate = '';  
            this.popupEditConfirm = !this.popupEditConfirm;
            this.datePopUp = false;
            this.popupStyle1 = {
                "left": (e.layerX-480)+'px',
                "top": (e.layerY+30)+'px',
            }
            this.dateStyle = {
                "left": (e.layerX-995)+'px',
                "top": (e.layerY+30)+'px',
            }
        },
        
    },
 
}
</script>