<template>
  <SlotList>
    <template #header>
      <h2>Cписок</h2>
    </template>

    <template #default>
      <span>Элемент 1</span>
      <span>Элемент 2</span>
      <span>Элемент 3</span>
    </template>

    <template #footer>
      <p>© 2025</p>
    </template>
  </SlotList>
</template>

<script setup>
import SlotList from "./components/SlotList.vue";
</script>
