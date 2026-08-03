import { defineConfig } from 'astro/config';

// 章节元数据从 src/lib/chapters.ts 导入，配置与页面共用同一份真相源。
// 注意：页面/组件绝不要直接 import astro.config.mjs，否则会把构建工具
// 依赖（rollup/vite/node 内置模块）拉进页面 SSR chunk。
export { chapters, titles } from './src/lib/chapters.ts';

export default defineConfig({
  // GitHub Pages 项目页：https://<user>.github.io/fde-book/
  site: 'https://aznikline.github.io',
  base: '/fde-book/',
  vite: {
    // fsevents 是 macOS 文件监听原生二进制，不应被 Rollup 当 JS 解析
    optimizeDeps: { exclude: ['fsevents'] },
    build: { rollupOptions: { external: ['fsevents'] } },
  },
});
