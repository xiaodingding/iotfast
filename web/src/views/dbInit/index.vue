<template>
  <div class="db-init">
    <component :is="currentComponent" />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
export default defineComponent({
  name: "dbInit",
  components:{
  },
  provide() {
    return {
      jump: (v:string) => {
        this.currentComponent = v
      }
    }
  },

  setup() {

  },
  data() {
    return {
      currentComponent: 'Protocol'
    }
  }

})
</script>

<style scoped lang="scss">
  .db-init {

  }
</style>
