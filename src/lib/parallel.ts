import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

/**
 * 把一段 markdown 文本解析成 top-level 块数组。
 * 每个 top-level 块（paragraph/heading/list/blockquote/code/thematicBreak/table）
 * 会被独立渲染成 HTML 片段，供并排对照时按索引配对。
 *
 * 设计意图：译者保证中英文段落一一对应、切分一致，
 * 这样两份 md 解析出的块数组按位置配对即可形成逐段并排。
 */

type Node = {
  type: string;
  children?: Node[];
  value?: string;
  [key: string]: unknown;
};

type Parent = Node & { children: Node[] };

function isParent(node: Node): node is Parent {
  return Array.isArray((node as Parent).children);
}

/**
 * 把单个 mdast 节点渲染成 HTML 片段。
 */
async function renderNode(node: Node): Promise<string> {
  // remark-rehype 期望一个 root，所以包一层
  const wrapped = { type: 'root', children: [node] };
  const file = await unified()
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeStringify)
    .run(wrapped);
  const result = String(file);
  return result.trim();
}

/**
 * 将 markdown 文本拆为 top-level HTML 块数组。
 */
export async function parseToBlocks(md: string): Promise<string[]> {
  const parsed = await unified().use(remarkParse).parse(md);
  const blocks: string[] = [];
  for (const child of parsed.children) {
    const html = await renderNode(child);
    if (html.length > 0) blocks.push(html);
  }
  return blocks;
}

/**
 * 配对中英块数组。按索引一一对应；
 * 若两侧长度不一致（译者漏译/多译），多余的块单列展示并打标记，
 * 绝不静默吞掉——并排对齐的正确性必须可见。
 */
export function pairBlocks(zh: string[], en: string[]): Array<{
  zh: string | null;
  en: string | null;
  aligned: boolean;
}> {
  const max = Math.max(zh.length, en.length);
  const pairs: Array<{ zh: string | null; en: string | null; aligned: boolean }> = [];
  for (let i = 0; i < max; i++) {
    const z = zh[i] ?? null;
    const e = en[i] ?? null;
    pairs.push({ zh: z, en: e, aligned: z !== null && e !== null });
  }
  return pairs;
}
