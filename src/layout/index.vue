
<template>
  <div>
    <p>layout</p>
    <router-view :key="key" />
  </div>
</template>
<script>
export default {
  name: "Layout",
  data () {
    return {
      
    };
  },
  created () {
    
  },
  mounted () {
    
  },
  methods: {
    
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="stylus" scoped>
  
</style>