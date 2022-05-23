<template>
  <div >
    <div class="evolutiontop" id="evoluTion">
      <div class="title">SMART X2E</div>
      <div class="text">Information Matching</div>
    </div>
    <div class="evolutiontop_details">
      <div class="text">
        More partnerships to enrich the games within the ecosystem
      </div>
      <img class="left40" :src="changeImg" alt="" />
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <img src="../../assets/future/evolution2.webp" alt="" />
      <div class="text left40">Enrich traffic matrix through guilds</div>
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <div class="text">Top information platform in GameFi industry</div>
      <img class="left40" src="../../assets/future/evolution4.webp" alt="" />
      <hr class="hr" style="height: 717px; bottom: -545px" />
    </div>
    <div id="evoluTion2"  class="evolutiontop" style="margin-left: 20px; margin-top: 140px;padding-top: 94px">
      <div class="title">Community</div>
      <div class="text">SocialFi + Sub-DAO</div>
    </div>
    <div class="evolutiontop_details">
      <img src="../../assets/future/evolution3.webp" alt="" />
      <div class="text left40">
        Community to carry content and user relationship
      </div>
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <div class="text">Transform guilds and groups into DAOs</div>
      <img class="left40" src="../../assets/future/evolution6.webp" alt="" />
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <img src="../../assets/future/evolution5.webp" alt="" />
      <div class="text left40">Link users and game with LaunchPad</div>
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <div class="text">Top choice for GameFi users</div>
      <img class="left40" src="../../assets/future/evolution8.webp" alt="" />
      <hr class="hr" style="height: 717px; bottom: -545px" />
    </div>
    <div id="evoluTion3" class="evolutiontop" style="margin-left: 20px; margin-top: 140px;padding-top: 94px">
      <div class="title">Cloud GAMING</div>
      <div class="text">AAA Games + Play To Burn</div>
    </div>
    <div class="evolutiontop_details">
      <img src="../../assets/future/evolution7.webp" alt="" />
      <div class="text left40">
        Realize mining while playing GTA V through cloud gaming technology
      </div>
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <div class="text">Introduce traditional top game content</div>
      <img class="left40" src="../../assets/future/evolution10.webp" alt="" />
      <hr class="hr" />
    </div>
    <div class="evolutiontop_details">
      <img src="../../assets/future/evolution9.webp" alt="" />
      <div class="text left40">
        Use Play To Burn + Play To Earn to reach 1 billion players worldwide
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeImg: require(`~/assets/future/evolution1.webp`),
      timeout: null,
      listImg: [],
      num: 0,
    };
  },
  mounted() {
    // for (var i = 0; i < 10; i++) {
    //   this.listImg.push(require(`~/assets/future/partnership${i}.png`));
    // }
    //   @mouseenter="advice"
    //     @mouseleave="left"
    // console.log(this.listImg);
  },
  methods: {
    advice() {
      this.timeout = setInterval(() => {
        if (this.num === 10) {
          this.num = 0;
        } else {
          this.changeImg = this.listImg[this.num];
          this.num++;
        }
      }, 100);
    },
    left() {
      this.num = 0;
      clearInterval(this.timeout);
    },
  },
};
</script>

<style lang="less" scoped>
.evolutiontop_details {
  .hr {
    position: absolute;
    width: 1px;
    height: 248px;
    background: #ffffff;
    bottom: -193px;
    left: 340px;
    transform: scale(0.5);
    opacity: 0.6;
  }
  img {
    width: 342px;
  }
  position: relative;
  margin-top: 120px;
  margin-left: 26px;
  display: flex;
  .left40 {
    margin-left: 40px;
  }
  .text {
    width: 300px;
    height: 232px;
    font-size: 30px;
    font-family: "Poppins-Medium";
    font-weight: 500;
    color: #ffffff;
    line-height: 42px;
  }
}
.evolutiontop {
  .title {
    font-size: 40px;
    font-family: "Poppins-Bold";
    font-weight: bold;
    color: #ffffff;
    line-height: 60px;
    letter-spacing: 1px;
  }
  .text {
    font-size: 22px;
    font-family: "Poppins-Regular";
    font-weight: 400;
    color: #8229e5;
    line-height: 33px;
  }
}
</style>
