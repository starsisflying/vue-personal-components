<!--使用时注意让该组件定义为元素居中，否则收缩button时只会从右往左收缩，而不会左右同时向内收缩-->
<template>
  <button class="login"
          @click="toChangeActive"
          :style="`width:${width}rem;
           color:${color}
          `"
  >
    LOGIN
    <div class="lodingPointBox" :style="`opacity:${opacity}`">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="loginSuccess" :style="`opacity:${showOpacity}`">
        ✓
    </div>
  </button>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      timer:null,
      showOpacity:0,
      width:12,
      color:'white',
      opacity: 0,
    }
  },
  methods:{
    toChangeActive(){
      if (this.width===12){
        this.width=5;
        this.color='transparent';
        this.opacity=1;
      }
      this.timer=setInterval(this.checkLoginMessage,2000)
    },
    checkLoginMessage(){//具体验证身份逻辑
        this.showOpacity=1;
        this.opacity=0;
    }
  },
}
</script>

<style scoped>
.login{
  position: relative;
  background-color: black;
  color:white;
  height: 5rem;
  border-radius: 5rem;
  font-weight: bold;
  font-size: 1.5rem;
  box-shadow: 0 8px 28px black;
  text-align: center;
  line-height: 5rem;
  transition: .5s;
  cursor: pointer;
}

.lodingPointBox{
  position: absolute;
  width: 70%;
  height: 40%;
  left: 50%;
  top: 50%;
  transition: .8s;
  transform: translate(-50%,-50%);
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

}
.lodingPointBox div{
  width: .3rem;
  height: .3rem;
  background-color: white;
  border-radius: 50%;
  animation:abc .45s ease-in-out infinite alternate;
}
@keyframes abc {
  to{
    transform: translate(0,-1rem);
  }
}
.lodingPointBox div:nth-child(2){
  animation-delay: .2s;
}
.lodingPointBox div:nth-child(3){
  animation-delay: .4s;
}
.loginSuccess{
  position: absolute;
  width: 70%;
  height: 40%;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  transform: translate(-50%,-50%);
  color: white;
  transition: 2s;
}
</style>