"use client";

import React, { useState } from "react";
import { Separator } from "../ui/separator";
import { categories, SubCategory, Tag } from "@/lib/data";

function TagBarList({ tags }: { tags: Tag[] }) {
  return (
    <>
      {tags.map((tag) => (
        <div className="flex items-center gap-2" key={tag.id}>
          <span className="w-48">{tag.name}</span>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div
              className="h-3 bg-red-500 rounded"
              style={{ width: `${tag.value}%` }}
            />
          </div>
          <span className="w-10 text-right">{tag.value}%</span>
        </div>
      ))}
    </>
  );
}

function CategorySection({ sub }: { sub: SubCategory }) {
  return (
    <div className="pb-1">
      <h3 className="text-lg font-semibold mb-2">{sub.title}</h3>
      <Separator />
      <div className="space-y-1">
        <TagBarList tags={sub.tags} />
      </div>
    </div>
  );
}

export default function Toggle() {
  const [selectedId, setSelectedId] = useState<string>(categories[0].id);

  const selectedCategory = categories.find(
    (c) => c.id === selectedId
  ) as Category;
  const subCategories = selectedCategory?.subCategories || [];

  // split into two roughly equal columns
  const half = Math.ceil(subCategories.length / 2);
  const leftCols = subCategories.slice(0, half);
  const rightCols = subCategories.slice(half);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-40 bg-white text-black border p-0 relative">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`w-full text-left py-6 px-6 relative border ${
              cat.id === selectedId
                ? "text-white bg-blue-900 selected-arrow"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedId(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-bold mb-4">{selectedCategory.name}</h2>
        <p className="mb-6 text-gray-600">{selectedCategory.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="rounded-xl col-span-6 space-y-6">
            {leftCols.map((sub: SubCategory) => (
              <CategorySection key={sub.key} sub={sub} />
            ))}
          </div>
          <div className="rounded-xl col-span-6 space-y-6">
            {rightCols.map((sub: SubCategory) => (
              <CategorySection key={sub.key} sub={sub} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
