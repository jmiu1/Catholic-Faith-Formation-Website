'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteStructure } from '@/lib/pageContent';

export default function SiteShell({ currentPath, title, children }) {
  const [openSections, setOpenSections] = useState({
    God: true,
    Jesus: true,
    Catholicism: true
  });

  const [checkedItems, setCheckedItems] = useState({});
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('checklist-progress');

    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch {
        setCheckedItems({});
      }
    }

    setHasLoadedProgress(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedProgress) return;

    window.localStorage.setItem(
      'checklist-progress',
      JSON.stringify(checkedItems)
    );
  }, [checkedItems, hasLoadedProgress]);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <h1 className="brand">Checklist</h1>
        <nav aria-label="Checklist sections">
          {siteStructure.map((section) => (
            <div key={section.id} className="tree-section">
              <button
                type="button"
                className="tree-toggle"
                onClick={() => toggleSection(section.id)}
                aria-expanded={openSections[section.id]}
              >
                {openSections[section.id] ? '▾' : '▸'} {section.label}
              </button>

              {openSections[section.id] && (
                <ul className="tree-list">
                  {section.pages.map((pageItem) => {
                    const pagePath = `/${section.id}/${pageItem.slug}`;
                    const itemKey = `${section.id}-${pageItem.slug}`;
                    const isActive = currentPath === pagePath;

                    return (
                      <li key={pageItem.slug} className={isActive ? 'active' : ''}>
                        <label className="tree-item">
                          <input
                            type="checkbox"
                            checked={Boolean(checkedItems[itemKey])}
                            onChange={() => toggleCheck(itemKey)}
                          />

                          <Link href={pagePath}>{pageItem.navLabel}</Link>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <section className="content">
        <article className="content-card">
          <h2>{title}</h2>
          {children}
        </article>
      </section>
    </main>
  );
}
