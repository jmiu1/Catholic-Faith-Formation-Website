import { notFound } from 'next/navigation';
import SiteShell from '@/components/SiteShell';
import { pageContent } from '@/lib/pageContent';

export default async function ChecklistPage({ params }) {
  const { category, page } = await params;
  const content = pageContent[category]?.[page];

  if (!content) {
    notFound();
  }

  return (
    <SiteShell currentPath={`/${category}/${page}`} title={content.title}>
      {content.body}
    </SiteShell>
  );
}