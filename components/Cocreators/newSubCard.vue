<template>
  <div class="new-subcard">
    <div class="card-top">
      <div class="img">
        <img :src="list.img" alt="" />
      </div>
      <div class="title">ALL IN ONE DAO</div>
      <div class="text">Find everything you need</div>
      <div class="btns">
        <div class="left">
          <img
            @click="linkUrl(list.link2)"
            src="~/assets/sub-twitter.webp"
            alt=""
          />
          <img
            style="margin-left: 51px"
            @click="linkUrl(list.link1)"
            src="~/assets/sub-discord.webp"
            alt=""
          />
        </div>
        <div class="btn">JOIN US</div>
      </div>
    </div>
    <div class="card-bom">
      <div class="card-bom-abs">
        <div class="setion">
          <div class="card-bom-abs-title">Establish</div>
          <div class="card-bom-abs-text">{{ list.Establish }}</div>
        </div>
        <div class="setion">
          <div class="card-bom-abs-title">Members</div>
          <div class="card-bom-abs-text">{{ list.Members }}</div>
        </div>
      </div>
      <div class="card-bom-text">{{ list.Description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "BaseLayout",
  name: "newSubCard",
  props: ["list"],
  methods: {
    // (list.link1 ,2 3
    linkUrl(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="less" scoped>
.new-subcard {
  margin-top: 120px;
  width: 530px;
  height: 570px;
  border-radius: 53px 0px 53px 0px;
  border: 1px solid #ffffff;
  .card-bom {
    margin-left: 32px;
    // margin-right: 35px;
    margin-top: 35px;
    .card-bom-text {
      margin-top: 20px;
      height: 170px;
      letter-spacing: 1px;
      font-size: 16px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      line-height: 21px;
      padding-right: 24px;
    }
    .card-bom-abs {
      display: flex;
      justify-content: center;
      .setion {
        width: 50%;
        .card-bom-abs-title {
          height: 23px;
          font-size: 16px;
          font-family: "Poppins-Bold";
          font-weight: bold;
          color: #ffffff;
          line-height: 25px;
        }
        .card-bom-abs-text {
          height: 43px;
          font-size: 30px;
          font-family: "Poppins-Medium";
          font-weight: 500;
          color: #ffffff;
          line-height: 46px;
          text-shadow: 0px 0px 12px #8229e5;
        }
      }
    }
  }
  .card-top {
    width: 530px;
    height: 234px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 33px 0px rgba(130, 41, 229, 1);
    border-radius: 53px 0px 53px 0px;
    border: 1px solid #ffffff;
    position: relative;
    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 38px;
      margin-top: 41px;
      cursor: pointer;
      .btn {
        margin-right: 44px;
        width: 109px;
        height: 38px;
        background: #8229e5;
        border-radius: 19px;
        font-size: 16px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 38px;
        text-align: center;
      }
      .left {
        img {
          width: 34px;
          height: 34px;
        }
      }
    }
    .text {
      height: 33px;
      font-size: 24px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      margin-left: 36px;
      margin-top: 4px;
      color: #ffffff;
      line-height: 35px;
    }
    .title {
      height: 51px;
      font-size: 36px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 55px;
      margin-top: 40px;
      margin-left: 36px;
    }
    .img {
      width: 100px;
      height: 100px;
      background: #8229e5;
      box-shadow: 0px 0px 9px 0px rgba(130, 41, 229, 1);
      border: 1px solid #8229e5;
      border-radius: 50%;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: -28px;
      margin-right: -28px;
      img {
        width: 100%;
        border-radius: 50%;
        // object-fit: cover;
        height: 100%;
      }
    }
  }
}
</style>
