<template>
  <div class="Partners" style="margin-top:120px">
     <img src="../../assets/Group.webp" alt="" />
    <!-- <div v-for="(item, index) of Partnerslist" :key="index">
      <img :src="item.img" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  layout: "BaseLayout",
  name: "Partners",
  data() {
    return {
      Partnerslist: [],
    };
  },
  created() {
    // for (let i = 0; i < 83; i++) {
    //   this.Partnerslist.push({ img: require(`~/assets/Partnerimgs/${i + 1}.webp`),});
    // }
  },
};
</script>
<style lang="less" scoped>
.Partners {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-bottom: 150px;
  // div {
  //   margin-left: 18px;
  //   margin-top: 18px;
  //   width: 125px;
  //   height: 70px;
  //   img {
  //     width: 125px;
  //     height: 70px;
  //   }
  // }
}
</style>
