<template>
  <h1>Item</h1>
  <div class="my-5" v-for="daily in AllDaily" :key="daily.id">
    <p class="text-xl"> {{ daily.name }} </p>
    <p class="text-sm"> {{ daily.description }} </p>
    <p class="text-sm"> {{ daily.requirement}} </p>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';
// import axios from 'axios';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const gw2_PveDaily = reactive({data:[]});

    onMounted(() => {
      store.dispatch('getGW2AllDaily')
    })

    const AllDaily = computed(()=>{
      return store.getters.getAllDaily
    })
    // axios.get('https://api.guildwars2.com/v2/achievements/daily')
    // .then((response) => {
    //   gw2_AllDaily.data = response.data
    //   getDaily(gw2_AllDaily.data.pve, gw2_PveDaily)
    // })

    // function getDaily(daily, valueName) {
    //   let id = [];
    //   daily.forEach(element => {
    //       id.push(element.id)
    //   });
    //   axios.get(`https://api.guildwars2.com/v2/achievements?ids=${id.join(',')}&lang=en`)
    //   .then((responent)=>{
    //       valueName.data = responent.data
    //   })    
    // }

    return {
      AllDaily, gw2_PveDaily,
    }
  },
}
</script>

<style>

</style>