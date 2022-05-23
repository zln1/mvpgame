<template>
  <div id="indexContent">
    <div class="index-content">
      <div class="topdiv3">
        <div v-show="isShowTitle" class="title" style="margin-top: 50px">
          <img class="icon" src="~/assets/titleicon.png" alt="" />
          HIGHLIGHTS
        </div>
        <div
          style="position: absolute; width: 100%; height: 100%; z-index: -1"
          :style="tranformopcityTop"
        >
          <img class="imgbanner" src="~@/assets/lightlogo1.webp" alt="" />
          <transition name="Fade2">
            <img
              v-if="tranformopcity2"
              class="imgpng"
              src="~@/assets/Bitmap1.png"
              alt=""
            />
          </transition>
        </div>
        <transition name="Fade">
          <div v-if="tranformopcity1" class="lighttext1">
            <p>The Global Leading</p>
            <p>Fully-automatic P2E</p>
            <p>Management Platform</p>
          </div>
        </transition>
        <transition name="Fade">
          <div v-if="tranformopcity3" class="lightdesc1">
            <p :style="{ opacity: tranformopcity == 1 ? '1' : '0.5' }">
              Maximize capital utilization
            </p>
            <p :style="{ opacity: tranformopcity == 2 ? '1' : '0.5' }">
              Full process automation + Proof of gaming
            </p>
            <p :style="{ opacity: tranformopcity == 3 ? '1' : '0.5' }">
              $10Mn/mo estimated income in One Year
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "BaseLayout",
  name: "about",
  data() {
    return {
      isListbool: true,
      isShowTitle: false,
      isScrlly: false,
      istranformopcity: true,
      bodyScrllTop: null,
      tranformopcity: "",
      tranformopcityTop: {},
      tranformopcity1: false,
      tranformopcity2: false,
      tranformopcity3: false,
    };
  },
  mounted() {
    document
      .getElementById("indexContent")
      .addEventListener("scroll", this.handerScrll, true);
  },
  destroyed() {
    // document
    //   .getElementById("indexContent")
    //   .removeEventListener("scroll", this.handerScrll, true);
  },
  methods: {
    handerScrll() {
      this.bodyScrllTop = document.getElementById("indexContent").scrollTop;

      if (this.bodyScrllTop > 1 && this.istranformopcity) {
        this.isShowTitle = true;
        this.istranformopcity = false;
        this.tranformopcity1 = true;
        setTimeout(() => {
          this.tranformopcity2 = true;
        }, 500);
        setTimeout(() => {
          this.tranformopcity3 = true;
          this.tranformopcity = 1;
          this.tranformopcityTop.transform = "translate(0px, -50px)";
          this.tranformopcityTop.transition = "transform 3s linear 0s";
        }, 1000);
        setTimeout(() => {
          this.tranformopcity = 2;
        }, 2000);
        setTimeout(() => {
          this.tranformopcity = 3;
        }, 3000);
      }
      if (this.bodyScrllTop > 78) {
        this.isListbool = false;
      } else {
        this.isListbool = true;
      }
      if (this.bodyScrllTop > 78 && this.bodyScrllTop === 0) {
        this.isShowTitle = false;
      }
      if (this.bodyScrllTop > 20) {
        this.tranformopcity = 1;
        // this.tranformopcityTop.transform = "translate(0px, -100px)";
        // this.tranformopcityTop.transition = "transform 1s linear 0s";
      }
      if (this.bodyScrllTop > 40) {
        this.tranformopcity = 2;
        // this.tranformopcityTop.transform = "translate(0px, -100px)";
        // this.tranformopcityTop.transition = "transform 1s linear 0s";
      }
      if (this.bodyScrllTop > 60) {
        this.tranformopcity = 3;
        // this.tranformopcityTop.transform = "translate(0px, -150px)";
        //   this.tranformopcityTop.transition = "transform 1s linear 0s";
      }
      //  if(this.isListbool && this.bodyScrllTop > 1){
      //   this.tranformopcityTop.transform = `translate(0px, -${this.bodyScrllTop*3}px)`;
      //   this.tranformopcityTop.transition = "transform 1s linear 0s";
      // }
    },
  },
};
</script>

<style lang="less" scoped>
#indexContent {
  width: 100%;
  height: 900px;
  overflow-y: auto;
  margin-bottom: 100px;
  //  margin-top: 400px;
}
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
  transition: all 3s;
}

.Fade2-enter,
.Fade2-leave-to {
  opacity: 0;
  transform: scale(0.2) rotateY(90deg);
  // transform: scale(0.4) rotate(360deg);
  // transform:rotate(360deg);
  // transform:rotate(360deg)
}
.Fade2-enter-to,
.Fade2-leave {
  opacity: 1;
  transform: scale(1) rotateY(360deg);
}

.Fade2-enter-active,
.Fade2-leave-active {
  transition: all 1s;
}
.index-content {
  max-width: 1200px;
  min-width: 960px;
  margin: auto;

  .title {
    position: fixed;
    top: 50px;
    height: 27px;
    // width: 1200px;
    max-width: 1200px;
    min-width: 960px;
    font-size: 22px;
    letter-spacing: 1px;
    padding-left: 25px;
    font-family: "Poppins-Medium";
    font-weight: 500;
    color: #ffffff;
    .icon {
      position: absolute;
      left: 0px;
      top: 8px;
      width: 15px;
    }
  }
  .topdiv3 {
    width: 100%;
    position: relative;
    // height: 600px;
    // overflow-y: auto;
    .imgpng {
      position: absolute;
      z-index: -1;
      right: 210px;
      top: 180px;
    }
    .imgbanner {
      max-width: 1200px;
      min-width: 960px;
      height: 762px;
      position: absolute;
      z-index: -9991;
      top: 329px;
    }
    .lighttext1 {
      // padding-top: 127px;
      top: 197px;
      // margin-left: 14%;
      position: fixed;
      width: 980px;
      // height: 252px;
      font-size: 63px;
      z-index: -1;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 78px;
      letter-spacing: 2px;
    }
    .lightdesc1 {
      top: 437px;
      padding-top: 50px;
      z-index: -1;
      position: fixed;
      // margin-left: 14%;
      width: 848px;
      // height: 162px;
      font-size: 29px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 39px;
      p {
        height: 50px;
        opacity: 0.5;
      }
    }
  }
  // display: flex;
  // flex-wrap: wrap;
}
</style>
