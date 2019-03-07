<template>
   <div class="champions col-6">
      <div class="card">
         <img :src="championData.imgUrl" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">{{championData.name}}</h5>
            <p class="card-text">{{championData.race}} {{championData.class}}</p>
            <p><strong>HP: {{championData.hp}}</strong></p>
            <button @click="setActiveChampion(championData)" class="btn btn-outline-success">Choose</button>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Champions",
      props: ['championData'],
      data() {
         return {}
      },
      computed: {},
      methods: {
         setActiveChampion(data) {
            this.$store.dispatch('makeActiveChampion', data)
         }
      },
      components: {}
   }
</script>

<style>
</style>