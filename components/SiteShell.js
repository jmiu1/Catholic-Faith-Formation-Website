'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const treeData = [
  {
    id: 'god',
    label: 'God',
    pages: ['page-1', 'page-2', 'page-3']
  },
  {
    id: 'jesus',
    label: 'Jesus',
    pages: ['page-4', 'page-5', 'page-6']
  },
  {
    id: 'catholicism',
    label: 'Catholicism',
    pages: ['page-7', 'page-8', 'page-9']
  }
];

export default function SiteShell({ currentPath, title, description }) {
  const [openSections, setOpenSections] = useState({
    god: true,
    jesus: true,
    catholicism: true
  });
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const saved = window.localStorage.getItem('checklist-progress');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('checklist-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

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
          {treeData.map((section) => (
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
                  {section.pages.map((pageSlug) => {
                    const pagePath = `/${section.id}/${pageSlug}`;
                    const itemKey = `${section.id}-${pageSlug}`;
                    const isActive = currentPath === pagePath;

                    return (
                      <li key={pageSlug} className={isActive ? 'active' : ''}>
                        <label className="tree-item">
                          <input
                            type="checkbox"
                            checked={Boolean(checkedItems[itemKey])}
                            onChange={() => toggleCheck(itemKey)}
                          />
                          <Link href={pagePath}>{pageSlug.replace('-', ' ')}</Link>
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
          <p>{description}</p>
        </article>
      </section>
    </main>
  );
}
