<template>
  <div style="background: black;">
    <div class="aboutbody">
        <h2 style="color: white">CloudGaming-index</h2>
      </div>
  </div>
</template>

<script>
export default {
  layout:'BaseLayout',
  name: "CloudGaming",
    head(){
    return {
      title: 'CloudGaming',
      meta: [{
        hid: "CloudGaming",
        name: "CloudGaming",
        content: 'this is CloudGaming'
      }]
    }
  },
};
</script>
<style lang="less" scoped>
.aboutbody{
  text-align: center;
}
</style>
