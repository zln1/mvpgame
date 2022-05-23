<template>
  <div style="background: transparent; position: relative">
    <Header :isShowchild="isShowchild"/>
    <div class="content-div" style="padding-top: 140px;margin-bottom: 64px">
      <p>Ouch！</p>
      <p>We couldn’t find the</p>
      <p>page. We’ll have to</p>
      <p>search better…</p>
    </div>
    <div id="three-container" class="content-div">
      <img src="@/assets/images/404@2x.png" alt="">
    </div>
  </div>
</template>

<script>
  import * as THREE from "three";
  import {FBXLoader} from '../assets/js/FBXLoader.js';
  import {OrbitControls} from '../assets/js/OrbitControls.js';

  import Header from "@/components/Header.vue";

  export default {
    name: "notFound",
    components: {Header},
    data() {
      return {
        isShowchild: true,
        camera: null,
        scene: null,
        renderer: null,
        stats: null
      }
    },
    mounted() {
      // this.init();
      // this.animate()
    },
    methods: {
      init() {
        const container = document.getElementById('three-container');
        console.log(666, container.clientWidth)
        //场景
        this.scene = new THREE.Scene();
        // this.scene.add(new THREE.AxesHelper(1000))
        this.scene.background = new THREE.Color(0x000000);


        let width = window.innerWidth; //窗口宽度
        let height = window.innerHeight; //窗口高度
        let k = width / height; //窗口宽高比
        let s = 300; //三维场景显示范围控制系数，系数越大，显示的范围越大
        //相机
        this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
        this.camera.position.set(0, 10, 100);
        this.camera.lookAt(this.scene.position);

        let that = this
        // model
        const loader = new FBXLoader();
        loader.load('/not_found.fbx', function (object) {
          that.scene.add(object);
        });

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize());
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      animate() {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
      }
    }
  }
</script>

<style lang="less" scoped>
  .content-div {
    width: 100%;
    min-width: 960px;
    max-width: 1200px;
    margin: auto;
    font-size: 56px;
    font-family: "Poppins-Regular";
    font-weight: normal;
    color: #FFFFFF;
    line-height: 60px;
    letter-spacing: 1px;
    img {
      width: 100%;
    }
  }
  /*#three-container {*/
    /*height: 100vh;*/
  /*}*/
</style>