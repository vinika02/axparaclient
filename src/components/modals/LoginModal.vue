<template>    
     <div class="modal fade modal-login" id="LoginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="LoginModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                
            </div>
            <div class="modal-body">
                <div class="text-center bg-orange">
                    <svg width="74" height="66" viewBox="0 0 74 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33.3334 14.6667L28.2 19.8L37.7334 29.3333H0.333374V36.6667H37.7334L28.2 46.2L33.3334 51.3333L51.6667 33L33.3334 14.6667ZM66.3334 58.6667H37V66H66.3334C70.3667 66 73.6667 62.7 73.6667 58.6667V7.33333C73.6667 3.3 70.3667 0 66.3334 0H37V7.33333H66.3334V58.6667Z" fill="white"/>
                    </svg>
                </div>
                <div class="confirm-label text-center" id="loginHeader">
                    To continue, please log in
                </div>
                <div class="confirm-sub-label text-center"  id="loginSubHeader">
                    No sign up required. Enter your email address and input your one-time password.
                </div>
                <div class="login-form">
                    <form id="loginEmailForm" class="v-form" @submit.prevent="validateEmail($event)">
                        <div id="emailField" class="field">
                            <label class="email-label">Email <span class="asterisk-color-red">*</span></label>
                            <input
                                autocomplete="off"
                                type="email"
                                name="email"
                                class="form-control mt-2"
                                placeholder="enter your email"
                                style="width: 100%"
                                @keyup="emailKeyUp($event)"
                                v-model="email"
                                autofocus
                                required
                            />
                            <div class="error-msg" v-if="errorEmail">
                                {{error_email}}
                            </div>
                        </div>
                        <div class="actions d-flex">
                            <div class="flex-fill pe-3">
                                <button type="button" class="btn btn-default  btn-red w-100 btn-cancel-login " data-bs-dismiss="modal">Cancel</button>
                            </div>
                            <div class="flex-fill ps-1">
                                <button type="submit" class="btn btn-default btn-custom-green w-100  btn-next-login"> Next</button>
                            </div>   
                        </div>
                    </form>
                    <form
                        id="otpForm"
                        class="otp-form"
                        v-on:submit="validateOtp($event)"
                        style="display: none"
                      >
                        <div>
                            <label class="otp-label">OTP</label>
                        </div>
                        <div id="pinField" class="pin  mt-2">
                            
                            <input
                                type="number"
                                name="pass[]"
                                maxlength="1"
                                autocomplete="off"
                                required
                                pattern="\d{1}"
                                oninput="this.value=this.value.slice(0,this.maxLength)"
                                autofocus
                                @keyup="clearOtp()"
                            />
                            <input
                                type="number"
                                name="pass[]"
                                maxlength="1"
                                autocomplete="off"
                                required
                                pattern="\d{1}"
                                oninput="this.value=this.value.slice(0,this.maxLength)"
                                @keyup="clearOtp()"
                            />
                            <input
                                type="number"
                                name="pass[]"
                                maxlength="1"
                                autocomplete="off"
                                required
                                pattern="\d{1}"
                                oninput="this.value=this.value.slice(0,this.maxLength)"
                                @keyup="clearOtp()"
                            />
                            <input
                                type="number"
                                name="pass[]"
                                maxlength="1"
                                autocomplete="off"
                                required
                                pattern="\d{1}"
                                oninput="this.value=this.value.slice(0,this.maxLength)"
                                @keyup="clearOtp()"
                            />
                            <div class="error-msg">
                              {{error_otp}}                              
                            </div>
                        </div>
                        <div class="resend">
                            Didn’t receive a code? <a href="javascript:void(0)" @click="resendCode($event)">Resend again</a>
                        </div>
                        <div class="actions d-flex">
                            <div class="flex-fill pe-3">
                                <button type="button" class="btn btn-default  btn-red w-100 btn-cancel-login " data-bs-dismiss="modal">Cancel</button>
                            </div>
                            <div class="flex-fill ps-1">
                                <button type="submit" class="btn btn-default btn-custom-green w-100  btn-next-login"> Done</button>
                            </div>   
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
 </template>
 <script>
 import Auth from '../../services/Auth';
 import Toastify from 'toastify-js' 
 export default {
     name: 'LoginModal',
     data() {
         return { 
            emailIsValid: true,
            optInvalid: false,
            errorEmail: false,
            email: '',
            error_otp: 'You seem to have entered the wrong OTP. Try Again!',
            error_email: "Please enter a valid company e-mail address. Your e-mail address domain is currently not approved as a Client in our database."
         }
     },
     mounted() {        
        const els = (sel, par) => (par || document).querySelectorAll(sel);
        // Task: multiple inputs "field"
        els(".pin").forEach((elGroup) => {
        const elsInput = [...elGroup.children];
        const len = elsInput.length;

        const handlePaste = (ev) => {
            const clip = ev.clipboardData.getData("text"); // Get clipboard data
            const pin = clip.replace(/\s/g, ""); // Sanitize string
            const ch = [...pin]; // Create array of chars
            elsInput.forEach((el, i) => (el.value = ch[i] ?? "")); // Populate inputs
            elsInput[pin.length - 1].focus(); // Focus input
        };

        const handleInput = (ev) => {
            const elInp = ev.currentTarget;
            const i = elsInput.indexOf(elInp);
            if (elInp.value && (i + 1) % len) elsInput[i + 1].focus(); // focus next
        };

        const handleKeyDn = (ev) => {
            const elInp = ev.currentTarget;
            const i = elsInput.indexOf(elInp);
            if (!elInp.value && ev.key === "Backspace" && i) elsInput[i - 1].focus(); // Focus previous
        };
        // Add the same events to every input in group:
        elsInput.forEach((elInp) => {
            elInp.addEventListener("paste", handlePaste); // Handle pasting
            elInp.addEventListener("input", handleInput); // Handle typing
            elInp.addEventListener("keydown", handleKeyDn); // Handle deleting
        });
        });

    },
    methods: {
        clearOtp(){
            const pinField = document.getElementById("pinField");        
            pinField.classList.remove("error");     
        },
        resendCode(e){
          this.validateEmail(e);
          Toastify({
            text: "OTP successfully sent",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            offset: {
              x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
          }).showToast();
         
        },
        validateOtp(event) {
            event.preventDefault();          
            var input = document.getElementsByName("pass[]");
            var otp = "";
            for (var i = 0; i < input.length; i++) {
                var a = input[i];
                otp = otp + a.value;
            }
            // code start here
            this.optInvalid = this.optInvalid; // replace for api otp check
            // code end here
            const pinField = document.getElementById("pinField");        
            pinField.classList.remove("error");     

              let payload = {
                email: this.email,
                otp: otp,
              }

              let data = Auth.loginOTP(payload);             
            
              var self =  this;
              data.then(res =>{
       
                if(res.status ==  200){
                  window.location.replace('https://client.joinwonder.com/')
                }else{
                  this.optInvalid
                    ? pinField.classList.remove("error")
                    : pinField.classList.add("error");
                  }             
              }) .catch(err => {
                self.error_otp = err.response.data.message;
                 this.optInvalid
                    ? pinField.classList.remove("error")
                    : pinField.classList.add("error");
              })
        },


        emailKeyUp(e){
          this.errorEmail = false;
        },
        validateEmail(event) {
            this.errorEmail = false;
            event.preventDefault();
            const formEl = document.getElementById("loginEmailForm")
            const formData = new FormData(formEl);
            const formProps = Object.fromEntries(formData);

            const email = formProps.email;
            this.emailIsValid = this.emailIsValid; // replace for api email check

            const emailField = document.getElementById("emailField");
            if (this.emailIsValid) {             
              
                /* mask email start */
                var str = email;
                str = str.split("");
                var finalArr = [];
                var len = str.indexOf("@");
                str.forEach((item, pos) => {
                pos >= 3 && pos <= len - 1 ? finalArr.push("*") : finalArr.push(str[pos]);
                });
                const maskedEmail = finalArr.join("");
                /* mask email end */             


                let data = Auth.loginEmail(email);

                var self =  this;
                data.then(res =>{
                  if(res.status ==  200){
                    emailField.classList.remove("error");
                    formEl.classList.add("hide");
                    document.getElementById("otpForm").classList.add("show");
                    document.getElementById("loginHeader").textContent = "Verify Email";
                    document.getElementById("loginSubHeader").textContent =
                    "An email with a verification code has been sent to " + maskedEmail;
                  }             
                }) .catch(err => {
                  this.errorEmail = true;
                  self.error_email = err.response.data.message;
                })


            } else {
                emailField.classList.add("error");
            }
        },
    },
 }
 </script>
 <style>

 .login-form .email-label, .login-form .otp-label{
    color: #27304C;
    font-family: 'RubikMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
 }
 .btn-next-login, .btn-cancel-login{
    color: #FFFFFF !important;
    font-family: 'RubikMedium' !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 14px !important;
 }
 .login-form{
    padding: 24px;;
 }
 .asterisk-color-red{
    color: #FF4949;
 }
 
 /* Begin Modal Alert */
 .modal-login .modal-footer {
     justify-content: center;
     border-top:unset;
 }
 .modal-login .modal-content {
     border-radius:unset;
     max-width: 410px;
     width: 410px;
     margin:0px auto;
 }
 .modal-login .alert-cancel-btn {
     font-weight: 600;
     font-size: 14px;
     padding-left: 32px;
     padding-right: 32px;
 }
 .modal-login .alert-yes-btn {
     font-weight: 500;
     font-size: 14px;
     color:white;
     padding-left: 32px;
     padding-right: 32px;
 }
 .modal-login .btn-close{
     font-size:12px;
     background: transparent url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23ffff%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e') center/1em auto no-repeat !important;
 }
 .modal-login .modal-header{
     background-color: #FFAE58 !important;
     border-radius: unset;
     border-bottom: unset;     
 } 
 .modal-login.done .modal-header{
     background: #47C9A2 !important;
     border-radius: unset;
     border-bottom: unset;     
 }
 .modal-login .modal-body{
     padding:unset;
 }
 .modal-login .modal-body .confirm-label{
     font-weight: 600 !important;
     font-size: 22px;
     color: #27304C;
     font-family: RubikRegular !important;
     margin-top:20px;
     margin-bottom:10px;
 }
 .modal-login .modal-body .confirm-sub-label{
     font-weight: 400;
     font-size: 14px;
     color: #6D6D6D;
     font-family: RubikRegular !important;
     margin-top:14px;
     margin-bottom:6px;
     padding-left:25px;
     padding-right:25px;
 }
 .modal-login .modal-body .confirm-sub-label.done{
     font-weight: 400;
     font-size: 16px;
     color: #626F7A;
 }
 .modal-login .modal-body .bg-orange{
     background-color: #FFAE58 !important;
     border-radius: unset;
     padding-bottom:30px;
 } 
 .modal-login.done .modal-body .bg-green{
     background-color:#47C9A2 !important;
     border-radius: unset;
     padding-bottom:30px;
 }
 
 
.show {
  display: block !important;
}

.hide {
  display: none;
}

.v-form .field label {
  display: inline-block;
  width: 292px;
  height: 22px;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  color: #27304c;
  margin-bottom: 8px;
}

.v-form .field input {
  box-sizing: border-box;
  padding: 8px 12px;
  height: 40px;
  background: #ffffff;
  outline: 0;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 0px 2px rgba(44, 145, 255, 0.2);
  border-radius: 4px;
  font-family: "RubikRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  color: #27304c;
}
.v-form .field input:focus {
  border: 1px solid #2c91ff;
}

.v-form .field.error input {
  border: 1px solid #ff2c2c;
  box-shadow: 0px 0px 0px 2px rgba(255, 44, 44, 0.2);
}

/* .v-form .field .error-msg {
  display: none;
} */

.v-form .field.error .error-msg {
  display: block;
  margin-top: 4px;
  /* margin-bottom: 20px; */
  width: 330px;
  height: 60px;
  font-family: "RubikRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */
  color: #ff2c2c;
}

.v-form .field input::placeholder {
  color: #bbbbbb;
}

.v-form .actions {
  margin-top: 24px;
}

.v-form .actions button {
  width: 330px;
  height: 40px;
  background: #2c91ff;
  border: 0;
  border-radius: 4px;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: center;
  /* Secondary/16 */
  color: #ffffff;
}

.v-form .actions button:hover {
  box-shadow: 0px 0px 0px 2px #2c92ff38;
}

/* OTP START */
.pin > input {
  text-align: center;
  width: 1em;
}

.pin > input:invalid {
  color: red;
  caret-color: #000;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.otp-form .pin input {
  box-sizing: border-box;
  width: 58px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin-right: 12px;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  color: #32424a;
}

.otp-form .pin.error input {
  border: 1px solid #ff2c2c;
}

.otp-form .pin.error .error-msg {
  display: block;
  margin-top: 4px;
  width: 330px;
  font-family: "RubikRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ff2c2c;
}

.otp-form .pin input:focus {
  background: #f5faff;
  /* Primary/05 */
  border: 1px solid #66b0ff;
  border-radius: 8px;
  outline: 0;
}

.otp-form .pin .error-msg {
  display: none;
}

.otp-form div a {
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #40555f;
}

.otp-form .resend {
  margin-top: 24px;
}

.otp-form .actions {
  margin-top: 24px;
}

.otp-form .actions button {
  width: 330px;
  height: 40px;
  background: #2c91ff;
  border: 0;
  border-radius: 4px;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: center;
  /* Secondary/16 */
  color: #ffffff;
}

.otp-form .actions button:hover {
  box-shadow: 0px 0px 0px 2px #2c92ff38;
}
 /* End Modal Alert */
 
 </style>