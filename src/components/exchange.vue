<template>
  <div id="ex">
    <div class="buttons">
      <button @click="setLocale('en')" class="button">{{$t('eng')}}</button>
      <button @click="setLocale('hr')" class="button">{{$t('cro')}}</button>
      <button @click="setLocale('de')" class="button">{{$t('ger')}}</button>
    </div>
    <h1 id="naslov">{{$t('exchange')| to-uppercase}}</h1>
    <div id="container">
    <input type="number" v-model="from"> <br>
    {{$t('from')}}
    <select  v-model="fromValuta">
      <option v-for="(val,name) in valute" :key="val" >{{name}}</option>
    </select>

    <br>
    {{$t('to')}}
    <select v-model="toValuta">
      <option v-for="(val,name) in valute" :key="val" >{{name}}</option>
    </select>

    <br>
    <br>
        <hr>

    <p> {{from}} <span class="valute"> {{fromValuta}} </span> = {{toEuro}} <span class="valute"> EUR </span> </p>
    <p> {{from}} <span class="valute"> {{fromValuta}} </span> = {{change}} <span class="valute"> {{toValuta}} </span></p>

    </div>
    <p id="created">{{$t('cre')}}<span id="ime">Ivan Bagarić</span></p>
  </div>
</template>
 
<script>
import axios from 'axios' 


  export default {
    data () {
      return {
        naslov:"Mjenjačnica",
        valute:{},
        from:null,
        fromValuta:null,
        toValuta:null,

    }
    },
    created(){
      axios.get('https://api.exchangeratesapi.io/latest')
      .then((data)=>this.valute=data.data.rates)
    },
    computed:{
        toEuro(){
            return this.from/ this.valute[`${this.fromValuta}`]
        },
        change(){
            return this.toEuro*this.valute[`${this.toValuta}`]
        }
    },
    methods:{
      setLocale(locale){
        this.$i18n.locale=locale
        localStorage.setItem("locale",locale)
      }
    }
  }
</script> 
<style>
#ex{
    text-align: right;
    color: #ebebeb;
}
#container{
    padding: 8vh 15vh;
    background-color: #52de97;
    border-radius: 10px;
}
.valute{
    color:#c0ffb3;
    font-weight: bold;

}
#naslov{
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;


}
input{
    margin: 2vh;
}
hr{
    width: 100%;
}
.buttons{
  text-align: center;
}
#ime{
    font-weight: bold;
    color: #c0ffb3;
}
</style>
