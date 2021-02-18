<template>
<div>

  <h1>{{ counter }}</h1>
  <v-btn
  elevation="2"
  outlined
  @click="increment"
  >+</v-btn>

    <v-btn
  elevation="2"
  outlined
  @click="decrement"
  >-</v-btn>
  </div>
</template>


<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    increment(e) {
        this.$store.commit('increment')
    },
    decrement(e) {
        this.$store.commit('decrement')
    }
  }
}
</script>