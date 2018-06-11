<template>
    <div class="wrapper"  id="indexLizi" >
      <form class="login" :class="{'login_loading':login_loading}">
        <p class="title">电子邮件运行数据分析平台</p>
        <input type="text" v-model="form.UserName" required  placeholder="请输入用户名" autofocus/>
        <i class="ivu-icon ivu-icon-person"></i>
        <input type="password" v-model="form.Password" required placeholder="请输入密码" />
        <i class="ivu-icon ivu-icon-android-lock"></i>
        <span style="color: red">{{error}}</span>
        <button @click="onClick">
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
      </form>
    </div>
</template>
<script>

  import THREE from '@/libs/three/three'
  import { doLogin } from '@/module/service'

  export default {
    store:['login','token','admin','username'],
    data(){
      return {
        login_loading:false,
        form:{
          UserName:'',
          Password:''
        },
        error:''
      }
    },
    methods:{
      onClick(){

        if(this.form.UserName == '') {
         return this.$Message.warning("请输入用户名！");
        }
        if(this.form.Password == '') {
          return this.$Message.warning("请输入密码！");
        }
        this.login_loading = true;
        doLogin(this.form).then(data=>{
          this.login_loading = false;
          if(data.Code == 0) {
            this.token = data.Response.Token;
            if(this.form.UserName == 'admin') {
              this.admin = true;
            }
            this.login = true;
            this.username = this.form.UserName;
            this.$ls.set('token',this.token,data.Response.Expires - new Date().valueOf()/1000)
            this.$ls.set('username',this.form.UserName);
            this.$ls.set('userId',data.Response.Id);
          }else{
            this.error = data.Message;
          }
        })
      },
      liziInit () {
        var SCREEN_WIDTH = window.innerWidth;
        var SCREEN_HEIGHT = window.innerHeight;

        var SEPARATION = 90;
        var AMOUNTX = 50;
        var AMOUNTY = 50;

        var container;

        var particles, particle;
        var count;

        var camera;
        var scene;
        var renderer;

        var mouseX = 0;
        var mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        this.interval = setInterval(loop, 1000 / 60);

        function init() {

          container = document.createElement( 'div' );
          container.style.position = 'relative';
          container.style.top = '200px';
          document.getElementById('indexLizi').appendChild( container );

          camera = new THREE.Camera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
          camera.position.z = 1000;

          scene = new THREE.Scene();

          renderer = new THREE.CanvasRenderer();
          renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

          particles = new Array();

          var i = 0;
          var material = new THREE.ParticleCircleMaterial( 0x097bdb, 1 );

          for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

              particle = particles[ i ++ ] = new THREE.Particle( material );
              particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
              particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
              scene.add( particle );
            }
          }

          count = 0;

          container.appendChild( renderer.domElement );

          document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//                    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        }

        function onDocumentMouseMove( event ) {

          mouseX = event.clientX - windowHalfX;
          mouseY = event.clientY - windowHalfY;

        }

        function onDocumentTouchMove( event ) {

          if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;

          }
        }

        function loop() {
          camera.position.x += ( mouseX - camera.position.x ) * .05;
//                    camera.position.y += ( - mouseY - camera.position.y ) * .05;
          camera.position.y = 364;

          var i = 0;

          for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

              particle = particles[ i++ ];
              particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
              particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

            }
          }

          renderer.render( scene, camera );

          count += 0.1;
        }
      },
    },
    mounted(){
      this.liziInit();
    },
    beforeDestroy () {
      if (this.interval) clearInterval(this.interval);
    }
  }
</script>
<style scoped>


  @keyframes spinner {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(359deg);
    }
  }
  * {
    box-sizing: border-box;
  }



  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow:hidden;
    padding: 20px;
    background-image: url("/static/images/bg.png");
    background-size: cover;
    background-repeat: no-repeat;

  }

  .login {
    border-radius: 2px 2px 5px 5px;
    padding: 10px 20px 20px 20px;
    width: 90%;
    z-index: 1000;
    max-width: 320px;
    background: #ffffff;
    position: absolute;
    padding-bottom: 80px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  }
  .login.login_loading button {
    max-height: 100%;
    padding-top: 50px;
  }
  .login.login_loading button .spinner {
    opacity: 1;
    top: 40%;
  }
  .login.ok button {
    background-color: #8bc34a;
  }
  .login.ok button .spinner {
    border-radius: 0;
    border-top-color: transparent;
    border-right-color: transparent;
    height: 20px;
    animation: none;
    transform: rotateZ(-45deg);
  }
  .login input {
    display: block;
    padding: 15px 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    transition: border-width 0.2s ease;
    border-radius: 2px;
    color: #ccc;
  }
  .login input + i.ivu-icon {
    color: #fff;
    font-size: 2em;
    position: absolute;
    margin-top: -47px;
    opacity: 0;
    left: 0;
    transition: all 0.1s ease-in;
  }
  .login input:focus {
    outline: none;
    color: #444;
    border-color: #2196F3;
    border-left-width: 35px;
  }
  .login input:focus + i.ivu-icon {
    opacity: 1;
    left: 30px;
    transition: all 0.25s ease-out;
  }
  .login a {
    font-size: 0.8em;
    color: #2196F3;
    text-decoration: none;
  }
  .login .title {
    color: #444;
    text-align: center;
    font-size: 1.4em;
    font-weight: bold;
    margin: 10px 0 30px 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
  .login button {
    width: 100%;
    height: 100%;
    padding: 10px 10px;
    background: #2196F3;
    color: #fff;
    display: block;
    border: none;
    margin-top: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    max-height: 60px;
    border: 0px solid rgba(0, 0, 0, 0.1);
    border-radius: 0 0 2px 2px;
    transform: rotateZ(0deg);
    transition: all 0.1s ease-out;
    border-bottom-width: 7px;
  }



  footer {
    display: block;
    padding-top: 50px;
    text-align: center;
    color: #ddd;
    font-weight: normal;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);
    font-size: 0.8em;
  }
  footer a, footer a:link {
    color: #fff;
    text-decoration: none;
  }

</style>
