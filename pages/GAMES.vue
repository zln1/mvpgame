<template>
  <div class="Games-container">
    <div class="section-content section1">
      <p>Make GameFi have more</p>
      <p>good games</p>
    </div>
    <div class="section-content">
      <div class="section2">
        <p style="margin-bottom: 30px;">All the collaborations are supported by SubDAOs of MVP</p>
        <div class="games-intro-div">
          <div class="intro-item">
            <div class="intro-img-text-div">
              <div class="img-div">
                <img src="~/assets/images/Ops@2x.png" alt="">
              </div>
              <div class="text-div">
                <p>Ops DAO</p>
                <p>Bring Web2.0 Game Developers to Web3.0</p>
              </div>
            </div>
            <div class="intro-btn-box">
              <div>Connect</div>
            </div>
          </div>
          <div class="intro-item">
            <div class="intro-img-text-div">
              <div class="img-div">
                <img src="~/assets/images/Incubation DAO@2x.png" alt="">
              </div>
              <div class="text-div">
                <p>Incubation DAO</p>
                <p>GameFi Go-to-Market solution provider</p>
              </div>
            </div>
            <div class="intro-btn-box">
              <div>Connect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
            class="section-content section3"
            v-for="(item, index) in gamesList"
            :key="index"
    >
      <img style="position: absolute;top: 0;right: 0;width: 40px;height: 40px;" src="~/assets/game_new/Rectangle@2x.png"
           alt="">
      <div class="section3-title">
        <span>{{ item.name }}</span>
        <img style="width: 50px;height: 46px;" src="~/assets/game_new/Group 7@2x.png" alt="">
      </div>
      <div class="section3-1">
        <div class="images-box">
          <div class="big-images-box">
            <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
              <swiper-slide v-for="(it, index) in item.imgs" :key="index">
                <img :src="it" alt=""/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <img style="position: absolute;width: 520px;height: 48px;bottom: -24px;left: 68px;" src="~/assets/game_new/Rectangle@2x(1).png" alt="">
        </div>
        <div class="text-div">
          <div>
            <div class="text-box">
              <div class="text-item">
                <p class="title">Type</p>
                <p class="content">
                  {{ item.type || "Unknown" }}
                </p>
              </div>
              <div class="text-item">
                <p class="title">Status</p>
                <p class="content">
                  <span v-if="Number(item.status) === 1">Developing</span>
                  <span v-if="Number(item.status) === 2">Launched</span>
                </p>
              </div>
            </div>
            <div class="text-box">
              <div class="text-item">
                <p class="title">Token</p>
                <p class="content">
                  {{ item.token || "Unknown" }}
                </p>
              </div>
              <div class="text-item">
                <p class="title">Blockchain</p>
                <p class="content">
                  {{ item.blockchain || "Unknown" }}
                </p>
              </div>
            </div>
            <div style="margin: 60px 0 20px 20px;">
              <!-- <div ></div> -->
              <img
                      v-if="item.discord"
                      style="width: 50px;height: 50px;margin-right: 70px;cursor: pointer;"
                      src="~/assets/images/DISCORD (5)@2x.png"
                      @click="jumpTo(item.discord)"
                      alt=""
              />
              <!-- <div ></div> -->
              <img
                      v-if="item.twitter"
                      style="width: 50px;height: 50px;margin-right: 70px;cursor: pointer;"
                      src="~/assets/images/twitter@2x.png"
                      @click="jumpTo(item.twitter)"
                      alt=""
              />
              <!-- <div ></div> -->
              <img
                      v-if="item.telegram"
                      style="width: 50px;height: 50px;cursor: pointer;"
                      src="~/assets/images/telegram (1)@2x.png"
                      @click="jumpTo(item.telegram)"
                      alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section3-2">
        <p style="padding-left: 10px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
          {{ item.detail }}</p>
        <img style="width: 100%;" src="~/assets/game_new/Path@2x(1).png" alt="">
      </div>
    </div>
    <div class="section-content section5">
      <p class="section5-p1">Working with MVP.</p>
      <p class="section5-p2">
        If you’re developing a fun, unreleased game and would like it to be
        <br/>
        considered for MVP, we’d love to hear from you.
      </p>
      <div class="btn-box">
        <div class="btn-item btn-border">
          <p>Request</p>
          <p>Incubation Service</p>
        </div>
        <div class="btn-item btn-border">
          <p>Request</p>
          <p>Operation &amp; Marketing Collaboration</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperSlide} from "vue-awesome-swiper";
  import 'swiper/css/swiper.css'
  import gamesList from "../assets/js/gamesMockData";

  export default {
    layout: "BaseLayout",
    name: "GAMES",
    components: {Swiper, SwiperSlide},
    data() {
      return {
        gamesList,
        swiperOption: {
          // direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
          },
          loop: true,
          speed:3000,
          autoplay : {
            delay:3000
          },
          loopFillGroupWithBlank: true,
        },
        activeImgIndex1: 0,
        activeImgIndex2: 0,
      };
    },
    methods: {
      smallImgClick(data, value, index, arrindex) {
        this.gamesList[arrindex].checkImg = this.gamesList[arrindex].imgs[index];
      },
      jumpTo(url) {
        window.open(url, "_blank");
      },
    },
  };
</script>

<style lang="less">
  .Games-container {
    width: 80%;
    max-width: 1200px;
    min-width: 960px;
    margin: auto;
    .section-content {
      width: 100%;
      margin: auto;
    }
    .section1 {
      height: 520px;
      background: url("~/assets/images/banner bg@2x.png") no-repeat center center;
      background-size: auto 100%;
      font-size: 74px;
      font-family: "Audiowide";
      font-weight: 400;
      color: #ffffff;
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 100px;
    }
    .section2 {
      box-sizing: border-box;
      padding: 0 19px;
      height: 280px;
      border-radius: 4px;
      background-size: auto 119px;
      margin-bottom: 118px;
      max-width: 1070px;
      p:first-child {
        font-size: 24px;
        font-family: "Poppins-Medium";
        font-weight: 500;
        color: #FFFFFF;
      }
      .games-intro-div {
        display: flex;
        justify-content: space-between;
        .intro-item {
          width: 408px;
        }
        .intro-img-text-div {
          display: flex;
          height: 60px;
          margin-bottom: 25px;
        }
        .text-div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          p:first-child {
            height: 30px;
            font-size: 24px;
            font-family: "Poppins-Medium";
            font-weight: 500;
            color: #FFFFFF;
          }
          p:last-child {
            font-size: 14px;
            font-family: "Poppins-Medium";
            font-weight: 400;
            color: #FFFFFF;
          }
        }
        .img-div {
          img {
            width: 60px;
            height: 60px;
            margin-right: 14px;
          }
        }
        .intro-btn-box {
          width: 100%;
          text-align: right;
          margin-top: 25px;
          & > div {
            width: 100px;
            height: 32px;
            text-align: center;
            line-height: 32px;
            border-radius: 32px;
            border: 1px solid #FFF;
            display: inline-block;
            font-size: 12px;
            font-family: "Poppins-Medium";
            font-weight: 500;
            color: #FFFFFF;
          }
        }
      }
      .btn-box {
        width: 100%;
        padding: 0 38px;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        height: 119px;
        align-items: center;
        margin-top: 20px;
        .btn-item {
          width: 220px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          border-radius: 50px;
          font-size: 16px;
          font-family: "Poppins-Medium";
          font-weight: 500;
          color: #ffffff;
          margin-left: 20px;
          cursor: pointer;
        }
        .btn-white-bg {
          background-color: #fff;
          color: #000;
        }
        .btn-border {
          border: 1px solid #fff;
        }
      }
    }
    .section3 {
      position: relative;
      width: 1060px;
      margin: auto auto 50px;
      height: 520px;
      padding: 14px 0px 0 10px;
      background: url("~/assets/game_new/Path@2x.png") no-repeat top left;
      background-size: 100% auto;
      /*background-color: rgba(255, 255, 255, 0.1);*/
      box-sizing: border-box;
      .section3-title {
        font-size: 60px;
        font-family: "Audiowide";
        font-weight: 400;
        color: #FFFFFF;
        line-height: 76px;
        text-shadow: 2px 0px 30px #8229E5;
        margin-bottom: 29px;
      }
      .section3-1 {
        width: 100%;
        height: 315px;
        display: flex;
        justify-content: space-between;
      }
      .pagination-div {
        width: 44px;
        height: 100%;
        background-color: #979797;
      }
      .images-box {
        display: flex;
        justify-content: space-between;
        margin-right: 50px;
        position: relative;
        .big-images-box {
          position: relative;
          width: 604px;
          .swiper-container {
            padding-left: 44px;
          }
          height: 315px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .text-div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      }
      .text-box {
        max-width: 400px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-left: 20px;
        .text-item {
          flex: 1;
          max-width: 160px;
          .title {
            font-size: 14px;
            font-family: "Poppins-Regular";
            font-weight: 400;
            color: #ffffff;
            opacity: 0.7;
            line-height: 21px;
            margin-bottom: 11px;
          }
          .content {
            font-size: 18px;
            font-family: "Poppins-Medium";
            font-weight: 500;
            color: #ffffff;
            line-height: 27px;
          }
        }
      }
      .icon-box {
        display: flex;
        // justify-content: space-between;
        img {
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
        img:not(:first-child) {
          margin-left: 20px;
        }
        // div {
        //   width: 40px;
        //   height: 40px;
        //   margin-left: 40px;
        // }
      }
      .section3-2 {
        width: 100%;
        font-size: 14px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #ffffff;
        line-height: 26px;
        margin-top: 40px;
        opacity: 0.7;
      }
    }
    .section5 {
      margin: 200px auto 150px auto;
      height: 210px;
      background: url("~/assets/images/GAMES_section5_bg_image@2x.png") no-repeat left bottom;
      background-size: auto 121px;
      p {
        width: 100%;
        text-align: right;
      }
      .section5-p1 {
        font-size: 40px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 32px;
        margin-bottom: 30px;
      }
      .section5-p2 {
        font-size: 16px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #999999;
        line-height: 26px;
      }
      .btn-box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        height: 95px;
        align-items: center;
        margin-top: 20px;
        .btn-item {
          width: 220px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          border-radius: 50px;
          font-size: 16px;
          font-family: "Poppins-Medium";
          font-weight: 500;
          color: #ffffff;
          margin-left: 20px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            text-align: center;
          }
          p:first-child {
            font-size: 18px;
            font-family: "Poppins-Regular";
            font-weight: normal;
            color: #ffffff;
            line-height: 21px;
          }
          p:last-child {
            font-size: 10px;
            font-family: "Poppins-Regular";
            font-weight: 400;
            color: #999999;
            line-height: 14px;
          }
        }
        .btn-white-bg {
          background-color: #fff;
          color: #000;
        }
        .btn-border {
          border: 1px solid #fff;
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      width: 340px!important;
      height: 50px!important;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      transform: rotate(90deg);
      bottom: 145px;
      left: -149px;
      background-color: rgb(26,26,26);
    }
    .swiper-pagination-bullets {
      width: 100%;
      height: 20px;
      text-align: center;
    }
    .my-bullet {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background: #FFFFFF;
      margin-right: 10px;
      vertical-align: middle;
    }
    .my-bullet-active {
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background: #8229E5;
    }
  }
</style>
