<template>
  <div class="start container-fluid">
    <h1>Pick your Champion and your Enemy!</h1>
    <div class="row">
      <div class="col-4">
        <h2>Champions:</h2>
        <div class="row">
          <champions v-for="champion in champions" :championData='champion' :key="champion.id"></champions>
        </div>
      </div>
      <div class="col-4">
        <h2>Roster:</h2>
        <div class="row">
          <actives :activeChampionData="activechampion" :activeDragonData="activedragon"></actives>
        </div>
      </div>
      <div class="col-4">
        <h2>Enemies:</h2>
        <div class="row">
          <dragons v-for="dragon in dragons" :dragonData='dragon' :key="dragon.id"></dragons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Champions from '@/components/Champions.vue'
  import Dragons from '@/components/Dragons.vue'
  import Actives from '@/components/Actives.vue'
  export default {
    name: "Start",
    mounted() {
      this.$store.dispatch('getDragons')
      this.$store.dispatch('getChampions')
    },
    data() {
      return {

      }
    },
    computed: {
      dragons() {
        return this.$store.state.dragons
      },
      champions() {
        return this.$store.state.champions
      },
      activedragon() {
        return this.$store.state.activeDragon
      },
      activechampion() {
        return this.$store.state.activeChampion
      }
    },
    methods: {},
    components: {
      Champions,
      Dragons,
      Actives
    }
  }
</script>