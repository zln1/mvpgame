<template>
  <transition name="fade">
    <div v-if="show" class="JoyArk">
      <div class="text">
        <img src="../../assets/toast.png" alt="" />
        <div>{{ content }}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: "",
      show: true,
    };
  },
  mounted() {},
  methods: {
    closeToast() {
      this.text = "";
      this.show = false;
    },
    gamepadConnected() {
      clearTimeout(this.timer);
      this.active = this.connectedText;
      this.show = true;
      this.timer = setTimeout(() => {
        this.show = false;
      }, 3000);
    },
    gamepadDisconnected() {
      clearTimeout(this.timer);
      this.active = this.disConnectedText;
      this.show = true;
      this.timer = setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.JoyArk {
  position: fixed;
  z-index: 3000000;
  left: 50%;
  margin-left: -221px;
  bottom: 360px;
  font-size: 18px;
  padding: 20px;
  font-weight: normal;
  color: #ffffff;
  width: 422px;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  // opacity: 0.1;
  .text {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 36px;
    // text-align: center;
    justify-content: center;
     font-family: "Poppins-Bold";
    font-weight: 400;
    color: #ffffff;
    flex-wrap: wrap;
    height: 100%;
    div {
      margin-left: 20px;
    }
  }
}
</style>
