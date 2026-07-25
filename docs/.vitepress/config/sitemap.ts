/**
 * @file Sitemap 生成
 * @brief VitePress buildEnd hook，构建后自动生成 sitemap.xml
 */

import type { SiteConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { Readable } from 'stream'

const BASE_URL = 'https://www.nagoriyuki.cn'

export async function buildSitemap(siteConfig: SiteConfig): Promise<void> {
  const pages = siteConfig.pages.map((p) => ({
    url: p.replace(/\.md$/, '').replace(/index$/, ''),
    changefreq: 'weekly' as const,
    priority: p === 'index.md' ? 1.0 : 0.8,
  }))

  const stream = new SitemapStream({ hostname: BASE_URL })
  const pipeline = Readable.from(pages).pipe(stream)
  const data = await new Promise<string>((res, rej) => {
    let buf = ''
    stream.on('data', (chunk: Buffer) => (buf += chunk.toString()))
    stream.on('end', () => res(buf))
    stream.on('error', rej)
    pipeline.on('error', rej)
  })
  writeFileSync(resolve(siteConfig.outDir, 'sitemap.xml'), data)
}
