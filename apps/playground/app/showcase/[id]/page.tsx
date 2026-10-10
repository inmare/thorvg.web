import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getExampleById, showcaseExamples } from '@/lib/examples';
import ShowcasePageClient from './ShowcasePageClient';

// 이런 불완전한 타입 나중에 고치기
type Props = {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return showcaseExamples.map((example) => ({
    id: example.id,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const example = getExampleById(id);

  if (!example) {
    return {
      title: 'Example not Found | ThorVG Playground',
    };
  }

  const title = `${example.title} | ThorVG Playground`;
  const url = `/showcase/${example.id}`;

  // 각 속성이 어떤 역할 하는지 나중에 파악하기
  return {
    title,
    description: example.description,
    alternates: {
      canonical: url, 
    },
    openGraph: {
      title,
      description: example.description,
      url,
      sitename: 'ThorVG Playground',
      type: 'website',
      images: example.thumbnail
        ? [
          {
            url: example.thumbnail,
            alt: `${example.title} preview`,
          }
          ]
        : [],
    }
  }
}

export default async function ShowcasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const example = getExampleById(id);

  if (!example) {
    notFound();
  }
  
  return <ShowcasePageClient id={id} />;
}
