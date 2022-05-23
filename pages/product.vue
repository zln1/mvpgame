<template>
  <!--<div id="product-scroll-box" :style="{height: containerHeight}" class="product-scroll-box">-->
    <div ref="productContainer" class="product-container">
      <ToastGary v-show="isToast" :content="'Coming soon'"></ToastGary>
      <div class="product-swiper-container">
        <img src="~/assets/productImg/Bitmap@2x(2).webp" alt="">
        <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
          <swiper-slide>
            <div class="section-content section1">
              <p style="margin-bottom: 40px;">Smart P2E:</p >
              <p>The 1st Full-Automatic P2E Management Platform</p >
              <p>More than 40,000 P2E players working for you</p >
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="section-content section1">
              <p>Product Matrix:</p >
              <p>Smart P2E</p >
              <p>Smart X2E</p >
              <p>Community</p >
              <p>Launchpad</p >
              <p>Cloud Gaming</p >
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <navigationPraduct></navigationPraduct>
      <SmartP2E style="margin-top:261px"></SmartP2E>
    </div>
  <!--</div>-->
</template>

<script>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import 'swiper/css/swiper.css'
  import SmartP2E from '@/components/productCom/SmartP2E'
  import ToastGary from "@/components/toast/ToastGary.vue";
  export default {
    layout: 'BaseLayout',
    name: "Product",
    components: { Swiper, SwiperSlide, SmartP2E, ToastGary },
    head() {
      return {
        title: 'Product',
        meta: [{
          hid: "Product",
          name: "Product",
          content: 'this is Product'
        }],
      }
    },
    data() {
      return {
        activeTabs: 'SmartP2E',
        isToast: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
          },
          loop: true,
          speed:3000,
          autoplay : {
            delay:3000
          },
          loopFillGroupWithBlank: true,
        },
        containerHeight: ''
      }
    },
    created() {
      this.activeTabs = this.$nuxt.$route.params.type || 'SmartP2E'
    },
    mounted() {
      this.containerHeight = this.$refs['productContainer'].clientHeight + 'px'
      // document.getElementById("body-box").addEventListener("scroll", this.handleScroll);
      window.addEventListener('DOMMouseScroll', function (e) {
        console.log(666)
      }, false)
    },
    watch: {
      '$nuxt.$route': function () {
        this.activeTabs = this.$nuxt.$route.params.type
      }
    },
    methods: {
      handleScroll() {
        let scroll_distance = Math.abs(document.getElementById('product-scroll-box').getBoundingClientRect().top)
        console.log(scroll_distance)
      },
      productRouterPush(params) {
        if (params === 'SmartP2E') {
          this.$router.push({
            path: `/product/${params}`
          })
        } else {
          this.isToast = true
          setTimeout(()=>{
            this.isToast = false
          },2000)
        }
      }
    }
  };
</script>
<style lang="less">
  .product-scroll-box {
    position: relative;
    width: 100%;
  }
  .product-container {
    padding-bottom: 100px;
    .product-swiper-container {
      position: relative;
      width: 80%;
      max-width: 1200px;
      min-width: 960px;
      margin: auto;
      height: 520px;
      img {
        width: 698px;
        height: 432px;
        position: absolute;
        bottom: 0;
        right: -180px;
      }
      /*background: url("~/assets/productImg/Bitmap@2x(2).webp") no-repeat bottom right;*/
      /*background-size: 698px 432px;*/
    }
    .section-content {
      width: 100%;
      margin: auto;
      padding-top: 50px;
    }
    .section1 {
      height: 520px;
      font-size: 40px;
      font-family: "Audiowide";
      font-weight: 400;
      color: #FFFFFF;
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 80px;
    }
    .tabs-scroll-box::-webkit-scrollbar {
      display: none;
    }
    .tabs-div {
      width: 100%;
      min-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("~/assets/images/Path 6@2x.webp") no-repeat center center;
      background-size: 1920px auto;
      margin-bottom: 110px;
      .tabs-item {
        height: 66px;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
        font-family: "Poppins-Regular";
        color: #FFF;
        font-size: 18px;
      }
      .tabs1, .tabs3, .tabs4, .tabs5 {
        width: 210px;
        text-align: center;
      }
      .tabs2 {
        width: 380px;
      }
      .tabs-item:hover {
        font-size: 22px;
        font-weight: 500;
        font-family: "Poppins-Bold";
      }
      .tabs-active {
        font-family: "Poppins-Bold";
        font-size: 22px;
        font-weight: 500;
      }
      .tabs-right-padding, .tabs-left-padding {
        flex: 1.9
      }
    }
    .swiper-pagination-bullets {
      width: 100%;
      height: 20px;
      text-align: center;
    }
    .my-bullet {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: rgba(255,255,255, .3);
      margin-right: 10px;
    }
    .my-bullet-active {
      width: 30px;
      height: 10px;
      border-radius: 10px;
      background: rgba(255,255,255, 1);
    }
  }
</style>