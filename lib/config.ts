// ============================================================================
// TYT — TAKE YOUR TIME — SITE CONFIGURATION
// Edit everything here: contact info, hours, offers, and the full menu.
// Nothing else in the codebase needs to change when prices or items change.
// ============================================================================

export const siteConfig = {
  name: "TYT",
  fullName: "Take Your Time",
  tagline: "Slow down. One good cup at a time.",
  description:
    "A premium café in 10th of Ramadan City built around one idea: take your time. Specialty coffee, iced drinks, smoothies and shakes made properly, never rushed.",

  // ---- Location -------------------------------------------------------
  address: {
    line1: "TYT — Take Your Time",
    line2: "10th of Ramadan City, Al Sharqia Governorate, Egypt",
    line3: "Add exact street / building here",
  },
  googleMapsUrl: "https://maps.google.com/?q=10th+of+Ramadan+City+Egypt",

  // ---- Hours ------------------------------------------------------------
  hours: [
    { days: "Saturday – Thursday", time: "9:00 AM – 2:00 AM" },
    { days: "Friday", time: "1:00 PM – 2:00 AM" },
  ],

  // ---- Contact / Delivery ------------------------------------------------
  delivery: [
    { label: "Delivery Line 1", number: "01092923000" },
    { label: "Delivery Line 2", number: "01090264649" },
  ],

  // WhatsApp needs digits only, with country code (Egypt = 20), no leading 0
  whatsapp: [
    { label: "WhatsApp Line 1", display: "01092923000", number: "201092923000" },
    { label: "WhatsApp Line 2", display: "01090264649", number: "201090264649" },
  ],

  // ---- Social -------------------------------------------------------------
  social: {
    instagram: "https://instagram.com/tyt.cafe",
    facebook: "https://facebook.com/tyt.cafe",
    tiktok: "https://tiktok.com/@tyt.cafe",
  },

  // ---- Brand highlights (Home page) ---------------------------------------
  highlights: [
    {
      icon: "Coffee",
      title: "Quality Coffee",
      text: "Beans sourced with care, pulled with precision — every single cup.",
    },
    {
      icon: "Sparkles",
      title: "Good Vibes",
      text: "A calm purple-and-gold space made for slowing down, not rushing out.",
    },
    {
      icon: "Star",
      title: "Great Taste",
      text: "Recipes tuned to a standard we don't compromise on, from V60 to shakes.",
    },
    {
      icon: "Heart",
      title: "Made With Love",
      text: "Small details, done properly, every time you order — dine-in or delivery.",
    },
  ],

  // ---- Offers (Home page) — edit freely, add/remove as needed -------------
  offers: [
    {
      title: "Weekend Special",
      text: "Any Specialty Coffee + Croissant, every Friday & Saturday.",
      badge: "Fri–Sat",
    },
    {
      title: "Cold Drinks Offer",
      text: "Buy any 2 Iced Coffees, save on the second cup.",
      badge: "Iced",
    },
    {
      title: "Coffee Offer",
      text: "Loyalty stamp card — your 6th Hot Coffee is on us.",
      badge: "Loyalty",
    },
    {
      title: "Special Combo",
      text: "Frappé + Croissant combo, priced to make afternoons easier.",
      badge: "Combo",
    },
  ],

  // ---- About copy -----------------------------------------------------
  about: {
    heading: "The idea behind TYT",
    paragraphs: [
      "TYT stands for Take Your Time — and that's the whole philosophy. In a city that moves fast, we built a room where you don't have to.",
      "Every drink on our menu, from a straight shot of espresso to a slow V60 pour, is made to the same standard: unhurried, deliberate, and genuinely good.",
      "Whether you're staying for an hour or grabbing delivery on your way somewhere else, we want it to feel like the best five minutes of your day.",
    ],
  },
} as const;

// ============================================================================
// MENU
// ============================================================================

export type MenuItem = {
  name: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  icon: string; // lucide-react icon name
  items: MenuItem[];
  featured?: boolean; // gets the premium bordered treatment
};

export const menu: MenuCategory[] = [
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    icon: "Coffee",
    items: [
      { name: "Single Espresso", price: 40 },
      { name: "Double Espresso", price: 55 },
      { name: "American Coffee", price: 55 },
      { name: "Cappuccino", price: 65 },
      { name: "Latte", price: 65 },
      { name: "Cortado", price: 65 },
      { name: "Spanish Latte", price: 80 },
      { name: "Macchiato", price: 40 },
      { name: "Nutella Coffee", price: 75 },
      { name: "Lotus Coffee", price: 80 },
      { name: "Flat White", price: 70 },
      { name: "Pistachio Coffee", price: 85 },
      { name: "White Mocha", price: 65 },
      { name: "Turkish Coffee", price: 35 },
      { name: "Turkish Coffee Double", price: 45 },
      { name: "Turkish Coffee With Milk", price: 45 },
      { name: "Turkish Coffee With Flavors", price: 50 },
      { name: "Nescafe", price: 65 },
      { name: "TYT Coffee", price: 85 },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced Coffee",
    icon: "CupSoda",
    items: [
      { name: "Iced Latte", price: 75 },
      { name: "Iced Spanish Latte", price: 75 },
      { name: "Iced Cappuccino", price: 60 },
      { name: "Iced Mocha", price: 75 },
      { name: "Iced White Mocha", price: 75 },
      { name: "Matcha Latte", price: 80 },
      { name: "Caramel Macchiato", price: 80 },
      { name: "Salted Caramel Latte", price: 75 },
      { name: "Spanish Matcha", price: 80 },
      { name: "Strawberry Matcha", price: 80 },
      { name: "Mango Matcha", price: 80 },
      { name: "Bottle Iced Spanish Latte", price: 95 },
      { name: "Boba Iced Coffee", price: 95 },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    icon: "GlassWater",
    items: [
      { name: "Smooth Lemon Mint", price: 80 },
      { name: "TYT Smoothie", price: 85 },
      { name: "Smoothie Mixed Berry", price: 85 },
      { name: "Smoothie Passion Fruit", price: 85 },
      { name: "Smoothie BioPincalada", price: 85 },
      { name: "Smoothie Blueberry", price: 85 },
    ],
  },
  {
    id: "hot-non-coffee",
    title: "Hot Non-Coffee",
    icon: "CupSoda",
    items: [
      { name: "Red Tea", price: 25 },
      { name: "Green Tea", price: 25 },
      { name: "Flavored Tea", price: 35 },
      { name: "Anise", price: 25 },
      { name: "Mint", price: 25 },
      { name: "Herbal Cocktail", price: 45 },
      { name: "Apple Cider", price: 45 },
      { name: "Hot Chocolate", price: 70 },
      { name: "Hot Wagan", price: 70 },
      { name: "Hot Lotus", price: 85 },
    ],
  },
  {
    id: "specialty-coffee",
    title: "Specialty Coffee",
    icon: "Award",
    featured: true,
    items: [
      { name: "V60 Hot or Cold", price: 120 },
      { name: "Syphon Hot or Cold", price: 120 },
      { name: "Chemex Hot or Cold", price: 120 },
      { name: "Cold Brew", price: 110 },
      { name: "Aeropress Hot or Cold", price: 120 },
      { name: "French Press", price: 80 },
    ],
  },
  {
    id: "fresh-juices",
    title: "Fresh Juices",
    icon: "Citrus",
    items: [
      { name: "Mango", price: 70 },
      { name: "Guava", price: 70 },
      { name: "Strawberry", price: 75 },
      { name: "Orange", price: 75 },
      { name: "Lemon or Lemon Mint", price: 55 },
      { name: "Alaska Cocktail", price: 75 },
      { name: "Mango Peach Cocktail", price: 80 },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    icon: "Milk",
    items: [
      { name: "Vanilla Shake", price: 85 },
      { name: "Blueberry Vanilla Shake", price: 90 },
      { name: "Strawberry Shake", price: 85 },
      { name: "Pistachio Shake", price: 95 },
      { name: "Cake Shake", price: 105 },
      { name: "Cookies Shake", price: 105 },
      { name: "Mango Shake", price: 85 },
      { name: "Oreo Shake", price: 90 },
    ],
  },
  {
    id: "coffee-frappe",
    title: "Coffee Frappé",
    icon: "Snowflake",
    items: [
      { name: "Vanilla Coffee Frappe", price: 95 },
      { name: "Caramel Frappe", price: 95 },
      { name: "Mocha Frappe", price: 105 },
      { name: "Lotus Frappe", price: 95 },
      { name: "Cookies Frappe", price: 105 },
      { name: "TYT Frappe", price: 105 },
      { name: "White Mocha Frappe", price: 95 },
      { name: "Irish Frappe", price: 105 },
    ],
  },
  {
    id: "non-coffee-frappe",
    title: "Non-Coffee Frappé",
    icon: "Snowflake",
    items: [
      { name: "Vanilla Frappe", price: 95 },
      { name: "Strawberry Frappe", price: 95 },
      { name: "Mango Frappe", price: 95 },
      { name: "Blueberry Frappe", price: 100 },
      { name: "Passion Frappe", price: 95 },
    ],
  },
  {
    id: "soda-soft-drinks",
    title: "Refresh Soda & Soft Drinks",
    icon: "Sparkles",
    items: [
      { name: "Soft Drink", price: 85 },
      { name: "Red Bull", price: 90 },
      { name: "Mojito Soda", price: 90 },
      { name: "Red Bull Coffee", price: 85 },
      { name: "Red Bull Mix Berry", price: 95 },
      { name: "Scotch Mint", price: 105 },
      { name: "Sunshine", price: 105 },
      { name: "Cherry Cola", price: 85 },
      { name: "Boba Soda", price: 90 },
    ],
  },
  {
    id: "croissant",
    title: "Croissant",
    icon: "Croissant",
    items: [
      { name: "Plain Croissant", price: 60 },
      { name: "Cheese Croissant", price: 70 },
      { name: "Turkey Cheese Croissant", price: 130 },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    icon: "Plus",
    items: [
      { name: "Shot", price: 25 },
      { name: "Sauce", price: 25 },
      { name: "Flavor", price: 25 },
      { name: "Ice Cream", price: 30 },
      { name: "Whipped Cream", price: 30 },
      { name: "Nuts", price: 35 },
      { name: "Nutella", price: 25 },
      { name: "Milk", price: 25 },
    ],
  },
];
