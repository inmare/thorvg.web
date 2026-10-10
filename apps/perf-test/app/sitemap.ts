import type { MetadataRoute } from 'next';

const baseUrl = 'https://thorvg-perf-test.vercel.app';

// robots.ts? 추가할지 말지 고민중
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/viewer`,
      priority: 0.8,
    },
  ];
}