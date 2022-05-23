<template>
  <div id="scroll-box" style="background: transparent; position: relative">
    <!-- <canvas id="cw" style="position: absolute; width: 100%; height: 100%"></canvas> -->
    <Header :isShowchild="isShowchild" />
    <Nuxt></Nuxt>
    <Footer />
    <!-- <MouseMove /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { clearTimeout } from "timers";
export default {
  components: { Header, Footer },
  mounted() {
    document
      .getElementById("body-box")
      .addEventListener("mousewheel", this.handlemousewheel, false);
    // document
    //   .getElementById("body-box")
    //   .addEventListener("scroll", this.handerScrll);
  },
  data() {
    return {
      isShowchild: true,
      bodyScrllTop: null,
    };
  },
  watch: {
    $route(val) {
      document
        .getElementById("body-box")
        .scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
  },
  methods: {
    handlemousewheel(e) { 
      clearTimeout(timer);
      var direction = e.deltaY > 0 ? "down" : "up";
      var timer = null;
      // console.log(direction === 'up' , document.getElementById("body-box").scrollTop >700)
      if (direction === "down" && e.deltaY > 2) {
        this.isShowchild = false;
        timer = setTimeout(() => {
          this.isShowchild = true;
        }, 1000);
      }
    },
    handerScrll() {
      this.bodyScrllTop = document.getElementById("body-box").scrollTop;
    },
  },
};
</script>

<style lang="less">
#cw {
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1;
}
p {
  margin: 0;
  padding: 0;
}
html,
body,
#__nuxt,
#__layout,
#__layout {
  margin: 0;
  padding: 0;
}
</style>
