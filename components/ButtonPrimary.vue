<template>
  <button
    :disabled="isLoading"
    class="primary-button"
    @click="handleClick"
  >
    <svg
      v-if="isLoading"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="
        M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z
        "
      />
    </svg>

    <span v-else>
      {{ label }}
    </span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    handleClick: {
      type: Function,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
  .primary-button {
    @apply flex justify-center;
    @apply w-fit min-w-[160px] h-12;
    @apply px-5 py-3;
    @apply bg-indigo-600;
    @apply rounded-full;
    @apply shadow-neu-flat;

    &:hover {
      background: linear-gradient(145deg, #554bf5, #473fce);
    }

    &:active {
      background: linear-gradient(145deg, #473fce, #554bf5);
    }

    &:focus-visible {
      outline: none;
    }

    svg {
      @apply animate-spin;
      @apply h-5 w-5;
      @apply m-auto;
      @apply text-white;
    }

    span {
      @apply text-white;
      @apply text-base;
    }
  }
</style>
