// 为 Node 26 ESM 环境补回 Rollup/Astro 5 期望的 __dirname/__filename。
// 这些全局在纯 ESM 下被移除，而 Rollup 的原生绑定加载代码仍用 __dirname。
// 此文件作为 --require 预加载，在 build/dev 脚本里引入。
const { fileURLToPath } = require('url');
const path = require('path');

// 在全局对象上定义（若尚不存在），指向当前进程入口。
// Rollup 内部在加载 @rollup/rollup-darwin-* 绑定时用到 __dirname 解析本地路径；
// 给它一个合理的默认值（项目根），让 isFileSync 判定回退到包名加载。
if (typeof globalThis.__dirname === 'undefined') {
  globalThis.__dirname = process.cwd();
}
if (typeof globalThis.__filename === 'undefined') {
  globalThis.__filename = path.join(process.cwd(), 'scripts', 'polyfill.cjs');
}
