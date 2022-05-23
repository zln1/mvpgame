<template>
  <div class="MPP-container">
    <p class="tips-div" style="margin: 100px auto;">
      <img style="width: 14px;height: 14px;vertical-align: middle;margin-right: 10px;" src="@/assets/images/Fill 1@2x.webp" alt="">In Phase 2.0, Multiverse Play Points(MPP) will be launched as the utility token, in case to support ecology growth.
    </p>
    <div class="section-content">
      <img
        class="section-content-img"
        src="~/assets/images/MPP@2x.png"
        alt=""
      />
      <!--<div class="section-title">-->
        <!--<img class="icon" src="~/assets/titleicon.png" alt="" />-->
        <!--<p>BASIC INFO</p>-->
      <!--</div>-->
      <div class="detail-content">
        <div class="detail-item detail-item-m-r">
          <p class="item-subDesc">Token Name</p>
          <p class="item-desc">Multiverse Play Point</p>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-item detail-item-m-r" style="margin-right: 115px;">
          <p class="item-subDesc">Network</p>
          <p class="item-desc">Multi-chain</p>
        </div>
        <div class="detail-item">
          <p class="item-subDesc">Token Symbol</p>
          <p class="item-desc">MPP</p>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-item detail-item-m-r" style="margin-right: 116px;">
          <p class="item-subDesc">Token Type</p>
          <p class="item-desc">Multi-chain</p>
        </div>
        <div class="detail-item">
          <p class="item-subDesc">Total Supply</p>
          <p class="item-desc">Unlimited</p>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-item detail-item-m-r">
          <div style="display: flex; align-items: center">
            <p class="item-subDesc">Contract Address</p>
            <!--<span-->
              <!--class="copy-btn"-->
              <!--@click="-->
                <!--copyClick('BEP20  0x9fd87aefe02441b123c3c32466cd9db4c578618f')-->
              <!--"-->
              <!--&gt;COPY</span>-->
          </div>
          <p class="item-desc">
            Upcoming
          </p>
        </div>
      </div>
    </div>
    <div class="section-content" style="margin-top: 90px">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt="" />
        <p>USER CASE</p>
      </div>
      <div class="detail-content2">
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/SWAP@2x.png" alt="" />
          </div>
          <p class="item-desc">SWAP</p>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/STAKING@2x.png" alt="" />
          </div>
          <div class="item-desc">
            <p>STAKING</p>
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/CONSUMPTION@2x(1).png" alt="" />
          </div>
          <div class="item-desc">
            <p>CONSUMPTION</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-content" style="margin-top: 180px">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt="" />
        <p>HOW TO ACQUIRE</p>
      </div>
      <div class="detail-content3">
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/minning@2x.png" alt="" />
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/reward@2x.png" alt="" />
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/INCOME SHARING@2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>
     <ToastGary v-show="isToast" :content="toastMessage"></ToastGary>
  </div>
</template>

<script>
import copy from "copy-to-clipboard";
import ToastGary from "@/components/toast/ToastGary.vue";
import processCom from "./processCom";
export default {
  name: "MPP",
  components: { processCom, ToastGary },
  data() {
    return {
      isToast: false,
      toastMessage: "",
    };
  },
  methods: {
    copyClick(val) {
      copy(val);
      this.toastMessage = "Copied";
      this.isToast = true;
      setTimeout(() => {
        this.isToast = false;
      }, 2000);
      this.$firebase("Copy_MPC", {
        Copy_MPC: "Copy_MPC",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.MPP-container {
  width: 100%;
  font-family: "Poppins-Medium";
  .tips-div {
    width: 100%;
    max-width: 1200px;
    min-width: 960px;
    height: 20px;
    font-size: 14px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 21px;
    margin-bottom: 14px;
  }
  .section-content {
    max-width: 1180px;
    margin: auto;
    position: relative;
    .section-content-img {
      position: absolute;
      width: 250px;
      height: 253px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 105px;
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
  .detail-content {
    .detail-item-m-r {
      margin-right: 164px;
    }
    .detail-item {
      display: inline-block;
      min-width: 177px;
      margin-bottom: 60px;
      font-family: "Poppins-Medium";
      .item-subDesc {
        font-size: 22px;
        font-weight: 500;
        color: #ffffff;
        opacity: 0.7;
        line-height: 33px;
        margin-bottom: 6px;
      }
      .item-desc {
        font-size: 34px;
        font-weight: 500;
        color: #ffffff;
        line-height: 51px;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
      }
      .copy-btn {
        display: inline-block;
        width: 90px;
        height: 32px;
        border-radius: 32px;
        text-align: center;
        line-height: 32px;
        color: #fff;
        border: 1px solid #803bff;
        box-sizing: border-box;
        font-size: 12px;
        margin-left: 30px;
        cursor: pointer;
      }
    }
  }
  .detail-content2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 220px;
    .detail-item {
      width: 230px;
      text-align: center;
    }
    .img-box {
      width: 100%;
      background: url("~/assets/images/light2@2x.png") no-repeat;
      background-size: 100% auto;
      background-position-y: bottom;
      padding-top: 50px;
      margin-bottom: 41px;
      img {
        width: 140px;
        position: relative;
        top: -50px;
      }
    }
    .item-desc {
      font-size: 24px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 35px;
      letter-spacing: 1px;
    }
  }
  .detail-content3 {
    display: flex;
    justify-content: space-between;
    .img-box {
      width: 282px;
      img {
        width: 100%;
      }
    }
  }
  .detail-content4 {
    margin-bottom: 90px;
    & > div {
      margin-bottom: 40px;
    }
  }
  .detail-content5 {
    margin-bottom: 168px;
    .table-header,
    .table-row {
      width: 1080px;
      display: flex;
      height: 89px;
      align-items: center;
    }
    .table-header {
      .column2,
      .column3 {
        font-size: 20px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 30px;
        padding-left: 30px;
      }
    }
    .column1 {
      width: 180px;
      display: flex;
      align-items: center;
      .icon-div {
        width: 8px;
        height: 8px;
        border-radius: 8px;
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
    .table-row-border-bottom {
      display: flex;
      height: 89px;
      width: 900px;
      align-items: center;
      border-bottom: 1px solid #666666;
    }
    .column2,
    .column3 {
      padding-left: 30px;
      font-size: 18px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 27px;
      opacity: 0.6;
    }
    .column2 {
      width: 300px;
    }
    .column3 {
      width: 600px;
    }
  }
}
</style>
