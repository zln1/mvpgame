<template>
  <div class="MPC-container">
    <div class="section-content">
      <img
        class="section-content-img"
        src="~/assets/images/MPC@2x.png"
        alt=""
      />
      <div class="detail-content">
        <div class="detail-item detail-item-m-r">
          <p class="item-subDesc">Token Name</p>
          <p class="item-desc">Multiverse Play Coin</p>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-item detail-item-m-r">
          <p class="item-subDesc">Network</p>
          <p class="item-desc">Ethereum</p>
        </div>
        <div class="detail-item">
          <p class="item-subDesc">Token Symbol</p>
          <p class="item-desc">MPC</p>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-item detail-item-m-r">
          <p class="item-subDesc">Token Type</p>
          <p class="item-desc">ERC20</p>
        </div>
        <div class="detail-item">
          <p class="item-subDesc">Total Supply</p>
          <p class="item-desc">100,000,000 (100M)</p>
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
    <div class="section-content" style="margin-top: 160px;">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt="" />
        <p>USER CASE</p>
      </div>
      <div class="detail-content2">
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/IGOVERNANCE@2x.png" alt="" />
          </div>
          <p class="item-desc">GOVERNANCE</p>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/ACQUIRE BENEFIT@2x.png" alt="" />
          </div>
          <div class="item-desc">
            <p>ACQUIRE</p>
            <p>BENEFIT</p>
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/IGOVERNANCE@2x.png" alt="" />
          </div>
          <div class="item-desc">
            <p>INCOME</p>
            <p>SHARING</p>
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/CONSUMPTION@2x.png" alt="" />
          </div>
          <p class="item-desc">CONSUMPTION</p>
        </div>
      </div>
    </div>
    <div class="section-content" style="margin-top: 180px;">
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
            <img src="~/assets/images/purchase@2x.png" alt="" />
          </div>
        </div>
        <div class="detail-item">
          <div class="img-box">
            <img src="~/assets/images/incentive@2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="section-content" style="margin-top: 180px;">
      <div class="section-title">
        <img class="icon" src="~/assets/titleicon.png" alt="" />
        <p>RELEASE & ALLOCATION</p>
      </div>
      <div class="detail-content4">
        <processCom
          :basicColor="'#803BFF'"
          :title="'TREASURT'"
          :process-width="960"
          :desc="'33%'"
        ></processCom>
        <processCom
          :basicColor="'#CD2590'"
          :title="'ECOSYSSTEM'"
          :process-width="690"
          :desc="'24%'"
        ></processCom>
        <processCom
          :basicColor="'#4D3BFF'"
          :title="'INVESTOR'"
          :process-width="570"
          :desc="'20%'"
        ></processCom>
        <processCom
          :basicColor="'#129082'"
          :title="'TEAM'"
          :process-width="480"
          :desc="'17%'"
        ></processCom>
        <processCom
          :basicColor="'#A66D1B'"
          :title="'ADVISOR'"
          :process-width="150"
          :desc="'6%'"
        ></processCom>
      </div>
      <div class="detail-content5">
        <div class="table-header">
          <div class="column1"></div>
          <div class="column2">TGE</div>
          <div class="column3">UNLOCK</div>
        </div>
        <div class="table-row">
          <div class="column1">
            <div class="icon-div" style="background-color: #803bff"></div>
            <p>Treasury</p>
          </div>
          <div class="table-row-border-bottom">
            <div class="column2">-</div>
            <div class="column3">Linear release for 60 months</div>
          </div>
        </div>
        <div class="table-row">
          <div class="column1">
            <div class="icon-div" style="background-color: #cd2590"></div>
            <p>Ecosystem</p>
          </div>
          <div class="table-row-border-bottom">
            <div class="column2">10%</div>
            <div class="column3">Linear release for 24 monthsafter TGE</div>
          </div>
        </div>
        <div class="table-row">
          <div class="column1">
            <div class="icon-div" style="background-color: #4d3bff"></div>
            <p>Investor</p>
          </div>
          <div class="table-row-border-bottom">
            <div class="column2">5-10%</div>
            <div class="column3">Unlock 10-15% per quarter</div>
          </div>
        </div>
        <div class="table-row">
          <div class="column1">
            <div class="icon-div" style="background-color: #17b3a2"></div>
            <p>Team</p>
          </div>
          <div class="table-row-border-bottom">
            <div class="column2">-</div>
            <div class="column3">
              Unlock after 12 months Linear release for 36 months
            </div>
          </div>
        </div>
        <div class="table-row">
          <div class="column1">
            <div class="icon-div" style="background-color: #a66d1b"></div>
            <p>Advisor</p>
          </div>
          <div class="column2">-</div>
          <div class="column3">
            Unlock after 6 months Linear release for 24 months
          </div>
        </div>
      </div>
    </div>
    <ToastGary v-show="isToast" :content="toastMessage"></ToastGary>
  </div>
</template>

<script>
import ToastGary from "@/components/toast/ToastGary.vue";
import copy from "copy-to-clipboard";
import processCom from "./processCom";
export default {
  name: "MPC",
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
.MPC-container {
  width: 80%;
  max-width: 1200px;
  min-width: 960px;
  margin: auto;
  font-family: "Poppins-Medium";
  .section-content {
    max-width: 1200px;
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
    margin-bottom: 100px;
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
    width: 1160px;
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
    width: 1160px;
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
    box-sizing: border-box;
    .table-header,
    .table-row {
      width: 100%;
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
        box-sizing: border-box;
      }
    }
    .column1 {
      width: 180px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
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
      flex: 1;
      display: flex;
      height: 89px;
      width: 900px;
      align-items: center;
      border-bottom: 1px solid #666666;
      box-sizing: border-box;
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
      box-sizing: border-box;
    }
    .column2 {
      flex: 1;
    }
    .column3 {
      flex: 2.5;
    }
  }
}
</style>
