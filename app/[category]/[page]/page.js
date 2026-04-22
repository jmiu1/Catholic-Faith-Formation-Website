import { notFound } from 'next/navigation';
import SiteShell from '@/components/SiteShell';

const validPages = {
  god: ['page-1', 'page-2', 'page-3'],
  jesus: ['page-4', 'page-5', 'page-6'],
  catholicism: ['page-7', 'page-8', 'page-9']
};

export default async function ChecklistPage({ params }) {
  const { category, page } = await params;
  const pages = validPages[category];

  if (!pages || !pages.includes(page)) {
    notFound();
  }

  return (
    <SiteShell
      currentPath={`/${category}/${page}`}
      title={`${category[0].toUpperCase()}${category.slice(1)} - ${page.replace('-', ' ')}`}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
  );
}
