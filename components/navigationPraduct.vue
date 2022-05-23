<template>
  <div class="nav-table">
    <ul>
      <li
        :class="{
          activeNavChild:
            $nuxt.$route.name === item.name ||
            ($nuxt.$route.params.type === item.taskname && item.taskname),
        }"
        v-for="(item, index) of navigalist"
        :key="index"
      >
        <img src="../assets/headerleft.png" alt="" />
        <a @click="tolink(item)">{{ item.title }}</a>
        <div class="tag" v-if="index === 0">V1</div>
        <div class="tag2" v-if="index === 1">V2</div>
        <img src="../assets/headerright.png" alt="" />
      </li>
    </ul>
    <ToastGary v-show="isToast" :content="content"></ToastGary>
  </div>
</template>

<script>
import ToastGary from "@/components/toast/ToastGary.vue";
export default {
  layout: "BaseLayout",
  components: {
    ToastGary,
  },
  data() {
    return {
      isToast: false,
      content: "Coming soon",
      navigalist: [
        {
          title: "Smart P2E",
          name: "/product/SmartP2E",
          taskname: "SmartP2E",
        },
        {
          title: "Smart X2E",
          name: "/Smart X2E",
          taskname: "Smart X2E",
        },
        {
          title: "Community",
          name: "/Community",
          taskname: "Community",
        },
        {
          title: "Launchpad",
          name: "/LaunchPad",
          taskname: "LaunchPad",
        },
        {
          title: "Cloud Gaming",
          name: "/CloudGaming",
          taskname: "CloudGaming",
        },
      ],
    };
  },
  methods: {
    clickFirebase(str) {
      this.$firebase(str, {
        str: str,
      });
    },
    tolink(item) {
      this.clickFirebase("Tab_" + item.taskname);
      if (
        item.name === "/NFTs/MoreNFTs" ||
        item.name === "/Smart X2E" ||
        item.name === "/CloudGaming" ||
        item.name === "/LaunchPad" ||
        item.name === "/Community"
      ) {
        console.log(21312);
        this.isToast = true;
        setTimeout(() => {
          this.isToast = false;
        }, 2000);
      } else {
        this.$router.push(item.name);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.nav-table {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(32, 32, 32, 0.35) 100%
  );
  .tag2 {
    position: absolute;
    width: 25px;
    height: 14px;
    background: #ffffff;
    border-radius: 3px;
    text-align: center;
    line-height: 14px;
    right: 35px;
    top: 4.5px;
    font-size: 12px;
    font-family: "Poppins-Medium";

    color: #000000;
  }
  .tag {
    position: absolute;
    width: 25px;
    height: 14px;
    background: linear-gradient(180deg, #530093 0%, #29005a 100%);
    border-radius: 3px;
    text-align: center;
    line-height: 14px;
    right: 97px;
    font-size: 12px;
    font-family: "Poppins-Medium";
    color: #ffffff;
  }
  ul {
    width: 1200px;
    list-style: none;
    display: flex;
    align-items: center;
    // li:not(:first-child) {
    //   margin-left: 84px;
    // }
    li {
      width: 340px;
      text-align: center;
    }
    .activeNavChild {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Poppins-Medium";
      font-weight: 500;
      position: relative;
      a {
        position: absolute;
      }
      img {
        display: block;
        width: 225px;
        height: 50px;
        margin-top: 9px;
      }
    }
    img {
      display: none;
    }
    li:hover {
      font-family: "Poppins-Medium";
      font-weight: 500;
    }
    li {
      position: relative;
      list-style: none;
      font-size: 16px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      a {
        position: relative;
        color: #ffffff;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
