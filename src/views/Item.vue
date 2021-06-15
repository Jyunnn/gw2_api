<template>
  <h1>Item</h1>
  <p v-if="gw2_AllDaily.data.length == 0"> Loading... </p>
  <p v-else> {{ gw2_AllDaily }} </p>
</template>

<script>
import { onMounted, reactive } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const gw2_AllDaily = reactive({data:[]});
    const gw2_PveDaily = reactive({data:[]});

    function pullData(){

    }
    pullData();
    onMounted(()=>{
      axios.get('https://api.guildwars2.com/v2/achievements/daily')
      .then((response) => {
        console.log(response);
        gw2_AllDaily.data = response.data
      })
    })

    return {
      gw2_AllDaily, gw2_PveDaily
    }
  },
}
</script>

<style>

</style>