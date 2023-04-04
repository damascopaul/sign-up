<template>
  <div class="app">
    <SignUp
      v-if="showSignUp"
      @success="handleSuccess"
    />

    <CheckBig v-else/>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showSignUp: true,
    }
  },
  methods: {
    handleSuccess(): void {
      this.showSignUp = false
    },
  },
}
</script>

<style lang="postcss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap');
  .app {
    font-family: 'Nunito Sans', sans-serif;
    @apply flex flex-col;
    @apply w-screen h-full min-h-screen;
    @apply bg-[#e0e0e0];
  }
</style>
