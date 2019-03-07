<template>
  <div class="dragons col-6">
    <div class="card">
      <img :src="dragonData.imgUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{dragonData.name}}</h5>
        <p class="card-text"><strong>HP: {{dragonData.maxHP}}</strong></p>
        <button @click="setActiveDragon(dragonData)" class="btn btn-outline-danger">Choose</button>
      </div>
    </div>

    <!-- <router-link :to="{name: 'Dragons', params:{id: dragonData._id}}">
    </router-link> -->
  </div>
</template>

<script>
  export default {
    name: "Dragons",
    props: ['dragonData'],
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      setActiveDragon(data) {
        this.$store.dispatch('makeActiveDragon', data)
      }
    },
    components: {}
  }
</script>

<style>
</style>