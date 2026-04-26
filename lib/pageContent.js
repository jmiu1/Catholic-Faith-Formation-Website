import GodPage1 from '@/content/god/godPage1';
import GodPage2 from '@/content/god/godPage2';
import GodPage3 from '@/content/god/godPage3';
import JesusPage1 from '@/content/jesus/jesusPage1';
import JesusPage2 from '@/content/jesus/jesusPage2';
import JesusPage3 from '@/content/jesus/jesusPage3';
import CatholicismPage1 from '@/content/catholicism/catholicismPage1';
import CatholicismPage2 from '@/content/catholicism/catholicismPage2';
import CatholicismPage3 from '@/content/catholicism/catholicismPage3';

export const pageContent = {
    God: {
        'godPage1': {
            title: 'godPage1',
            navLabel: 'godPage1',
            body: <GodPage1 />
        },
        'godPage2': {
            title: 'godPage2',
            navLabel: 'godPage2',
            body: <GodPage2 />
        },
        'godPage3': {
            title: 'godPage3',
            navLabel: 'godPage3',
            body: <GodPage3 />
        }
    },
    Jesus: {
        'jesusPage1': {
            title: 'jesusPage1',
            navLabel: 'jesusPage1',
            body: <JesusPage1 />
        },
        'jesusPage2': {
            title: 'jesusPage2',
            navLabel: 'jesusPage2',
            body: <JesusPage2 />
        },
        'jesusPage3': {
            title: 'jesusPage3',
            navLabel: 'jesusPage3',
            body: <JesusPage3 />
        }
    },
    Catholicism: {
        'catholicismPage1': {
            title: 'catholicismPage1',
            navLabel: 'catholicismPage1',
            body: <CatholicismPage1 />
        },
        'catholicismPage2': {
            title: 'catholicismPage2',
            navLabel: 'catholicismPage2',
            body: <CatholicismPage2 />
        },
        'catholicismPage3': {
            title: 'catholicismPage3',
            navLabel: 'catholicismPage3',
            body: <CatholicismPage3 />
        }
    }
};

export const siteStructure = Object.entries(pageContent).map(
  ([categoryId, pages]) => ({
    id: categoryId,
    label: categoryId,
    pages: Object.entries(pages).map(([slug, value]) => ({
      slug,
      navLabel: value.navLabel || value.title
    }))
  })
);