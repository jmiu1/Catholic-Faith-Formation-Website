import GodPage1 from '@/content/god/godPage1';
import GodPage2 from '@/content/god/godPage2';
import GodPage3 from '@/content/god/godPage3';

import JesusPage1 from '@/content/jesus/jesusPage1';
import JesusPage2 from '@/content/jesus/jesusPage2';
import JesusPage3 from '@/content/jesus/jesusPage3';

import RenewalOfBaptismalPromises from '@/content/catholicism/RenewalOfBaptismalPromises';

import Renunciation from '@/content/catholicism/Renunciation';

import Trinity_God from '@/content/catholicism/Trinity_God';
import Trinity_Jesus from '@/content/catholicism/Trinity_Jesus';
import Trinity_HolySpirit from '@/content/catholicism/Trinity_HolySpirit';

import HolyCatholicChurch_Papacy from '@/content/catholicism/HolyCatholicChurch_Papacy';
import HolyCatholicChurch_ApostolicSuccession from '@/content/catholicism/HolyCatholicChurch_ApostolicSuccession';
import HolyCatholicChurch_Magisterium from '@/content/catholicism/HolyCatholicChurch_Magisterium';
import HolyCatholicChurch_FourMarksOfTheChurch from '@/content/catholicism/HolyCatholicChurch_FourMarksOfTheChurch';

import Eschatology_CommunionOfSaints from '@/content/catholicism/Eschatology_CommunionOfSaints';
import Eschatology_ForgivenessOfSins from '@/content/catholicism/Eschatology_ForgivenessOfSins';
import Eschatology_ResurrectionOfTheBody from '@/content/catholicism/Eschatology_ResurrectionOfTheBody';
import Eschatology_LifeEverlasting from '@/content/catholicism/Eschatology_LifeEverlasting';

import Sacraments_Baptism from '@/content/catholicism/Sacraments_Baptism';
import Sacraments_Eucharist from '@/content/catholicism/Sacraments_Eucharist';

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
      navLabel: 'Section Overview: Renewal of Baptismal Promises',
      body: <RenewalOfBaptismalPromises />
    },
    {
      navLabel: 'Renunciation',
      body: <Renunciation />
    },
    {
      id: 'Trinity',
      navLabel: 'Trinity',
      children: [
        {
          navLabel: 'God, the Father Almighty',
          body: <Trinity_God />
        },
        {
          navLabel: 'Jesus Christ, His Only Son, Our Lord',
          body: <Trinity_Jesus />
        },
        {
          navLabel: 'The Holy Spirit',
          body: <Trinity_HolySpirit />
        }
      ]
    },
    {
      id: 'Holy Catholic Church',
      navLabel: 'Holy Catholic Church',
      children: [
        {
          navLabel: 'Papacy / Primacy of Peter',
          body: <HolyCatholicChurch_Papacy />
        },
        {
          navLabel: 'Apostolic Succession',
          body: <HolyCatholicChurch_ApostolicSuccession />
        },
        {
          navLabel: 'Magisterium',
          body: <HolyCatholicChurch_Magisterium />
        },
        {
          navLabel: 'The Four Marks of the Church',
          body: <HolyCatholicChurch_FourMarksOfTheChurch />
        }
      ]
    },
    {
      id: 'Eschatology',
      navLabel: 'Eschatology',
      children: [
        {
          navLabel: 'Communion of Saints',
          body: <Eschatology_CommunionOfSaints />
        },
        {
          navLabel: 'Forgiveness of Sins',
          body: <Eschatology_ForgivenessOfSins />
        },
        {
          navLabel: 'Resurrection of the Body',
          body: <Eschatology_ResurrectionOfTheBody />
        },
        {
          navLabel: 'Life Everlasting',
          body: <Eschatology_LifeEverlasting />
        }
      ]
    },
    {
      id: 'Sacraments',
      navLabel: 'Sacraments',
      children: [
        {
          navLabel: 'Baptism',
          body: <Sacraments_Baptism />
        },
        {
          navLabel: 'Eucharist',
          body: <Sacraments_Eucharist />
        }
      ]
    }
  ]
};

export const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

function toNavItem(page) {
  const navItem = {
    navLabel: page.navLabel
  };

  if (page.children) {
    navItem.id = page.id || toSlug(page.navLabel);
    navItem.children = page.children.map(toNavItem);
  } else {
    navItem.slug = toSlug(page.navLabel);
  }

  return navItem;
}

export const siteStructure = Object.entries(pageContent).map(
  ([categoryId, pages]) => ({
    id: categoryId,
    label: categoryId,
    pages: pages.map(toNavItem)
  })
);