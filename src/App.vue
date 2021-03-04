<!--|== Template =============================================================================== -->
<template>
  <img alt="Vue logo" src="./assets/img/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<!--|== Scripts ================================================================================ -->
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld
  }
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="sass">
* {
  text-align: center;
}
</style>
