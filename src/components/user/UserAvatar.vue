<script lang="ts" setup>
const { isFocused, source } = defineProps<{ isFocused: boolean; source: string }>();
</script>

<template>
  <div
    class=" border rounded-full p-xs transition-all duration-300 mr-xs"
    :class="isFocused ? 'border-primary' : 'border-transparent'"
  >
    <img
      :src="source"
      alt="user avatar"
      class="w-[80px] h-[80px] rounded-full object-cover"
    >
  </div>
</template>