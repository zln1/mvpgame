<template>
  <div class="footer">
    <div class="index-content">
      <div class="btmcontent">
        <div class="btmtext">
          <p>JOIN OUR</p>
          <p>COMMUNITY ！</p>
        </div>
        <div style="margin-right: 90px">
          <img
            src="~/assets/Telegram.png"
            style="cursor: pointer"
            @click="jumpTo('https://discord.gg/6JZKy7AYcz')"
            alt=""
          />
          <img
            src="~/assets/Discord.png"
            style="cursor: pointer"
            @click="jumpTo('https://twitter.com/multiverse_play')"
            alt=""
          />
          <img
            src="~/assets/Twitter.png"
            style="cursor: pointer"
            @click="jumpTo('https://t.me/MultiversePlay')"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="footer__nav">
      <hr class="footer_hr" />
      <nav class="footer__menu">
        <div class="btns">
          <div>
            <img src="../assets/footerplay.png" alt="" />
          </div>
          <div @click="linkUrl('https://whitepaper.mvp.games')" class="btn">
            Whitepaper
          </div>
          <div
            @click="linkUrl('https://fin-pitch-deck.mvp.games/deck')"
            class="btn"
          >
            Pitch Deck
          </div>
        </div>
        <ul>
          <li>
            <div v-for="(item, index) of routersList.home" :key="index">
              <img
                v-if="$nuxt.$route.name === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'index'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
            <!-- <img
              v-if="$nuxt.$route.name === 'index'"
              src="~/assets/footerindex.png"
              alt=""
            />
            <a> What's MVP </a> -->
          </li>
          <li>
            <div v-for="(item, index) of routersList.product" :key="index">
              <img
                v-if="$nuxt.$route.name === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'Product'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
          </li>

          <li>
            <div v-for="(item, index) of routersList.Business" :key="index">
              <img
                v-if="$nuxt.$route.name === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'Business'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
            <!-- <img
              v-if="$nuxt.$route.name === 'GAMES'"
              src="~/assets/footerindex.png"
              alt=""
            />
            <a>GAMES</a> -->
          </li>
          <li>
            <div v-for="(item, index) of routersList.Aboutus" :key="index">
              <img
                v-if="$nuxt.$route.name === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'About us'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
          </li>
          <li>
            <div v-for="(item, index) of routersList.Contactus" :key="index">
              <img
                v-if="$nuxt.$route.name === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'Contact us'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
          </li>
          <!-- <li>
            <div v-for="(item, index) of routersList.Cocreators" :key="index">
              <img
                v-if="$nuxt.$route.params.type === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'Cocreators'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
          </li>
          <li>
            <div v-for="(item, index) of routersList.Tokenomic" :key="index">
              <img
                v-if="
                  $nuxt.$route.name === item.routername ||
                  $nuxt.$route.params.type === item.routername
                "
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'Tokenomic'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
          </li> -->
          <!-- <li>
            <div v-for="(item, index) of routersList.NFTs" :key="index">
              <img
                v-if="$nuxt.$route.name === item.routername"
                src="~/assets/footerindex.png"
                alt=""
              />
              <a
                :class="[
                  $nuxt.$route.name === item.routername ||
                  item.routername === 'NFT'
                    ? 'checkroute'
                    : 'nocheckroute',
                ]"
                >{{ item.routertitle }}</a
              >
            </div>
          </li> -->
        </ul>
      </nav>
      <div class="footerBottom">
        Copyright © 2021 Multiverse Play. All rights reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routersList: {
        NFTs: [{ routername: "NFT", routertitle: "NFT" }],
        Contactus: [
          { routername: "Contact us", routertitle: "Contact us" },
          { routername: "contact@mvp.games", routertitle: "contact@mvp.games" },
        ],
        Aboutus: [
          { routername: "About us", routertitle: "About us" },
          { routername: "Cocreators", routertitle: "Co-creators" },
          { routername: "sub-DAO", routertitle: "Sub-DAO" },
          { routername: "CoreMembers", routertitle: "Core Member" },
          { routername: "Partners", routertitle: "Partner" },
          { routername: "MPC", routertitle: "MPC" },
          { routername: "MPP", routertitle: "MPP" },
          { routername: "Road Map", routertitle: "Road Map" },
          { routername: "Evolution Plan", routertitle: "Evolution Plan" },
        ],
        Business: [
          { routername: "Business", routertitle: "Business" },
          { routername: "Games Incubation", routertitle: "Games Incubation" },
          { routername: "Games Incubation", routertitle: "Games Ops&MKT" },
        ],
        home: [
          { routername: "index", routertitle: "What's MVP" },
          { routername: "index1", routertitle: "Home Page" },
          { routername: "index2", routertitle: "Medium" },
        ],
        product: [
          { routername: "Product", routertitle: "Product" },
          { routername: "SmartP2E", routertitle: "Smart P2E" },
          {
            routername: "Smart X2E",
            routertitle: "Smart X2E",
          },
          { routername: "Community", routertitle: "Community" },
          { routername: "LaunchPad", routertitle: "Launchpad" },
          { routername: "CloudGaming", routertitle: "Cloud Gaming" },

          { routername: "GenesisNFT", routertitle: "Genesis NFT" },
          { routername: "MoreNFTs", routertitle: "More NFTs" },
        ],
        Tokenomic: [
          { routername: "Tokenomic", routertitle: "Tokenomic" },
          { routername: "MPC", routertitle: "MPC" },
          { routername: "MPP", routertitle: "MPP" },
        ],
        Cocreators: [
          { routername: "Cocreators", routertitle: "Co-creators" },
          { routername: "sub-DAO", routertitle: "Sub-DAO" },
          { routername: "CoreMembers", routertitle: "Core member" },
          { routername: "Partners", routertitle: "Partners" },
        ],
      },
    };
  },
  methods: {
    linkUrl(url) {
      window.open(url, "_blank");
    },
    jumpTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style scoped lang="less">
.footer {
  position: relative;
  z-index: 3;
  width: 100%;
  // display: flex;
  // justify-content: center;
  // flex-wrap: wrap;
}
.index-content {
  max-width: 975px;
  min-width: 960px;
  margin: auto;
  // width: 1080px;
  // min-width: 960px;
  // flex-shrink: 0;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
  .btmcontent {
    width: 100%;
    background-image: url("~@/assets/bottomcard.webp");
    background-size: 100% 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btmtext {
      margin-left: 70px;
      height: 105px;
      font-size: 44px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 53px;
    }
  }
}
.footer_hr {
  // flex-shrink: 0;
  // width: 1200px;
  // min-width: 960px;
  max-width: 975px;
  min-width: 960px;
  margin: auto;
  border: none;
  height: 1px;
  background: #ffffff;
  opacity: 0.2;
}
.footer__nav {
  // width: 100%;
  // width: 1200px;
  // min-width: 960px;
  // flex-shrink: 0;
  max-width: 975px;
  min-width: 960px;
  margin: auto;
  height: 333px;
  position: relative;

  // background: #000000;

  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: center;
  .footerBottom {
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
    font-size: 12px;
    opacity: 0.7;
    font-family: "Poppins-Regular";
    font-weight: 400;
    color: #ffffff;
  }

  .footer__menu {
    display: flex;
    padding-top: 53px;
    .btns {
      margin-left: 41px;
      img {
        width: 89px;
        height: 28px;
      }
      .btn {
        cursor: pointer;
        width: 89px;
        height: 28px;
        text-align: center;
        border-radius: 13px;
        border: 1px solid #ffffff;
        font-size: 12px;
        font-family: "Poppins-Medium";
        color: #ffffff;
        margin-top: 20px;
        line-height: 28px;
      }
    }

    ul {
      flex: 1;
      margin: 0;
      margin-left: 110px;
      padding: 0;
      list-style: none;
      display: flex;
      // justify-content: center;
      li:first-child {
        margin-left: 10px;
      }
      li {
        margin-left: 45px;
        position: relative;
        // margin-left: 95px;
        list-style: none;
        text-align: left;

        img {
          width: 11px;
          position: absolute;
          top: 6px;
          left: -17px;
        }
        div {
          position: relative;
          // width: 171px;
        }
        a {
          // width: 171px !important;
          font-size: 14px;
          font-family: "Poppins-Bold";
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
        }
        .checkroute {
          font-weight: 500 !important;
          opacity: 1 !important;
        }
        .nocheckroute {
          font-weight: 400;
          opacity: 0.7;
        }
        div:not(:first-child) {
          margin-top: 7px;
          a {
            font-size: 12px;
            font-family: "Poppins-Regular";
            font-weight: 400;
            color: #ffffff;
            margin: 0;
            padding: 0;
            opacity: 0.7;
            margin-top: 16px;
          }
        }
      }
    }
  }
}
</style>
