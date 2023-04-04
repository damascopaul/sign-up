<template>
  <fieldset>
    <span
      v-if="error"
      class="input-errors"
    >
      {{ error }}
    </span>

    <input
      :value="modelValue"
      :type="inputType || 'text'"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </fieldset>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: String as () => string | null,
      required: false,
      default: null,
    },
    inputType: {
      type: String,
      required: false,
      default: 'text',
    },
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style lang="postcss" scoped>
  fieldset {
    @aply flex flex-col;
    @apply w-full;

    .input-errors {
      @apply flex;
      @apply text-red-600 text-sm;
      @apply mb-1;
    }

    input {
      @apply flex;
      @apply w-full h-12;
      @apply px-4;
      @apply rounded-xl;
      @apply bg-[#e0e0e0];
      @apply shadow-neu-pressed;
      @apply text-base font-light text-slate-900;

      &:focus-visible {
        outline: none;
      }
    }
  }
</style>
