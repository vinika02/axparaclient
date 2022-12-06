<template>
  <div class="main">
    <!-- bar start -->
    <div class="bar">
      <img src="../../assets/images/AxparaLogo.svg" alt="" class="barLogo" />
      <a class="m-t-7" href="mailto:keith@axpara.com"><button class="v-button v-align-right v-bg-primary" type="button">E-mail Us</button></a>
    </div>
    <!-- bar end -->
    <!-- content end -->
    <div class="v-body">
      <img
        v-for="i in 3"
        :key="i"
        :class="`bg-${i}`"
        :src="require(`../../assets/images/watermark${i}.svg`)"
        :alt="`watermark${i}.svg`"
      />

      <img class="img-1" src="../../assets/images/image1041.png" alt="" />
      <img class="img-2" src="../../assets/images/image142.png" alt="" />
      <!-- content start -->
      <div class="v-card">
        <div class="header">
          At Axpara.com, we enable
          <span class="v-text-primary">borderless employment</span>
        </div>
        <div class="actions">
          <a href="https://talent.axpara.com/login">
              <button type="button" class="v-button v-button-outline v-mr-16">        
               I'm a Talent
            </button>
          </a>
          <span data-bs-toggle="modal" data-bs-target="#LocationModal">
             <button type="button" class="v-button v-button-outline">I'm an Employer</button>
          </span>
        </div>
      </div>
    </div>
    <LocationModal></LocationModal>
    <!-- content end -->

    <!--bottom bar star -->
    <div class="v-bottom-bar">
      <div class="v-links">
        <a class="brand-link" href="javascript:void(0)" v-for="i in 14" :key="i"
          ><img
            :src="require(`../../assets/images/brand${i}.svg`)"
            :alt="`brand${i}.svg`"
        /></a>
      </div>
    </div>
    <!-- bottom bar end -->
  </div>
</template>
<script>
import LocationModal from '../modals/LocationModal'
export default {
  name: "AccessTheWorld",
  components:{
    LocationModal
  }
};
</script>
<style>
body {
  background-color: black;
}
.main {
  background-color: rgb(255, 255, 255);

  font-family: "RubikRegular";
  height: 1024px;
  position: relative;
  margin: auto;
  overflow: hidden !important;
}

.v-body {
  position: relative;
  height: 1024px;
}

.bg-1 {
    position: absolute;
    width: 366.51px;
    height: 421.47px;
    right: -60px;
    top: 6.16px;
}

.bg-2 {
  position: absolute;
  width: 244px;
  height: 244px;
  left: 899px;
  top: 126px;
}

.bg-3 {
  position: absolute;
  left: 0;
  top: 485px;
  opacity: 0.12;
}
.img-1{
    position: absolute;
    right: 281px;
    top: 193px;
}
.img-2 {
    position: absolute;
    right: 183px;
    top: 489px;
    border: 8px solid white;
}

.v-align-right {
  position: absolute;
  right: 200px;
}

.v-bg-primary {
  background-color: #2c91ff !important;
}

.v-text-primary {
  color: #2c91ff !important;
}

.v-mr-16 {
  margin-right: 16px !important;
}

.bar {
  display: flex;  
  padding: 2px 200px;
  position: absolute;
  width: 100%;
  height: 64px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  box-shadow: inset 0px -1px 0px #c4c4c4;
  z-index: 1;
}

.barLogo {
  width: 200px;
  height: 60px;
  position: absolute;
  left: 200px;
}

.v-button {
  padding: 10px 24px;
  background: #ffffff;
  color: #ffffff;
  border: 0;  
}

.v-button-outline {
  padding: 10px;
  width: 230px;
  background: #ffffff;
  color: #2c91ff;
  border: 1px solid #3c9aff;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
}

.v-button-outline:hover {
  color: #ffffff;
  background: #2c91ff;
}

.v-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;

  position: absolute;
  width: 723px;
  height: 353px;
  left: 200px;
  top: 284px;
}

.v-card > .header {
  width: 723px;
  height: 258px;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 120%;
  color: #5a5959;
}

.v-bottom-bar {
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: flex-start; */
  padding: 25px 10px;
  position: absolute;
  height: 130px;
  left: 0px;
  bottom: -3px;

  /* Grey-2/19 */
  background: #f3f4f5;
}

.brand-link {
  position: relative;
  margin-right: 30px;
  margin-left: 30px;
  transition: 2s;
}

.v-links {
  display: flex;
  position: relative;
}
.v-links {
  animation: slideSide 15s forwards infinite alternate 2s;
}

@keyframes slideSide {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-10%);
  }
  30% {
    transform: translateX(-20%);
  }
  70% {
    transform: translateX(-30%);
  }
  85% {
    transform: translateX(-40%);
  }
  100% {
    transform: translateX(-50%);
  }  
}

@media only screen and (max-width: 1440px){
  .main{
    height: 100vh;
  }
  .barLogo {
      left: 88px;
  }
  .v-align-right {
    right: 85px;
  }
  .v-card {
      left: 94px;
      top: 187px;
  }
  .v-card > .header {
      font-size: 48px;
      width: 450px;
      height: unset;
  }
  .bg-2 {   
    left: 624px;
    top: 110px;
  }
  .bg-3 {
      left: -100px;
      top: 310px;
      height: 536px;
  }
  .img-1{
    right: 220px;
    top: 177px;
    width: 528px;
    height: 378px;
  }
  .bg-1 {
      height: 348.47px;
      right: -91px;
      top: 6.16px;
  }
  .img-2 {
      right: 125px;
      top: 420px;
      width: 350px;
  }
}
</style>
