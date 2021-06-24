<template>
  <div class="container">
    <div class="panel">
      <div :class="`content ${contentChose}`">
        <div class="switch">
          <span  id="login" :class="`origin ${switchColor}`" @click="switchLogin">Login</span>
          <span>/</span>
          <span  id="signup" :class="`origin ${switchColor2}`" @click="switchSign">Sign up</span>
        </div>
        <form class="inputForm">
          <div :class="`input ${inputChose}`" id="email" placeholder="Email"><input v-model="value1" type="text" @focus="focusDeal" @blur="blurDeal"></div>
          <div :class="`input ${inputChose1}`" placeholder="UserName"><input type="text"  v-model="value2" @focus="focusDeal1" @blur="blurDeal1"></div>
          <div :class="`input ${inputChose2}`" placeholder="Password"><input type="text" v-model="value3" @focus="focusDeal2" @blur="blurDeal2" ></div>
          <div :class="`input ${inputChose3}`" id="repeat" placeholder="Repeat"><input v-model="value4" type="text" @focus="focusDeal3" @blur="blurDeal3"></div>
          <button>{{ buttonText }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myLoginBox1",
  data(){
    return{
      switchColor:'active',
      switchColor2:'',
      contentChose:'login',
      inputChose:'',
      inputChose1:'',
      inputChose2:'',
      inputChose3:'',
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      buttonText:'LOGIN'
    }
  },
  methods: {
    switchLogin() {
      this.switchColor='active';
      this.switchColor2='';
      this.contentChose='login';
      this.buttonText='LOGIN';
    },
    switchSign() {
      this.switchColor='';
      this.switchColor2='active'
      this.contentChose='signup';
      this.buttonText='SIGN UP';
    },
    focusDeal(){
      this.inputChose='focus';
    },
    blurDeal(){
      if (this.value1 === ''){
        this.inputChose='';
      }
      this.inputChose='';
    },
    focusDeal1(){
      this.inputChose1='focus';
    },
    blurDeal1(){
      if (this.value2 === ''){
        this.inputChose1='';
      }
    },
    focusDeal2(){
      this.inputChose2='focus';
    },
    blurDeal2(){
      if (this.value3 === ''){
        this.inputChose2='';
      }
    },
    focusDeal3(){
      this.inputChose3='focus';
    },
    blurDeal3(){
      if (this.value4 === ''){
        this.inputChose3='';
      }
    },
  }
}
</script>

<style scoped>
.container{
  width: 50vw;
  height: 60vh;
  background: linear-gradient(45deg,rgb(181,154,254),rgb(245,189,253));
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel{
  width: 40%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
}
.switch{
  text-align: center;
}
.origin{
  color: #ccc;
}
.switch span{
  font-size: 1.4rem;
  cursor: pointer;
}
.switch span.active{
  color: rgb(181,154,254);
}
.login .inputForm .input#repeat,.login .inputForm .input#email{
  margin: 0;
  height: 0;
  opacity:0;
}
.inputForm{
  width: 12rem;
  margin-top: 2rem;
}
.inputForm .input{
  width: 100%;
  margin: 2rem 0 ;
  position: relative;
  transition: .4s;
  height: 2rem;
}
.input input{
  border: none;
  border-bottom:.1rem solid rgb(181,154,254);
  outline: none;
}
.input::after{
  position: absolute;
  content: attr(placeholder);
  left: 0;
  top: -20%;
  font-size: 1.3rem;
  color: rgb(129,101,207);
  transition: .3s;
}
.input.focus::after{
  top: -70%;
  font-size: 1rem;
}
.inputForm button{
  border: none;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 3.5rem;
  border-radius: 3rem;
  cursor: pointer;
  outline: none;
  background: linear-gradient(90deg,rgb(181,154,254),rgb(245,189,253));
  box-shadow: 0 0 8px rgb(181,154,254);
  color: white;
}
</style>