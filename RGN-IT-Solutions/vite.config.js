import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
