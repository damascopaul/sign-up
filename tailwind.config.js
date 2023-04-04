/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        'neu-flat': '9px 9px 18px rgba(190,190,190,1),-9px -9px 18px rgba(255,255,255,1)',
        'neu-pressed': 'inset 5px 5px 8px #bebebe,inset -5px -5px 8px #ffffff',
      },
      screens: {
        md: '600px',
        lg: '1960px'
      }
    },
  },
  plugins: [],
  mode: 'jit'
}
