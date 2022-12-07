<template>
  <div>
    <div class="bg-white" v-if="isBanner">
      <div class="container-fluid app-container p-y-24">
        <div class="content-container dashboard">
          <div class="enabled-border-less">
            <div class="enabled-border-bg-blue">
              <img src="../../../../assets/images/candidatedb/Frame.svg" class="frame" />
              <img
                src="../../../../assets/images/candidatedb/Frame1.svg"
                class="frame1"
              />

              <div class="d-block text-details">
                <div class="flex-fill">
                  <h1 class="enable-borderless-text">
                    We Enable Borderless <br />
                    Employment.
                  </h1>
                  <h5 class="enable-borderless-sub-text" v-if="location != 'Philippines'">
                    We use our local expertise to help you hire the right talent for your
                    needs,<br />
                    wherever they may be in the world.
                  </h5>
                  <h5 class="enable-borderless-sub-text" v-if="location == 'Philippines'">
                    Do it all in one platform where you can post jobs, shortlist
                    applicants,<br />
                    and hire your chosen candidates.
                  </h5>
                  <div>
                    <button
                      class="btn btn-white btn-post-a-job"
                      data-bs-toggle="modal"
                      href="#LoginModal"
                    >
                      Post a Job
                    </button>
                  </div>
                </div>
                <div class="flex-fill">
                  <img
                    src="../../../../assets/Axpara_Icon/Outline/CancelWhite.svg"
                    @click="closeBanner()"
                    class="btn-cancel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn-cancel {
  position: absolute;
  top: -40px;
  right: -52px;
  width: 30px;
}
.enabled-border-less {
  left: 256px;
  background-image: url("../../../../assets/images/candidatedb/axpara-banner-960x240.svg");
  border-radius: 8px;
}
.enabled-border-bg-blue {
  padding: 60px;
  gap: 89px;
  height: 470px;
  background: linear-gradient(
    90.2deg,
    #2c91ff 23.52%,
    rgba(44, 145, 255, 0.984873) 28.41%,
    rgba(44, 145, 255, 0) 83.49%
  );
  border-radius: 8px;
  /* overflow: hidden; */
}
.frame {
  position: absolute;
  top: 90px;
  left: 250px;
  z-index: 0;
}
.frame1 {
  position: absolute;
  top: 363px;
  left: 250px;
  z-index: 0;
}
@media screen and (max-width: 900px) {
  .frame {
    top: 90px;
    left: 0;
    z-index: 0;
    width: 100%;
  }
  .frame1 {
    top: 363px;
    left: 0;
    z-index: 0;
    width: 100%;
  }
}
.vector1 {
  position: absolute;
  top: -60px;
  right: -60px;
}
.cartoon {
  position: absolute;
  top: -55px;
  right: -60px;
}
.text-details {
  position: relative;
}
.enable-borderless-text {
  font-weight: 500;
  font-family: "RubikMedium";
  font-size: 68px;
  line-height: 120%;
  color: #ffffff;
  font-style: normal;
}
.enable-borderless-sub-text {
  font-family: "RubikRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 28px;
}
.btn-post-a-job {
  font-family: "RubikMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #2c91ff;
  margin-top: 68px;
  padding: 10px 32px;
}
</style>

<script>
export default {
  name: "Banner",
  data() {
    return {
      location: "",
      isBanner: true,
    };
  },
  mounted() {
    this.location = localStorage.getItem("location");
  },
  methods: {
    closeBanner() {
      this.isBanner = false;
    },
  },
};
</script>
