import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/", // same as ""
  
})

/**
 * AI generated answer to deploying to root user path in github pages (<user>.github.io):
 * To serve a GitHub Pages site from the root path, you should create a repository named <username>.github.io 
 * and place your index.html file directly in the root of that repository. This way, your site will be accessible
 *  at https://<username>.github.io without any additional path
 * 
 * Só funciona com a opção Build and deployment: From a branch instead of github actions??
*/
// https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages#36782614