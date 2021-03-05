<!--|== Template =============================================================================== -->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<!--|== Scripts ================================================================================ -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
* {
  text-align: center;
}
</style>
