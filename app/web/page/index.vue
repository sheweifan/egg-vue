<template>
  <div class="index">
    index
    {{ reason.name }}
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    reason() {
      return this.$store.state.reasons
    }
  },
  preFetch({dispatch}) {
    return dispatch('getReason')
  },
  beforeMount() {
    return this.$store.dispatch('getReason')
  }
}
</script>

<style>

</style>
