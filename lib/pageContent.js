import GodPage1 from '@/content/god/godPage1';
import GodPage2 from '@/content/god/godPage2';
import GodPage3 from '@/content/god/godPage3';
import JesusPage1 from '@/content/jesus/jesusPage1';
import JesusPage2 from '@/content/jesus/jesusPage2';
import JesusPage3 from '@/content/jesus/jesusPage3';
import RenewalOfBaptismalPromises from '@/content/catholicism/RenewalOfBaptismalPromises';
import CatholicismPage2 from '@/content/catholicism/catholicismPage2';
import CatholicismPage3 from '@/content/catholicism/catholicismPage3';

export const pageContent = {
  God: [
    {
      title: 'godPage1',
      navLabel: 'godPage1',
      body: <GodPage1 />
    },
    {
      title: 'godPage2',
      navLabel: 'godPage2',
      body: <GodPage2 />
    },
    {
      title: 'godPage3',
      navLabel: 'godPage3',
      body: <GodPage3 />
    }
  ],

  Jesus: [
    {
      title: 'jesusPage1',
      navLabel: 'jesusPage1',
      body: <JesusPage1 />
    },
    {
      title: 'jesusPage2',
      navLabel: 'jesusPage2',
      body: <JesusPage2 />
    },
    {
      title: 'jesusPage3',
      navLabel: 'jesusPage3',
      body: <JesusPage3 />
    }
  ],

  Catholicism: [
    {
      navLabel: 'Renewal of Baptismal Promises',
      body: <RenewalOfBaptismalPromises />
    },
    {
      title: 'catholicismPage2',
      navLabel: 'catholicismPage2',
      body: <CatholicismPage2 />
    },
    {
      title: 'catholicismPage3',
      navLabel: 'catholicismPage3',
      body: <CatholicismPage3 />
    }
  ]
};

export const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

export const siteStructure = Object.entries(pageContent).map(
  ([categoryId, pages]) => ({
    id: categoryId,
    label: categoryId,
    pages: pages.map((page) => ({
      slug: toSlug(page.navLabel),
      navLabel: page.navLabel
    }))
  })
);