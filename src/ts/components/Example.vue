<template>
  <div>
    <input type="text" v-model="example_data" />
    {{ exampleprop }}
    {{ example_computed_prop }}
    {{ example_method() }}
    <img :src="img_src" alt="" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import cat from "@/img/cat.png";

// Additional Vue fixtures are passed into the decorator, e.g. components
@Component({
  components: {},
})
export default class ExampleComponent extends Vue {
  // Props
  @Prop() exampleprop!: string;
  // Data
  example_data: string = "example";
  // Computed Properties
  get example_computed_prop(): number {
    return this.exampleprop.length;
  }

  get img_src(): number {
    return cat;
  }
  // Methods
  example_method(): string {
    return "[ example method output ]";
  }
}
</script>

<style lang="scss">
div {
  img {
    width: 100px;
  }
}
</style>
