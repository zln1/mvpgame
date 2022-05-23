<template>
  <div class="lupu">
    <div class="content">
      <div @click="toLinkPro" class="lupu1">
        <img
          v-if="isShow3"
          class="img1 animate__fadeInUp animate__animated"
          src="../assets/index-two/lupu1.png"
          alt=""
        />
        <transition name="Fade">
          <img
            v-if="ishover2"
            class="hover"
            src="../assets/index-two/hover.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow11"
            class="oneline1"
            src="../assets/index-two/oneline1.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow12"
            class="oneline2"
            src="../assets/index-two/oneline2.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow4"
            class="smartX2Eg"
            src="../assets/index-two/smartX2Eg.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="ishover2"
            class="smartX2E"
            src="../assets/index-two/smartX2E.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="ishover2"
            class="one1"
            src="../assets/index-two/one1.png"
            alt=""
          />
        </transition>
      </div>
      <div  @click="toLinkPro" class="lupu2">
        <img
          v-if="isShow1"
          class="img1 animate__fadeInUp animate__animated"
          src="../assets/index-two/lupu2.png"
          alt=""
        />
        <transition name="Fade">
          <img
            v-if="ishover1"
            class="hover2"
            src="../assets/index-two/hover.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow2"
            class="smartP2Eg"
            src="../assets/index-two/smartP2Eg.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow1"
            class="smartP2E"
            src="../assets/index-two/smartP2E.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="ishover1"
            class="one2"
            src="../assets/index-two/one2.png"
            alt=""
          />
        </transition>
      </div>
      <div  @click="toLinkPro" class="lupu3">
        <img
          class="img1 animate__fadeInUp animate__animated"
          src="../assets/index-two/lupu3.png"
          alt=""
          v-if="isShow5"
        />
        <transition name="Fade">
        <img
          v-if="ishover3"
          class="hover3"
          src="../assets/index-two/hover.png"
          alt=""
        />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow13"
            class="oneline3"
            src="../assets/index-two/oneline3.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
        <img
          v-if="ishover3"
          class="one3"
          src="../assets/index-two/one3.png"
          alt=""
        />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow6"
            class="communityg"
            src="../assets/index-two/communityg.png"
            alt=""
          />
        </transition>

        <img
          v-if="ishover3"
          class="community"
          src="../assets/index-two/community.png"
          alt=""
        />
      </div>
      <div  @click="toLinkPro" class="lupu4">
        <img
          v-if="isShow7"
          class="img1 animate__fadeInUp animate__animated"
          src="../assets/index-two/lupu5.png"
          alt=""
        />
        <transition name="Fade">
        <img
          v-if="ishover4"
          class="hover5"
          src="../assets/index-two/hover.png"
          alt=""
        />
        </transition>
         <transition name="Fade">
        <img
          v-if="ishover4"
          class="one4"
          src="../assets/index-two/one4.png"
          alt=""
        />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow8"
            class="LaunchPadg"
            src="../assets/index-two/LaunchPadg.png"
            alt=""
          />
        </transition>
         <transition name="Fade">
        <img
          v-if="ishover4"
          class="LaunchPad"
          src="../assets/index-two/LaunchPad.png"
          alt=""
        />
        </transition>
      </div>
      <div @click="toLinkPro" class="lupu5">
        <img
          v-if="isShow9"
          class="img1 animate__fadeInUp animate__animated"
          src="../assets/index-two/lupu4.png"
          alt=""
        />
         <transition name="Fade">
        <img
          v-if="ishover5"
          class="one5"
          src="../assets/index-two/one5.png"
          alt=""
        />
        </transition>
        <img
          v-if="ishover5"
          class="hover4"
          src="../assets/index-two/hover.png"
          alt=""
        />
        <transition name="Fade">
          <img
            v-if="isShow14"
            class="oneline4"
            src="../assets/index-two/oneline4.png"
            alt=""
          />
        </transition>
        <transition name="Fade">
          <img
            v-if="isShow10"
            class="Cloudgamingg"
            src="../assets/index-two/Cloudgamingg.png"
            alt=""
          />
        </transition>
         <transition name="Fade">
        <img
          v-if="ishover5"
          class="Cloudgaming"
          src="../assets/index-two/Cloudgaming.png"
          alt=""
        />
        </transition>
      </div>
      <div class="boxdiv"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "BaseLayout",
  name: "guide",

  mounted() {
    setTimeout(() => {
      this.isShow1 = true;
    }, 500);
    setTimeout(() => {
      this.isShow2 = true;
    }, 1000);
    setTimeout(() => {
      this.ishover1 = true;
      this.isShow3 = true;
    }, 1500);
    setTimeout(() => {
      this.isShow4 = true;
    }, 2000);
    setTimeout(() => {
      this.isShow5 = true;
      this.ishover2 = true;
    }, 2500);
    setTimeout(() => {
      this.isShow6 = true;
    }, 3000);
    setTimeout(() => {
      this.isShow7 = true;
      this.ishover3 = true;
    }, 3500);
    setTimeout(() => {
      this.isShow8 = true;
    }, 4000);
    setTimeout(() => {
      this.ishover4 = true;
      this.isShow9 = true;
    }, 4500);
    setTimeout(() => {
      this.isShow10 = true;
    }, 5000);
    setTimeout(() => {
      this.isShow11 = true;
      this.ishover5 = true;
    }, 5500);
    setTimeout(() => {
      this.isShow12 = true;
    }, 6000);
    setTimeout(() => {
      this.isShow13 = true;
    }, 6500);
    setTimeout(() => {
      this.isShow14 = true;
    }, 7000);
  },
  methods: {
    toLinkPro() {
      this.$router.push("/product/SmartP2E");
    },
  },
  data() {
    return {
      ishover1: false,
      ishover2: false,
      ishover3: false,
      ishover4: false,
      ishover5: false,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
      isShow6: false,
      isShow7: false,
      isShow8: false,
      isShow9: false,
      isShow10: false,
      isShow11: false,
      isShow12: false,
      isShow13: false,
      isShow14: false,
      hoverimg1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
    };
  },
};
</script>
<style lang="less" scoped>
.Fade-enter,
.Fade-leave-to {
  opacity: 0;
}
.Fade-enter-to,
.Fade-leave {
  opacity: 1;
}

.Fade-enter-active,
.Fade-leave-active {
  transition: all 4s;
}
.lupu {
  width: 1200px;
  height: 813px;
  margin: auto;
  // padding-top: 300px;
  .content {
    width: 100%;
    position: relative;
    height: 750px;

    .boxdiv {
      left: 0;
      z-index: 15;
      width: 100%;
      opacity: 0.85;
      height: 79px;
      background: black;
      position: absolute;
      bottom: 112px;
    }
    .hover,
    .hover2,
    .hover3,
    .hover4,
    .hover5 {
      // display: block !important;
      width: 224px !important;
      height: 210px !important;
      position: absolute;
      transform: skew(1deg, -2deg);
    }
    .hover,
    .hover2,
    .hover3,
    .hover4,
    .hover5 {
      display: none;
      left: 0px;
      top: -95px;
      z-index: 20;
    }
    .oneline1 {
      width: 112px;
      height: 60px;
      left: 0;
      top: -25px;
      position: absolute;
    }
    .one1,
    .one5,
    .one2,
    .one3,
    .one4 {
      width: 102px;
      height: 98px;
      position: absolute;
      left: 53px;
      display: none;
      top: -38px;
    }

    .smartX2Eg {
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
      display: block;
    }
    .smartX2E {
      z-index: 21;
      display: none;
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
    }

    .Cloudgamingg {
      width: 84px;
      height: 61px;
      left: 89px;
      top: 33px;
      position: absolute;
      display: block;
    }
    .Cloudgaming {
      display: none;
      width: 84px;
      z-index: 21;
      height: 61px;
      left: 89px;
      top: 33px;
      position: absolute;
    }
    .LaunchPadg {
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
      display: block;
    }
    .LaunchPad {
      z-index: 21;
      display: none;
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
    }
    .communityg {
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
      display: block;
    }
    .community {
      display: none;
      z-index: 21;
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
    }
    .smartP2Eg {
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
      display: block;
    }
    .smartP2E {
      z-index: 21;
      display: none;
      width: 109px;
      height: 48px;
      left: 89px;
      top: 45px;
      position: absolute;
    }
    .oneline2 {
      width: 37px;
      height: 25px;
      right: -36px;
      top: 74px;
      z-index: 0;
      position: absolute;
    }
    .oneline3 {
      width: 36px;
      height: 25px;
      right: -36px;
      top: 74px;
      z-index: 0;
      position: absolute;
    }
    .oneline4 {
      width: 104px;
      height: 113px;
      right: -106px;
      top: -15px;
      z-index: 0;
      position: absolute;
    }
    .lupu1,
    .lupu2,
    .lupu3,
    .lupu4,
    .lupu5 {
      position: absolute;
      width: 224px;
      height: 391px;
      z-index: 1;
      .img1 {
        width: 100%;
        height: 100%;
      }
    }
    .lupu1:hover {
      .one1 {
        display: block;
      }
      .smartX2E {
        display: block;
      }
      .smartX2Eg {
        display: none;
      }
      .hover {
        display: block !important;
      }
    }
    .lupu2:hover {
      .one2 {
        display: block;
      }
      .smartP2E {
        display: block;
      }
      .smartP2Eg {
        display: none;
      }
      .hover2 {
        display: block !important;
      }
    }
    .lupu3:hover {
      .one3 {
        display: block;
      }
      .community {
        display: block;
      }
      .communityg {
        display: none;
      }
      .hover3 {
        display: block !important;
      }
    }
    .lupu4:hover {
      .one4 {
        display: block;
      }
      .LaunchPad {
        display: block;
      }
      .LaunchPadg {
        display: none;
      }
      .hover5 {
        display: block !important;
      }
    }
    .lupu5:hover {
      .one5 {
        display: block;
      }
      .Cloudgaming {
        display: block;
      }
      .Cloudgamingg {
        display: none;
      }

      .hover4 {
        display: block !important;
      }
    }
    .lupu1 {
      left: 274px;
      top: 245px;
      z-index: 10;
    }
    .lupu2 {
      left: 361px;
      top: 76px;
      z-index: 3;
    }
    .lupu4 {
      z-index: 5;
      right: 275px;
      top: 115px;
    }
    .lupu3 {
      z-index: 9;
      left: 488px;
      top: 182px;
    }
    .lupu5 {
      z-index: 10;
      height: 276px !important;
      right: 363px;
      top: 285px;
    }
  }
}
</style>
