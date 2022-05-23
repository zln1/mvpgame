<template>
  <div class="smart-container">
    <div class="title">
      <img src="~/assets/productImg/SMART P2E is a decen@2x.webp" alt="">
    </div>
    <div class="smart-section1" id="smart-section1"
         :class="isSmartSection1Sticky ? 'positionSticky': ''">
      <div class="smart-section1-img-text-box" :class="mobileFixed ? 'positionSticky': ''">
        <div class="smart-section1-img-box">
          <img style="position: absolute;width: 375px;height: 375px;top: 287px;right: 0;z-index: -1"
               src="~/assets/productImg/Bitmap@2x(1).webp" alt="">
          <div class="line-icon-div"
               style="position: absolute;width: 6px;height: 70px;background-color: #7536EB;top: 728px;right: 19px;border-radius: 8px;"></div>
          <img src="~/assets/productImg/Bitmap@2x.webp" alt="">
          <div class="active-circle-div" :class="nameHoverIndex === 1 ?'active-circle-div-active': ''"
               style="top: 328px;right: 100px;"></div>
          <div class="active-circle-div" :class="nameHoverIndex === 2 ?'active-circle-div-active': ''"
               style="top: 387px;right: 43px;"></div>
          <div class="active-circle-div" :class="nameHoverIndex === 3 ?'active-circle-div-active': ''"
               style="top: 466px;right: 22px;"></div>
          <div class="active-circle-div" :class="nameHoverIndex === 4 ?'active-circle-div-active': ''"
               style="top: 545px;right: 43px;"></div>
          <div class="active-circle-div" :class="nameHoverIndex === 5 ?'active-circle-div-active': ''"
               style="top: 602px;right: 102px;"></div>
        </div>
        <div class="smart-section1-text-box">
          <p style="margin-top: 10px" :class="nameHoverIndex === 1 ? 'hoverNameStyle': ''">Decentralized</p>
          <p :class="nameHoverIndex === 2 ? 'hoverNameStyle': ''">Maximize Capital Utilization</p>
          <p style="margin-top: 15px" :class="nameHoverIndex === 3 ? 'hoverNameStyle': ''">Proof of Gaming</p>
          <p style="margin-top: 20px" :class="nameHoverIndex === 4 ? 'hoverNameStyle': ''">Full Process Automatic</p>
          <p :class="nameHoverIndex === 5 ? 'hoverNameStyle': ''">Smart Scheduling</p>
          <div v-show="nameHoverIndex === 1" class="smart-section1-text-box-div-desc">
            All assets are managed through smart contracts
            All rules are governed by the community vote
          </div>
          <div v-show="nameHoverIndex === 2" class="smart-section1-text-box-div-desc">
            Double benefit plan: Rental + Mortgage
            Higher than other rental platforms
          </div>
          <div v-show="nameHoverIndex === 3" class="smart-section1-text-box-div-desc">
            Not only earn games tokens
            Rewards MVP tokens while mining game tokens
          </div>
          <div v-show="nameHoverIndex === 4" class="smart-section1-text-box-div-desc">
            One step to publish P2E job to earn gaming tokens
            No more manual operation is required
          </div>
          <div v-show="nameHoverIndex === 5" class="smart-section1-text-box-div-desc">
            Automatically adjusts the P2E players
            Guaranteed revenue compliance without interference
          </div>

        </div>
      </div>
      <div class="smart-section1-scroll-box" id="smart-section1-scroll-box" v-show="showSmartSection1ScrollBox"></div>
    </div>
    <div class="section-content">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt=""/>
        <p class="section-title-letter-spacing">BENEFIT FOR ALL THE GAMEFI USERS</p>
      </div>
      <div class="smart-section2">
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/productImg/Bitmap@2x(8).webp" alt=""/>
          </div>
          <div class="text-box">
            <p class="item-desc">NFT HOLDERS</p>
            <p class="item-desc-sub">Maximize capital efficiency</p>
            <p class="item-desc-sub">Automatic Play-To-Earn</p>
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/productImg/Bitmap@2x(9).webp" alt=""/>
          </div>
          <div class="text-box">
            <p class="item-desc">GUILDS</p>
            <p class="item-desc-sub">Easy to find good assets</p>
            <p class="item-desc-sub">Reduce labor management costs</p>
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/productImg/Bitmap@2x(10).webp" alt=""/>
          </div>
          <div class="text-box">
            <p class="item-desc">DEVELOPERS</p>
            <p class="item-desc-sub">Solve NFT liquidity and initial traffic issues</p>
            <p class="item-desc-sub">No need to develop NFT rental system</p>
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/productImg/Bitmap@2x(11).webp" alt=""/>
          </div>
          <div class="text-box">
            <p class="item-desc">Web3 Gamers / P2E Players</p>
            <p class="item-desc-sub">Experience web3 games at ZERO cost</p>
            <p class="item-desc-sub">Get MVP tokens through Proof-of-Gaming</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-content" style="margin-top: 60px">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt=""/>
        <p class="section-title-letter-spacing">SUPPORT VARIOUS NETWORK</p>
      </div>
      <div class="smart-section2-1">
        <div>
          <div>
            <img src="~/assets/productImg/Bitmap@2x(3).webp" alt="">
            <p>ETH</p>
          </div>
          <div>
            <img src="~/assets/productImg/Bitmap@2x(4).webp" alt="">
            <p>BSC</p>
          </div>
        </div>
        <div>
          <div style="text-align: left;">
            <img src="~/assets/productImg/Bitmap@2x(5).webp" alt="">
            <p style="text-align: left;">Avalanche</p>
          </div>
          <div>
            <img src="~/assets/productImg/Bitmap@2x(6).webp" alt="">
            <p>Solana</p>
          </div>
          <div style="text-align: right;">
            <img src="~/assets/productImg/Bitmap@2x(7).webp" alt="">
            <p style="text-align: right;">Polygon</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-content" style="margin-top: 220px">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt=""/>
        <p class="section-title-letter-spacing">EASY TO USE</p>
      </div>
      <div class="smart-section3">
        <div class="smart-section3-item">
          <div>
            <img src="~/assets/productImg/Bitmap@2x(12).webp" alt="">
            <p class="step-style">Step</p>
          </div>
          <p>Login</p>
          <p>Choose Your Rule</p>
        </div>
        <div class="smart-section3-item">
          <div>
            <img src="~/assets/productImg/Bitmap@2x(13).webp" alt="">
            <p class="step-style">Step</p>
          </div>
          <p>Create a P2E Job</p>
          <p>Lend NFT to Smart Contract</p>
        </div>
        <div class="smart-section3-item">
          <div>
            <img src="~/assets/productImg/Bitmap@2x(14).webp" alt="">
            <p class="step-style">Step</p>
          </div>
          <p>Monitor Real-Time Data</p>
          <p>Automate Get Returns On Time</p>
        </div>
      </div>
      <div class="smart-section3-bottom-box">
        <img src="~/assets/productImg/Oval Copy 5@2x.webp" alt="">
        <div class="dash-div">
          <div></div>
        </div>
        <img src="~/assets/productImg/Oval Copy 5@2x.webp" alt="">
        <div class="dash-div">
          <div></div>
        </div>
        <img src="~/assets/productImg/Oval Copy 5@2x.webp" alt="">
      </div>
    </div>
    <div class="section-content smart-section5" style="margin-top: 240px;">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt=""/>
        <p class="section-title-letter-spacing">HOW SMART P2E WORKS</p>
      </div>
      <div class="smart-section5-sw-box">
        <div class="img-box">
          <img v-for="(item ,index) in imgList1"
               v-show="activeImages === 'a' + index"
               :id="'a' + index"
               :key="'a' +index"
               style="width: 260px;height: 260px;margin-left: 36px;margin-top: -35px;"
               :src="item" alt="">
          <img v-for="(item ,index) in imgList2"
               v-show="activeImages === 'b' + index"
               :id="'b' + index"
               :key="'b' + index"
               style="width: 260px;height: 260px;margin-left: 36px;margin-top: -35px;"
               :src="item" alt="">
          <img v-for="(item ,index) in imgList3"
               v-show="activeImages === 'c' + index"
               :id="'c' + index"
               :key="'c' + index"
               style="width: 260px;height: 260px;margin-left: 36px;margin-top: -35px;"
               :src="item" alt="">
        </div>
        <div class="smart-swiper-container swiper-no-swiping">
          <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
            <swiper-slide>
              <div class="smart-swiper-slider-desc">
                Based on bidding and credit system to efficiently connect with investors, assets and players.
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="smart-swiper-slider-desc">
                Through tokenization of rental income to build interest-bearing NFT assets,it can be combined with NFT
                mortgage protocols to further improve capital efficiency.
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="smart-swiper-slider-desc">
                Manual operation of the NFT Holder is NOT required, and the
                platform automatically adjusts the P2E players according to the real-time
                performance of the P2E performance.
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="smart-section6">
      <div class="left-div">
        <img style="width: 308px;margin-bottom: 5px" src="~/assets/productImg/STAY TUNED@2x.webp" alt="">
        <p>subscribe to MVP newsletter</p>
      </div>
      <div class="right-div">
        <input
                v-model="emailValue"
                placeholder="Enter email here"
                type="text"
        />
        <div class="btn" @click="subscribe">subscribe</div>
      </div>
    </div>
    <ToastGary v-show="isToast" :content="toastMessage"></ToastGary>
  </div>
</template>

<script>
  import {Swiper, SwiperSlide} from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
  import $axios from "axios";
  import ToastGary from "@/components/toast/ToastGary.vue";

  export default {
    layout: "BaseLayout",
    name: "SmartP2E",
    components: {Swiper, SwiperSlide, ToastGary},
    head() {
      return {
        title: "SmartP2E",
        meta: [
          {
            hid: "SmartP2E",
            name: "SmartP2E",
            content: "this is SmartP2E",
          },
        ],
      };
    },
    mounted() {
      let imgIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
      imgIndex.forEach(index => {
        let image = new Image()
        image.src = require(`~/assets/1-2/1-2-C00${index + 10}.webp`)
        this.imgList1.push(require(`~/assets/1-2/1-2-C00${index + 10}.webp`))
      })
      imgIndex.forEach(index => {
        let image = new Image()
        image.src = require(`~/assets/2-3/2-3_00${index + 55}.webp`)
        this.imgList2.push(require(`~/assets/2-3/2-3_00${index + 55}.webp`))
      })
      imgIndex.forEach(index => {
        let image = new Image()
        image.src = require(`~/assets/3-1/3-1_${index + 90}.webp`)
        this.imgList3.push(require(`~/assets/3-1/3-1_${index + 90}.webp`))
      })
      document.getElementById("body-box").addEventListener("scroll", this.handelScroll, true);
    },
    data() {
      let tt = this
      return {
        diceImgSrc: require('~/assets/1-2/1-2-C0010.webp'),
        emailValue: "",
        isToast: false,
        toastMessage: "",
        preImgList: [],
        imgList1: [],
        imgList2: [],
        imgList3: [],
        activeImages: 'a0',
        swiperOption: {
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
          },
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          on: {
            slideChangeTransitionStart: function () {
              let customInterval = null
              let _index = 0
              if (this.activeIndex === 2) {
                _index = 0
                customInterval = setInterval(() => {
                  _index++;
                  if (_index === 35) clearInterval(customInterval)
                  tt.activeImages = 'a' + _index
                }, 30)
              }
              if (this.activeIndex === 3) {
                _index = 0
                customInterval = setInterval(() => {
                  _index++;
                  if (_index === 35) clearInterval(customInterval)
                  tt.activeImages = 'b' + _index
                }, 30)
              }
              if (this.activeIndex === 4) {
                _index = 0
                customInterval = setInterval(() => {
                  _index++;
                  if (_index === 35) clearInterval(customInterval)
                  tt.activeImages = 'c' + _index
                }, 30)
              }
            },
          },
        },
        mobileFixed: false,
        isSmartSection1Sticky: true,
        nameHoverIndex: 1,
        showSmartSection1ScrollBox: false,
        scrollDirection: 'down',
        preScroll: 0,
        setScrollTop: false,
        upScrollListen: null,
        downScrollListen: null,
        isFixedScroll: false,
        smartSection1ScrollToTop: 0
      };
    },
    destroyed() {
      console.log(123)
      document.getElementById("body-box").removeEventListener("scroll", this.handelScroll, true);
    },
    methods: {
      handelScroll() {
        let body_box = document.getElementById("body-box");
        let _scrollTop = body_box.scrollTop;
        let scroll = body_box.scrollTop - this.preScroll;
        this.preScroll = _scrollTop;
        this.scrollDirection = scroll > 0 ? 'down' : 'up';
        let tt = this
        // console.log('_scrollTop', _scrollTop)
        // if (this.scrollDirection === 'down') { //下滑
        if (_scrollTop >= 1000) {
          if (this.nameHoverIndex === 5) {
            body_box.style.overflow = 'scroll';
            this.showSmartSection1ScrollBox = false;
            this.mobileFixed = false;
          } else {
            body_box.style.overflow = 'hidden';
            this.showSmartSection1ScrollBox = true;
            this.mobileFixed = true;
          }
          // document.getElementById('smart-section1').removeEventListener('scroll', this.upScrollListen)
          // } else {//上滑

        } else {
          // console.log(666, this.nameHoverIndex, this.setScrollTop)
          if (this.nameHoverIndex === 1) {
            body_box.style.overflow = 'scroll';
            this.showSmartSection1ScrollBox = false;
            this.mobileFixed = false;
            this.isSmartSection1Sticky = false;
          } else {
            body_box.style.overflow = 'hidden';
            this.showSmartSection1ScrollBox = true;
            this.mobileFixed = true;
            this.isSmartSection1Sticky = true;
            if (!this.setScrollTop && this.nameHoverIndex === 5) {
              this.$nextTick(() => {
                document.getElementById('smart-section1').scrollTop = 1601;
              })
              this.setScrollTop = true
            } else {
              this.setScrollTop = false
            }
          }
        }

        let scrollListen = function () {
          let smart_section1_scrollTop = document.getElementById('smart-section1').scrollTop;

          if (smart_section1_scrollTop < 3) {
            body_box.style.overflow = 'scroll';
            tt.showSmartSection1ScrollBox = false;
            tt.mobileFixed = false;
          }
          if (smart_section1_scrollTop < 400 && smart_section1_scrollTop > 3) {
            tt.nameHoverIndex = 1;
          }
          if (smart_section1_scrollTop > 400 && smart_section1_scrollTop < 800) {
            tt.nameHoverIndex = 2;
          }
          if (smart_section1_scrollTop > 800 && smart_section1_scrollTop < 1200) {
            tt.nameHoverIndex = 3;
          }
          if (smart_section1_scrollTop > 1200 && smart_section1_scrollTop < 1600) {
            tt.nameHoverIndex = 4;
          }
          if (smart_section1_scrollTop > 1600) {
            tt.nameHoverIndex = 5;
          }
          if (smart_section1_scrollTop > 1999) {
            body_box.style.overflow = 'scroll';
            tt.isSmartSection1Sticky = false
            tt.mobileFixed = false;
            tt.setScrollTop = false
            tt.nameHoverIndex = 5;
            tt.$nextTick(() => {
              tt.showSmartSection1ScrollBox = false;
            })
            document.getElementById('smart-section1').removeEventListener('scroll', scrollListen)
          }
        }
        document.getElementById('smart-section1').addEventListener('scroll', scrollListen)

      },
      subscribe() {
        let {emailValue} = this;
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(emailValue)) {
          this.isToast = true;
          this.toastMessage = "email address error";
          setTimeout(() => {
            this.isToast = false;
          }, 2000);
          return false;
        }
        $axios({
          methods: "get",
          url: `https://www.mvp.games/users/saveMail?email=${emailValue}&type=2`,
        }).then((res) => {
          if (res === "success") {
            this.$firebase("Subscribe_smart_p2e", {
              Subscribe_smart_p2e: "Subscribe_smart_p2e",
            });
            this.isToast = true;
            this.toastMessage = "subscribe success";
            setTimeout(() => {
              this.isToast = false;
            }, 2000);
          }
        });
      },
    },
  };
</script>
<style lang="less">
  .smart-container {
    width: 1200px;
    height: auto;
    /*max-width: 1200px;*/
    /*min-width: 960px;*/
    margin: auto;
    .title {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .section-title-letter-spacing {
      letter-spacing: 0.92px
    }
    .section-content {
      max-width: 1200px;
      margin: auto;
      position: relative;
      img {
        width: 100%;
      }
      .section-content-img {
        position: absolute;
        width: 250px;
        height: 253px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .section-title {
        display: flex;
        align-items: center;
        margin-bottom: 104px;
        img {
          width: 14px;
          height: 14px;
          margin-right: 14px;
        }
        p {
          font-size: 22px;
          font-family: "Poppins-Medium";
          font-weight: 500;
          color: #ffffff;
          line-height: 33px;
        }
      }
    }
    .smart-section1::-webkit-scrollbar {
      display: none;
    }
    .smart-section1 {
      width: 100%;
      margin-top: 81px;
      height: 1090px;
      overflow-y: auto;
      .smart-section1-img-text-box {
        height: 1090px;
        display: flex;
      }
      .smart-section1-scroll-box {
        width: 100%;
        height: 2000px;
      }
      .smart-section1-img-box {
        width: 652px;
        height: 100%;
        position: relative;
        img {
          height: 100%;
        }
        .active-circle-div {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          position: absolute;
          background-color: #000;
        }
        .active-circle-div-active {
          background-color: #FFF;
        }
      }
      .positionSticky {
        position: sticky;
        top: 0;
      }
      .smart-section1-text-box {
        margin-top: 300px;
        flex: 1;
        height: 375px;
        box-sizing: border-box;
        padding-left: 22px;
        p {
          height: 60px;
          line-height: 60px;
          font-size: 24px;
          font-family: "Poppins-Bold";
          font-weight: bold;
          color: #FFFFFF;
        }
        .hoverNameStyle {
          font-size: 38px;
          /*color: red;*/
        }
        .smart-section1-text-box-div-desc {
          margin-top: 80px;
          font-size: 24px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #FFFFFF;
          line-height: 38px;
          position: relative;
          left: -6px;
        }
      }
    }
    .smart-section2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .detail-item {
        width: 50%;
        text-align: center;
        margin-bottom: 100px;
        display: flex;
      }
      .img-box {
        width: 120px;
        height: 120px;
        text-align: center;
        margin-right: 20px;
        img {
          height: 115px;
        }
      }
      .text-box {
        text-align: left;
      }
      .item-desc {
        font-size: 24px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 35px;
        letter-spacing: 1px;
        margin-bottom: 30px;
      }
      .item-desc-sub {
        font-size: 18px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #FFF;
      }
    }
    .smart-section2-1 {
      & > div {
        display: flex;
        & > div {
          flex: 1;
          text-align: center;
        }
        img {
          height: 140px;
          width: auto;
        }
        p {
          width: 100%;
          text-align: center;
          font-size: 24px;
          font-family: "Poppins-Bold";
          font-weight: bold;
          color: #FFFFFF;
          margin-top: 30px;
        }
      }
    }
    .smart-section3 {
      height: 240px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .smart-section3-item {
        text-align: center;
        flex: 1;
        div:first-child {
          margin-bottom: 25px;
          text-align: center;
          img {
            width: 80px;
            height: 90px;
          }
        }
        p {
          font-size: 24px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #ffffff;
        }
        .step-style {
          color: #333;
          font-size: 20px;
          font-family: "Poppins-Bold";
        }
        .numStyle {
          font-size: 32px;
          color: #999;
          font-family: "Poppins-Bold";
          margin-left: 5px;
        }
      }
    }
    .smart-section5 {
      padding-top: 0 !important;
      .smart-section5-title {
        width: 100%;
        text-align: right;
        font-size: 40px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 32px;
        margin-bottom: 30px;
      }
      .smart-section5-sw-box {
        display: flex;
      }
      .img-box {
        flex: 1;
        .animation-img {
          width: 260px;
          height: 260px;
          margin-left: 36px;
          margin-top: -35px;
          background-size: 100% 100%;
          background-position: center center;
        }
      }
      .smart-swiper-container {
        width: 800px;
        height: 265px;
        .smart-swiper-slider-desc {
          font-size: 30px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #FFF;
          line-height: 48px;
          letter-spacing: 2px;
        }
      }
      .swiper-pagination-bullets {
        width: 100%;
        height: 20px;
        text-align: center;
      }
      .my-bullet {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: rgba(255, 255, 255, .3);
        margin-right: 62px;
      }
      .my-bullet-active {
        width: 68px;
        height: 10px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
      }
    }
    .smart-section6 {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 232px;
      .left-div {
        p:first-child {
          font-size: 32px;
          font-family: "Poppins-Bold";
          font-weight: bold;
          color: #ffffff;
          line-height: 32px;
          margin-bottom: 14px;
        }
        p:last-child {
          font-size: 24px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #ffffff;
          line-height: 32px;
        }
      }
      .right-div {
        width: 684px;
        height: 68px;
        border-radius: 68px;
        border: 1px solid #FFF;
        overflow: hidden;
        display: flex;
        .btn {
          width: 124px;
          cursor: pointer;
          height: 68px;
          background: #ffffff;
          font-size: 18px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #000000;
          line-height: 68px;
          text-align: center;
        }
        input:focus {
          border: 1px solid #979797;
          outline: none !important;
        }
        input {
          flex: 1;
          height: 68px;
          font-size: 16px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #ffffff;
          line-height: 38px;
          background: transparent;
          padding-left: 30px;
          border: none;
        }
      }
    }
    .smart-section3-bottom-box {
      width: 70%;
      display: flex;
      align-items: center;
      margin: auto;
      img {
        width: 24px;
        height: 24px;
      }
      div {
        flex: 1;
        height: 1px;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        & > div {
          width: 100%;
          height: 0px;
          border-top: 1px dashed #000000;
        }
        /*background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);*/
        /*background-origin: border-box;*/
        /*border-bottom: 2px dotted #636465;*/
      }
    }
  }
</style>
