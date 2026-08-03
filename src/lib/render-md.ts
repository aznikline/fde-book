import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

/**
 * 把整段 markdown 渲染成 HTML 字符串（用于「仅中文」单列展示）。
 * rehype-slug 为各级标题生成 id，便于页内锚点跳转。
 */
export async function renderMarkdown(md: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(md);
  return String(file);
}

/**
 * 渲染 markdown 并同时返回从正文里提取的二级标题锚点目录。
 * 用于手册等长文档的页内导航。
 */
export async function renderMarkdownWithToc(md: string): Promise<{
  html: string;
  toc: Array<{ id: string; text: string }>;
}> {
  const html = await renderMarkdown(md);
  // 从渲染后的 HTML 里提取 h2 的 id 和文本
  const re = /<h2[^>]*id="([^"]+)"[^>]*>(.*?)<\/h2>/g;
  const stripTags = (s: string) => s.replace(/<[^>]+>/g, '');
  const toc: Array<{ id: string; text: string }> = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    toc.push({ id: m[1], text: stripTags(m[2]) });
  }
  return { html, toc };
}
