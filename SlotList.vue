<template>
  <div class="container">
    <template v-if="modelValue.length && $slots.header">
      <header class="header">
        <slot name="header"></slot>
      </header>
      <hr />
    </template>

    <div v-if="modelValue.length" class="content">
      <template v-for="(item, index) in modelValue" :key="index">
        <div class="slot-item">
          <span>{{ item }}</span>
          <button @click="removeSlot(index)">Удалить</button>
        </div>
      </template>
    </div>

    <p v-else class="empty-text">Лист пуст</p>

    <template v-if="$slots.footer && modelValue.length">
      <hr />
      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    </template>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: Array,
});

const emit = defineEmits(["update:modelValue"]);

const removeSlot = (index) => {
  const updatedSlots = [...props.modelValue];
  updatedSlots.splice(index, 1);
  emit("update:modelValue", updatedSlots);
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
