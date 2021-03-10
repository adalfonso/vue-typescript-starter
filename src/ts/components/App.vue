<template>
  <div>
    <app-example :exampleprop="greeting"></app-example>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ExampleComponent from "./Example.vue";

@Component({
  components: { "app-example": ExampleComponent },
})
export default class App extends Vue {
  data() {
    return {
      greeting: "Hello World!",
    };
  }
}
</script>

<style></style>
