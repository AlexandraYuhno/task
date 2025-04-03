<template>
  <SlotList v-model="items">
    <template #header>
      <h2>Список</h2>
    </template>

    <template #default>
      <template v-for="(item, index) in items" :key="index">
        <span>{{ item }}</span>
      </template>
    </template>

    <template #footer>
      <p>© 2025</p>
    </template>
  </SlotList>
</template>

<script setup>
import { ref } from "vue";
import SlotList from "./components/SlotList.vue";

const items = ref(["Элемент 1", "Элемент 2", "Элемент 3"]);
</script>
