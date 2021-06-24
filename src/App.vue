<template>
  <div>
    <my-login-button1 ></my-login-button1>
  </div>
</template>

<script>
import MyLoginButton1 from "../src/components/myLoginButton1/index"
export default {
  name: 'App',
  components:{
    MyLoginButton1,
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
  /*align-content: center;*/
}
</style>
