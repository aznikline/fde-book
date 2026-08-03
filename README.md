# 前线部署工程师 · 中英对照阅读站与工作手册

> 基于 [《前线部署工程师：人工智能时代的客户价值交付秘籍》](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer)（范冰 著，开源公开）整理。

本仓库提供一个静态阅读网站，做三件事：

1. **中英逐段对照阅读** —— 原文与英文翻译按段落并排呈现（桌面端左右、移动端上下），便于精读与术语对照。
2. **可执行工作手册** —— 把全书方法论提炼为按交付旅程组织的检查清单，每项带阈值与高危信号，可直接落地。
3. **指标速查** —— FDE 全链路指标体系一页纸，附参考标准与警戒线。

## 本地开发

```bash
pnpm install
pnpm dev      # 开发服务器，默认 http://localhost:4321
pnpm build    # 生成静态站点到 dist/
pnpm preview  # 预览构建产物
```

> 需要 Node 18+ 与 pnpm。本项目在 Node 26 下需要 `NODE_OPTIONS="--require $(pwd)/scripts/polyfill.cjs"` 预加载（见 `package.json` 的 `build`/`dev` 脚本），以补回 Rollup 在纯 ESM 下缺失的 `__dirname`。

## 项目结构

```
src/
├── content/
│   ├── chaptersZh/      # 中文原文（12 章）
│   ├── chaptersEn/      # 英文译文（与中文逐段对齐，逐章推进）
│   └── handbook/         # 工作手册
├── components/
│   ├── ParallelText.astro    # 中英段落并排渲染核心组件
│   └── ChapterNav.astro      # 上下章导航
├── lib/
│   ├── parallel.ts      # markdown→块数组→配对
│   ├── render-md.ts     # unified + rehype-slug 渲染
│   └── chapters.ts      # 章节元数据（纯数据，配置与页面共用）
├── layouts/
│   └── BaseLayout.astro # 顶栏 + 侧栏 + 主题切换 + 页脚
└── pages/
    ├── index.astro      # 首页
    ├── about.astro      # 关于
    ├── handbook.astro   # 工作手册
    ├── metrics.astro    # 指标速查
    └── chapters/[slug].astro  # 章节动态路由
```

## 并排渲染原理

中英两份 markdown 各自用 `unified`/`remark-parse` 解析为顶级块（top-level block）数组，再按索引一一配对：

```ts
const zhBlocks = await parseToBlocks(zhMd);   // ['<p>...</p>', '<h2>...</h2>', ...]
const enBlocks = await parseToBlocks(enMd);
const pairs = pairBlocks(zhBlocks, enBlocks);  // [{zh, en, aligned}, ...]
```

配对后在两列 grid 中渲染。若某段两侧长度不一致（译者漏译/多译），该段会以高亮标记，绝不静默吞掉——并排对齐的正确性必须可见。

**译者守则**：英文段落的切分必须与中文严格一致，每个中文顶级块对应且仅对应一个英文顶级块。

## 翻译状态

- [x] 第 1 章 FDE 的崛起（样板）
- [ ] 第 2–8 章 + 后记 + 附录（逐章推进）

## 术语对照

全书统一术语见 `src/lib/glossary`（建设中）。核心术语：

| 中文 | English |
|---|---|
| 前线部署工程师 | Forward Deployed Engineer (FDE) |
| 本体 | Ontology |
| 训练营 | Bootcamp |
| 最小可行部署 | Minimum Viable Deployment (MVD) |
| 问题与方案的契合 | Problem-Solution Fit (PSF) |
| 影子工作法 | shadow work method |
| 概念验证坟墓 | POC purgatory |
| 砾石路与高速公路 | gravel roads and highways |

## 版权

原书著作权归作者范冰所有。本站为非商业性学习用途的整理与翻译呈现。
