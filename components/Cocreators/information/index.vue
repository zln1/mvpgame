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
          <div class="img-div" v-show="index === activeIndex"></div>
          <!-- <img
            class="img"  @mouseenter="changeDescription(item.description, index)"
          @mouseleave="notDescription"
            :src="item.img"
            alt=""
          /> -->

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
          <!-- <transition name="Fade">:class="{ userInfoCheck: item.isShow === true }"</transition> -->
          <transition name="FadeuserInfo">
            <div
              class="userinfo"
              :class="{ userInfoCheck: item.isShow === true }"
            >
              <p class="username">{{ item.userName }}</p>
              <p class="usertext">{{ item.text }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- <transition name="Fade1"> </transition> -->
    <div class="wrapper w2">
      <div class="cube" id="rotetoCard">
        <div class="side front"></div>
        <div class="side back"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
      </div>
      <div class="div-box">
        <img src="../../../assets/CoreMembersimgs/textbor.png" alt="" />
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
      rotetoCard: {},
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
          if (this.direction === "down") {
            document.querySelector("#rotetoCard").offsetTop;
            document.querySelector(
              "#rotetoCard"
            ).style.transform = `rotateY(${(this.rotate += 90)}deg)`;
            document.querySelector("#rotetoCard").style.transition = "all 3s";
          } else {
            document.querySelector("#rotetoCard").offsetTop;
            document.querySelector(
              "#rotetoCard"
            ).style.transform = `rotateY(${(this.rotate -= 90)}deg)`;
            document.querySelector("#rotetoCard").style.transition = "all 3s";
          }
        });
      },
    },
  },
  mounted() {
    // this.rotetoCard.transform = "rotateY(45deg)";
    // this.rotetoCard.transition = "all 1s";
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
      const element2 = document.querySelector("#userListImage");
      const element = document.querySelector("#rotetoCard");
      var direction = e.deltaY > 0 ? "down" : "up";
      this.direction = e.deltaY > 0 ? "down" : "up";
      if (direction === "down" && e.deltaY >= 2 && this.bodyScrllTop < 490) {
        this.changeList(0);
        // element.style.transition = "none";
        //  element.style.transform = "translate(0, 18px) rotate(360deg) scale(1, 2);";
        //element.offsetTop; //这样可以强制渲染，注意dom的该属性要存在
        // element.transition = "all 1s";
        // element.transform = " rotateX(0deg) rotateY(90deg)";
        //  console.log(element.offsetTop);
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 490 &&
        this.bodyScrllTop < 580
      ) {
        this.changeList(1);
        // element.style.transition = "none";
        // element.style.transform = "none";
        // element.offsetTop; //这样可以强制渲染，注意dom的该属性要存在
        // element.transition = "all 1s";
        // element.transform = " rotateX(0deg) rotateY(180deg)";
        // this.rotetoCard.transform = " rotateX(0deg) rotateY(180deg)";
        // this.rotetoCard.transition = "all 1s";
        // this.rotetoCard.transform = "rotateY(90deg)";
        // this.rotetoCard.transition = "all 1s";
        // this.rotetoCard.transform = 'rotateY(180deg)'
        // this.rotetoCard.transition = 'all 1s'
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 580 &&
        this.bodyScrllTop < 670
      ) {
        // this.rotetoCard.transform = 'rotateY(180deg)'
        // this.rotetoCard.transition = 'all 1s'
        this.changeList(2);
        // element.classList.add("animate__animated", "animate__slideInDown");
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 670 &&
        this.bodyScrllTop < 760
      ) {
        // this.rotetoCard.transform = 'rotateY(180deg)'
        // this.rotetoCard.transition = 'all 1s'
        this.changeList(3);
        // element.classList.add("animate__animated", "animate__slideInDown");
      } else if (
        direction === "down" &&
        e.deltaY >= 2 &&
        this.bodyScrllTop > 760
      ) {
        // this.rotetoCard.transform = 'rotateY(180deg)'
        // this.rotetoCard.transition = 'all 1s'
        this.changeList(4);
        // element.classList.add("animate__animated", "animate__slideInDown");
      }
      if (direction === "up" && e.deltaY <= -2 && this.bodyScrllTop < 490) {
        this.changeList(0);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 490 &&
        this.bodyScrllTop < 580
      ) {
        this.changeList(1);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 580 &&
        this.bodyScrllTop < 670
      ) {
        this.changeList(2);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 670 &&
        this.bodyScrllTop < 760
      ) {
        this.changeList(3);
        // element.classList.add("animate__animated", "animate__slideInUp");
      } else if (
        direction === "up" &&
        e.deltaY <= -2 &&
        this.bodyScrllTop > 760 &&
        this.bodyScrllTop < 880
      ) {
        this.changeList(4);
        // element.classList.add("animate__animated", "animate__slideInUp");
      }
    },
    handerScrll() {
      this.bodyScrllTop = document.getElementById("body-box").scrollTop;
      // console.log(document.querySelectorAll("details"));
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
.FadeuserInfo-enter,
.FadeuserInfo-leave-to {
  opacity: 0.3;
}
.FadeuserInfo-enter-to,
.FadeuserInfo-leave {
  opacity: 1;
}

.FadeuserInfo-enter-active,
.FadeuserInfo-leave-active {
  transition: all 3s;
}

.Fade-enter,
.Fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.Fade-enter-to,
.Fade-leave {
  // transform: rotateY(180deg);
  opacity: 1;
}

.Fade-enter-active,
.Fade-leave-active {
  transition: all 3s;
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
      height: 605px;
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
          // transform: ;
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
      padding-top: 127px;
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
      background: #8229e5;
      border-radius: 50%;
      top: -15px;
      left: 42%;
      margin-left: -66.5px;
      img {
        position: absolute;
        left: 50%;
        margin-left: -47px;
        top: 26.5px;
        width: 94px;
        height: 75px;
      }
    }
  }
  .cube {
    position: relative;
    font-size: 13rem;
    width: 516px;
    height: 514px;
    margin-top: 80px;
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
  // .content {
  //   width: 516px;
  //   // flex: 1;
  //   height: 534px;
  //   line-height: 534px;
  //   transform-style: preserve-3d;
  //   text-align: center;
  //   backface-visibility: hidden;
  //   transform: translateZ(0);
  //   // background: linear-gradient(
  //   //   180deg,
  //   //   rgba(255, 255, 255, 0.1),
  //   //   rgba(255, 255, 255, 0) 100%
  //   // );
  //   // background: rgba(255,255,255,0.1);
  //   border-radius: 4px;
  //   margin-left: 7px;
  //   position: relative;
  //   margin-top: 73px;
  //   div {
  //     width: 516px;
  //     height: 534px;
  //     position: absolute;
  //     background: red;
  //     // border: 5px solid #ccc;
  //     // background: rgba(255, 255, 255, 0.1),
  //   }
  //   div:nth-child(1) {
  //     transform: translateZ(-150px);
  //     z-index: 2;
  //     // background: red;
  //     transition: transform 1s linear;
  //   }

  //   div:nth-child(2) {
  //     z-index: 2;
  //     //  background: red;
  //     transform: rotateY(-90deg) translateZ(150px);
  //     transition: transform 1s linear;
  //   }
  //   div:nth-child(3) {
  //     z-index: 1;
  //     transform: rotateY(-90deg) translateZ(-150px);
  //     transition: transform 1s linear;
  //   }
  //   div:nth-child(4) {
  //     z-index: 1;
  //     transform: rotateX(90deg) translateZ(150px);
  //     transition: transform 1s linear;
  //   }
  //   div:nth-child(5) {
  //     z-index: 1;
  //     transform: rotateX(90deg) translateZ(-150px);
  //     transition: transform 1s linear;
  //   }
  //   div:nth-child(6) {
  //     z-index: 1;
  //     transform: translateZ(150px);
  //   }
  //   .text {
  //     padding-top: 117px;
  //     padding-left: 33px;
  //     padding-right: 33px;
  //     font-size: 14px;
  //     font-family: "Poppins-Regular";
  //     font-weight: 400;
  //     color: #ffffff;
  //     line-height: 28px;
  //   }
  //   .div-box {
  //     position: absolute;
  //     width: 131px;
  //     height: 131px;
  //     background: #8229e5;
  //     border-radius: 50%;
  //     top: -66.5px;
  //     left: 50%;
  //     margin-left: -66.5px;
  //     img {
  //       position: absolute;
  //       left: 50%;
  //       margin-left: -47px;
  //       top: 26.5px;
  //       width: 94px;
  //       height: 75px;
  //     }
  //   }
  // }
}
</style>
