<template>
  <div class="container">
    <template v-if="slotsContent.length && $slots.header">
      <header class="header">
        <slot name="header"></slot>
      </header>
      <hr />
    </template>

    <div v-if="slotsContent.length" class="content">
      <template v-for="(item, index) in slotsContent" :key="index">
        <div class="slot-item">
          <component :is="item"></component>
          <button @click="removeSlot(index)">Удалить</button>
        </div>
      </template>
    </div>

    <p v-else class="empty-text">Лист пуст</p>

    <template v-if="slotsContent.length && $slots.footer">
      <hr />
      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    </template>
  </div>
</template>

<script setup>
import { ref, watchEffect, useSlots } from "vue";

const slots = useSlots();
const slotsContent = ref([]);

watchEffect(() => {
  slotsContent.value = slots.default ? slots.default() : [];
});

const removeSlot = (index) => {
  slotsContent.value.splice(index, 1);
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.slot-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
