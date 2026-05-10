import { notFound } from 'next/navigation';
import SiteShell from '@/components/SiteShell';
import { pageContent, toSlug } from '@/lib/pageContent';

function findContentBySlug(items, pageSlug) {
  for (const item of items) {
    const itemSlug = toSlug(item.navLabel || item.title);

    if (itemSlug === pageSlug && item.body) {
      return item;
    }

    if (item.children) {
      const found = findContentBySlug(item.children, pageSlug);

      if (found) {
        return found;
      }
    }
  }

  return null;
}

export default async function ChecklistPage({ params }) {
  const { category, page } = await params;
  const items = pageContent[category];

  if (!items) {
    notFound();
  }

  const content = findContentBySlug(items, page);

  if (!content) {
    notFound();
  }

  return (
    <SiteShell currentPath={`/${category}/${page}`} title={content.title || content.navLabel}>
      {content.body}
    </SiteShell>
  );
}