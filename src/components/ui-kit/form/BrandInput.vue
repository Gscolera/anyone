<script setup lang="ts">
import { onMounted } from 'vue';

const value = defineModel<string>({ required: true });

const { placeholder, format = (value) => value } = defineProps<{
  placeholder: string;
  format?: (value: string) => string;
}>();

onMounted(() => {
  if (value.value) {
    value.value = format(value.value);
  }
});

const onInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const rawValue = input.value;
  const formattedValue = format(rawValue);

  value.value = formattedValue;

  if (formattedValue !== rawValue) {
    input.value = formattedValue;
  }
};
</script>

<template>
  <input
    :value="value"
    type="text"
    :placeholder="placeholder"
    class="border-light-gray border rounded-md p-[8px] pr-[16px] outline-none focus:border-primary-light
          focus:border-[1.5px] transition-all duration-300 text-body-med text-dark field-sizing-content min-w-[72px]"
    @input="onInput"
  >
</template>