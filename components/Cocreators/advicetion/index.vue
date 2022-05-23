<template>
  <div class="information_html">
    <div class="information_lists">
      <div class="inforlinear">
        <!-- <div class="userImg" >
            <img
              id="userListImage"
              :style="changeImg"
              src="../../../assets/CoreMembersimgs/userbor.png"
              alt=""
            />
          </div> -->
      </div>
      <div class="detail-div">
        <div
          @click="checkUser(index)"
          v-for="(item, index) of list"
          :key="index"
          class="details"
        >
          <div class="img-div" v-show="index === activeIndex">
            <!-- <img
            class="img"  @mouseenter="changeDescription(item.description, index)"
          @mouseleave="notDescription"
            :src="item.img"
            alt=""
          /> -->
          </div>
          <transition name="Fade">
            <div class="userImg" v-if="item.isShow">
              <img
                id="userListImage"
                :style="changeImg"
                src="../../../assets/CoreMembersimgs/userbor.png"
                alt=""
              />
            </div>
          </transition>
          <!-- <transition name="Fade1">
          </transition> -->

          <div
            class="userinfo"
            :class="{ userInfoCheck: item.isShow === true }"
          >
            <p class="username">{{ item.userName }}</p>
            <p class="usertext">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper w2">
      <div class="cube" id="rotetoCard2">
        <div class="side front"></div>
        <div class="side back"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
      </div>
      <div class="div-box">
        <img src="../../../assets/CoreMembersimgs/carho.png" alt="" />
        <!-- <img src="../../../assets/CoreMembersimgs/textline.png" alt="" /> -->
      </div>
      <transition name="Fade1">
        <div v-if="text" v-html="details" class="text"></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      rotetoCard2: {},
      text: true,
      changeImg: {},
      activeIndex: 0,
      content: null,
      isContent: true,
      // transform: rotateX(0deg) rotateY(0deg);
      bodyScrllTop: null,
      rotate: 0,
      timer: null,
      direction: null,
    };
  },
  watch: {
    list: {
      deep: true, //开启深度监听
      handler(v) {
        this.$nextTick(() => {
          this.text = false;
          setTimeout(() => {
            this.text = true;
          }, 1000);
          console.log(document.querySelector("#rotetoCard2").style);
          if (this.direction === "down") {
            document.querySelector("#rotetoCard2").offsetTop;
            document.querySelector(
              "#rotetoCard2"
            ).style.transform = `rotateY(${(this.rotate += 90)}deg)`;
            document.querySelector("#rotetoCard2").style.transition = "all 3s";
          } else {
            document.querySelector("#rotetoCard2").offsetTop;
            document.querySelector(
              "#rotetoCard2"
            ).style.transform = `rotateY(${(this.rotate -= 90)}deg)`;
            document.querySelector("#rotetoCard2").style.transition = "all 3s";
          }
        });
      },
    },
  },
  mounted() {
    document
      .getElementById("body-box")
      .addEventListener("mousewheel", this.handlemousewheel, false);
    document
      .getElementById("body-box")
      .addEventListener("scroll", this.handerScrll);
  },
  destroyed() {
    document
      .getElementById("body-box")
      .removeEventListener("mousewheel", this.handlemousewheel, false);
  },
  computed: {
    details(value) {
      return this.content || value.list[0].description;
    },
  },
  methods: {
    checkUser(index) {
      this.changeList(index);
    },
    changeList(index) {
      this.activeIndex = index;
      this.list.forEach((item) => {
        if (item.index === index) {
          this.content = item.description;
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      });
    },
    // this.bodyScrllTop > 450 &&
    handlemousewheel(e) {
      // const element = document.querySelector("#userListImage");
      // var direction = e.deltaY > 0 ? "down" : "up";
      // if (
      //   direction === "down" &&
      //   e.deltaY >= 2 &&
      //   this.bodyScrllTop < 490
      // ) {

      // } else if (
      //   direction === "down" &&
      //   e.deltaY >= 2 &&
      //   this.bodyScrllTop > 490 &&
      //   this.bodyScrllTop < 520
      // ) {
      //    this.changeImg.transform='translateY(250px)'
      //    this.changeImg.transition = "all 1s";
      // } else if (
      //   direction === "down" &&
      //   e.deltaY >= 2 &&
      //   this.bodyScrllTop > 520 &&
      //   this.bodyScrllTop < 560
      // ) {
      //   this.changeImg.transform='translateY(250px)'
      //    this.changeImg.transition =  "all 1s";
      // } else if (
      //   direction === "down" &&
      //   e.deltaY >= 2 &&
      //   this.bodyScrllTop > 560 &&
      //   this.bodyScrllTop < 600
      // ) {
      //   // this.changeList(3);
      //   // element.classList.add("animate__animated", "animate__slideInDown");
      // } else if (
      //   direction === "down" &&
      //   e.deltaY >= 2 &&
      //   this.bodyScrllTop > 600 &&
      //   this.bodyScrllTop < 640
      // ) {
      //   this.changeList(4);
      //   // element.classList.add("animate__animated", "animate__slideInDown");
      // }
      // if (
      //   direction === "up" &&
      //   e.deltaY <= -2 &&
      //   this.bodyScrllTop < 490
      // ) {
      //   // this.changeList(0);
      //   // element.classList.add("animate__animated", "animate__slideInUp");
      // } else if (
      //   direction === "up" &&
      //   e.deltaY <= -2 &&
      //   this.bodyScrllTop > 490 &&
      //   this.bodyScrllTop < 520
      // ) {
      //   // this.changeList(1);
      //   // element.classList.add("animate__animated", "animate__slideInUp");
      // } else if (
      //   direction === "up" &&
      //   e.deltaY <= -2 &&
      //   this.bodyScrllTop > 520 &&
      //   this.bodyScrllTop < 560
      // ) {
      //   // this.changeList(2);
      //   // element.classList.add("animate__animated", "animate__slideInUp");
      // } else if (
      //   direction === "up" &&
      //   e.deltaY <= -2 &&
      //   this.bodyScrllTop > 560 &&
      //   this.bodyScrllTop < 600
      // ) {
      //   // this.changeList(3);
      //   // element.classList.add("animate__animated", "animate__slideInUp");
      // } else if (
      //   direction === "up" &&
      //   e.deltaY <= -2 &&
      //   this.bodyScrllTop > 600 &&
      //   this.bodyScrllTop < 640
      // ) {
      //   // this.changeList(4);
      //   // element.classList.add("animate__animated", "animate__slideInUp");
      // }

      const element = document.querySelector("#userListImage");
      this.direction = e.deltaY > 0 ? "down" : "up";
      var direction = e.deltaY > 0 ? "down" : "up";
      if (direction === "down" && e.deltaY >= 2 && this.bodyScrllTop < 1640) {
        // this.rotetoCard2.transform = 'rotateY(360deg)'
        // this.rotetoCard2.transition = 'all 1s'
        this.changeList(0);
        // element.classList.add("animate__animated", "animate__slideInDown");
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 1640 &&
        this.bodyScrllTop < 1730
      ) {
        this.changeList(1);
        // this.rotetoCard2.transform = 'rotateY(180deg)'
        // this.rotetoCard2.transition = 'all 1s'
        // this.rotetoCard2.transform = 'rotateY(180deg)'
        // this.rotetoCard2.transition = 'all 1s'
        // element.classList.add("animate__animated", "animate__slideInDown");
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 1730 &&
        this.bodyScrllTop < 1800
      ) {
        // this.rotetoCard2.transform = 'rotateY(180deg)'
        // this.rotetoCard2.transition = 'all 1s'
        this.changeList(2);
        // element.classList.add("animate__animated", "animate__slideInDown");
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 1800 &&
        this.bodyScrllTop < 1870
      ) {
        // this.rotetoCard2.transform = 'rotateY(180deg)'
        // this.rotetoCard2.transition = 'all 1s'
        this.changeList(3);
        // element.classList.add("animate__animated", "animate__slideInDown");
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 1870 &&
        this.bodyScrllTop < 1940
      ) {
        this.changeList(4);
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 1940
      ) {
        this.changeList(5);
      }
      if (direction === "up" && e.deltaY <= -2 && this.bodyScrllTop < 1640) {
        this.changeList(0);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 1640 &&
        this.bodyScrllTop < 1730
      ) {
        this.changeList(1);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 1730 &&
        this.bodyScrllTop < 1800
      ) {
        this.changeList(2);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 1800 &&
        this.bodyScrllTop < 1870
      ) {
        this.changeList(3);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 1870 &&
        this.bodyScrllTop < 1940
      ) {
        this.changeList(4);
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 1940
      ) {
        this.changeList(5);
      }
    },
    handerScrll() {
      this.bodyScrllTop = document.getElementById("body-box").scrollTop;
    },
    curtail(arr) {
      return arr.filter(function (ele, idx, arr) {
        return idx !== 0;
      });
    },
    changeDescription(content, index) {
      this.content = content;
      this.activeIndex = index;
    },
    notDescription() {
      this.activeIndex = 0;
      this.content = null;
    },
  },
};
</script>

<style scoped lang="less">
.Fade-enter,
.Fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.Fade-enter-to,
.Fade-leave {
  opacity: 1;
}

.Fade-enter-active,
.Fade-leave-active {
   
  transition: all 2s;
}

.Fade1-leave-to {
  opacity: 0;
}
.Fade1-enter-to,
.Fade1-leave {
  opacity: 1;
  // transform: rotateY(180deg);
}

.Fade1-enter-active,
.Fade1-leave-active {
  transition: all 1s;
}
.information_html {
  width: 100%;
  height: 975px;
  margin-top: 160px;

  display: flex;
  // align-items: center;
  .information_lists {
    height: 595px;
    width: 595px;
    display: flex;
    padding-left: 31px;

    .inforlinear {
      width: 11px;
      height: 705px;
      background: rgba(255, 255, 255, 0.1);
      position: relative;
      border-radius: 5px;
      .userImg {
        position: absolute;
        width: 11px;
        height: 221px;
        background: linear-gradient(
          180deg,
          rgba(55, 11, 84, 0.2) 0%,
          #350952 48%,
          rgba(56, 12, 84, 0.2) 100%
        );
        left: 0;
        // left: -55px;
        top: 0;

        img {
          // top: 0;
          position: absolute;
          left: -29.5px;
          width: 72px;
          z-index: 1;
          height: 72px;
        }
      }
    }
    .detail-div {
      flex: 1;
      cursor: pointer;
      // height: 82px;
      position: relative;
      margin-left: 44px;

      .details:not(:first-child) {
        margin-top: 49px;
      }
      .details {
        height: 82px;
        align-items: center;
        display: flex;
        position: relative;
        .userImg {
          position: absolute;
          width: 11px;
          height: 121px;
          background: linear-gradient(
            180deg,
            rgba(55, 11, 84, 0.2) 0%,
            #350952 48%,
            rgba(56, 12, 84, 0.2) 100%
          );
          left: -55px;
          top: 0;

          img {
            // top: 10px;
            position: absolute;
            left: -29.5px;
            width: 72px;
            z-index: 1;
            height: 72px;
          }
        }
        // .img-div {
        //   margin: 30px 50px 30px 0px;
        // }
        // .img {
        //   width: 80px;
        //   height: 80px;
        //   border-radius: 50%;
        // }

        .userinfo {
          opacity: 0.2;
          .username {
            height: 62px;
            font-size: 50px;
            font-family: "Poppins-Medium";
            font-weight: 500;
            color: #ffffff;
          }
          .usertext {
            height: 23px;
            font-size: 16px;
            font-family: "Poppins-Regular";
            font-weight: 400;
            color: #ffffff;
          }
        }
        .userInfoCheck {
          -webkit-transition: all 3s;
          -moz-transition: all 3s;
          -ms-transition: all 3s;
          -o-transition: all 3s;
          transition: all 3s;
          opacity: 1 !important;
          margin-left: 20px;
        }
      }
      .details:hover {
        .img-div {
          display: block !important;
        }
      }
    }
  }
  .wrapper {
    width: 50%;
    position: relative;
    float: left;
    .text {
      padding-top: 157px;
      padding-left: 33px;
      font-size: 16px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      width: 450px;
      line-height: 28px;
      position: absolute;
      top: 0;
      left: -30px;
    }
    .div-box {
      position: absolute;
      width: 131px;
      height: 131px;
      // background: #8229e5;
      // border-radius: 50%;
      top: 36px;
      left: 40%;
      margin-left: -66.5px;
      img {
        position: absolute;
        left: 40%;
        margin-left: -65.5px;
        top: 0px;
        width: 131px;
        height: 66px;
      }
    }
    // .div-box {
    //   position: absolute;
    //   width: 131px;
    //   height: 131px;
    //   // background: #8229e5;
    //   border-radius: 50%;
    //   top: -15px;
    //   left: 42%;
    //   margin-left: -66.5px;
    //   img {
    //     position: absolute;
    //     left: 50%;
    //     margin-left: -47px;
    //     top: 26.5px;
    //     width: 94px;
    //     height: 75px;
    //   }
    // }
  }
  .cube {
    position: relative;
    font-size: 13rem;
    width: 516px;
    height: 514px;
    margin-top: 120px;
    transform-origin: 1em 1em;
    transform-style: preserve-3d;
    transition: all 1s;
    // transform: rotateX(0deg) rotateY(0deg);
  }

  .side {
    position: absolute;
    width: 2em;
    height: 2em;
    background: rgba(255, 255, 255, 0.1);
    // border: 1px solid rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    line-height: 2em;
  }
  .front {
    transform: translateZ(1em);
  }
  .top {
    transform: rotateX(90deg) translateZ(1em);
  }
  .right {
    transform: rotateY(90deg) translateZ(1em);
  }
  .left {
    transform: rotateY(-90deg) translateZ(1em);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(1em);
  }

  .back {
    transform: rotateY(-180deg) translateZ(1em);
  }
  .w2 {
    perspective-origin: 20% 20%;
    perspective: 1000px;
  }
  .content {
    width: 516px;
    // flex: 1;
    height: 534px;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0) 100%
    );
    // background: rgba(255,255,255,0.1);
    border-radius: 4px;
    margin-left: 7px;

    position: relative;
    margin-top: 73px;
    .text {
      padding-top: 117px;
      padding-left: 33px;
      padding-right: 33px;
      font-size: 16px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
    }
  }
}
</style>
