<template>
  <div class="tokenomic-container">
    <div class="banner-div">
      <img src="~/assets/images/macbanner.png" alt="">
    </div>
    <navigationTokenomic></navigationTokenomic>
    <!-- <div class="tabs-div">
      <div class="tabs-item tabs1" :class="activeTabs === 'MPC' && 'tabs-active'" @click="tokenomicRouterPush('MPC')">MPC</div>
    
      <div class="tabs-item tabs2" :class="activeTabs === 'MPP' && 'tabs-active'" @click="tokenomicRouterPush('MPP')">MPP</div>
    </div> -->
    <MPC style="margin-top:100px" v-show="activeTabs === 'MPC'"></MPC>
    <MPP style="margin-top:100px" v-show="activeTabs === 'MPP'"></MPP>
  </div>
</template>

<script>
  import MPC from '../components/tokenomicCom/MPC'
  import MPP from '../components/tokenomicCom/MPP'
  export default {
    layout:'BaseLayout',
    name: "Tokenomic",
    components: { MPC, MPP },
    data() {
      return {
        activeTabs: 'MPC'
      }
    },
    created() {
      this.activeTabs = this.$nuxt.$route.params.type || 'MPC'
    },
    watch: {
      '$nuxt.$route': function () {
        this.activeTabs = this.$nuxt.$route.params.type
      }
    },
    methods: {
      tokenomicRouterPush(type) {
        this.activeTabs = type
        this.$router.push({
          path: `/Tokenomic/${type}`
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .tokenomic-container {
    .banner-div {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        display: block;
      }
    }
    .tabs-div {
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("~/assets/images/Path 4@2x.png") no-repeat;
      background-size: 100% 100%;
      margin-bottom: 110px;
      .tabs-item {
        width: calc(50% - 50px);
        height: 66px;
        text-align: center;
        line-height: 66px;
        cursor: pointer;
      }
      .tabs1 {
        font-size: 22px;
        font-family: "Poppins-Medium";
        font-weight: 400;
        color: #FFFFFF;
        /*background-color: yellow;*/
      }
      .tabs2 {
        font-size: 22px;
        font-family: "Poppins-Regular";
        font-weight: 400;
        color: #FFFFFF;
      }
      .tabs1:hover , .tabs2:hover {
        font-size: 30px;
        font-weight: 500;
      }
      .tabs-active {
        font-size: 30px;
        font-weight: 500;
      }
      .tabs-segmentation {
        width: 100px;
        height: 66px;
        background-color: green;
        overflow: hidden;
        position: relative;
        &::before {
          content: '';
          width: 200px;
          height: 200px;
          border-radius: 200px;
          position: absolute;
          top: 0;
          left: -100px;
          border-top: 1px solid #000;
        }
      }
    }
  }
</style>