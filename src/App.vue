<template>
  <div id="app">
    <exchange/>
    
  </div>
</template>
 
<script>
import exchange from './components/exchange'
  export default{
    data(){
      return{

      }
    },
    components:{
      exchange
    }
  }
</script> 
<style>
#app{
  background-color: #162447;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#3c9d9b;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
