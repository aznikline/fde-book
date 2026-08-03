// 章节元数据：纯数据文件，不依赖 astro 运行时，避免把构建工具链路拉进页面 SSR chunk。
// astro.config.mjs 也从这里 import，配置与页面共用同一份真相源。

export const chapters = [
  'chapter-1-rise-of-fde',
  'chapter-2-solving-right-problem',
  'chapter-3-winning-customers',
  'chapter-4-activation-deployment',
  'chapter-5-keeping-renewal',
  'chapter-6-expanding-revenue',
  'chapter-7-scaling-replication',
  'chapter-8-case-collection',
  'postscript-professional-ethics',
  'appendix-a-metrics',
  'appendix-b-people-teams',
  'appendix-c-case-index',
] as const;

export const titles: Record<string, string> = {
  'chapter-1-rise-of-fde': '第 1 章 FDE 的崛起',
  'chapter-2-solving-right-problem': '第 2 章 解决正确的问题',
  'chapter-3-winning-customers': '第 3 章 赢得客户',
  'chapter-4-activation-deployment': '第 4 章 激活部署',
  'chapter-5-keeping-renewal': '第 5 章 守住续约',
  'chapter-6-expanding-revenue': '第 6 章 扩大收入',
  'chapter-7-scaling-replication': '第 7 章 规模化复制',
  'chapter-8-case-collection': '第 8 章 完整案例集',
  'postscript-professional-ethics': '后记 FDE 的职业道德',
  'appendix-a-metrics': '附录 A 常用指标',
  'appendix-b-people-teams': '附录 B 人物与团队',
  'appendix-c-case-index': '附录 C 案例索引',
};
