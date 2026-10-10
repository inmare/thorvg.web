import type { MetadataRoute } from 'next';

const baseUrl = 'https://thorvg-perf-test.vercel.app';

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