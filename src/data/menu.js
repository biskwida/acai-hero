// ============================================================
// ACAI HERO — full menu, extracted item-by-item from the Acai Hero
// delivery pages (Glovo primary; cross-checked with Wolt & Bolt Food).
// Prices in EUR (€), converted from BGN at Bulgaria's fixed euro-changeover
// rate of 1 EUR = 1.95583 BGN. Edit freely — the Menu section is data-driven.
// ============================================================

export const VENUE = {
  name: 'Acai Hero',
  fullName: 'ACAI HERO SUPERFOODS™',
  city: 'Sofia, Bulgaria',
  rating: '98%',
  ratingNote: 'on Glovo',
  instagram: 'https://www.instagram.com/acai.hero/',
  instagramHandle: '@acai.hero',
  order: {
    glovo: 'https://glovoapp.com/bg/en/sofia/acai-nation-foods-sof/',
    wolt: 'https://wolt.com/en/bgr/sofia/restaurant/acai-hero',
    bolt: 'https://food.bolt.eu/en/328-sofia/p/158073-acai-hero/',
  },
  // Two Sofia locations, each with its own address, hours and coordinates.
  locations: [
    {
      id: 'vitosha',
      name: 'bul. Vitosha',
      street: 'bul. Vitosha 65',
      area: 'Sofia Center',
      hours: 'Every day · 10:00 – 21:00',
      lat: 42.6895845,
      lng: 23.3196362,
      maps: 'https://www.google.com/maps/place/Acai+Hero+(bul.+Vitosha)/@42.6895845,23.3196362,17z/data=!4m6!3m5!1s0x40aa85466d1ec455:0xee0c286ac401ee75!8m2!3d42.6895845!4d23.3196362!16s%2Fg%2F11nbz5g31v',
    },
    {
      id: 'krastova',
      name: 'Krastova Vada',
      street: 'ul. Boris Rumenov 2А',
      area: 'South Sofia',
      hours: 'Every day · 10:00 – 19:45',
      lat: 42.654648,
      lng: 23.316462,
      maps: 'https://www.google.com/maps/place/Acai+Hero+(Krastova+Vada)/@42.654648,23.316462,17z/data=!4m6!3m5!1s0x40aa852e4d396b0b:0xcd28d73a32a1caec!8m2!3d42.654648!4d23.316462!16s%2Fg%2F11wc1rqb98',
    },
  ],
}

export const CURRENCY = '€'

// tag keys → label + accent color token
export const TAGS = {
  bestseller: { label: 'Bestseller', color: 'var(--gold-deep)' },
  protein: { label: 'Protein', color: 'var(--leaf-deep)' },
  new: { label: 'New', color: 'var(--coral-deep)' },
  customize: { label: 'Build your own', color: 'var(--acai)' },
  deal: { label: 'Deal', color: 'var(--coral-deep)' },
  functional: { label: 'Functional', color: 'var(--leaf-deep)' },
}

// Build-Your-Own toppings, from the Acai Hero "Build Your Açaí Bowl" page on Wolt.
// One source of truth — the menu category and the interactive builder both read this.
export const BUILD = {
  base: { name: 'Build Your Açaí Bowl', price: '5.69' },
  standardPrice: '1.02',
  premiumPrice: '1.53',
  standard: [
    'Vegan granola', 'Protein', 'Vegan protein', 'Peanut butter', 'Chia pudding',
    'Banana', 'Strawberries', 'Nougat-chocolate cream', 'Cocoa nibs', 'Lotus Biscoff',
    'Paçoca', 'Natural honey', 'Condensed milk', 'Sliced almonds', 'Bee pollen',
    'Chia seeds', 'Goji berries', 'Pumpkin seeds', 'Coconut',
  ],
  premium: [
    'Blueberries', 'Mango', 'Passion fruit', 'Vegan chocolate chips',
    'Omega-3 cream · Custard Tart', 'Omega-3 cream · Cherry Chocolate',
    'Omega-3 cream · Vanilla Fudge', 'Omega-3 cream · Cinnamon Bun',
    'Omega-3 cream · Not PB & Jelly',
  ],
}

export const MENU = [
  {
    id: 'bowls',
    name: 'Açaí Bowls',
    tagline: 'Real Amazon açaí, blended thick and piled high.',
    items: [
      { name: 'Carioca', desc: 'Açaí, granola, fresh banana, strawberries. The Rio classic.', price: '7.60', tags: [] },
      { name: 'Coco Berry', desc: 'Açaí, roasted coconut chips, mango and strawberries.', price: '7.60', tags: [] },
      { name: 'Nutty Heaven', desc: 'Açaí, granola, fresh banana, peanut butter and pecans.', price: '7.60', tags: ['bestseller'] },
      { name: 'Samba Bowl', desc: 'Açaí, granola, peanut butter, strawberries, blueberries, Biscoff.', price: '8.60', tags: ['bestseller'] },
      { name: 'Choco Paradise', desc: 'Açaí, banana, strawberries, chocolate chips and hazelnut cream.', price: '8.60', tags: ['bestseller'] },
      { name: 'Protein Power', desc: 'Açaí, whey or vegan protein, granola, banana, strawberries, chia.', price: '8.60', tags: ['protein'] },
      { name: 'Pistachio Dream', desc: 'Açaí, roasted coconut chips, raspberries, banana, pistachio cream.', price: '9.60', tags: ['new'] },
      { name: 'Summer Vibe', desc: 'Açaí, granola, strawberries, coconut chips and passion fruit.', price: '9.66', tags: [] },
    ],
  },
  {
    id: 'build',
    name: 'Build Your Own',
    tagline: 'Your base, your toppings, your rules.',
    items: [
      { name: BUILD.base.name, desc: 'A thick Amazon-açaí base — then make it yours with any of the toppings below.', price: BUILD.base.price, tags: ['customize'] },
      { name: 'Standard toppings', desc: BUILD.standard.join(' · '), price: BUILD.standardPrice, tags: [] },
      { name: 'Premium toppings', desc: BUILD.premium.join(' · '), price: BUILD.premiumPrice, tags: [] },
    ],
  },
  {
    id: 'smoothies',
    name: 'Açaí Berry Smoothies',
    tagline: 'Sippable superfruit, blended to order.',
    items: [
      { name: 'Açaí Original', desc: '100% açaí with banana, peanut butter, oat milk and a touch of honey.', price: '5.50', tags: [] },
      { name: 'Protein Punch', desc: 'Oat milk, banana, whey or vegan protein and activated charcoal.', price: '5.50', tags: ['protein'] },
      { name: 'Blue Magic', desc: 'Mango, banana, blue spirulina and almond milk.', price: '5.50', tags: [] },
      { name: 'Açaí Berry Blast', desc: 'Açaí, blackberry, raspberry, strawberry, blueberry, almond milk.', price: '5.06', tags: [] },
      { name: 'Purple Jungle', desc: 'Açaí, dragon fruit, banana, coconut and almond milk.', price: '6.08', tags: [] },
      { name: 'Açaí Gainz', desc: 'Açaí, protein, oats, banana and almond milk.', price: '6.08', tags: ['protein'] },
    ],
  },
  {
    id: 'matcha',
    name: 'Matcha',
    tagline: 'Ceremonial-grade matcha, with the milk of your choice.',
    items: [
      { name: 'Matcha Latte', desc: 'Ceremonial-grade matcha for true heroes.', price: '4.90', tags: [] },
      { name: 'Açaí Berry Matcha', desc: 'Matcha meets açaí — clean energy and antioxidants.', price: '4.90', tags: [] },
      { name: 'Strawberry Matcha', desc: 'Ceremonial matcha layered with fresh strawberry.', price: '4.90', tags: [] },
      { name: 'Salted Vanilla Matcha', desc: 'Matcha with Maldon salt and vanilla.', price: '4.90', tags: [] },
    ],
  },
  {
    id: 'coffee',
    name: 'Brazilian Coffee & Hot',
    tagline: '100% organic Brazilian Arabica, pulled fresh.',
    items: [
      { name: 'Brazilian Espresso', desc: 'A single shot for true coffee enthusiasts.', price: '2.00', tags: [] },
      { name: 'Double Brazilian Espresso', desc: 'A double shot — the ideal start to the day.', price: '2.50', tags: [] },
      { name: 'Americano', desc: 'Long and smooth, for the coffee lovers.', price: '2.30', tags: [] },
      { name: 'Cappuccino', desc: 'Creamy and incredible, just as it should be.', price: '2.80', tags: [] },
      { name: 'Flat White', desc: 'Double espresso with a precise milk ratio.', price: '3.50', tags: [] },
      { name: 'Hot Matcha Latte', desc: 'Warm matcha latte with plant-based milk.', price: '4.50', tags: [] },
    ],
  },
  {
    id: 'omega',
    name: 'Omega-3 Smoothies',
    tagline: 'Functional creams — DHA, MCT, collagen and antioxidants.',
    items: [
      { name: 'Omega-3 DHA + MCT · Vanilla Fudge', desc: '3000 mg MCT, 400 mg DHA and vitamin E.', price: '2.50', tags: ['functional'] },
      { name: 'Omega-3 DHA + MCT · Cinnamon Bun', desc: 'The same DHA + MCT boost, warm-spiced.', price: '2.50', tags: ['functional'] },
      { name: 'Omega-3 DHA + MCT · Not PB & Jelly', desc: 'Peanut-butter-and-jelly energy, functional.', price: '2.50', tags: ['functional'] },
      { name: 'Skin, Hair & Immunity · Custard Tart', desc: 'Omega-3 ALA with B5, B6, C, D3, E and zinc.', price: '2.50', tags: ['functional'] },
      { name: 'Collagen + Astaxanthin · Cherry Chocolate', desc: 'Omega-3 with collagen peptides and Hawaiian astaxanthin.', price: '2.50', tags: ['functional'] },
      { name: 'Omega-3 Starter Pack ×5', desc: 'All five flavors — a balanced week of DHA, MCT, collagen and antioxidants.', price: '11.90', tags: ['deal'] },
    ],
  },
  {
    id: 'drinks',
    name: 'Cold Drinks',
    tagline: 'Brazilian sodas, coconut water and the essentials.',
    items: [
      { name: 'Guaraná Antarctica', desc: 'The iconic Brazilian guaraná soda.', price: '3.00', tags: [] },
      { name: 'Thai Coco Coconut Water · 520 ml', desc: 'Young coconut water with real fruit pieces.', price: '4.40', tags: [] },
      { name: 'Thai Coco Coconut Water · 330 ml', desc: 'Pure young-coconut water.', price: '3.50', tags: [] },
      { name: 'Red Bull', desc: 'Classic energy, when you need the wings.', price: '3.00', tags: [] },
      { name: 'Devin Mineral Water', desc: 'Still Bulgarian mineral water, 400 ml.', price: '2.00', tags: [] },
    ],
  },
  {
    id: 'bundles',
    name: 'Bundles',
    tagline: 'Share the superfruit — or pair it perfectly.',
    items: [
      { name: 'Amazon Boost', desc: 'Any açaí bowl + organic Brazilian coffee.', price: '9.63', tags: ['deal'] },
      { name: 'Tropical Glow', desc: 'Any açaí bowl + a matcha latte.', price: '11.90', tags: ['deal'] },
      { name: 'Açaí Bowl Trio', desc: 'Three bowls of your choice, to share.', price: '21.90', tags: [] },
      { name: 'Açaí Bowl Fest', desc: 'Five bowls for the whole crew.', price: '41.90', tags: [] },
    ],
  },
  {
    id: 'store',
    name: 'Acai Hero Store',
    tagline: 'Take the hero home — real açaí and pantry heroes.',
    items: [
      { name: 'Açaí Berry Ready-to-Eat', desc: 'Real Amazon açaí pulp, bowl-ready in minutes.', price: '10.17', tags: [] },
      { name: 'Acai Hero Peanut Butter', desc: '100% natural, no added sugar.', price: '15.29', tags: [] },
      { name: 'Acai Hero Vegan Granola', desc: 'Gluten-free — the perfect crunchy topping.', price: '6.08', tags: [] },
      { name: 'Acai Hero Starter Pack', desc: 'Everything you need for açaí bowls at home.', price: '28.07', tags: [] },
    ],
  },
]

// Bestsellers spotlight (maps to optional photos in /public/images)
export const SPOTLIGHT = [
  { name: 'Choco Paradise', desc: 'Açaí, banana, strawberries, chocolate chips, hazelnut cream.', price: '8.60', img: 'bowl-choco.jpg', accent: 'var(--acai)' },
  { name: 'Samba Bowl', desc: 'Granola, peanut butter, strawberries, blueberries, Biscoff.', price: '8.60', img: 'bowl-samba.jpg', accent: 'var(--coral-deep)' },
  { name: 'Nutty Heaven', desc: 'Granola, fresh banana, peanut butter and pecans.', price: '7.60', img: 'bowl-nutty.jpg', accent: 'var(--leaf-deep)' },
]
