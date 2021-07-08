<template>
  <h1>Item</h1>
  <div class="my-5" v-for="daily in gw2_PveDaily.data" :key="daily.id">
    <p class="text-4xl"> {{ daily.name }} </p>
    <p class="text-xl"> {{ daily.description }} </p>
    <p class="text-xl"> {{ daily.requirement }} </p>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const gw2_PveDaily = reactive({data:[]});

    function getDaily(daily, valueName) {
      let id = [];
      daily.forEach(element => {
          id.push(element.id)
      });
      axios.get(`https://api.guildwars2.com/v2/achievements?ids=${id.join(',')}&lang=en`)
      .then((responent)=>{
          valueName.data = responent.data
      })    
    }

    onMounted(() => {
      store.dispatch('getGW2AllDaily').then((data)=>{
        console.log(data.pve);
        getDaily(data.pve, gw2_PveDaily)
      })
    })

    const AllDaily = computed(()=>{
      return store.getters.getAllDaily
    })

    return {
      AllDaily, gw2_PveDaily,
    }
  },
}
</script>

<style>

</style>