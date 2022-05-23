<template>
  <div class="CoreMembers" style="margin-top: 120px">
    <div class="CoreMembers_title">
      <img class="icon" src="~/assets/titleicon.png" alt="" />
      FOUNDER TEAM<span>Holistic & Sophistic</span>
    </div>
    <inForMation :list="teamList" />
    <div class="CoreMembers_title">
      <img class="icon" src="~/assets/titleicon.png" alt="" />
      ADVISOR <span>Holistic & Sophistic</span>
    </div>
    <adviceTion :list="advisorList" />
    <div class="CoreMembers_title">
      <img class="icon" src="~/assets/titleicon.png" alt="" />
      TEAM MEMBER <span>Professional & Executable</span>
    </div>
    <div class="tag">
      <div v-for="(item, index) of tagList" :key="index">
        <img class="tag-img" :src="item.img" alt="" />
        <img
          class="border-img"
          src="../../assets/team-img/userborder.png"
          alt=""
        />
        <p class="uname">{{ item.uname }}</p>
        <p class="utext">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import inForMation from "@/components/Cocreators/information/index.vue";
import adviceTion from "@/components/Cocreators/advicetion/index.vue";
export default {
  layout: "BaseLayout",
  name: "CoreMembers",
  components: { inForMation, adviceTion },
  mounted() {
    // this.timer = setInterval(() => {
    //   this.DynamicArray = this.teamList.slice(1);
    //   this.DynamicArray.push(this.teamList[0]);
    //   this.teamList = this.DynamicArray;
    //   this.DynamicArray = [];
    // }, 1000 * 60);
  },
  beforeDestroy() {
    // clearInterval(this.timer);
  },
  data() {
    return {
      timer: null,
      DynamicArray: [],
      tagList: [
        {
          uname: "ANIYA",
          title: "Designer",
          img: require("../../assets/team-img/1.webp"),
        },
        {
          uname: "ALEX",
          title: "Product",
          img: require("../../assets/team-img/2.webp"),
        },
        {
          uname: "ANDREW",
          title: "Community Ops",
          img: require("../../assets/team-img/3.webp"),
        },
        {
          uname: "BLUMER",
          title: "BD",
          img: require("../../assets/team-img/4.webp"),
        },
        {
          uname: "ORI",
          title: "Community Ops",
          img: require("../../assets/team-img/5.webp"),
        },
        {
          uname: "NINE",
          title: "HR",
          img: require("../../assets/team-img/6.webp"),
        },
        {
          uname: "DEXTER.T",
          title: "Community Ops",
          img: require("../../assets/team-img/7.webp"),
        },
        {
          uname: "EDISON",
          title: "Community Ops",
          img: require("../../assets/team-img/8.webp"),
        },
        {
          uname: "IRIS",
          title: "Product",
          img: require("../../assets/team-img/9.webp"),
        },
        {
          uname: "GAURAV GOGOI",
          title: "MOD",
          img: require("../../assets/team-img/10.webp"),
        },

        {
          uname: "MAY",
          title: "Research",
          img: require("../../assets/team-img/11.webp"),
        },
        {
          uname: "DAVIS",
          title: "Research",
          img: require("../../assets/team-img/12.webp"),
        },
        {
          uname: "KALMOND",
          title: "Designer",
          img: require("../../assets/team-img/13.webp"),
        },
        {
          uname: "LEO",
          title: "Co-Founder",
          img: require("../../assets/team-img/14.webp"),
        },
        {
          uname: "LEON",
          title: "Designer",
          img: require("../../assets/team-img/15.webp"),
        },
        {
          uname: "TAN KIRSTEIN",
          title: "MOD",
          img: require("../../assets/team-img/16.webp"),
        },
        {
          uname: "ROYKAY",
          title: "Founder",
          img: require("../../assets/team-img/17.webp"),
        },
        {
          uname: "SAGAR GARG",
          title: "MOD",
          img: require("../../assets/team-img/18.webp"),
        },
        {
          uname: "SARIM AHMED",
          title: "MOD",
          img: require("../../assets/team-img/19.webp"),
        },
        {
          uname: "ASTRO",
          title: "Branding",
          img: require("../../assets/team-img/20.webp"),
        },

        {
          uname: "STEVE",
          title: "BD",
          img: require("../../assets/team-img/21.webp"),
        },
        {
          uname: "THEODORE",
          title: "Community Ops",
          img: require("../../assets/team-img/22.webp"),
        },
        {
          uname: "DENMARK",
          title: "MOD",
          img: require("../../assets/team-img/23.webp"),
        },
        {
          uname: "CINDY",
          title: "Economist",
          img: require("../../assets/team-img/24.webp"),
        },
        {
          uname: "EDDIE",
          title: "Research",
          img: require("../../assets/team-img/25.webp"),
        },
        {
          uname: "NICOLAS",
          title: "Research",
          img: require("../../assets/team-img/26.jpeg"),
        },
       
      ],
      advisorList: [
        {
          index: 0,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Ben.png"),
          userName: "MICHAEL YUE",
          text: "",
          description: `Former co-founder of Giant Network. <br><br>
A well-known originator for the game industry in China.
`,
        },
        {
          index: 1,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Leo.png"),
          userName: "CINDY",
          text: "",
          description: `4-year exp. in blockchain venture capital. 10-year exp. in financial risk management. <br><br>
Senior DEFI player.`,
        },
        {
          index: 2,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Roykay.png"),
          userName: "42DAO",
          text: "",
          description: `A blockchain incubator from Silicon Valley. <br><br>
Invested and incubated Black Ocean, Dfinity, Pocket network, Platon, and Dora Factory.`,
        },
        {
          index: 3,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Alan.png"),
          userName: "ShAD",
          text: "",
          description: `Former senior management team for Bank of America Merrill Lynch. 20-year exp. focusing on HFT, regulatory, BCP, etc. <br><br>
Senior DEFI player. CEX expert.
`,
        },
        {
          index: 4,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Ray.png"),
          userName: "AREPALILI",
          text: "",
          description: `CEO of RedHat Capital, Asian blockchain incubator and accelerator.<br><br>
Expert in marketing strategy.`,
        },
        {
          index: 5,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Ray.png"),
          userName: "ALLINWEB3.IO",
          text: "",
          description: `A blockchain incubator from Singapore.<br><br>
Expert in technical & product design.
`,
        },
      ],
      teamList: [
        {
          index: 0,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Ben.png"),
          userName: "BEN",
          text: "Head of Branding Operation",
          description: `A multi-disciplinary expert: technical guide, content creator, digital media designer, marketing planning.<br><br>
Former IT director in many large enterprises in U.S.<br><br>
Crypto consultant. Cases: HADO/Cardingo/Catboy/Moon Token/NFTOgle/BeagleCake/Chain Racers 
`,
        },
        {
          index: 1,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Roykay.png"),
          userName: "ROYKAY",
          text: "Head of Product",
          description: `12-year of cross-industry experience in Fin-Tech industry and Gaming industry.<br><br>
Former co-founder of NetBoom, the world’s No.1 mobile cloud-gaming platform. Former VP of QuantGroup, a leading Fin-Tech platform.<br><br>
MBA from Peking University, P.R.C.`,
        },
        {
          index: 2,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Alan.png"),
          userName: "ALAN",
          text: "Head of Technical",
          description: `16-year experience in Gaming industry. A business leader in the video game and IT industries with proven track-record in technology, strategic initiatives, operations, investment. Famous guru in game industry in North America.<br><br>
Former CEO of Perfect World Entertainment, (Case: Neverwinter, Star Trek online), COO of Leyou Technologies (Case: Warframe, Transformers), CTO of The9 Limited(NASDAQ: NCTY, Case: World of Warcraft).<br><br>
Ph.D. from University of Ottawa, Canada`,
        },
        {
          index: 3,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Leo.png"),
          userName: "LEO",
          text: "Head of Community",
          description: `Achieved a brand exposure of 300M+ views on TikTok with a cost less than $100,000. Managed accumulatively over 300k+ members in Discord, Facebook and Telegram.<br><br>
Former marketing director of NetBoom, the world’s No.1 mobile cloud-gaming platform. <br><br>
Master degree in business administration from University of Maryland in United States.
`,
        },

        {
          index: 4,
          isShow: false,
          img: require("../../assets/CoreMembersimgs/Ray.png"),
          userName: "RAY",
          text: "Head of Gaming",
          description: `18-year experience in game publishing and R&D.<br><br>
Ray used to be the CEO of AlienKingdom(a blockchain game). Responsible for the whole market in Hong Kong, Macao, Taiwan and Southeast Asia regions at Ledou Games (NASDAQ: DKNY) as VP, Feiliu Games (NYSE: LKM) as general manager, and Renren Games (NYSE: RENN) as general manager.<br><br>
Bachelor's degree from National Chengchi University, R.O.C.`,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.CoreMembers {
  width: 100%;
  // display: flex;
  // flex-wrap: wrap;
  // margin-left: 10px;
  // margin-bottom: 150px;
  .tag {
    width: 100%;
    min-height: 300px;
    display: flex;
    // background: red;
    margin-top: 40px;
    margin-left: -47px;
    // margin-top: 88px;
    position: relative;
    flex-wrap: wrap;
    // div:not(:first-child),div:not(:nth-child(11)){
    //   margin-left: 47px;
    // }
    .tag-img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
    .border-img {
      left: 50%;
      top: 50%;
      margin-left: 0px;
      margin-top: -92px;
      width: 98px;
      height: 98px;
      // position: absolute;
    }
    div {
      margin-left: 47px;
      margin-top: 61px;
      width: 186px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .uname {
      text-align: center;
      height: 27px;
      font-size: 19px;
      font-family: "Poppins-Medium";
      font-weight: 500;
      color: #ffffff;
      margin-top: 15px;
      line-height: 27px;
    }
    .utext {
      text-align: center;
      height: 15px;
      font-size: 12px;
      font-family: " Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      margin-top: 15px;
      line-height: 15px;
    }
  }
  .CoreMembers_title {
    // width: 157px;
    height: 31px;
    position: relative;
    font-size: 22px;
    font-family: "Poppins-Medium";
    font-weight: 500;
    color: #ffffff;
    line-height: 33px;
    padding-left: 28px;
    .icon {
      position: absolute;
      left: 0;
      width: 12px;
      top: 7px;
      height: 12px;
    }
    span {
      margin-left: 69px;
      font-size: 20px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      opacity: 0.5;
    }
  }
}
</style>
