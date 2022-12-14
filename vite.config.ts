/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/06/07 23:02:43 (GMT+0900)
 */
import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    outDir: path.resolve(
      __dirname,
      '../capricorncd.github.io/demos/blockchain'
    ),
  },
});
