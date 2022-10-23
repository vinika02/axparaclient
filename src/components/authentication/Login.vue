
<template>
  <div>
    <div id="main">
      <div id="brandWatermark">
        <img src="@/assets/images/login/logo.svg" alt="logo" />
      </div>
      <div id="loginContainer">
        <img id="brand" src="@/assets/images/login/brand.svg" alt="brand" />
        <div id="loginHeader" class="v-header">Welcome!</div>
        <div id="loginSubHeader" class="v-subheader">
          Enter your e-mail address and input your one-time password. No sign-up required.
        </div>
        <!-- loginEmailForm start -->
        <form id="loginEmailForm" class="v-form" @submit.prevent="validateEmail()">
          <div id="emailField" class="field">
            <label>Email</label>
            <input
              autocomplete="off"
              type="email"
              name="email"
              placeholder="Enter your email"
              style="width: 100%"
              autofocus
              required
            />
            <div class="error-msg">
              Please enter a valid company e-mail address. Your e-mail address domain is
              currently not approved as a Client in our database.
            </div>
          </div>
          <div class="actions">
            <button type="submit">Next</button>
          </div>
        </form>
        <!-- loginEmailForm end -->

        <!-- otpForm start -->
        <form
          id="otpForm"
          class="otp-form"
          v-on:submit="validateOtp()"
          style="display: none"
        >
          <div id="pinField" class="pin">
            <input
              type="number"
              name="pass[]"
              maxlength="1"
              autocomplete="off"
              required
              pattern="\d{1}"
              oninput="this.value=this.value.slice(0,this.maxLength)"
              autofocus
            />
            <input
              type="number"
              name="pass[]"
              maxlength="1"
              autocomplete="off"
              required
              pattern="\d{1}"
              oninput="this.value=this.value.slice(0,this.maxLength)"
            />
            <input
              type="number"
              name="pass[]"
              maxlength="1"
              autocomplete="off"
              required
              pattern="\d{1}"
              oninput="this.value=this.value.slice(0,this.maxLength)"
            />
            <input
              type="number"
              name="pass[]"
              maxlength="1"
              autocomplete="off"
              required
              pattern="\d{1}"
              oninput="this.value=this.value.slice(0,this.maxLength)"
            />
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
            <input
              type="radio"
              checked
              name="radio-btn"
              id="radio1"
              @click="resetSlide(0)"
            />
            <input type="radio" name="radio-btn" id="radio2" @click="resetSlide(1)" />
            <input type="radio" name="radio-btn" id="radio3" @click="resetSlide(2)" />
            <!--radio buttons end-->
            <!--slide images start-->

            <!-- <div class="slide"> -->
            <img class="grid" src="@/assets/images/login/carousel/grid.svg" alt="grid" />

            <div class="slide bg-1">
              <img class="" src="@/assets/images/login/carousel/slide1.png" />
              <div class="slide-img-1">
                <img
                  class="slide1-image95"
                  src="@/assets/images/login/carousel/slide1-image95.svg"
                  alt="image95"
                />
                <img
                  class="slide1-image96"
                  src="@/assets/images/login/carousel/slide1-image96.svg"
                  alt="image96"
                />
                <img
                  class="slide1-image94"
                  src="@/assets/images/login/carousel/slide1-image94.svg"
                  alt="image94"
                />
              </div>
            </div>

            <div class="slide bg-2">
              <img class="" src="@/assets/images/login/carousel/slide2.png" />
              <div class="slide-img-2">
                <img
                  class="slide2-image90"
                  src="@/assets/images/login/carousel/slide2-image90.svg"
                  alt="image90"
                />
                <img
                  class="slide2-image89"
                  src="@/assets/images/login/carousel/slide2-image89.svg"
                  alt="slide2-image89"
                />
              </div>
            </div>

            <div class="slide bg-3">
              <img class="" src="@/assets/images/login/carousel/slide3.png" />
              <div class="slide-img-3">
                <img
                  class="slide3-image31"
                  src="@/assets/images/login/carousel/slide3-image31.svg"
                  alt="slide3-image31"
                />
                <img
                  class="slide3-image88"
                  src="@/assets/images/login/carousel/slide3-image88.svg"
                  alt="slide3-image88"
                />
                <img
                  class="slide3-image95"
                  src="@/assets/images/login/carousel/slide3-image95.svg"
                  alt="slide3-image95"
                />
              </div>
            </div>

            <div class="slide-text-1">
              <div class="title">Search, Shortlist, <br />Schedule</div>
              <div class="subtitle">
                Instantly search and shortlist talents on our candidate database, schedule
                interviews for potential candidates, and give feedback on completed
                interviews.
              </div>
            </div>

            <div class="slide-text-2">
              <div class="title">Axpara.com introduces SkillScanner</div>
              <div class="subtitle">
                Never miss a potential profile again. Our SkillScanner learns from your
                past orders and searches. Anytime there is a new candidate that is a fit,
                you get alerted!
              </div>
            </div>

            <div class="slide-text-3">
              <div class="title">
                Manage Your <br />
                Distributed Team
              </div>
              <div class="subtitle">
                Seamless management of your team. Review attendance records, approve leave
                requests or trigger a performance appraisals.
              </div>
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
  name: "Login",
  data() {
    return {
      emailIsValid: true,
      optInvalid: false,
      counter: 0,
      timeout: 10000,
      slideInterval: null,
      previousIndex: 0,
      slidesIndexes: [0, 1, 2],
    };
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

    this.slides = document.getElementsByClassName("slide");
    this.slides[0].style.zIndex = 102;
    this.slides[1].style.zIndex = 100;
    this.slides[2].style.zIndex = 101;

    this.slideInterval = setInterval(this.nextSlide, this.timeout);
    // this.slidesIndexes = [0, 1, 2];
    this.nextSlide(0);
  },
  methods: {
    validateOtp() {
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

      this.optInvalid
        ? pinField.classList.remove("error")
        : pinField.classList.add("error");
    },
    validateEmail(event) {
      // event.preventDefault();
      const formEl = document.getElementById("loginEmailForm")
      const formData = new FormData(formEl);
      const formProps = Object.fromEntries(formData);
      // code start here
      const email = formProps.email;
      this.emailIsValid = this.emailIsValid; // replace for api email check
      // code end here
      const emailField = document.getElementById("emailField");
      if (this.emailIsValid) {
        emailField.classList.remove("error");
        formEl.classList.add("hide");
        document.getElementById("otpForm").classList.add("show");
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
        document.getElementById("loginHeader").textContent = "Verify Email";
        document.getElementById("loginSubHeader").textContent =
          "An email with a verification code has been sent to " + maskedEmail;
      } else {
        emailField.classList.add("error");
      }
    },

    resetSlide(n) {
      clearInterval(slideInterval);
      slideInterval = setInterval(this.nextSlide, this.timeout);
      showSlide(n);
    },

    nextSlide() {
      var i = this.counter + 1;
      document.getElementById("radio" + i).checked = true;
      this.showSlide(this.counter);

      this.counter++;
      if (this.counter > 2) {
        this.counter = 0;
      }
    },

    showSlide(n) {
      var currentIndex = n;
      var el;
      this.slidesIndexes.forEach((element, i) => {
        if (element == currentIndex) {
          el = this.slidesIndexes[i];
          this.slidesIndexes.splice(i, 1);
          this.slidesIndexes.push(el);
          return;
        }
      });

      var zIndex = 100;
      this.slidesIndexes.forEach((index) => {
        this.slides[index].style.zIndex = zIndex;
        zIndex++;
      });
    },
  },
};
</script>

<style type="text/css">
  
/* Begin login */

body {
  overflow-y: hidden !important;
}

#carouselContainer {
  position: absolute;
  width: 50%;
  height: 100%;
  /*left: 612px;*/
  right: 0;
  overflow: hidden;
  /*transform: scale(1.5);*/
}

#loginContainer {
  position: absolute;
  width: 330px;
  height: 292px;
  left: 20%;
  top: 249px;
}

#brandWatermark {
  position: absolute;
  width: 481px;
  height: 481px;
  bottom: -50px;
  left: 100px;
  opacity: 0.08;
  transform: scale(1.5);
}

#brand {
  width: 174.12px;
  height: 18px;
  margin-bottom: 38px;
}

.v-header {
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  /* identical to box height, or 131% */
  color: #27304c;
}

.v-subheader {
  width: 291px;
  height: 44px;
  font-family: "RubikRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  color: #8c8c8c;
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
  border: 1px solid #2c91ff;
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

.v-form .field.error input {
  border: 1px solid #ff2c2c;
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

/* OTP END */

/* End login */

/* Begin slider */
.slider {
  /*width: 828px;*/
  height: 100%;
  /* overflow: hidden; */
  /* background-color: red; */

  position: relative;
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: rgba(255, 0, 0, 0); */
  /*transform: scale(1.5);*/
}

.slides input {
  display: none;
}

.slide > img {
  transform: scale(1.5);
}

.slide-img-1 {
  width: 828px;
  height: 790px;
  object-fit: cover;
  position: absolute;
  /* right: -593px; */
  right: 0;
  top: 0;
  /*transform: scale(2);*/
}

.slide-img-2 {
  width: 828px;
  height: 790px;
  object-fit: cover;
  position: absolute;
  /* right: -569px; */
  right: 0;
  top: 0;
  /*transform: scale(2);*/
}

.slide-img-3 {
  width: 828px;
  height: 790px;
  object-fit: cover;
  position: absolute;
  /* right: -590px; */
  right: 0;
  top: 0;
  /*transform: scale(1.5);*/
}

.slide-text-1 {
  width: 828px;
  height: 790px;
  object-fit: cover;
  position: absolute;
  bottom: -281px;
}

.slide-text-2 {
  width: 828px;
  height: 790px;
  object-fit: cover;
  position: absolute;
  bottom: -281px;
}

.slide-text-3 {
  width: 828px;
  height: 790px;
  object-fit: cover;
  position: absolute;
  bottom: -281px;
}

#radio1:checked ~ .bg-1 {
  animation: fadeIn1 10s forwards;
}

#radio2:checked ~ .bg-2 {
  animation: fadeIn2 10s forwards;
}

#radio3:checked ~ .bg-3 {
  animation: fadeIn3 10s forwards;
}

#radio1:checked ~ .slide-text-1 {
  animation: slideUp1 10s forwards;
}

#radio2:checked ~ .slide-text-2 {
  animation: slideUp1 10s forwards;
}

#radio3:checked ~ .slide-text-3 {
  animation: slideUp1 10s forwards;
}

@keyframes slideLeft1 {
  0% {
    right: -593px;
  }

  25% {
    right: 0;
  }

  75% {
    right: 0;
  }

  100% {
    right: -593px;
  }
}

@keyframes slideLeft2 {
  0% {
    right: -569px;
  }

  25% {
    right: 0;
  }

  75% {
    right: 0;
  }

  100% {
    right: -593px;
  }
}

@keyframes slideLeft3 {
  0% {
    right: -590px;
  }

  25% {
    right: 0;
  }

  75% {
    right: 0;
  }

  100% {
    right: -593px;
  }
}

@keyframes slideUp1 {
  0% {
    bottom: -100%;
  }

  25% {
    bottom: 0;
  }

  75% {
    bottom: 0;
  }

   95% {
    bottom: -50%;
  }

  100% {
    bottom: -100%;
  }
}

@keyframes fadeIn1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn3 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.slide {
  /*width: 100%;
  height: 100%;*/
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}

.grid {
  position: absolute;
  width: 155px;
  height: 133px;
  transform: scale(1.5);
  left: 2px;
  top: 0px;
  z-index: 500;
  opacity: 0.4;
}

.title {
  position: absolute;
  width: 100%;
  height: 116px;
  left: 69px;
  bottom: 165px;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  /* or 58px */
  color: #ffffff;
  z-index: 103;
}

.subtitle {
  position: absolute;
  width: 482px;
  height: 66px;
  left: 69px;
  bottom: 83px;
  font-family: "RubikRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  color: #ffffff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);
  z-index: 103;
}

.slide > div {
  transform: scale(1.2);
  position: absolute;
  top: 10%;
  /*right: 0;*/
}


.slide-img-1 > .slide1-image95 {
  position: absolute;
  top: 80px;
  right: 182px;
  width: 402px;
  height: 253px;
  z-index: 500;
  filter: drop-shadow(-2px -2px 24px rgba(0, 0, 0, 0.1));
}

.slide-img-1 > .slide1-image96 {
  position: absolute;
  top: 198px;
  right: 0;
  width: 380px;
  height: 241px;
  z-index: 500;
  filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.2));
}

.slide-img-1 > .slide1-image94 {
  position: absolute;
  width: 158px;
  height: 112px;
  left: 343px;
  top: 301px;
  transform: scale(1.4);
  z-index: 500;
}

.slide-img-2 > .slide2-image90 {
  position: absolute;
  width: 420px;
  height: 265px;
  left: 244px;
  bottom: 288px;
  z-index: 500;
}

.slide-img-2 > .slide2-image89 {
  position: absolute;
  width: 489px;
  height: 309px;
  left: 359px;
  top: 78px;
  transform: scale(1.2);
  z-index: 500;
  filter: drop-shadow(-2px 4px 24px rgba(0, 0, 0, 0.14));
}

.slide-img-3 > .slide3-image31 {
  position: absolute;
  width: 403px;
  height: 237px;
  left: 244px;
  top: 96px;
  z-index: 500;
}

.slide-img-3 > .slide3-image88 {
  position: absolute;
  width: 377px;
  height: 221px;
  left: 452px;
  top: 214px;
  transform: scale(1.2);
  z-index: 500;
}

.slide-img-3 > .slide3-image95 {
  position: absolute;
  width: 246px;
  height: 144px;
  left: 265px;
  top: 273px;
  transform: scale(1.3);
  z-index: 500;
}

/*css for manual slide navigation*/

.navigation-manual {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 38px;
  z-index: 103;
}

.navigation-manual label {
  /* display: none; */
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  transition: 1s;
}

.navigation-manual label:not(:last-child) {
  margin-right: 5px;
}

#radio1:checked ~ .navigation-manual .manual-btn1 {
  width: 24px;
  height: 6px;
  background: #f0f0f0;
  border-radius: 4px;
}

#radio2:checked ~ .navigation-manual .manual-btn2 {
  width: 24px;
  height: 6px;
  background: #f0f0f0;
  border-radius: 4px;
}

#radio3:checked ~ .navigation-manual .manual-btn3 {
  width: 24px;
  height: 6px;
  background: #f0f0f0;
  border-radius: 4px;
}
</style>