<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank"
      >Vetur</a
    >
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="inc()">count is: {{ state.counter }}</button>
  <h3>Double Counter:</h3>
  {{ doubleCounter }}
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue';
import { useStore, MutationTypes, ActionTypes } from '../store';
import Services from '../services';
import { demoFunction } from '../filters';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },

  setup: () => {
    onMounted(() => {
      demoFunction();
      Services.getContact().then((res) => {
        console.log(res.data);
      });
    });
    // Use the Store
    const store = useStore();

    // Set Var for State
    const state = ref(store.state);

    // Increment Via Mutation
    const inc = () => {
      store.commit(MutationTypes.INC_COUNTER, 1);
    };

    // Increment Via Action
    const actionInc = () => {
      store.dispatch(ActionTypes.INC_COUNTER, 2);
    };

    // Getter
    const doubleCounter = computed(() => store.getters.doubleCounter);

    return {
      state,
      inc,
      doubleCounter,
      actionInc
    };
  }
});
</script>

<style lang="scss">
h1 {
  color: black(0.5);
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
