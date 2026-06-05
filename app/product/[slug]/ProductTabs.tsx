"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import type { Block } from "@/lib/sanity";

const TAB_LABELS = [
  { key: "characteristics", label: "Характеристики" },
  { key: "application", label: "Сфера застосування" },
  { key: "preparation", label: "Підготовка / Приготування" },
  { key: "storage", label: "Зберігання / Гарантії" },
] as const;

type TabKey = typeof TAB_LABELS[number]["key"];

interface Props {
  tabs: {
    characteristics?: Block[];
    application?: Block[];
    preparation?: Block[];
    storage?: Block[];
  };
}

const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{children}</p>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-sm font-semibold text-gray-900 mt-4 mb-1">{children}</h4>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
  },
};

export default function ProductTabs({ tabs }: Props) {
  const [active, setActive] = useState<TabKey>("characteristics");

  const content = tabs[active];

  return (
    <div className="mt-10">
      {/* Tab menu */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {TAB_LABELS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              active === key
                ? "border-[#ec6907] text-[#ec6907]"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[120px]">
        {content && content.length > 0 ? (
          <PortableText value={content} components={ptComponents} />
        ) : (
          <p className="text-sm text-gray-400">Інформація відсутня.</p>
        )}
      </div>
    </div>
  );
}
