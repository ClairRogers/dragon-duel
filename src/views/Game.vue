<template>
  <div class="game">
    {{champion}}
    {{dragon}}
  </div>
</template>

<script>
  export default {
    name: "Game",
    mounted() {
      this.$store.dispatch('getGame', this.id)
    },
    props: ['id'],
    data() {
      return {}
    },
    computed: {
      champion() {
        return this.$store.state.activeChampion
      },
      dragon() {
        return this.$store.state.activeDragon
      }
    },
    methods: {},
    components: {}
  }
</script>