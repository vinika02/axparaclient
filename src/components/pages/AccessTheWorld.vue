<template>
  <div class="main">
    <!-- bar start -->
    <div class="bar">
      <img src="../../assets/images/AxparaLogo.svg" alt="" class="barLogo" />
      <button class="v-button v-align-right v-bg-primary" type="button">E-mail Us</button>
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
          <button type="button" class="v-button v-button-outline v-mr-16">
            I'm a Talent
          </button>

          <button type="button" class="v-button v-button-outline">I'm an Employer</button>
        </div>
      </div>
    </div>
    <!-- content end -->

    <!--bottom bar star -->
    <div class="v-bottom-bar">
      <a href="javascript:void(0)" v-for="i in 8" :key="i"
        ><img :src="require(`../../assets/images/brand${i}.svg`)" :alt="`brand${i}.svg`"
      /></a>
    </div>
    <!-- bottom bar end -->
  </div>
</template>
<script>
export default {
  name: "AccessTheWorld",
};
</script>
<style>
.main {
  font-family: "RubikRegular";
  width: 1920px;
  height: 1024px;
  position: relative;
  margin: auto;
  overflow: hidden !important;
}

.v-body {
  position: relative;
  width: 1920px;
  height: 1024px;
}

.bg-1 {
  position: absolute;
  width: 366.51px;
  height: 370.47px;
  /* left: 1611.16px; */
  right: -20px;
  top: 30.16px;
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
  top: 488px;
  opacity: 0.12;
}

.img-1 {
  position: absolute;
  right: 299px;
  top: 192px;
}
.img-2 {
  position: absolute;
  right: 208px;
  top: 497px;
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
  align-items: center;

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
  padding: 14px 63px;
  background: #ffffff;
  color: #2c91ff;
  border: 1px solid #3c9aff;
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
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
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 25px 10px;
  gap: 10px;

  position: absolute;
  width: 1920px;
  height: 130px;
  left: 0px;
  bottom: -3px;

  /* Grey-2/19 */

  background: #f3f4f5;
}

.brand-link {
  position: relative;
}
</style>
