<template>
    <div>
        <div id="main">
            <div id="brandWatermark">
                <img src="@/assets/images/login/logo.svg" alt="logo">
            </div>
            <div id="loginContainer">
                <img id="brand" src="@/assets/images/login/brand.svg" alt="brand">
                <div id="loginHeader" class="v-header">Welcome!</div>
                <div id="loginSubHeader" class="v-subheader">Enter your e-mail address and input your one-time password. No
                    sign-up required.
                </div>
                <!-- loginEmailForm start -->
                <form id="loginEmailForm" class="v-form" v-on:submit="validateEmail()">
                    <div id="emailField" class="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email" style="width: 100%;" autofocus required>
                        <div class="error-msg">
                            Please enter a valid company e-mail address. Your e-mail address domain is currently not
                            approved as a Client in our database.
                        </div>
                    </div>
                    <div class="actions">
                        <button type="submit">Next</button>
                    </div>
                </form>
                <!-- loginEmailForm end -->

                <!-- otpForm start -->
                <form id="otpForm" class="otp-form" v-on:submit="validateOtp()" style="display: none;">
                    <div id="pinField" class="pin">
                        <input type="number" name="pass[]" maxlength="1" autocomplete="off" required pattern="\d{1}"
                            oninput="this.value=this.value.slice(0,this.maxLength)" autofocus>
                        <input type="number" name="pass[]" maxlength="1" autocomplete="off" required pattern="\d{1}"
                            oninput="this.value=this.value.slice(0,this.maxLength)">
                        <input type="number" name="pass[]" maxlength="1" autocomplete="off" required pattern="\d{1}"
                            oninput="this.value=this.value.slice(0,this.maxLength)">
                        <input type="number" name="pass[]" maxlength="1" autocomplete="off" required pattern="\d{1}"
                            oninput="this.value=this.value.slice(0,this.maxLength)">
                        <div class="error-msg">
                            You seem to have entered the wrong OTP. Try Again!
                        </div>
                    </div>
                    <div class="resend">
                        Didn’t receive a code? <a href="javascript:void(0)">Resend again</a>
                    </div>
                    <div class="actions">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <!-- otpForm end -->
            </div>


            <div id="carouselContainer">
                <div class="slider">
                    <div class="slides">
                        <!--radio buttons start-->
                        <input type="radio" checked name="radio-btn" id="radio1" @click="resetSlide(1)">
                        <input type="radio" name="radio-btn" id="radio2" @click="resetSlide(2)">
                        <input type="radio" name="radio-btn" id="radio3" @click="resetSlide(3)">
                        <!--radio buttons end-->
                        <!--slide images start-->
                        <div class="slide first">
                            <img class="image" src="@/assets/images/login/carousel/slide1.png" alt="slide1">
                            <img class="grid" src="@/assets/images/login/carousel/grid.svg" alt="grid">
                            <img class="slide1-image95" src="@/assets/images/login/carousel/slide1-image95.svg" alt="image95">
                            <img class="slide1-image96" src="@/assets/images/login/carousel/slide1-image96.svg" alt="image96">
                            <img class="slide1-image94" src="@/assets/images/login/carousel/slide1-image94.svg" alt="image94">
                            <div class="title">Search, Shortlist, <br>Schedule</div>
                            <div class="subtitle">Instantly search and shortlist talents on our candidate database, schedule
                                interviews for potential candidates, and give feedback on completed interviews.</div>
                        </div>
                        <div class="slide">
                            <img src="@/assets/images/login/carousel/slide2.png" alt="">
                            <img class="grid" src="@/assets/images/login/carousel/grid.svg" alt="grid">
                            <img class="slide2-image90" src="@/assets/images/login/carousel/slide2-image90.svg" alt="image90">
                            <img class="slide2-image89" src="@/assets/images/login/carousel/slide2-image89.svg"
                                alt="slide2-image89">
                            <div class="title">Axpara.com introduces
                                SkillScanner</div>
                            <div class="subtitle">Never miss a potential profile again. Our SkillScanner learns from your
                                past orders and searches. Anytime there is a new candidate that is a fit, you get alerted!
                            </div>
                        </div>
                        <div class="slide">
                            <img src="@/assets/images/login/carousel/slide3.png" alt="">
                            <img class="grid" src="@/assets/images/login/carousel/grid.svg" alt="grid">
                            <img class="slide3-image31" src="@/assets/images/login/carousel/slide3-image31.svg"
                                alt="slide3-image31">
                            <img class="slide3-image88" src="@/assets/images/login/carousel/slide3-image88.svg"
                                alt="slide3-image88">
                            <img class="slide3-image95" src="@/assets/images/login/carousel/slide3-image95.svg"
                                alt="slide3-image95">
                            <div class="title">Manage Your <br>
                                Distributed Team</div>
                            <div class="subtitle">Seamless management of your team. Review attendance records, approve leave
                                requests or trigger a performance appraisals.</div>
                        </div>
                        <!--slide images end-->

                        <!--manual navigation start-->
                        <div class="navigation-manual">
                            <label for="radio1" class="manual-btn1"></label>
                            <label for="radio2" class="manual-btn2"></label>
                            <label for="radio3" class="manual-btn3"></label>
                        </div>
                        <!--manual navigation end-->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>

export default {
    name: 'Login',
    data() {
        return {
            counter: 1,
            timeout: 500,
            slideInterval:'',
            emailIsValid: true,
            optInvalid: false,
        }
    },
    mounted(){

        const els = (sel, par) => (par || document).querySelectorAll(sel);
        // Task: multiple inputs "field"
        els(".pin").forEach((elGroup) => {
            const elsInput = [...elGroup.children];
            const len = elsInput.length;

            const handlePaste = (ev) => {
                const clip = ev.clipboardData.getData('text');     // Get clipboard data
                const pin = clip.replace(/\s/g, "");               // Sanitize string
                const ch = [...pin];                               // Create array of chars
                elsInput.forEach((el, i) => el.value = ch[i] ?? ""); // Populate inputs
                elsInput[pin.length - 1].focus();                  // Focus input
            };

            const handleInput = (ev) => {
                const elInp = ev.currentTarget;
                const i = elsInput.indexOf(elInp);
                if (elInp.value && (i + 1) % len) elsInput[i + 1].focus();  // focus next
            };

            const handleKeyDn = (ev) => {
                const elInp = ev.currentTarget
                const i = elsInput.indexOf(elInp);
                if (!elInp.value && ev.key === "Backspace" && i) elsInput[i - 1].focus(); // Focus previous
            };
            // Add the same events to every input in group:
            elsInput.forEach(elInp => {
                elInp.addEventListener("paste", handlePaste);   // Handle pasting
                elInp.addEventListener("input", handleInput);   // Handle typing
                elInp.addEventListener("keydown", handleKeyDn); // Handle deleting
            });

        });

        this.slideInterval = setInterval(this.nextSlide(), this.timeout);
        
    },
    methods:{
        validateOtp() {
            event.preventDefault();
            var input = document.getElementsByName('pass[]');
            var otp = "";
            for (var i = 0; i < input.length; i++) {
                var a = input[i];
                otp = otp + a.value;
            }
            // code start here
            console.log("OTP: ", otp) // otp value
            this.optInvalid = this.optInvalid  // replace for api otp check
            // code end here 
            const pinField = document.getElementById("pinField");

            this.optInvalid ? pinField.classList.remove("error") : pinField.classList.add("error");

        },
        resetSlide(n) {
            this.counter = n
            clearInterval(this.slideInterval);
            this.slideInterval = setInterval(this.nextSlide(), this.timeout);
        },
        nextSlide() {
            if(document.getElementById('radio' + this.counter)){
                document.getElementById('radio' + this.counter).checked = true;
                this.counter++;
                if (this.counter > 3) {
                    this.counter = 1;
                  
                }
            }
            
        },
        validateEmail(event) {
            event.preventDefault();
            const formEl = event.target;
            const formData = new FormData(formEl);
            const formProps = Object.fromEntries(formData);
            // code start here
            const email = formProps.email
            console.log("e-mail: ", email) // email value
            this.emailIsValid = this.emailIsValid  // replace for api email check
            // code end here
            const emailField = document.getElementById("emailField");
            if (this.emailIsValid) {
                emailField.classList.remove("error")
                formEl.classList.add("hide");
                document.getElementById("otpForm").classList.add("show");
                /* mask email start */
                var str = email
                str = str.split('');
                var finalArr = [];
                var len = str.indexOf('@');
                str.forEach((item, pos) => {
                    (pos >= 3 && pos <= len - 1) ? finalArr.push('*') : finalArr.push(str[pos]);
                })
                const maskedEmail = finalArr.join('');
                /* mask email end */
                document.getElementById("loginHeader").textContent = "Verify Email";
                document.getElementById("loginSubHeader").textContent = "An email with a verification code has been sent to " + maskedEmail;
            } else {
                emailField.classList.add("error");
            }
        }
    }
}

</script>


<style>
    /* Begin login */


    #main {
        margin: auto;
        padding-top:8vh;
        width: 1440px;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    #carouselContainer {
        background-color: blue;
        position: absolute;
        width: 828px;
        height: 790px;
        left: 612px;
    }


    #loginContainer {
        position: absolute;
        width: 330px;
        height: 292px;
        left: 142px;
        top: 249px;
    }


    #brandWatermark {
        position: absolute;
        width: 481px;
        height: 481px;
        top: 417px;
        opacity: 0.08;
    }


    #brand {
        width: 174.12px;
        height: 18px;
        margin-bottom: 38px;
    }

    .v-header {
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 34px;
        /* identical to box height, or 131% */
        color: #27304C;
    }

    .v-subheader {
        width: 291px;
        height: 44px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        /* or 157% */
        color: #8C8C8C;
        margin-bottom: 22px;
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
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height, or 157% */
        color: #27304C;
        margin-bottom: 8px;
    }

    .v-form .field input {
        box-sizing: border-box;
        padding: 8px 12px;
        height: 40px;
        background: #FFFFFF;
        outline: 0;
        border: 1px solid #2C91FF;
        box-shadow: 0px 0px 0px 2px rgba(44, 145, 255, 0.2);
        border-radius: 4px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height, or 157% */
        color: #27304C;
    }


    .v-form .field.error input {
        border: 1px solid #FF2C2C;
        box-shadow: 0px 0px 0px 2px rgba(255, 44, 44, 0.2);
    }

    .v-form .field .error-msg {
        display: none;
    }

    .v-form .field.error .error-msg {
        display: block;
        margin-top: 4px;
        /* margin-bottom: 20px; */
        width: 330px;
        height: 60px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        /* or 167% */
        color: #FF2C2C;
    }

    .v-form .field input::placeholder {
        color: #BBBBBB;
    }

    .v-form .actions {
        margin-top: 24px;
    }

    .v-form .actions button {
        width: 330px;
        height: 40px;
        background: #2C91FF;
        border: 0;
        border-radius: 4px;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        text-align: center;
        /* Secondary/16 */
        color: #FFFFFF;
    }

    .v-form .actions button:hover {
        box-shadow: 0px 0px 0px 2px #2c92ff38;
    }



    /* OTP START */
    .pin>input {
        text-align: center;
        width: 1em;
    }

    .pin>input:invalid {
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
    input[type=number] {
        -moz-appearance: textfield;
    }


    .otp-form .pin input {
        box-sizing: border-box;
        width: 58px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 8px;
        margin-right: 12px;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height, or 157% */
        color: #32424A;
    }


    .otp-form .pin.error input {
        border: 1px solid #FF2C2C;
    }

    .otp-form .pin.error .error-msg {
        display: block;
        margin-top: 4px;
        width: 330px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #FF2C2C;
    }

    .otp-form .pin input:focus {
        background: #F5FAFF;
        /* Primary/05 */
        border: 1px solid #66B0FF;
        border-radius: 8px;
        outline: 0;
    }

    .otp-form .pin .error-msg {
        display: none;
    }

    .otp-form div a {
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        color: #40555F;
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
        background: #2C91FF;
        border: 0;
        border-radius: 4px;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        text-align: center;
        /* Secondary/16 */
        color: #FFFFFF;
    }

    .otp-form .actions button:hover {
        box-shadow: 0px 0px 0px 2px #2c92ff38;
    }


    /* OTP END */
    /* End login */

    /* Begin slider */
    .slider {
        width: 828px;
        height: 790px;
        overflow: hidden;
        position: relative;
    }

    .slides {
        position: relative;
        width: 500%;
        height: 790px;
        display: flex;
    }

    .slides input {
        display: none;
    }

    .slide {
        overflow: hidden;
        width: 20%;
        transition: 1s;
        position: relative;
    }

    .slide .image {
        width: 828px;
        height: 790px;
        object-fit: cover;
        position: absolute;
    }

    .slide .grid {
        position: absolute;
        width: 155px;
        height: 133px;
        left: 2px;
        top: 0px;
        opacity: 0.4;
    }

    .slide .title {
        position: absolute;
        width: 100%;
        height: 116px;
        left: 69px;
        bottom: 165px;
        font-family: 'RubikBold';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 120%;
        /* or 58px */
        color: #FFFFFF;
    }

    .slide .subtitle {
        position: absolute;
        width: 482px;
        height: 66px;
        left: 69px;
        bottom: 83px;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        /* or 22px */
        color: #FFFFFF;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);
    }


    .slide>.slide1-image95 {
        position: absolute;
        top: 80px;
        right: 182px;
        width: 402px;
        height: 253px;
        filter: drop-shadow(-2px -2px 24px rgba(0, 0, 0, 0.1));
    }

    .slide>.slide1-image96 {
        position: absolute;
        top: 198px;
        right: -10px;
        width: 380px;
        height: 241px;
        filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.2));
    }

    .slide>.slide1-image94 {
        position: absolute;
        width: 158px;
        height: 112px;
        left: 350px;
        top: 301px;
        transform: scale(1.4);
        filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.05));
    }

    .slide>.slide2-image90 {
        position: absolute;
        width: 420px;
        height: 265px;
        left: 244px;
        bottom: 288px;
    }

    .slide>.slide2-image89 {
        position: absolute;
        width: 489px;
        height: 309px;
        left: 359px;
        top: 78px;
        transform: scale(1.2);
    }

    .slide>.slide3-image31 {
        position: absolute;
        width: 403px;
        height: 237px;
        left: 244px;
        top: 96px;
    }

    .slide>.slide3-image88 {
        position: absolute;
        width: 377px;
        height: 221px;
        left: 452px;
        top: 214px;
        transform: scale(1.2);
    }

    .slide>.slide3-image95 {
        position: absolute;
        width: 246px;
        height: 144px;
        left: 265px;
        top: 273px;
        transform: scale(1.3);
    }


    /*css for manual slide navigation*/

    .navigation-manual {
        position: absolute;
        width: 828px;
        display: flex;
        justify-content: center;
        bottom: 38px;
    }

    .navigation-manual label {
        /* display: none; */
        width: 6px;
        height: 6px;
        border-radius: 10px;
        background-color: #FFFFFF;
        cursor: pointer;
        transition: 1s;
    }

    .navigation-manual label:not(:last-child) {
        margin-right: 5px;
    }

    .manual-btn:hover {
        background: #40D3DC;
    }

    #radio1:checked~.navigation-manual .manual-btn1 {
        width: 24px;
        height: 6px;
        background: #F0F0F0;
        border-radius: 4px;
    }

    #radio2:checked~.navigation-manual .manual-btn2 {
        width: 24px;
        height: 6px;
        background: #F0F0F0;
        border-radius: 4px;
    }

    #radio3:checked~.navigation-manual .manual-btn3 {
        width: 24px;
        height: 6px;
        background: #F0F0F0;
        border-radius: 4px;
    }

    #radio1:checked~.first {
        margin-left: 0;
    }

    #radio2:checked~.first {
        margin-left: -20%;
    }

    #radio3:checked~.first {
        margin-left: -40%;
    }
</style>
