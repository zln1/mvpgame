<template>
  <div class="road" >
    <div class="road_content" v-for="(item, index) of roadList" :key="index">
      <div class="left">
        <div class="leftyear">
          <img :src="item.yearimg" alt="" />
          <div class="bottomdiv2" v-show="item.isfirst">
            <img src="../../assets/future/light.webp" alt="" />
          </div>
          <div
            class="roadbox animate__fadeInDown animate__animated"
            v-if="item.showimg && item.isfirst"
          >
            <div class="topdiv"></div>
            <div class="bottomdiv">
              <img src="../../assets/future/light.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="right" :style="{ opacity: item.isfirst ? '1' : '0.3' }">
        <p class="title">{{ item.title }}</p>
        <p class="text" v-for="(item, index) of item.textList" :key="index">
          <span></span>{{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.roadList[0].showimg = true;
    //  this.transtionTop(this.roadList[0], 0, true);
  },
  props: ["bodyScrllTop"],
  watch: {
    bodyScrllTop(value) {
      
      // 406 ，755，1104，1418，1778，2123，2484，2789
      if (value>530 && value<855) {
        this.transtionTop(this.roadList[0], 0, true);
      } else if (value > 855 && value < 1174) {
        this.roadList[0].isfirst = false;
        this.transtionTop(this.roadList[1], 1, true);
      } else if (value > 1174 && value < 1418) {
        this.roadList[1].isfirst = false;
        this.transtionTop(this.roadList[2], 2, true);
      } else if (value > 1528 && value <1868) {
        this.roadList[2].isfirst = false;
        this.transtionTop(this.roadList[3], 3, true);
      } else if (value > 1868 && value < 2189) {
        this.roadList[3].isfirst = false;
        this.transtionTop(this.roadList[4], 4, true);
      } else if (value > 2189 && value < 2223) {
        this.roadList[4].isfirst = false;
        this.transtionTop(this.roadList[5], 5, true);
      } else if (value > 2484 && value < 2789) {
        this.roadList[5].isfirst = false;
        this.transtionTop(this.roadList[6], 6, true);
      } else if (value > 2789 && value < 2979) {
        this.roadList[6].isfirst = false;
        this.transtionTop(this.roadList[7], 7, true);
      }else{
        this.roadList[0].showimg = false;
      }
     
    },
  },
  methods: {
    transtionTop(item, index, isMounted) {
      // console.log(item, index);
      if (isMounted) {
        item.isfirst = true;
      }
      this.roadList.forEach(item => {
        if(item.index === index){
          item.isfirst = true
        }else{
          item.isfirst = false
        }
      })
      if (index != this.roadList.length - 1) {
        item.showimg = true;
      }
    },
    noTranstionTop(item) {
      item.showimg = false;
      if (item.isfirst) {
        item.isfirst = false;
      }
    },
  },
  data() {
    return {
      
      timeout: null,
      roadList: [
        {
          yearimg: require(`~/assets/future/year1.webp`),
          showimg: false,
          isfirst: true,
          index:0,
          title: "STARTUP",
          listImg: [],
          textList: [
            "Angel round completed",
            "Guild members reach 40,000",
            "Established partnerships with 4 games",
          ],
        },
        {
          yearimg: require(`~/assets/future/year2.webp`),
          title: "Cold-start",
          showimg: false,
          index:1,
          isfirst: false,
          textList: [
            "Established Traffic Matrix",
            "Collaborated with 100+ partners",
            "Incubating 2 games",
          ],
        },
        {
          yearimg: require(`~/assets/future/year3.webp`),
          title: "Develop",
          showimg: false,
          index:2,
          isfirst: false,
          textList: [
            "Complete strategic round",
            "Join UNION DAO",
            "Launch SMART P2E Beta",
            "Collaboration with 300+ partners",
          ],
        },
        {
          yearimg: require(`~/assets/future/year4.webp`),
          title: "Launch",
          index:3,
          showimg: false,
          isfirst: false,
          textList: [
            "DAU > 5,000",
            "Complete Private Round & IDO",
            "MPC get listed on DEX",
          ],
        },
        {
          yearimg: require(`~/assets/future/year5.webp`),
          title: "Upgrade",
          showimg: false,
          isfirst: false,
          index:4,
          textList: [
            "DAU > 20,000",
            "Income of Dec.2022 > $200,000",
            "Extend SMART P2E to X2E",
          ],
        },
        {
          yearimg: require(`~/assets/future/year6.webp`),
          title: "ECO",
          showimg: false,
          index:5,
          isfirst: false,
          textList: [
            "DAU > 100,000",
            "Avg. Monthly Income > $1,000,000",
            "Release SocialFi Platform and LaunchPad",
          ],
        },
        {
          yearimg: require(`~/assets/future/year7.webp`),
          title: "DAO",
          isfirst: false,
          showimg: false,
          index:6,
          textList: [
            "DAU > 200,000",
            "Release DAO governance module",
            "Release Cloud Gaming module",
          ],
        },
        {
          yearimg: require(`~/assets/future/year8.webp`),
          title: "ECO",
          showimg: false,
          isfirst: false,
          index:7,
          textList: [
            "DAU > 500,000",
            "Total Income > $100,000,000",
            "Partners > 2,000",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.road {
  .road_content:not(:first-child) {
    margin-top: 40px;
  }
  // .road_content:hover {
  //   .right {
  //     opacity: 1 !important;
  //   }
  // }

  .road_content {
    display: flex;
    height: 300px;

    .left {
      position: relative;
      .bottomdiv2 {
        position: absolute;
        margin-top: -90px;
        z-index: -1;
      }
      .roadbox {
        position: absolute;
        left: 23px;
        top: 185px;

        .topdiv {
          width: 40px;
          height: 180px;
          background: linear-gradient(
            180deg,
            rgba(83, 54, 240, 0) 0%,
            #6431ec 56%,
            #8229e5 100%
          );
          // opacity: 0.9;
          border-radius: 0px 0px 36px 36px;
        }

        .bottomdiv {
          img {
            margin-left: -24px;
            margin-top: -26px;
          }
          // background-image: url('../../assets/future/light.webp');
          // border-radius: 50%;
          // margin-top: 20px;
          // width: 40px;
          // height: 40px;
          // background: linear-gradient(180deg, #5336f0 0%, #8229e5 100%);
        }
      }
    }

    .right {
      width: 400px;
      height: 300px;
      margin-left: 80px;
      opacity: 0.5;
      .title {
        font-size: 60px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #ffffff;
        line-height: 90px;
      }
      .text:first-child {
        margin-top: 40px;
      }
      .text:not(:first-child) {
        margin-top: 10px;
      }
      .text {
        display: flex;
        font-size: 18px;
        align-items: center;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #ffffff;
        line-height: 27px;

        span {
          display: block;
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
          margin: 12px;
        }
      }
    }
  }
}
</style>
