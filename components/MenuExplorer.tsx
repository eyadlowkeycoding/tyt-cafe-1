"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { menu as fullMenu, type MenuCategory } from "@/lib/config";
import { getIcon } from "@/lib/icons";

const EGP = (n: number) => `${n} EGP`;

export function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered: MenuCategory[] = useMemo(() => {
    return fullMenu
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        items: normalizedQuery
          ? cat.items.filter((item) => item.name.toLowerCase().includes(normalizedQuery))
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [normalizedQuery, activeCategory]);

  const noResults = filtered.length === 0;

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-plum-800/40"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the menu… e.g. Latte"
          aria-label="Search menu items"
          className="w-full rounded-full border border-plum-800/15 bg-white pl-11 pr-10 py-3 text-sm text-ink placeholder:text-ink-soft/40 shadow-card focus:border-gold-400 outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-plum-800/40 hover:text-plum-800"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category chips */}
      <div className="mt-6 -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto">
        <div className="flex gap-2 w-max md:w-full md:flex-wrap md:justify-center pb-2">
          <Chip
            label="All"
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          />
          {fullMenu.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.title}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>
      </div>

      {/* Results */}
      {noResults ? (
        <p className="mt-16 text-center text-ink-soft/60 text-sm">
          Nothing matches “{query}”. Try another word, or clear the search.
        </p>
      ) : (
        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold tracking-wide uppercase transition-colors border ${
        active
          ? "bg-plum-800 text-cream border-plum-800"
          : "bg-white text-ink-soft/70 border-plum-800/12 hover:border-gold-400"
      }`}
    >
      {label}
    </button>
  );
}

function CategoryCard({ category }: { category: MenuCategory }) {
  const Icon = getIcon(category.icon);
  return (
    <div
      id={category.id}
      className={`break-inside-avoid mb-5 scroll-mt-24 rounded-xl2 bg-white p-6 ${
        category.featured
          ? "border-2 border-gold-400 shadow-gold"
          : "border border-plum-800/8 shadow-card"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
            category.featured ? "bg-gold-400 text-plum-950" : "bg-plum-800/8 text-plum-700"
          }`}
        >
          <Icon size={16} />
        </span>
        <h3 className="font-display font-bold text-lg text-ink">{category.title}</h3>
        {category.featured && (
          <span className="ml-auto text-[10px] font-bold tracking-widest uppercase text-gold-600">
            Premium
          </span>
        )}
      </div>
      <div className="mt-1.5 h-px w-10 bg-gold-400 ml-[46px]" />

      <ul className="mt-4 space-y-2.5">
        {category.items.map((item) => (
          <li key={item.name} className="price-row text-[14px]">
            <span className="text-ink-soft/90">{item.name}</span>
            <span className="fill" aria-hidden="true" />
            <span className="font-semibold text-plum-800 whitespace-nowrap">
              {EGP(item.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
