import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// const categories = [
//   {
//     id: "nudity",
//     name: "Nudity",
//     description: "Adult content & suggestiveness",
//     keywords: ["nudity"],
//     classes: {
//       intensity_classes: [
//         "sexual_activity",
//         "sexual_display",
//         "erotica",
//         "very_suggestive",
//         "suggestive",
//         "mildly_suggestive",
//       ],
//       suggestive_classes: [],
//       context: [],
//     },
//   },
//   {
//     id: "violence",
//     name: "Violence, Gore, Weapons",
//     description: "Adult content & suggestiveness",
//     keywords: ["violence"],
//     classes: {
//       intensity_classes: [
//         "sexual_activity",
//         "sexual_display",
//         "erotica",
//         "very_suggestive",
//         "suggestive",
//         "mildly_suggestive",
//       ],
//       suggestive_classes: [],
//       context: [],
//     },
//   },
// ];

const violenceTags = [
  {
    id: "physical-violence",
    name: "Physical violence",
    value: 99,
  },
  {
    id: "combat-sport",
    name: "Combat sport",
    value: 0,
  },
];

const goreTags = [
  {
    id: "gore",
    name: "Gore",
    value: 0,
  },
  {
    id: "very-bloody",
    name: "Very Bloody",
    value: 0,
  },
  {
    id: "slightly-bloody",
    name: "Slightly Bloody",
    value: 0,
  },
  {
    id: "body-organ",
    name: "Body organ",
    value: 0,
  },
  {
    id: "serious-injury",
    name: "Serious injury",
    value: 0,
  },
  {
    id: "superficial-injury",
    name: "Superficial injury",
    value: 0,
  },
  {
    id: "corpse",
    name: "Corpse",
    value: 0,
  },
  {
    id: "skull",
    name: "Skull",
    value: 0,
  },
  {
    id: "unconscious",
    name: "Unconscious",
    value: 0,
  },
  {
    id: "body-waste",
    name: "Body waste",
    value: 0,
  },
  {
    id: "other-gore",
    name: "Other gore",
    value: 0,
  },
];

const realismTags = [
  {
    id: "animated",
    name: "Animated",
    value: 0,
  },
  {
    id: "fake",
    name: "Fake",
    value: 0,
  },
  {
    id: "real",
    name: "Real",
    value: 0,
  },
];

const weaponTags = [
  {
    id: "firearm",
    name: "Firearm",
    value: 0,
  },
  {
    id: "firearm-gesture",
    name: "Firearm gesture",
    value: 0,
  },
  {
    id: "firearm-toy",
    name: "Firearm toy",
    value: 0,
  },
  {
    id: "knife",
    name: "Knife",
    value: 0,
  },
];

const firearmType = [
  {
    id: "firearmType",
    name: "Animated",
    value: 0,
  },
];

const aimingTags = [
  {
    id: "aiming-threat",
    name: "Aiming threat",
    value: 0,
  },
  {
    id: "aiming-at-camera",
    name: "Aiming at camera",
    value: 0,
  },
  {
    id: "aiming-safe",
    name: "Aiming safe",
    value: 0,
  },
  {
    id: "in-hand-not-aiming",
    name: "In hand not aiming",
    value: 0,
  },
  {
    id: "worn-not-in-hand",
    name: "Worn not in hand",
    value: 0,
  },
  {
    id: "not-worn",
    name: "Not worn",
    value: 0,
  },
];

const selfHarmTags = [
  {
    id: "self-harm",
    name: "Self-harm",
    value: 1,
  },
  {
    id: "real",
    name: "Real",
    value: 1,
  },
  {
    id: "fake",
    name: "Fake",
    value: 0,
  },
  {
    id: "animated",
    name: "Animated",
    value: 0,
  },
];

export {
  violenceTags,
  goreTags,
  realismTags,
  weaponTags,
  firearmType,
  aimingTags,
  selfHarmTags,
};
