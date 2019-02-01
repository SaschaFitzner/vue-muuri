<template>
  <div class="grid">
    <muuri-grid id="example-grid" :options="options">
      <!--item-sm id="item-sm1" width="30%" height="150px"-->
      <item-sm
        :id="'item-sm-' + index"
        v-for="index in itemsInitNumber"
        :key="index"
        width="30%"
        height="150px"
      >
        <p>Small item {{ index }}</p>
      </item-sm>
    </muuri-grid>
  </div>
</template>

<script>
import { ItemSm } from "vue-muuri";
export default {
  name: "Grid",
  data() {
    return {
      options: {
        items: ".item",
        dragEnabled: true
      },
      itemsInitNumber: 12
    };
  },
  components: {
    ItemSm
  }
};
</script>

<style lang="scss">
.grid {
  width: 100%;
  position: relative;
  margin: 0 auto;

  .item {
    background-color: #007bff !important;
    //max-width: calc(90% / 3) !important;
  }
}
</style>
