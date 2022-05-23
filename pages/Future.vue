<template>
  <div class="future-container">
    <div class="banner-div">
      <div class="text">
        <p>Vision</p>
        <p>Bring 1Bn Web2 Gamears into GameFi</p>
      </div>
    </div>
    <!-- <div class="scrl"></div> :class="[isfixed ? 'fixed' : 'relative']" -->
    <div class="future_content">
      <div class="future_dov">
        <div class="left scrl">
          <!-- <div class="roadbox" v-show="activeTabs === 'roadmap'">
          <div class="topdiv"></div>
          <div class="bottomdiv"></div>
        </div> -->
          <div class="roadmap" @click="changeActiveTabs('roadmap')">
            <img
              class="roadimg"
              src="~/assets/titleicon.png"
              v-show="activeTabs === 'roadmap'"
              alt=""
            />
            <a
              class="roadmap_div"
              :style="{ opacity: activeTabs === 'roadmap' ? '1' : '0.3' }"
            >
              <p class="roadmap_title">ROAD MAP</p>
              <p class="roadmap_text">FINANCING & DEVELOPM</p>
            </a>
          </div>
          <div
            style="margin-top: 28px"
            class="roadmap"
            @click.stop="changeActiveTabs('evolution')"
          >
            <img
              class="roadimg"
              src="~/assets/titleicon.png"
              v-show="activeTabs === 'evolution'"
              alt=""
            />
            <a
              class="roadmap_div"
              :style="{ opacity: activeTabs === 'evolution' ? '1' : '0.3' }"
            >
              <p class="roadmap_title">EVOLUTION PLAN</p>
              <p class="roadmap_text">How to become GREATE</p>
              <div class="evolution_chiren">
                <a
                  @click.stop="changeEvolutionTab('1')"
                  class="item"
                  :style="{ opacity: evolutionTab === '1' ? '1' : '0.5' }"
                >
                  <div v-show="evolutionTab === '1'" class="box"></div>
                  <div>
                    <p class="verson">Phase 1.0<span>(Current)</span></p>
                    <p class="versontext">Top choice for GameFi users</p>
                  </div>
                </a>
                <a
                  @click.stop="changeEvolutionTab('2')"
                  class="item"
                  :style="{ opacity: evolutionTab === '2' ? '1' : '0.5' }"
                >
                  <div v-show="evolutionTab === '2'" class="box"></div>
                  <div>
                    <p class="verson">
                      Phase 2.0
                      <!-- <span v-show="evolutionTab === '2'">(Current)</span> -->
                    </p>
                    <p class="versontext">Top choice for crypto players</p>
                  </div>
                </a>
                <a
                  @click.stop="changeEvolutionTab('3')"
                  class="item"
                  :style="{ opacity: evolutionTab === '3' ? '1' : '0.5' }"
                >
                  <div v-show="evolutionTab === '3'" class="box"></div>
                  <div>
                    <p class="verson">
                      Phase 3.0
                      <!-- <span v-show="evolutionTab === '3'">(Current)</span> -->
                    </p>
                    <p class="versontext">
                      Bring 1 billion gamers from Web2 to Web3
                    </p>
                  </div>
                </a>
              </div>
            </a>
          </div>
        </div>
        <div class="right" id="rightscrll">
          <!-- v-if="activeTabs === 'roadmap'" v-if="activeTabs === 'evolution'"-->
          <roadMap :bodyScrllTop="bodyScrllTop" ref="roadMap"></roadMap>
          <evoluTion></evoluTion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import roadMap from "../components/future/roadmap";
import evoluTion from "../components/future/evolution";
export default {
  layout: "BaseLayout",
  name: "Future",
  components: { roadMap, evoluTion },
  data() {
    return {
      activeTabs: "roadmap",
      evolutionTab: "1",
      bodyScrllTop: null,
      isRoadMap: false,
      isfixed: false,
    };
  },
  created() {},
  mounted() {
    document
      .getElementById("body-box")
      .addEventListener("scroll", this.handerScrll);
  },
  destroyed() {
    document
      .getElementById("body-box")
      .removeEventListener("scroll", this.handerScrll);
  },
  methods: {
    handerScrll() {
      this.isRoadMap = true;
      this.bodyScrllTop = document.getElementById("body-box").scrollTop;
      if (this.bodyScrllTop > 3034) {
        this.activeTabs = "evolution";
        if (this.bodyScrllTop > 3034 && this.bodyScrllTop < 4602) {
          this.evolutionTab = "1";
        } else if (this.bodyScrllTop > 4602 && this.bodyScrllTop < 6700) {
          this.evolutionTab = "2";
        } else {
          this.evolutionTab = "3";
        }
      } else {
        this.evolutionTab = "";
        this.activeTabs = "roadmap";
      }
    },
    changeEvolutionTab(type) {
      // this.activeTabs = "evolution"
      console.log(type, "changeEvolutionTab");
      this.evolutionTab = type;
      if (type == "1") {
        document.getElementById("body-box").scrollTo({
          top: 3212,
          behavior: "smooth",
        });
      } else if (type == "2") {
        document.getElementById("body-box").scrollTo({
          top: 4836,
          behavior: "smooth",
        });
      } else if (type == "3") {
        document.getElementById("body-box").scrollTo({
          top: 7100,
          behavior: "smooth",
        });
      }
    },
    changeActiveTabs(type) {
      // console.log(this.$refs.roadMap.roadList)
      // this.$refs.roadMap.roadList[0].isfirst = true
      this.activeTabs = type;
      if (type === "roadmap") {
        document.getElementById("body-box").scrollTo({
          top: 425,
          behavior: "smooth",
        });
      } else {
        this.changeEvolutionTab(1)
        // document.getElementById("body-box").scrollTo({
        //   top: 3212,
        //   behavior: "smooth",
        // });
      }
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none !important;
}
.future-container {
  // height: 5000px;
  // overflow: auto;
  .banner-div {
    // width: 100%;
    // padding-top: 125px;
    max-width: 1200px;
    min-width: 960px;
    margin: auto;
    height: 438px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: url("~/assets/images/banner@2x.png") no-repeat;
    background-position: 70px 50px;
    // background-size: 100% 100%;
    // background: rgba(0, 0, 0, 1);
    .text {
      // margin-top: 77px;
      flex-shrink: 0;
      width: 1200px;
      font-size: 45px;
      font-family: "Audiowide";
      left: 360px;
      font-weight: 400;
      color: #ffffff;
      letter-spacing: 1px;
    }
    img {
      // width: 100%;
      // height: 400px;
      display: block;
    }
  }
  .scrl {
    /* display: flex; */
    position: sticky;
    // background: red;
    height: 200px;
    top: 100px;
    left: 50px;
    bottom: 100px;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .future_content {
    max-width: 1200px;
    min-width: 960px;
    margin: auto;
    margin-bottom: 350px;

    // top: 0px;
    //  background: green;
    // position: sticky;
    .future_dov {
      margin-top: 120px;
      display: flex;
    }
    .right {
      //  width: 300px;
      flex: 1;
      // background: blue;
      overflow-y: scroll;
      margin-left: 120px;
    }
    .left {
      width: 300px;
     
      // background: green;

      .roadbox {
        position: absolute;
        left: -150px;
        top: 150px;
        .topdiv {
          width: 40px;
          height: 280px;
          background: linear-gradient(
            180deg,
            rgba(83, 54, 240, 0) 0%,
            #6431ec 56%,
            #8229e5 100%
          );
          border-radius: 0px 0px 36px 36px;
        }
        .bottomdiv {
          border-radius: 50%;
          margin-top: 20px;
          width: 40px;
          height: 40px;
          background: linear-gradient(180deg, #5336f0 0%, #8229e5 100%);
        }
      }
      .roadmap {
        display: flex;
        position: relative;
        .roadimg {
          position: absolute;
          width: 14px;
          height: 14px;
          left: -38px;
          // top: 4px;
        }

        .roadmap_div {
          width: 100%;
          .evolution_chiren {
            .item:hover {
              opacity: 1 !important;
            }
            .item {
              position: relative;
              margin-top: 20px;
              margin-left: 10px;
              display: flex;
              .verson {
                font-size: 18px;
                font-family: "Poppins-Bold";
                font-weight: bold;
                color: #ffffff;
                line-height: 27px;
                span {
                  font-size: 12px;
                  font-family: "Poppins-Regular";
                  font-weight: 400;
                  color: #ffffff;
                  opacity: 0.7;
                  margin-left: 10px;
                }
              }
              .versontext {
                margin-top: 5px;
                font-size: 12px;
                font-family: "Poppins-Regular";
                font-weight: 400;
                color: #ffffff;
                line-height: 18px;
              }
              .box {
                position: absolute;
                // margin: 10px;
                left: -20px;
                top: 10px;
                border-radius: 50%;
                width: 8px;
                height: 8px;
                background: linear-gradient(223deg, #5336f0 0%, #8229e5 100%);
                box-shadow: 0px 0px 6px 0px #5336f0;
              }
            }
          }
        }
        .roadmap_div:hover {
          opacity: 1 !important;
        }
        .roadmap_title {
          font-size: 28px;
          font-family: "Poppins-Bold";
          font-weight: bold;
          color: #ffffff;
          line-height: 42px;
        }
        .roadmap_text {
          font-size: 14px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #ffffff;
          line-height: 21px;
        }
        img {
          margin: 12px;
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}
</style>
