import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        service: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        'i18next',
        'i18next-http-backend',
        'react-i18next',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
    target: 'esnext',
  },
});
