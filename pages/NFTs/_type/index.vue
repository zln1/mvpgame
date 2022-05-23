<template>
  <div>
    <div class="sub-content">
      <div class="topdiv">
        <div class="text">
          <p>MVP Genesis NFT OG OPEN</p>
        </div>
        <div class="time">
          <div class="timecard">{{ timeArray[0] }}</div>
          <div class="timecard">{{ timeArray[1] }}</div>
          <div class="timedown">:</div>
          <div class="timecard">{{ timeArray[2] }}</div>
          <div class="timecard">{{ timeArray[3] }}</div>
          <div class="timedown">:</div>
          <div class="timecard">{{ timeArray[4] }}</div>
          <div class="timecard">{{ timeArray[5] }}</div>
          <div class="timedown">:</div>
          <div class="timecard">{{ timeArray[6] }}</div>
          <div class="timecard">{{ timeArray[7] }}</div>
        </div>
        <div class="timedesction">
          <div class="timedesction-text">Days</div>
          <div class="timedesction-text">Hours</div>
          <div class="timedesction-text">Minutes</div>
          <div class="timedesction-text">Second</div>
        </div>
      </div>
    </div>
    <navigationNFTs></navigationNFTs>
    <!-- <div class="sub-center">
      <div
        :class="[
          $nuxt.$route.params.type === 'GenesisNFT' ? 'check' : 'nocheck',
        ]"
      >
        <nuxt-link class="nuxt_a" to="/NFTs/GenesisNFT">Genesis NFT</nuxt-link>
      </div>
      <div
        :class="[$nuxt.$route.params.type === 'MoreNFTs' ? 'check' : 'nocheck']"
      >
        <nuxt-link class="nuxt_a" to="/NFTs/MoreNFTs">More NFTs</nuxt-link>
      </div>

      <img src="~/assets/images/Path 4@2x.png" alt="sub-hr" />
    </div> -->
    <div class="sub-card">
      <GenesisNFT></GenesisNFT>
    </div>
  </div>
</template>

<script>
import GenesisNFT from "@/components/NFTs/GenesisNFT.vue";
// import Partners from "@/components/Cocreators/Partners.vue";
// import CoreMembers from "@/components/Cocreators/CoreMembers.vue";

export default {
  layout: "BaseLayout",
  name: "NFTs",
  head() {
    return {
      title: "NFTs",
      meta: [
        {
          hid: "NFTs",
          name: "NFTs",
          content: "this is NFTs",
        },
      ],
    };
  },
  components: { GenesisNFT },
  data() {
    return {
      timeArray: [],
      NFTTime: null,
    };
  },
  mounted() {
    this.NFTTime = setInterval(() => {
      this.showTime();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.NFTTime);
    this.NFTTime = null;
  },
  methods: {
    getUTCTime() {
      let d1 = new Date();
      let d2 = new Date(
        d1.getUTCFullYear(),
        d1.getUTCMonth(),
        d1.getUTCDate(),
        d1.getUTCHours(),
        d1.getUTCMinutes(),
        d1.getUTCSeconds()
      );
      return Date.parse(d2);
    },
    timerFilter(params) {
      if (params - 0 < 10) {
        return "0" + params;
      } else {
        return params;
      }
    },
    showTime() {
      //获取⽬的⽇期
      var myyear = 2022; //年
      var mymonth = 7 - 1; //⽉只需要填写 - 前⾯的数字，这⾥是⼗⼆⽉
      var myday = 30; //天
      var myhour = "12"; //时
      var myminute = "00"; //分
      var mysecond = "00"; //秒
      //以上综合填⼊的时间是 2022年6⽉30号12时0分;
      var time = Number(
        new Date(Date.UTC(myyear, mymonth, myday, myhour, myminute, mysecond))
      );
      // console.log(new Date(Date.UTC(myyear, mymonth, myday, myhour, myminute, mysecond)))
      // var time=new Date(myyear,mymonth,myday,myhour,myminute,mysecond).getTime();
      //获取当前时间
      var nowTime = Date.now();
      // console.log(nowTime, this.getUTCTime());
      // var nowTime = new Date().getTime();
      //获取时间差
      // var timediff = Math.round((time - nowTime) / 1000);
      var timediff = Math.round((time - this.getUTCTime()) / 1000);
      //获取还剩多少天
      var day = parseInt(timediff / 3600 / 24);
      //获取还剩多少⼩时
      var hour = parseInt((timediff / 3600) % 24);
      //获取还剩多少分钟
      var minute = parseInt((timediff / 60) % 60);
      //获取还剩多少秒
      var second = timediff % 60;
      //输出还剩多少时间

      let timeString =
        this.timerFilter(day) +
        "" +
        this.timerFilter(hour) +
        this.timerFilter(minute) +
        this.timerFilter(second);
      let timeArr = timeString.replace(/(.)(?=[^$])/g, "$1,").split(",");
      this.timeArray = timeArr;
    },
  },
};
</script>
<style lang="less" scoped>
.sub-card {
  max-width: 1200px;
  min-width: 960px;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 200px;
}
.sub-center {
  position: relative;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    .nuxt_a {
      color: #ffffff !important;
      cursor: pointer;
      text-decoration: none !important;
    }
    position: relative;
    z-index: 2;
    width: 550px;
    text-align: center;
    font-family: "Poppins-Regular";
    color: #ffffff;
    cursor: pointer;
  }
  div:hover {
    font-weight: bold !important;
    font-size: 25px !important;
  }
  .nocheck {
    font-weight: 400;
    font-size: 18px;
  }
  .check {
    font-weight: bold !important;
    font-size: 25px !important;
  }
  img {
    z-index: 1;
    height: 58px;
    width: 100%;
    position: absolute;
    top: 0;
  }
}
.sub-content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .topdiv {
    max-width: 1200px;
    min-width: 960px;
    height: 520px;
    // position: relative;
    .time,
    .timedesction {
      display: flex;
      margin-top: 30px;
      .timedesction-text {
        width: 92px;
        height: 30px;
        font-size: 18px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 30px;
      }
      .timedesction-text:not(:first-child) {
        margin-left: 190px;
      }
      .timedown {
        width: 22px;
        height: 140px;
        font-size: 100px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #ffffff;
        line-height: 150px;
      }
      .timecard:not(:first-child) {
        margin-left: 20px;
      }
      .timecard {
        width: 110px;
        text-align: center;
        height: 160px;
        background: linear-gradient(
          317deg,
          rgba(184, 83, 244, 0) 0%,
          rgba(130, 41, 229, 0.14) 100%
        );
        box-shadow: inset 0px 1px 3px 0px rgba(255, 255, 255, 0.21);
        border-radius: 6px;
        backdrop-filter: blur(30px);
        font-size: 90px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #ffffff;
        line-height: 160px;
      }
    }

    .text {
      // width: 85%;
      max-width: 1200px;
      min-width: 1180px;
      // min-width: 960px;
      margin-top: 66px;
      // margin-left: 7.5%;
      // text-align: center;
      padding-left: 30px;
      font-size: 46px;
      font-family: "Audiowide";
      font-weight: 400;
      color: #ffffff;
      line-height: 100px;
      letter-spacing: 1px;
    }
  }
}
</style>
