<!--|== Template =============================================================================== -->
<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.home {
}
</style>
