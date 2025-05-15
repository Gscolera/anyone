<script lang="ts" setup>
import BrandInput from '@/components/ui-kit/form/BrandInput.vue';

const { modelValue, placeholder } = defineProps<{
  modelValue: string;
  placeholder: string;
}>();

const format = (value: string) => value
  .replace(/\D/g, '')
  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

</script>

<template>
  <BrandInput
    :format="format"
    :model-value="modelValue"
    :placeholder="placeholder"
  />
</template>
