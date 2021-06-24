<template>
  <div>
<!--    <my-login-button1></my-login-button1>-->
    <MyLoginBox1></MyLoginBox1>
  </div>
</template>

<script>
import MyLoginButton1 from "../src/components/myLoginButton1/index"
import MyLoginBox1 from "../src/components/myLoginBox1/index"
export default {
  name: 'App',
  components:{
    MyLoginButton1,MyLoginBox1 ,
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
