"use client";

import React, { useState } from "react";
import { Separator } from "./ui/separator";

const categories = [
  "Nudity",
  "Violence, Gore, Weapons",
  "Hate & Sensitive Topics",
  "Substances & Vices",
  "Text & QR content",
  "Content description",
];

const violenceData = {
  "Weapon classes": {
    Firearm: 99,
    "Firearm gesture": 0,
    "Firearm toy": 0,
    Knife: 0,
  },
  "Firearm type": { Animated: 0 },
  "Firearm action": {
    "Aiming threat": 0,
    "Aiming at camera": 99,
    "Aiming safe": 0,
    "In hand not aiming": 0,
    "Worn not in hand": 0,
    "Not worn": 0,
  },
  Violence: { "Physical violence": 0, "Combat sport": 0 },
  "Gore classes": {
    Gore: 0,
    "Very Bloody": 0,
    "Slightly Bloody": 0,
    "Body organ": 0,
    "Serious injury": 0,
    "Superficial injury": 0,
    Corpse: 0,
    Skull: 0,
    Unconscious: 0,
    "Body waste": 0,
    "Other gore": 0,
  },
  "Gore type": { Animated: 0, Fake: 0, Real: 0 },
  "Self-harm": { "Self-harm": 0 },
};

function Toggle() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Violence, Gore, Weapons"
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-40 bg-white text-black border p-0  relative">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`w-full text-left py-6 px-6 relative border ${
              cat === selectedCategory
                ? "text-white bg-blue-900 selected-arrow"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
        {selectedCategory === "Violence, Gore, Weapons" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="rounded-xl col-span-6">
                {" "}
                {Object.entries(violenceData).map(([section, values]) => (
                  <div key={section}>
                    <h3 className="text-lg font-semibold mb-2">{section}</h3>
                    <Separator/>
                    <div className="space-y-1 ">
                      {Object.entries(values).map(([label, value]) => (
                        <>
                          <div key={label} className="flex items-center gap-2">
                            <span className="w-48">{label}</span>
                            <div className="w-full bg-gray-200 h-3 rounded">
                              <div
                                className="h-3 bg-red-500 rounded"
                                style={{ width: `${value}%` }}
                              />
                            </div>
                            <span className="w-10 text-right">{value}%</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl col-span-6">
                {" "}
                {Object.entries(violenceData).map(([section, values]) => (
                  <div key={section}>
                    <h3 className="text-lg font-semibold mb-2">{section}</h3>
                    <Separator/>
                    <div className="space-y-1 ">
                      {Object.entries(values).map(([label, value]) => (
                        <>
                          <div key={label} className="flex items-center gap-2">
                            <span className="w-48">{label}</span>
                            <div className="w-full bg-gray-200 h-3 rounded">
                              <div
                                className="h-3 bg-red-500 rounded"
                                style={{ width: `${value}%` }}
                              />
                            </div>
                            <span className="w-10 text-right">{value}%</span>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Toggle;
