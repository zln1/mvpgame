<script>
import ToastGary from "@/components/toast/ToastGary.vue";
export default {
  components: {
    ToastGary,
  },
  data() {
    return {
      isToast: false,
      content: "Coming soon",
      nav_child: false,
      isShow: "",
      isInNav: false,
      isfixed: true,
      list: [],
      bodyScrllTop: null,
    };
  },
  props: ["isShowchild"],
  mounted() {
    document
      .getElementById("body-box")
      .addEventListener("scroll", this.handerScrll);
    // this.clickFirebase()
    this.$firebase("Page_Home", {
      Page_Home: "Page_Home",
    });
  },
  methods: {
    linkUrl(url) {
      window.open(url, "_blank");
    },
    handerScrll() {
      // this.bodyScrllTop = document.getElementById("body-box").scrollTop;
      // if (this.bodyScrllTop > 650) {
      //   this.isfixed = true;
      // } else {
      //   this.isfixed = false;
      // }
    },
    tolink(item) {
      
      // this.clickFirebase("Tab_" + item.taskname);
      // if (
      //   item.name === "/NFTs/MoreNFTs" ||
      //   item.name === "/Multi-taskDispatchPlatform" ||
      //   item.name === "/CloudGaming" ||
      //   item.name === "/LaunchPad" ||
      //   item.name === "/Community"
      // ) {
      //   this.isToast = true;
      //   setTimeout(() => {
      //     this.isToast = false;
      //   }, 2000);
      // } else {
      //   this.$router.push(item.name);
      // }
    },
    clickFirebase(str) {
      this.$firebase(str, {
        str: str,
      });
    },
    notisShow() {
      this.isShow = "";
    },
    changeisShow(index) {
      this.isShow = index;
    },
    nochild() {
      this.nav_child = false;
    },
    ShowNav_child(arr) {
      // let arr = obj.split(",");
      this.list = [];
      this.nav_child = true;
      this.list = arr;
    },
    NotNav_child() {
      if (!this.isInNav) {
        this.nav_child = false;
      }
    },
    innav() {
      this.isInNav = true;
    },
    outnav() {
      this.isInNav = false;
      this.NotNav_child();
    },
  },
};
</script>
<template>
  <div
    class="header"
    :class="[isShowchild ? 'animate__fadeInDownBig animate__animated' : 'animate__fadeOutUp animate__animated','fixed']"
  >
    <ToastGary v-show="isToast" :content="content"></ToastGary>
    <div class="header__nav">
      <img src="~/assets/headerlogo.png" alt="" />
      <nav class="header__menu">
        <ul>
          <li  @click="clickFirebase('Page_What_is_MVP')" @mouseenter="nochild">
            <!--  :class="{ 'animate__animated animate__zoomIn': index === 1 }" -->
            <nuxt-link
              to="/"
              :class="{ indexA: $nuxt.$route.name === 'index' }"
            >
              What's MVP
            </nuxt-link>
            <hr v-if="$nuxt.$route.name === 'index'" class="bottom_hr" />
          </li>
          <li
          style=" margin-left:15px;"
            @click="clickFirebase('Page_Product')"
            @mouseover="
              ShowNav_child([
                {
                  title: 'Smart P2E',
                  name: '/product/SmartP2E',
                  taskname: 'SmartP2E',
                },
                {
                  title: 'Smart X2E',
                  name: '/Multi-taskDispatchPlatform',
                  taskname: 'Multi-taskDispatchPlatform',
                },
                {
                  title: 'Cloud Gaming',
                  name: '/CloudGaming',
                  taskname: 'CloudGaming',
                },
                {
                  title: 'LaunchPad',
                  name: '/LaunchPad',
                  taskname: 'LaunchPad',
                },
                {
                  title: 'Community',
                  name: '/Community',
                  taskname: 'Community',
                },
              ])
            "
            @mouseout="NotNav_child"
          >
            <nuxt-link
              to="/product/SmartP2E"
              :class="{ indexA: $nuxt.$route.name === 'product-type' }"
            >
              Products&nbsp;&nbsp;+
            </nuxt-link>
            <hr
              v-if="
                $nuxt.$route.name === 'product-type' ||
                $nuxt.$route.name === 'product/Multi-taskDispatchPlatform' ||
                $nuxt.$route.name === 'CloudGaming' ||
                $nuxt.$route.name === 'LaunchPad' ||
                $nuxt.$route.name === 'Community'
              "
              class="bottom_hr"
            />
          </li>
          <li
           style=" margin-left:20px;"
            @click="clickFirebase('Page_Cocreators')"
            @mouseover="
              ShowNav_child([
                {
                  title: 'Sub - DAO',
                  name: '/Cocreators/sub-DAO',
                  taskname: 'sub-DAO',
                },
                {
                  title: 'Core members',
                  name: '/Cocreators/CoreMembers',
                  taskname: 'CoreMembers',
                },
                {
                  title: 'Partners',
                  name: '/Cocreators/Partners',
                  taskname: 'Partners',
                },
              ])
            "
            @mouseout="NotNav_child"
          >
            <nuxt-link
              to="/Cocreators/sub-DAO"
              :class="{ indexA: $nuxt.$route.name === 'Cocreators-type' }"
            >
              Co-creators&nbsp;&nbsp;+
            </nuxt-link>
            <hr
              v-if="$nuxt.$route.name === 'Cocreators-type'"
              class="bottom_hr"
            />
          </li>
          <li style=" margin-left:10px;" @click="clickFirebase('Page_GAMES')" @mouseenter="nochild">
            <nuxt-link
              :class="{ indexA: $nuxt.$route.name === 'GAMES' }"
              to="/GAMES"
              >Games
            </nuxt-link>
            <hr v-if="$nuxt.$route.name === 'GAMES'" class="bottom_hr" />
          </li>
          <li
          style=" margin-left:-10px;"
            @click="clickFirebase('Page_NFTs')"
            @mouseover="
              ShowNav_child([
                {
                  title: 'Genesis NFT',
                  name: '/NFTs/GenesisNFT',
                  taskname: 'GenesisNFT',
                },
                {
                  title: 'More NFTs',
                  name: '/NFTs/MoreNFTs',
                  taskname: 'MoreNFTs',
                },
              ])
            "
            @mouseout="NotNav_child"
          >
            <nuxt-link
              :class="{ indexA: $nuxt.$route.name === 'NFTs-type' }"
              to="/NFTs/GenesisNFT"
              >NFTs&nbsp;&nbsp;+
            </nuxt-link>
            <hr v-if="$nuxt.$route.name === 'NFTs-type'" class="bottom_hr" />
          </li>
          <li
            @click="clickFirebase('Page_Tokenomic')"
            @mouseover="
              ShowNav_child([
                {
                  title: 'MPC',
                  name: '/Tokenomic/MPC',
                  taskname: 'MPC',
                },
                {
                  title: 'MPP',
                  name: '/Tokenomic/MPP',
                  taskname: 'MPP',
                },
              ])
            "
            @mouseout="NotNav_child"
          >
            <nuxt-link
              to="/Tokenomic/MPC"
              :class="{ indexA: $nuxt.$route.name === 'Tokenomic-type' }"
            >
              Tokenomic&nbsp;&nbsp;+
            </nuxt-link>
            <hr
              v-if="$nuxt.$route.name === 'Tokenomic-type'"
              class="bottom_hr"
            />
          </li>
          <li @click="clickFirebase('Page_Future')" @mouseenter="nochild">
            <nuxt-link
              to="/Future"
              :class="{ indexA: $nuxt.$route.name === 'Future' }"
              >Future
            </nuxt-link>
            <hr v-if="$nuxt.$route.name === 'Future'" class="bottom_hr" />
          </li>
        </ul>
      </nav>
      <div class="btn" @click="linkUrl('https://whitepaper.mvp.games')">
        WHITEPAPER
      </div>
    </div>
    <!-- <div class="header__nav_child" v-show="nav_child">
      <ul>
        <li
          :class="{
            activeNavChild:
              $nuxt.$route.name === item.name ||
              ($nuxt.$route.params.type === item.taskname && item.taskname),
          }"
          @mouseenter.stop="changeisShow(index)"
          @mouseleave="notisShow()"
          v-for="(item, index) of list"
          :key="index"
        >
           <a  @click="test(item)">{{item}}</a>v-if="$nuxt.$route.name === 'item'" 
          <img src="../assets/headerleft.png" alt="" />
          <a @click="tolink(item)">{{ item.title }}</a>
          <img src="../assets/headerright.png" alt="" />
           <hr
            v-if="
              $nuxt.$route.name === item.name ||
              isShow === index ||
              ($nuxt.$route.params.type === item.taskname && item.taskname)
            "
            class="navchildHr"
          /> 
        </li>
      </ul>
    </div> -->
  </div>
</template>

<style scoped lang="less">
.fixed {
  position: fixed;
  z-index: 9;
  width: 100%;
}
// .relative {
//   position: relative;
// }
.header__nav_child {
  height: 49px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(32, 32, 32, 0.35) 100%
  );
  position: absolute;
  top: 65px;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .navchildHr {
    height: 1px;
    position: absolute;
    right: 0;
    z-index: 4;
    width: 32px;
    background: #ffffff;
    border: none;
    float: right;
  }
  ul {
    width: 1200px;
    list-style: none;
    display: flex;
    align-items: center;
    li:not(:first-child) {
      margin-left: 68px;
    }
    .activeNavChild {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Poppins-Medium";
      font-weight: 500;
      position: relative;
      a {
        position: absolute;
        top: 15px;
      }
      img {
        display: block;
        width: 95px;
        height: 40px;
        margin-top: 5px;
      }
    }
    img {
      display: none;
    }
    li:hover {
      font-family: "Poppins-Medium";
      font-weight: 500;
    }
    li {
      position: relative;
      list-style: none;
      font-size: 12px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      a {
        position: relative;
        color: #ffffff;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
.header {
  width: 100%;
  height: 65px;
   background: rgba(0, 0, 0, 0.1);
  // max-width: 1200px;
  // min-width: 960px;
  // margin: auto;
  // justify-content: center;
  // display: flex;
}
.header__nav {
 
  max-width: 1200px;
  min-width: 960px;
  margin: auto;
  // width: 100%;//justify-content: center;
  // width: 1200px;
  // min-width: 960px;
  // flex-shrink:0;
  height: 65px;
  // background: #000000;
  display: flex;
  // opacity: 0.9;
  // background-color: rgba(255, 255, 255, 0.1);
  align-items: center;
  img {
    width: 23px;
    height: 23px;
  }
  .btn {
    width: 95px;
    margin-left: 35px;
    height: 28px;
    cursor: pointer;
    text-align: center;
    border-radius: 13px;
    border: 1px solid #ffffff;
    font-size: 12px;
    font-family: "Poppins-Medium";
    color: #ffffff;
    line-height: 28px;
  }
  .header__menu {
    margin-left: 220px;
    display: block;
    ul {
      margin: 0;
      margin-left: 0px;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      li {
        position: relative;
        list-style: none;
        text-align: center;
        font-size: 12px;
        box-sizing:border-box;
        color: #ffffff;
        min-width:90px;
       
        a {
          font-family: "Poppins-Regular";
          color: #ffffff;
          cursor: pointer;
          text-decoration: none;
        }
        a:hover {
          font-family: "Poppins-Bold";
        }
        .bottom_hr {
          position: absolute;
          width: 34px;
          height: 2px;
          z-index: 4;
          margin-left: -17px;
          border: none;
          left: 50%;
          top: 21px;
          background: #ffffff;
        }
        .indexA {
          font-family: "Poppins-Bold";
        }
      }
    }
  }
}
</style>
