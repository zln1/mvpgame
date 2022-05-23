<template>
  <div class="subcard">
    <img :src="list.img" alt="" />
    <div class="contentdiv">
      <div class="title">{{ list.title }}</div>
      <div class="pdiv" style="margin-top: 22px">
        <p class="ptitle">Consensus:</p>
        <p class="ptext">{{ list.Consensus }}</p>
      </div>
      <div class="pdiv">
        <p class="ptitle">Establish:</p>
        <p class="ptext">{{ list.Establish }}</p>
      </div>
      <div class="pdiv">
        <p class="ptitle">Members:</p>
        <p class="ptext">{{ list.Members }}</p>
      </div>
      <div class="pdiv" style="height: 90px">
        <p class="ptitle">Description:</p>
        <p class="ptext" style="margin-left: 30px">{{ list.Description }}</p>
      </div>
      <div class="sub-btns">
        <img
         @click="linkUrl(list.link1)"
          style="margin-left: 550px"
          src="~/assets/sub-discord.webp"
          alt=""
        />
        <img @click="linkUrl(list.link2)" src="~/assets/sub-twitter.webp" alt="" />
        <div @click="linkUrl(list.link3)" class="btn">Join us</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "BaseLayout",
  name: "subCard",
  props: ["list"],
  methods:{
    linkUrl(url){
      window.open(url, '_blank')
    }
  }
};
</script>
<style lang="less" scoped>
.sub-btns {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //  align-items: center;
  // height: 200px;
  .btn {
    cursor: pointer;
    width: 105px;
    height: 35px;
    border-radius: 18px;
    border: 1px solid #ffffff;
    font-size: 14px;
    font-family: "Poppins-Medium";
    text-align: center;
    line-height: 35px;
    font-weight: 500;
    color: #ffffff;
    margin-left: 44px;
  }
  img {
    margin-left: 35px;
     cursor: pointer;
    width: 35px !important;
    height: 35px !important;
  }
}
.subcard {
  width: 100%;
  height: 330px;
  // background: #0d0d0d;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  // padding: 25px;
  
  img {
    width: 200px;
    height: 200px;
    margin: 25px;
  }
  .contentdiv {
    margin-right: 20px;
    margin-top: 20px;
    max-width: 920px;
    min-width: 850px;
  }
  .pdiv {
    width: 100%;
    display: flex;
    height: 18px;
    margin-top: 11px;
  }
  .ptitle {
    width: 88px;
    text-align: left;
    font-size: 14px;
    font-family: "Poppins-Medium";
    font-weight: 500;
    color: #ffffff;
    opacity: 0.6;
  }
  .ptext {
    font-size: 14px;
    min-width: 806px;
    font-family: "Poppins-Regular";
    font-weight: 400;
    color: #ffffff;
    margin-left: 25px;
    line-height: 23px;
  }

  .title {
    margin-top: -10px;
    width: 100%;
    height: 44px;
    text-align: left;
    font-size: 42px;
    font-family: "Poppins-Bold";
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
