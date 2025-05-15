<script setup lang="ts">
import { useFocus } from '@vueuse/core';
import { ref, shallowRef } from 'vue';

import NumericInput from '@/components/ui-kit/form/NumericInput.vue';
import UserAvatar from '@/components/user/UserAvatar.vue';

const age = ref('');
const ageInputRef = shallowRef<HTMLInputElement>();
const { focused } = useFocus(ageInputRef);

</script>

<template>
  <div class="flex items-center justify-center w-full">
    <UserAvatar
      source="/images/cat.jpg"
      :is-focused="focused"
    />

    <div class="flex flex-col items-start justify-start ml-md">
      <span
        class="uppercase font-koulen text-caption mb-md transition-colors duration-300"
        :class="focused ? 'text-primary' : 'text-dark'"
      >
        samuel is
      </span>
      <div class="flex items-center justify-center">
        <NumericInput
          ref="ageInputRef"
          v-model="age"
          placeholder="7"
        />
        <span class="text-sm text-dark text-body-reg ml-md">
          hours old
        </span>
      </div>
    </div>
  </div>
</template>