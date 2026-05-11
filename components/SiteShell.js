'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteStructure, toSlug } from '@/lib/pageContent';

export default function SiteShell({ children }) {
  const currentPath = usePathname();

  const [openSections, setOpenSections] = useState({
    God: true,
    Jesus: true,
    Catholicism: true,
    Trinity: true,
    HolyCatholicChurch: true,
    Sacraments: true,
    Eschatology: true
  });

  const [checkedItems, setCheckedItems] = useState({});
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);
  const [hasLoadedOpenSections, setHasLoadedOpenSections] = useState(false);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem('checklist-progress');

    if (savedProgress) {
      try {
        setCheckedItems(JSON.parse(savedProgress));
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

  useEffect(() => {
    const savedOpenSections = window.localStorage.getItem('open-sections');

    if (savedOpenSections) {
      try {
        setOpenSections(JSON.parse(savedOpenSections));
      } catch {
        setOpenSections({});
      }
    }

    setHasLoadedOpenSections(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedOpenSections) return;

    window.localStorage.setItem(
      'open-sections',
      JSON.stringify(openSections)
    );
  }, [openSections, hasLoadedOpenSections]);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderPageItem = (section, pageItem) => {
    const hasChildren = Array.isArray(pageItem.children) && pageItem.children.length > 0;
    const itemKey = `${section.id}-${toSlug(pageItem.navLabel || pageItem.title)}`;
    const isOpen = openSections[itemKey] ?? true;

    if (hasChildren) {
      return (
        <li key={itemKey} className="tree-nested">
          <div className="tree-item tree-parent">
            <input
              type="checkbox"
              checked={Boolean(checkedItems[itemKey])}
              onChange={() => toggleCheck(itemKey)}
            />

            <button
              type="button"
              className="tree-subtoggle"
              onClick={() => toggleSection(itemKey)}
              aria-expanded={isOpen}
            >
              {isOpen ? '▾' : '▸'} {pageItem.navLabel}
            </button>
          </div>

          {isOpen && (
            <ul className="tree-list nested-list">
              {pageItem.children.map((child) => renderPageItem(section, child))}
            </ul>
          )}
        </li>
      );
    }

    const pagePath = `/${section.id}/${toSlug(pageItem.navLabel || pageItem.title)}`;
    const isActive = currentPath === pagePath;

    return (
      <li key={itemKey} className={isActive ? 'active' : ''}>
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
  };

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <h1 className="brand">Faith Formation Checklist</h1>

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
                  {section.pages.map((pageItem) =>
                    renderPageItem(section, pageItem)
                  )}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <section className="content">
        <article className="content-card">{children}</article>
      </section>
    </main>
  );
}