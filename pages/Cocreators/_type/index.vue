<template>
  <div>
    <div class="sub-content">
      <div class="topdiv">
        <div class="text">
          <p>We will continue to perfect</p>
          <p>the DAO governance model</p>
        </div>
      </div>
    </div>
    <navigationCocreators></navigationCocreators>
    <!-- <div class="sub-center">
      <div
        :class="[$nuxt.$route.params.type === 'sub-DAO' ? 'check' : 'nocheck']"
      >
        <nuxt-link class="nuxt_a" to="/Cocreators/sub-DAO">Sub-DAO</nuxt-link>
      </div>
      <div
        :class="[
          $nuxt.$route.params.type === 'CoreMembers' ? 'check' : 'nocheck',
        ]"
      >
        <nuxt-link class="nuxt_a" to="/Cocreators/CoreMembers"
          >Core Members</nuxt-link
        >
      </div>
      <div
        :class="[$nuxt.$route.params.type === 'Partners' ? 'check' : 'nocheck']"
      >
        <nuxt-link class="nuxt_a" to="/Cocreators/Partners">Partners</nuxt-link>
      </div>
      <img src="~/assets/sub-hr.webp" alt="sub-hr" />
    </div> -->
    <div class="sub-card">
      <newSubCard
        v-show="$nuxt.$route.params.type === 'sub-DAO'"
        v-for="(item, index) of subcardList"
        :key="index"
        :list="item"
      />
      <Partners v-show="$nuxt.$route.params.type === 'Partners'" />
      <CoreMembers v-show="$nuxt.$route.params.type === 'CoreMembers'" />
    </div>
  </div>
</template>

<script>
import newSubCard from "@/components/Cocreators/newSubCard.vue";
import Partners from "@/components/Cocreators/Partners.vue";
import CoreMembers from "@/components/Cocreators/CoreMembers.vue";

export default {
  layout: "BaseLayout",
  name: "Cocreators",
  head() {
    return {
      title: "Cocreators",
      meta: [
        {
          hid: "Cocreators",
          name: "Cocreators",
          content: "this is Cocreators",
        },
      ],
    };
  },
  components: { newSubCard, Partners, CoreMembers },
  data() {
    return {
      subcardList: [
        {
          img: require("~/assets/MVG.webp"),
          title: "MVG",
          Consensus: "PLAY TO EARN",
          Establish: "2021-9-18",
          Members: "37.1k",
          link1: "https://discord.gg/y8MkPWQr3n",
          link2: "https://twitter.com/multiverse_play",
          link3: "https://t.me/MultiversePlay",
          Description:
            "Dear Players: We are MVG(Multiverse Guild), a professional guild. MVG Guild, was built up with over 40,000 gamefi players and comprehensive scholar systems within less than one month, which is one of the fastest growing ones for Gamefi field in 2021. ",
        },
        {
          link1: "https://discord.com/invite/uYj6Gscjgj",
          link2: "https://twitter.com/Mvp_Yorozuya",
          link3: "https://discord.com/invite/uYj6Gscjgj",
          img: require("~/assets/AllInOneDAO.webp"),
          title: "All in one DAO",
          Consensus: "Find everything you need",
          Establish: "2022-1-26",
          Members: 160,
          Description:
            "All in One DAO a community-fi, it is capable to accomplish any requirements that the customer could have. Provide services including: Economic model optimization, Branding Operation, Global community operation, Global publication and marketing, Market Making, etc",
        },
        {
          link1: "https://discord.com/invite/KbynMzWUPT",
          link2: "https://twitter.com/multiverse_play",
          link3: "https://t.me/MultiversePlay",
          img: require("~/assets/Ops.webp"),
          title: "OPS DAO",
          Consensus: "Helping GameFi to Grow",
          Establish: "2022-1-7",
          Members: 45,
          Description:
            "OpsDAO is a sub-DAO belongs to MVP, and aims at helping GameFi to kick-off, grow and thrive during the whole process.",
        },
        {
          link1: "https://discord.com/invite/KbynMzWUPT",
          link2: "https://twitter.com/multiverse_play",
          link3: "https://t.me/MultiversePlay",
          img: require("~/assets/IncubationDAO.webp"),
          title: "Incubation DAO",
          Consensus: "Bring Web2.0 Game Developers to Web3.0",
          Establish: "2021-1-15",
          Members: 98,
          Description:
            "Provide one-step incubation service, in the role of the operation party, exclusively undertake all the operation work and decision, including: Financing, Guild support, Economic model optimization, Global community operation, Global publication and marketing, CEX/DEX operation, etc.",
        },
        {
          link1: "https://discord.com/invite/KbynMzWUPT",
          link2: "https://twitter.com/multiverse_play",
          link3: "https://t.me/MultiversePlay",
          img: require("~/assets/MCN.webp"),
          title: "MCN DAO",
          Consensus: "Everyone can be an influencer",
          Establish: "2022-2-16",
          Members: 15,
          Description:
            "MCN DAO: Incubation of amateurs to become influencers in the GameFi field. Build a social media traffic matrix in the GameFi field.",
        },
        {
          link1: "https://discord.com/invite/KbynMzWUPT",
          link2: "https://twitter.com/multiverse_play",
          link3: "https://t.me/MultiversePlay",
          img: require("~/assets/InfluencerDAO.webp"),
          title: "Influencer DAO",
          Consensus: "Preach GameFi",
          Establish: "2022-1-27",
          Members: "1k+",
          Description:
            "Influencer DAO: With 1,000+ TikTok influencers in-game and entertainment with 450M exposure.",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.sub-card {
  max-width: 1200px;
  min-width: 960px;
  margin: auto;
  // margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-wrap: wrap;
  .new-subcard:nth-child(2n) {
    margin-left: 61px;
  }

  // width: 100%;
  // display: flex;
  // justify-content: center;
  // flex-wrap: wrap;
  .card {
    // flex-shrink: 0;
    // max-width: 1200px;
    // min-width: 960px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 44px;
  }

  // .card:first-child {
  //   margin-top: 0px;
  // }
  // .card:last-child {
  //   margin-bottom: 105px;
  // }
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
    width: 360px;
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
    // width: 100%;
    background-image: url("~/assets/sub-index.webp");
    background-size: cover;
    height: 455px;
    // position: relative;
    .text {
      // width: 85%;
      max-width: 1200px;
      min-width: 1180px;
      // min-width: 960px;
      margin-top: 130px;
      // margin-left: 7.5%;
      // text-align: center;
      font-size: 74px;
      font-family: "Audiowide";
      font-weight: 400;
      color: #ffffff;
      line-height: 96px;
      letter-spacing: 1px;
    }
  }
}
</style>
