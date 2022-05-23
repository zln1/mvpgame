<template>
  <div id="three-container"></div>
</template>

<script>
  import * as THREE from "three";

  import {OrbitControls} from '../assets/js/OrbitControls.js';
  import {FBXLoader} from '../assets/js/FBXLoader.js';
  // import {DragControls} from '../assets/js/DragControls.js'
  const clock = new THREE.Clock();
  export default {
    name: "testThree",
    data() {
      return {
        mixer: null,
        camera: null,
        scene: null,
        renderer: null,
        stats: null
      }
    },
    mounted() {
      this.init();
      this.animate();
    },
    methods: {
      init() {
        const container = document.getElementById('three-container');

        //场景
        this.scene = new THREE.Scene();
        this.scene.add(new THREE.AxesHelper(1000))
        this.scene.background = new THREE.Color(0x000000);

        //相机
        this.camera = new THREE.PerspectiveCamera(120, container.innerWidth / container.innerHeight, 1, 1000);
        this.camera.position.set(100, 100, 300);
        this.camera.lookAt(this.scene.position);

        // this.scene.position.set(0, 0, 0);
        // this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);


        let ambient = new THREE.AmbientLight(0xaaaaaa);
        this.scene.add(ambient);
        // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        // hemiLight.position.set(200, 200, 200);
        // this.scene.add(hemiLight);

        // const dirLight = new THREE.DirectionalLight(0xffffff);
        // dirLight.position.set(0, 200, 100);
        // dirLight.castShadow = true;
        // dirLight.shadow.camera.top = 180;
        // dirLight.shadow.camera.bottom = -100;
        // dirLight.shadow.camera.left = -120;
        // dirLight.shadow.camera.right = 120;
        // this.scene.add(dirLight);

        // this.scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

        // ground
        // const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({
        //   color: 0x999999,
        //   depthWrite: false
        // }));
        // mesh.rotation.x = -Math.PI / 2;
        // mesh.receiveShadow = true;
        // this.scene.add(mesh);

        let that = this
        // model
        const loader = new FBXLoader();
        loader.load('/not_found.fbx', function (object) {
          that.scene.add(object);
        });

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(container.innerWidth, container.innerHeight);

        // const controls = new OrbitControls(this.camera, this.renderer.domElement);
        // controls.enablePan = true;
        // controls.target = new THREE.Vector3(0, 0, 0);
        // controls.enableZoom = false;
        // controls.autoRotate = false;
        // controls.target.set(0, 100, 0);
        // controls.update();


        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize());

        this.renderer.render(this.scene, this.camera);

        // stats
        // this.stats = new Stats();
        // container.appendChild(this.stats.dom);

      },
      onWindowResize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

      },
      animate() {
        requestAnimationFrame(this.animate);
        const delta = clock.getDelta();
        if (this.mixer) this.mixer.update(delta);
        // this.renderer.render(this.scene, this.camera);
        // this.stats.update();
      }
    }
  }
</script>

<style lang="less" scoped>
  #three-container {
    width: 100%;
    height: 100%;
  }
</style>