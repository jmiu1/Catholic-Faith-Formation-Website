import GodsExistence_KalamCosmological from '@/content/god/GodsExistence_KalamCosmological';

import GodsExistence_Aquinas5WaysOverview from '@/content/god/GodsExistence_Aquinas5WaysOverview';
import GodsExistence_Motion from '@/content/god/GodsExistence_Motion';
import GodsExistence_EfficientCauses from '@/content/god/GodsExistence_EfficientCauses';
import GodsExistence_Contingency from '@/content/god/GodsExistence_Contingency';
import GodsExistence_DegreesOfPerfection from '@/content/god/GodsExistence_DegreesOfPerfection';
import GodsExistence_FinalCause from '@/content/god/GodsExistence_DegreesOfPerfection';

import GodsExistence_FineTuning from '@/content/god/GodsExistence_FineTuning';
import GodsExistence_IntelligentDesign from '@/content/god/GodsExistence_IntelligentDesign';
import GodsExistence_Morality from '@/content/god/GodsExistence_Morality';
import GodsExistence_DeEnteEtEssensia from '@/content/god/GodsExistence_DeEnteEtEssensia';

import God_Providence_FreeWill_Love from '@/content/god/God_Providence_FreeWill_Love';
import God_PersonalTestimonies from '@/content/god/God_PersonalTestimonies';

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
      id: 'Existence',
      navLabel: 'Existence',
      children: [
        {
          navLabel: 'Kalam Cosmological',
          body: <GodsExistence_KalamCosmological />
        },
        {
          id: 'Aquinas5Ways',
          navLabel: 'Aquinas 5 Ways',
          children: [
            {
              navLabel: 'Section Overview: Summa Theologica',
              body: <GodsExistence_Aquinas5WaysOverview />
            },
            {
              navLabel: 'Motion',
              body: <GodsExistence_Motion />
            },
            {
              navLabel: 'Efficient Causes',
              body: <GodsExistence_EfficientCauses />
            },
            {
              navLabel: 'Contingency',
              body: <GodsExistence_Contingency />
            },
            {
              navLabel: 'Degrees of Perfection',
              body: <GodsExistence_DegreesOfPerfection />
            },
            {
              navLabel: 'Final Cause',
              body: <GodsExistence_FinalCause />
            },
          ]
        },
        {
          navLabel: 'Fine-Tuning',
          body: <GodsExistence_FineTuning />
        },
        {
          navLabel: 'Intelligent Design',
          body: <GodsExistence_IntelligentDesign />
        },        
        {
          navLabel: 'Morality',
          body: <GodsExistence_Morality />
        },
        {
          navLabel: 'De Ente et Essia',
          body: <GodsExistence_DeEnteEtEssensia />
        },
      ]
    },
    {
      navLabel: 'Providence, Free Will, and Love',
      body: <God_Providence_FreeWill_Love />
    },
    {
      navLabel: 'Personal Testimonies',
      body: <God_PersonalTestimonies />
    },
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