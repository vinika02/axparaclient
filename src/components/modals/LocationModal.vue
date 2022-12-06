<template>    
     <div class="modal fade modal-location" id="LocationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="LocationModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                
            </div>
            <div class="modal-body">
                <div class="text-center bg-orange">
                  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 7.33301C29.81 7.33301 18.3334 18.8097 18.3334 32.9997C18.3334 52.2497 44 80.6663 44 80.6663C44 80.6663 69.6667 52.2497 69.6667 32.9997C69.6667 18.8097 58.19 7.33301 44 7.33301ZM25.6667 32.9997C25.6667 22.8797 33.88 14.6663 44 14.6663C54.12 14.6663 62.3334 22.8797 62.3334 32.9997C62.3334 43.5597 51.7734 59.363 44 69.2263C36.3734 59.4363 25.6667 43.4497 25.6667 32.9997Z" fill="white"/>
                    <path d="M44 42.1663C49.0626 42.1663 53.1667 38.0623 53.1667 32.9997C53.1667 27.9371 49.0626 23.833 44 23.833C38.9374 23.833 34.8334 27.9371 34.8334 32.9997C34.8334 38.0623 38.9374 42.1663 44 42.1663Z" fill="white"/>
                  </svg>
                </div>
                <div class="confirm-label text-center">
                   Choose your location
                </div>
                <div class="p-4 m-b-15">
                  <div class="select-location-label">Select Location <span class="asterisk">*</span></div>
                  <div class="dropdown mt-2">
                  <button class="btn btn-default dropdown-toggle form-control btn-select text-start " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{myLocation}}
                    <span class="float-end">
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.825 0.658203L5 4.47487L1.175 0.658203L0 1.8332L5 6.8332L10 1.8332L8.825 0.658203Z" fill="#8C8C8C"/>
                      </svg>
                    </span>
                  </button>
                  <ul class="dropdown-menu w-100">
                    <li>
                      <a class="dropdown-item" href="#" @click="clickLocation('Philippines')">
                        <img src="../../assets/images/countries/ph.svg"> Philippines
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="clickLocation('Singapore')">
                        <img src="../../assets/images/countries/sg.svg"> Singapore
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="clickLocation('Australia')">
                        <img src="../../assets/images/countries/au.svg"> Australia
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="clickLocation('United Kingdom')">
                        <img src="../../assets/images/countries/uk.svg"> United Kingdom
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="clickLocation('United States')">
                        <img src="../../assets/images/countries/us.svg"> United States
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="clickLocation('Others')">
                        Others
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
                
            </div>
            </div>
        </div>
    </div>
 </template>
 <script>
 export default {
     name: 'LocationModal',
     data() {
         return { 
          myLocation: 'Select Location'
         }
     },
     mounted() {
       

    },
    methods: {
      clickLocation(loc){
        this.myLocation = loc;
        localStorage.setItem('location', loc);
        window.location.replace('/employer')
      }
    },
 }
 </script>
 <style>
 .select-location-label{
  font-family: RubikMedium;
  color: #27304C;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
 }
 .btn-select{
    border: 1px solid #ccc;
    color: #C9C9C9;
 }
 .btn-select:hover{
    border: 1px solid #ccc !important;
 }
 .btn-select.dropdown-toggle::after {
    display: none;
 }
 .select-location-label .asterisk{
      font-weight: 500;
      font-family: RubikRegular !important;
      color: #FF4949;
      font-size: 14px;
  }

 /* Begin Modal Alert */
 .modal-location .modal-footer {
     justify-content: center;
     border-top:unset;
 }
 .modal-location .modal-content {
     border-radius:unset;
     max-width: 410px;
     width: 410px;
     margin:0px auto;
 }
 .modal-location .alert-cancel-btn {
     font-weight: 600;
     font-size: 14px;
     padding-left: 32px;
     padding-right: 32px;
 }
 .modal-location .alert-yes-btn {
     font-weight: 500;
     font-size: 14px;
     color:white;
     padding-left: 32px;
     padding-right: 32px;
 }
 .modal-location .btn-close{
     font-size:12px;
     background: transparent url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23ffff%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e') center/1em auto no-repeat !important;
 }
 .modal-location .modal-header{
     background-color: #FFAE58 !important;
     border-radius: unset;
     border-bottom: unset;     
 } 
 .modal-location.done .modal-header{
     background: #47C9A2 !important;
     border-radius: unset;
     border-bottom: unset;     
 }
 .modal-location .modal-body{
     padding:unset;
 }
 .modal-location .modal-body .confirm-label{
     font-weight: 600 !important;
     font-size: 22px;
     color: #27304C;
     font-family: RubikRegular !important;
     margin-top:20px;
     margin-bottom:10px;
 }
 .modal-location .modal-body .confirm-sub-label{
     font-weight: 400;
     font-size: 14px;
     color: #6D6D6D;
     font-family: RubikRegular !important;
     margin-top:14px;
     margin-bottom:6px;
     padding-left:25px;
     padding-right:25px;
 }
 .modal-location .modal-body .confirm-sub-label.done{
     font-weight: 400;
     font-size: 16px;
     color: #626F7A;
 }
 .modal-location .modal-body .bg-orange{
     background-color: #FFAE58 !important;
     border-radius: unset;
     padding-bottom:30px;
 } 
 .modal-location.done .modal-body .bg-green{
     background-color:#47C9A2 !important;
     border-radius: unset;
     padding-bottom:30px;
 }
  /* End Modal Alert */
 
 </style>