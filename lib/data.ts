// utils.ts

export type Tag = {
  id: string;
  name: string;
  value: number;
};

export type SubCategory = {
  key: string; // unique internal key
  title: string; // displayed heading
  tags: Tag[]; // array of tag objects
};

export type Category = {
  id: string; // used for selection
  name: string; // displayed category name
  description: string;
  subCategories: SubCategory[];
};

export const categories: Category[] = [
  {
    id: "violence-gore-weapons",
    name: "Violence, Gore, Weapons",
    description: "Gore, violence, self‑harm, weapons",
    subCategories: [
      {
        key: "violence",
        title: "Violence",
        tags: [
          { id: "physical-violence", name: "Physical violence", value: 99 },
          { id: "combat-sport", name: "Combat sport", value: 0 },
        ],
      },
      {
        key: "gore-classes",
        title: "Gore Classes",
        tags: [
          { id: "gore", name: "Gore", value: 0 },
          { id: "very-bloody", name: "Very Bloody", value: 0 },
          { id: "slightly-bloody", name: "Slightly Bloody", value: 0 },
          { id: "body-organ", name: "Body organ", value: 0 },
          { id: "serious-injury", name: "Serious injury", value: 0 },
          { id: "superficial-injury", name: "Superficial injury", value: 0 },
          { id: "corpse", name: "Corpse", value: 0 },
          { id: "skull", name: "Skull", value: 0 },
          { id: "unconscious", name: "Unconscious", value: 0 },
          { id: "body-waste", name: "Body waste", value: 0 },
          { id: "other-gore", name: "Other gore", value: 0 },
        ],
      },
      {
        key: "gore-type",
        title: "Gore Type",
        tags: [
          { id: "animated", name: "Animated", value: 0 },
          { id: "fake", name: "Fake", value: 0 },
          { id: "real", name: "Real", value: 0 },
        ],
      },
      {
        key: "weapon-classes",
        title: "Weapon Classes",
        tags: [
          { id: "firearm", name: "Firearm", value: 0 },
          { id: "firearm-gesture", name: "Firearm gesture", value: 0 },
          { id: "firearm-toy", name: "Firearm toy", value: 0 },
          { id: "knife", name: "Knife", value: 0 },
        ],
      },
      {
        key: "firearm-type",
        title: "Firearm Type",
        tags: [
          { id: "aiming-threat", name: "Aiming threat", value: 0 },
          { id: "aiming-at-camera", name: "Aiming at camera", value: 0 },
          { id: "aiming-safe", name: "Aiming safe", value: 0 },
          { id: "in-hand-not-aiming", name: "In hand not aiming", value: 0 },
          { id: "worn-not-in-hand", name: "Worn not in hand", value: 0 },
          { id: "not-worn", name: "Not worn", value: 0 },
        ],
      },
      {
        key: "self-harm",
        title: "Self‑harm",
        tags: [
          { id: "self-harm", name: "Self-harm", value: 1 },
          { id: "real", name: "Real", value: 1 },
          { id: "fake", name: "Fake", value: 0 },
          { id: "animated", name: "Animated", value: 0 },
        ],
      },
    ],
  },
  {
    id: "nudity",
    name: "Nudity",
    description: "Adult content & suggestiveness",
    subCategories: [
      {
        key: "sexual-activity",
        title: "Sexual activity",
        tags: [
          { id: "sexual-activity", name: "Sexual activity", value: 0 },
          { id: "sexual-display", name: "Sexual display", value: 0 },
          { id: "erotica", name: "Erotica", value: 0 },
          { id: "very-suggestive", name: "Very suggestive", value: 0 },
          { id: "suggestive", name: "Suggestive", value: 0 },
          { id: "mildly-suggestive", name: "Mildly suggestive", value: 0 },
          { id: "none", name: "None", value: 99 },
        ],
      },
      {
        key: "context",
        title: "Context",
        tags: [
          { id: "sea-lake-pool", name: "Sea, lake, pool", value: 0 },
          { id: "other-outdoor", name: "Other outdoor", value: 0 },
          { id: "other-indoor", name: "Other indoor", value: 99 },
        ],
      },
      {
        key: "suggestive-classes",
        title: "Suggestive classes",
        tags: [
          { id: "bikini", name: "Bikini", value: 0 },
          { id: "cleavage", name: "Cleavage", value: 0 },
          { id: "lingerie", name: "Lingerie", value: 0 },
          { id: "male-chest", name: "Male chest", value: 0 },
          { id: "male-underwear", name: "Male underwear", value: 0 },
          { id: "minishort", name: "Minishort", value: 0 },
          { id: "miniskirt", name: "Miniskirt", value: 0 },
          { id: "nudity-art", name: "Nudity art", value: 0 },
          { id: "other-suggestive", name: "Other suggestive", value: 0 },
          { id: "schematic", name: "Schematic", value: 0 },
          { id: "sextoy", name: "Sextoy", value: 0 },
          { id: "suggestive-focus", name: "Suggestive focus", value: 0 },
          { id: "suggestive-pose", name: "Suggestive pose", value: 0 },
          { id: "swimwear-male", name: "Swimear male", value: 0 },
          { id: "swimwear-one-piece", name: "Swimwear one piece", value: 0 },
          { id: "visibly-undressed", name: "Visibly undressed", value: 0 },
        ],
      },
    ],
  },
  {
    id: "hate-sensitive-topics",
    name: "Hate & Sensitive Topics",
    description: "Offensive, hateful or sensitive content",
    subCategories: [
      {
        key: "hate-classes",
        title: "Hate classes",
        tags: [
          { id: "nazi", name: "Nazi", value: 0 },
          {
            id: "asian-swastika-not-hate",
            name: "Asian swastika (not hate)",
            value: 0,
          },
          { id: "confederate", name: "Confederate", value: 0 },
          { id: "supremacist", name: "Supremacist", value: 0 },
          { id: "terrorist", name: "Terrorist", value: 0 },
          { id: "middle-finger", name: "Middle finger", value: 0 },
        ],
      },
      {
        key: "military-classes",
        title: "Military classes",
        tags: [
          { id: "military-equipment", name: "Military equipment", value: 0 },
          { id: "military-personnel", name: "Military personnel", value: 0 },
          {
            id: "military-profile-photo",
            name: "Military profile photo",
            value: 0,
          },
        ],
      },
      {
        key: "destruction-fire-classes",
        title: "Destruction & Fire classes",
        tags: [
          {
            id: "building-major-damage",
            name: "Building major damage",
            value: 0,
          },
          {
            id: "minor-building-damage",
            name: "Minor building damage",
            value: 0,
          },
          { id: "building-on-fire", name: "Building on fire", value: 0 },
          { id: "building-burned", name: "Building burned", value: 0 },
          {
            id: "major-vehicle-damage",
            name: "Major vehicle damage",
            value: 0,
          },
          {
            id: "minor-vehicle-damage",
            name: "Minor vehicle damage",
            value: 0,
          },
          { id: "vehicle-on-fire", name: "Vehicle on fire", value: 0 },
          { id: "vehicle-burned", name: "Vehicle burned", value: 0 },
          { id: "wildfire", name: "Wildfire", value: 0 },
          { id: "unsafe-fire", name: "Unsafe fire", value: 0 },
          { id: "violent-protest", name: "Violent protest", value: 0 },
        ],
      },
    ],
  },
  {
    id: "substances-and-vices",
    name: "Substances & Vices",
    description: "Drugs, alcohol, tobacco",
    subCategories: [
      {
        key: "recreational-drugs",
        title: "Recreational drugs",
        tags: [
          { id: "cannabis", name: "Cannabis", value: 0 },
          { id: "cannabis-logo-only", name: "Cannabis logo only", value: 0 },
          { id: "cannabis-plant", name: "Cannabis plant", value: 0 },
          { id: "cannabis-drug", name: "Cannabis drug", value: 0 },
          {
            id: "other-recreational-drug",
            name: "Other recreational drug",
            value: 0,
          },
        ],
      },
      {
        key: "medical",
        title: "Medical",
        tags: [
          { id: "pills", name: "Pills", value: 0 },
          { id: "paraphernalia", name: "Paraphernalia", value: 0 },
        ],
      },
      {
        key: "tobacco",
        title: "Tobacco",
        tags: [
          { id: "regular-tobacco", name: "Regular tobacco", value: 0 },
          { id: "ambiguous-tobacco", name: "Ambiguous tobacco", value: 0 },
        ],
      },
      {
        key: "alcohol",
        title: "Alcohol",
        tags: [{ id: "alcohol", name: "Alcohol", value: 0 }],
      },
    ],
  },
];
