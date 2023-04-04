<template>
  <div>
    <span></span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="
        M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373
        12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319
        1.396-1.435 3.078 2.937
        6.105-6.218 1.421
        1.409-7.5 7.626z
        "
      />
    </svg>
  </div>
</template>

<style lang="postcss" scoped>
  div {
    @apply flex;
    @apply h-32 w-32;
    @apply m-auto;
    @apply relative;

    span {
      @apply absolute;
      @apply flex;
      @apply h-32 w-32;
      @apply rounded-full;
      @appy m-auto;
      @apply bg-green-500;
      @apply z-0;
      @apply animate-ping;
    }

    svg {
      @apply relative;
      @apply text-green-500;
      @apply h-32 w-32;
      @apply z-10;
    }
  }
</style>
