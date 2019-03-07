<template>
  <div class="actives col-6 offset-3">
    <button v-if="activeDragonData.name && activeChampionData.name" class="btn btn-success my-4"
      @click="makeNewGame()">START</button>
    <div v-if="activeChampionData.name" class="card">
      <img :src="activeChampionData.imgUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{activeChampionData.name}}</h5>
        <p class="card-text">{{activeChampionData.race}} {{activeChampionData.class}}</p>
        <p><strong>HP: {{activeChampionData.hp}}</strong></p>
      </div>
    </div>
    <h1 v-if="activeDragonData.name" class="my-3">VS.</h1>
    <div v-if="activeDragonData.name" class="card">
      <img :src="activeDragonData.imgUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{activeDragonData.name}}</h5>
        <p class="card-text"><strong>HP: {{activeDragonData.maxHP}}</strong></p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Actives",
    props: ['activeDragonData', 'activeChampionData'],
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      makeNewGame() {
        let data = {
          dragonId: this.activeDragonData.id.toString(),
          championId: this.activeChampionData.id.toString()
        }
        this.$store.dispatch('createGame', data)
      }
    },
    components: {}
  }
</script>