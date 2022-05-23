<template>
  <div class="container">
    <div class="basic-color" :style="{backgroundColor: basicColor}"></div>
    <div class="process" :style="{width: processWidth + 'px'}">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
  export default {
    name: "processCom",
    props: {
      basicColor: {
        type: String,
        default: '#000'
      },
      processWidth: {
        type: Number,
        default: 0
      },
      desc: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  .basic-color {
    width: 5px;
    height: 58px;
    margin-right: 20px;
  }
  .process {
    height: 58px;
    border: 3px solid;
    border-image: linear-gradient(270deg, rgba(63, 63, 63, 1), rgba(153, 153, 153, 0)) 5 5;
    font-size: 20px;
    font-family: "Poppins-Medium, Poppins";
    font-weight: 500;
    color: #FFFFFF;
    line-height: 58px;
  }
  .desc {
    font-size: 20px;
    font-family: "Poppins-Medium";
    font-weight: 500;
    color: #FFFFFF;
    line-height: 30px;
    margin-left: 30px;
  }
}
</style>