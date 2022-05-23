<template>
  <div class="GenesisNFT">
    <div class="GenesisNFT-card">
      <div>
        <img src="~/assets/NFT-6-7-3.gif" alt="" />
      </div>
      <div class="GenesisNFT-content">
        <div class="title">Genesis NFT</div>
        <div class="tag">
          <div class="tag-div">
            <div class="tag-title">Price</div>
            <div class="tag-text">0.08 ETH</div>
          </div>
          <div class="tag-div" style="margin-left: 150px">
            <div class="tag-title">Total supply</div>
            <div class="tag-text">500</div>
          </div>
          <div class="tag-div" style="width: 350px; margin-top: 20px">
            <div class="tag-title">Available on</div>
            <div class="tag-text">2022.5.2 PST 14:00</div>
          </div>
          <div class="GenesisNFT-btns">
            <div class="btn">Apply Whitelist</div>
            <div class="btntext">**** applied</div>
            <div>
              <img src="~/assets/images/GenesisNFTbtnlink.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="latterbox-title">
      <img class="icon" src="~/assets/titleicon.png" alt="" />
      Genesis NFT Privileges
    </div>
    <div class="GenesisNFT-box">
      <div
        class="GenesisNFT-box-card"
        v-for="(item, index) of GenesisNFTList"
        :key="index"
      >
        <div class="GenesisNFT-box-box"></div>
        <div style="margin-left: 24px">
          <p class="GenesisNFT-box-title">{{ item.title }}</p>
          <p class="GenesisNFT-box-text">
            {{ item.desction }}
          </p>
        </div>
      </div>
    </div>
    <div class="latterbox-title">
      <img class="icon" src="~/assets/titleicon.png" alt="" />
      Description
    </div>
    <div class="GenesisNFT-desction">
      MVP is launching its seed round of NFTs to progress the co-creation of
      MVP. MVP is a decentralized Autonomous Organization (DAO) that focuses on
      early GameFi projects and gathers high-quality players. We are developing
      a matching system for multi-type information governed by DAO. MVP has
      finished the cold start phase with sophisticated operation preparation.
      The first version of the system is the "P2E Dispatch System". The system
      is a decentralized NFT renting platform focused on the GameFi assets.
      Based on mechanisms such as bidding and credit system, we will be able to
      match investors, assets and scholars. By tokenizing the rental revenue to
      build interest-bearing NFT assets, we can combine with DEFI protocol such
      as the NFT rental system, increasing the efficiency of capital and
      releasing the liquidity of NFT. It is expected that, after the launch of
      the system, the daily income will be around 25,000 USDT and will increase
      10 times in 3 months. Later the platform will be upgraded into a GameFi
      community like Reddit based on SocialFi, and aggregate our users there.
      Such a community will solve the bad experience in communication for the
      blockchain area from the current IM tool(Twitter/Telegram/Discord). In the
      end, our project will use cloud-gaming technology to bring in top 3A
      games, realizing mining while playing 3A games. Based on high-quality
      games, MVP will attract 1 billion traditional players to buy tokens and
      become one of the users in crypto, bringing in new users constantly to
      deal with the slow growth for new users.
    </div>
    <div class="GenesisNFT-statement">Don't miss next Mint time</div>
    <div class="GenesisNFT-introduce">
      Subscribe for the latest news, mint time
    </div>
    <div class="GenesisNFT-user-fill">
      <input
        v-model="GenesisNFTtText"
        placeholder="Enter email here"
        type="text"
      />
      <div class="btn" @click="toSubscribe">subscribe</div>
    </div>
    <div class="GenesisNFT-user-check" :class="{ isCheck: showCheck }">
      <div @click="toCheck" class="box"></div>
      <div class="text">
        <img src="../../assets/NFTscheck.webp" v-show="showCheck" alt="" />
        By entering my email and subscribing I confirm and agree to the Privacy
        Notice.
      </div>
    </div>
    <ToastGary v-show="isToast" :content="content"></ToastGary>
  </div>
</template>

<script>
import ToastGary from "@/components/toast/ToastGary.vue";
import $axios from "axios";
export default {
  name: "GenesisNFT",
  components: {
    ToastGary,
  },
  data() {
    return {
      isToast: false,
      content: "",
      showCheck: false,
      GenesisNFTtText: "",
      GenesisNFTList: [
        {
          title: "Whitelist",
          desction:
            "Privileges among other investors to acquire GameFi projects' IDO and IGO Whitelist",
        },
        {
          title: "Discount",
          desction:
            "GameFi and platform's NFT discounted purchasing 50% off transaction fee (2% of the individual transaction) Staking features",
        },
        {
          title: "Token AirDrop",
          desction:
            "Free airdrops of current and future NFT collectables and Tokens ",
        },
        {
          title: "P2E Priority",
          desction:
            "Seamless scholarship arrangement on your idle NFT, plus favourable rate ",
        },
        {
          title: "Early Access",
          desction:
            "Early testing slots for MVP functions and GameFi projects ",
        },
        {
          title: "DAO Governance",
          desction:
            "Crucial voting rights on potential development and cooperation Staking features",
        },
      ],
    };
  },
  methods: {
    toCheck() {
      this.showCheck = !this.showCheck;
    },
    toSubscribe() {
      if (this.GenesisNFTtText == "" || !this.showCheck) {
        this.isToast = true;
         setTimeout(() => {
            this.isToast = false;
          }, 2000);
        this.content = "Please confirm and agree with the privacy Notice";
        return false;
      }
      if (
        !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
          this.GenesisNFTtText
        )
      ) {
        this.isToast = true;
        this.content = "email address error";
        setTimeout(() => {
          this.isToast = false;
        }, 2000);
        return false;
      }
      $axios({
        methods: "get",
        url: `https://www.mvp.games/users/saveMail?email=${this.GenesisNFTtText}&type=5`,
      }).then((res) => {
        if (res === "success") {
          this.$firebase("Subscribe_NFT", {
            Subscribe_NFT: "Subscribe_NFT",
          });
          this.isToast = true;
          this.GenesisNFTtText = "";
          this.content = "subscribe success";
          setTimeout(() => {
            this.isToast = false;
          }, 2000);
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.GenesisNFT {
  .GenesisNFT-user-check {
    display: flex;
    margin-top: 24px;
    justify-content: center;
    align-items: center;
    .text {
      position: relative;
      margin-left: 20px;
      height: 32px;
      font-size: 14px;
      font-family: "Poppins-Regular";
      color: #ffffff;
      line-height: 32px;
      opacity: 0.7;
      img {
        position: absolute;
        left: -35px;
        z-index: -1;
        width: 10px;
        height: 8px;
        top: 12px;
      }
    }
    .box {
      cursor: pointer;
      width: 18px;
      height: 18px;
      border: 1px solid #999999;
    }
  }
  .isCheck {
    .text {
      opacity: 1;
    }
    .box {
      border: 1px solid rgba(130, 41, 229, 1);
    }
  }
  .GenesisNFT-user-fill {
    display: flex;
    margin-top: 24px;
    justify-content: center;
    .btn {
      width: 110px;
      cursor: pointer;
      height: 38px;
      background: #ffffff;
      border-radius: 4px;
      font-size: 18px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #000000;
      line-height: 38px;
      text-align: center;
      margin-left: 20px;
    }
    input:focus {
      border: 1px solid #979797;
      outline: none !important;
    }
    input {
      width: 420px;
      height: 38px;
      border-radius: 4px;
      border: 1px solid #979797;
      font-size: 16px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      line-height: 38px;
      background: rgba(0, 0, 0, 1);
      padding-left: 10px;
    }
  }
  .GenesisNFT-statement {
    text-align: center;
    height: 32px;
    font-size: 32px;
    font-family: "Poppins-Bold";
    font-weight: bold;
    color: #ffffff;
    line-height: 32px;
  }
  .GenesisNFT-introduce {
    margin-top: 22px;
    text-align: center;
    height: 32px;
    font-size: 22px;
    font-family: "Poppins-Regular";
    font-weight: 400;
    color: #ffffff;
    line-height: 32px;
  }
  .GenesisNFT-desction {
    width: 1160px;
    height: 480px;
    font-size: 18px;
    font-family: "Poppins-Regular";
    font-weight: 400;
    color: #999999;
    line-height: 24px;
    margin-top: 120px;
  }
  .GenesisNFT-box {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    .GenesisNFT-box-card:nth-child(even) {
      margin-left: 90px;
    }
    .GenesisNFT-box-card:not(:first-child),
    .GenesisNFT-box-card:not(:nth-child(2)) {
      margin-top: 90px;
    }
    .GenesisNFT-box-card {
      display: flex;
      align-items: center;
      .GenesisNFT-box-title {
        height: 32px;
        font-size: 24px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 32px;
      }
      .GenesisNFT-box-text {
        width: 390px;
        margin-top: 20px;
        height: 48px;
        font-size: 18px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #999999;
        line-height: 24px;
      }
      .GenesisNFT-box-box {
        width: 120px;
        height: 120px;
        background: linear-gradient(
          317deg,
          rgba(184, 83, 244, 0) 0%,
          rgba(130, 41, 229, 0.14) 100%
        );
        box-shadow: inset 0px 1px 3px 0px rgba(255, 255, 255, 0.21);
        border-radius: 6px;
        backdrop-filter: blur(30px);
      }
    }
  }
  .latterbox-title {
    margin-top: 250px;
    position: relative;
    height: 27px;
    max-width: 1200px;
    min-width: 960px;
    font-size: 22px;
    letter-spacing: 1px;
    padding-left: 25px;
    font-family: "Poppins-Medium";
    font-weight: 500;
    color: #ffffff;
    .icon {
      position: absolute;
      left: 0px;
      top: 8px;
      width: 15px;
    }
  }
  .GenesisNFT-card {
    display: flex;
    width: 100%;
    img {
      width: 594px;
      height: 335px;
    }
  }
  .GenesisNFT-content {
    flex: 1;
    // background: red;
    height: 335px;
    margin-left: 50px;
    .tag {
      display: flex;
      width: 430px;
      flex-wrap: wrap;
      .GenesisNFT-btns {
        display: flex;
        margin-top: 60px;
        align-items: center;
        .btn {
          width: 220px;
          height: 40px;
          border-radius: 25px;
          border: 1px solid #ffffff;
          text-align: center;
          font-size: 16px;
          font-family: "Poppins-Medium";
          font-weight: 500;
          color: #ffffff;
          line-height: 40px;
        }
        .btntext {
          margin-left: 20px;
          width: 102px;
          height: 25px;
          font-size: 16px;
          font-family: "Poppins-Medium";
          font-weight: 500;
          color: #999999;
          line-height: 25px;
        }
        img {
          margin-left: 10px;
          width: 16px;
          cursor: pointer;
          height: 16px;
        }
      }
      .tag-div {
        margin-top: 30px;
        width: 100px;
        .tag-title {
          font-size: 14px;
          font-family: "Poppins-Regular";
          font-weight: 400;
          color: #ffffff;
          line-height: 21px;
          opacity: 0.7;
        }
        .tag-text {
          margin-top: 11px;
          font-size: 18px;
          font-family: " Poppins-Medium";
          font-weight: 500;
          color: #ffffff;
          line-height: 27px;
        }
      }
    }
    .title {
      font-size: 48px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 50px;
    }
  }
}
</style>
