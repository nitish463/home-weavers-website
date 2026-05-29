const localStorage = (() => {
  const memory = new Map();
  try {
    if (window.localStorage) return window.localStorage;
  } catch {
    // Fall back to in-memory storage when browser privacy settings block localStorage.
  }
  return {
    getItem: (key) => (memory.has(key) ? memory.get(key) : null),
    setItem: (key, value) => memory.set(key, String(value)),
    removeItem: (key) => memory.delete(key)
  };
})();

const defaultProducts = [
  {
    id: "hearthline-comforter-set",
    name: "Hearthline 6 Piece Comforter Set",
    brand: "Home Weavers Studio",
    category: "Bedding",
    subcategory: "Comforters",
    price: 119,
    compareAt: 189,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    size: "Queen / King",
    sizes: ["Queen","King"],
    stock: 9,
    badge: "20% off",
    rating: 4.8,
    reviews: 42,
    colors: ["Oat", "Clay", "Indigo"],
    best: true,
    description: "A complete bedroom refresh with a softly layered comforter, relaxed shams, and accent pillows styled in warm hotel-suite neutrals.",
    details: ["Includes comforter, two shams, and three decorative pillows", "Designed for a layered designer-bedroom look", "Machine washable cold"]
  },
  {
    id: "madder-quilt-set",
    name: "Madder Stripe 3 Piece Quilt Set",
    brand: "Home Weavers Edit",
    category: "Bedding",
    subcategory: "Quilts",
    price: 98,
    compareAt: 148,
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64b2f?auto=format&fit=crop&w=900&q=80",
    size: "Twin / Full / Queen",
    sizes: ["Twin","Full","Queen"],
    stock: 11,
    badge: "Sale",
    rating: 4.6,
    reviews: 28,
    colors: ["Clay", "Oat"],
    best: false,
    description: "A breathable quilt set with a casual stripe, tailored shams, and enough texture to make the bed feel finished without feeling formal.",
    details: ["Includes quilt and two shams", "Ideal for year-round layering", "Pre-washed for a soft hand"]
  },
  {
    id: "hearthline-runner",
    name: "Hearthline Handwoven Runner",
    brand: "Home Weavers",
    category: "Rugs",
    subcategory: "Runner Rugs",
    price: 248,
    compareAt: 315,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    size: "2.5 x 8 ft",
    sizes: ["2.5 x 8 ft"],
    stock: 5,
    badge: "New",
    rating: 4.9,
    reviews: 19,
    colors: ["Oat", "Clay", "Moss", "Indigo"],
    best: true,
    description: "A low-profile hallway runner that adds pattern and warmth without crowding narrow spaces.",
    details: ["Wool and cotton blend", "Works well in entryways and halls", "Flatweave construction for easy door clearance"]
  },
  {
    id: "moss-check-rug",
    name: "Moss Check Area Rug",
    brand: "Loom House",
    category: "Rugs",
    subcategory: "Area Rugs",
    price: 395,
    compareAt: 465,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    size: "5 x 7 ft",
    sizes: ["5 x 7 ft"],
    stock: 3,
    badge: "Limited",
    rating: 4.7,
    reviews: 13,
    colors: ["Moss", "Oat"],
    best: false,
    description: "A living-room area rug with a quiet check pattern that anchors sofas, lounge chairs, and coffee tables.",
    details: ["Hand-finished edges", "Best for medium traffic rooms", "Ships rolled and ready to place"]
  },
  {
    id: "oat-stripe-throw",
    name: "Oat Stripe Chenille Throw",
    brand: "Home Weavers",
    category: "Throws",
    subcategory: "Blankets",
    price: 49,
    compareAt: 79,
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=900&q=80",
    size: "52 x 68 in",
    sizes: ["52 x 68 in"],
    stock: 8,
    badge: "Best seller",
    rating: 4.9,
    reviews: 87,
    colors: ["Oat", "Indigo"],
    best: true,
    description: "A soft sofa throw with subtle striping, finished fringe, and a cozy weight for everyday lounging.",
    details: ["Machine washable cold", "Soft brushed finish", "Finished fringe on two sides"]
  },
  {
    id: "clay-border-throw",
    name: "Clay Border Woven Throw",
    brand: "Loom House",
    category: "Throws",
    subcategory: "Blankets",
    price: 84,
    compareAt: 124,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    size: "54 x 72 in",
    sizes: ["54 x 72 in"],
    stock: 4,
    badge: "Small run",
    rating: 4.5,
    reviews: 21,
    colors: ["Clay", "Oat"],
    best: false,
    description: "A medium-weight throw styled for sofas, benches, and guest beds with a warm border detail.",
    details: ["Cotton and wool blend", "Warm medium weight", "Small-batch woven finish"]
  },
  {
    id: "indigo-pillow-pair",
    name: "Indigo Check Decor Pillow Pair",
    brand: "Home Weavers Studio",
    category: "Home Decor",
    subcategory: "Decorative Pillows",
    price: 72,
    compareAt: 118,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    size: "18 x 18 in",
    sizes: ["18 x 18 in"],
    stock: 6,
    badge: "+ Colors",
    rating: 4.8,
    reviews: 34,
    colors: ["Indigo", "Oat"],
    best: true,
    description: "A pair of decor pillow covers that add a crisp checked accent to sofas, beds, and reading chairs.",
    details: ["Covers only", "Fits standard inserts", "Concealed zipper closure"]
  },
  {
    id: "hearth-pillow-cover",
    name: "Hearth Square Pillow Cover",
    brand: "Home Weavers",
    category: "Home Decor",
    subcategory: "Pillow Covers",
    price: 39,
    compareAt: 58,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    size: "20 x 20 in",
    sizes: ["20 x 20 in"],
    stock: 9,
    badge: "Ready",
    rating: 4.6,
    reviews: 17,
    colors: ["Clay", "Oat", "Moss"],
    best: false,
    description: "A single square pillow cover for layering a warm accent onto neutral seating or bedding.",
    details: ["Removable cover", "Linen-look backing", "Spot clean or dry clean recommended"]
  },
  {
    id: "gathering-runner",
    name: "Gathering Table Runner",
    brand: "Home Weavers",
    category: "Table Linens",
    subcategory: "Table Runners",
    price: 64,
    compareAt: 96,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    size: "16 x 90 in",
    sizes: ["16 x 90 in"],
    stock: 7,
    badge: "Sale",
    rating: 4.7,
    reviews: 25,
    colors: ["Oat", "Clay", "Indigo"],
    best: false,
    description: "A long table runner that gives weeknight dinners and hosting spreads a styled, finished center line.",
    details: ["Cotton and linen blend", "Machine washable cold", "Pairs with Gathering Napkins"]
  },
  {
    id: "gathering-napkins",
    name: "Gathering Napkins Set of 4",
    brand: "Home Weavers Edit",
    category: "Table Linens",
    subcategory: "Napkins",
    price: 49,
    compareAt: 72,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=900&q=80",
    size: "Set of 4",
    sizes: ["Set of 4"],
    stock: 10,
    badge: "+ Colors",
    rating: 4.8,
    reviews: 51,
    colors: ["Oat", "Moss", "Indigo"],
    best: true,
    description: "A set of four woven napkins that makes the table feel pulled together without being precious.",
    details: ["Set of four", "18 x 18 in each", "Pre-washed cotton for a relaxed drape"]
  },
  {
    id: "linen-shower-curtain",
    name: "Linen Texture Shower Curtain",
    brand: "Home Weavers Bath",
    category: "Bath",
    subcategory: "Shower Curtains",
    price: 58,
    compareAt: 89,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    size: "72 x 72 in",
    sizes: ["72 x 72 in"],
    stock: 14,
    badge: "New",
    rating: 4.7,
    reviews: 31,
    colors: ["Oat", "Moss"],
    best: true,
    description: "A soft textured shower curtain that brings a tailored, spa-like layer to the bath.",
    details: ["Buttonhole top", "Liner recommended", "Machine washable cold"]
  },
  {
    id: "waffle-bath-towel-set",
    name: "Waffle Bath Towel Set",
    brand: "Home Weavers Bath",
    category: "Bath",
    subcategory: "Towels",
    price: 74,
    compareAt: 112,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
    size: "Set of 6",
    sizes: ["Set of 2", "Set of 4", "Set of 6"],
    stock: 18,
    badge: "Best seller",
    rating: 4.8,
    reviews: 64,
    colors: ["Oat", "Clay", "Indigo"],
    best: true,
    description: "A textured towel set with an absorbent waffle weave and a polished hotel-bath look.",
    details: ["Includes bath towels, hand towels, and washcloths", "Quick-dry cotton weave", "Machine washable"]
  },
  {
    id: "moss-loop-bath-rug",
    name: "Moss Loop Bath Rug",
    brand: "Home Weavers Bath",
    category: "Bath",
    subcategory: "Bath Rugs",
    price: 46,
    compareAt: 68,
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=80",
    size: "21 x 34 in",
    sizes: ["17 x 24 in", "21 x 34 in"],
    stock: 12,
    badge: "+ Colors",
    rating: 4.6,
    reviews: 22,
    colors: ["Moss", "Oat"],
    best: false,
    description: "A plush bath rug that softens tile floors and adds grounded color near the tub or vanity.",
    details: ["Tufted cotton pile", "Non-slip rug pad recommended", "Machine washable cold"]
  },
  {
    id: "ivory-channel-comforter-set",
    name: "Ivory Channel Comforter Set",
    brand: "Home Weavers Studio",
    category: "Bedding",
    subcategory: "Comforters",
    price: 129,
    compareAt: 198,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80",
    size: "Queen / King",
    sizes: ["Queen", "King"],
    stock: 10,
    badge: "Sale",
    rating: 4.7,
    reviews: 36,
    colors: ["Oat", "Moss"],
    best: false,
    description: "A softly channeled comforter set with a clean tailored finish and easy neutral colors for everyday bedrooms.",
    details: ["Includes comforter and two shams", "Soft cotton-blend face", "Machine washable cold"]
  },
  {
    id: "terra-cotton-quilt",
    name: "Terra Cotton Quilt Set",
    brand: "Home Weavers Edit",
    category: "Bedding",
    subcategory: "Quilts",
    price: 88,
    compareAt: 132,
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=80",
    size: "Full / Queen / King",
    sizes: ["Full", "Queen", "King"],
    stock: 13,
    badge: "Sale",
    rating: 4.6,
    reviews: 41,
    colors: ["Clay", "Oat"],
    best: false,
    description: "A lightweight quilt set with relaxed stitching, warm clay tones, and an easy layered look for guest rooms or primary beds.",
    details: ["Includes quilt and shams", "Pre-washed cotton feel", "Works as a top layer or coverlet"]
  },
  {
    id: "indigo-frame-area-rug",
    name: "Indigo Frame Area Rug",
    brand: "Loom House",
    category: "Rugs",
    subcategory: "Area Rugs",
    price: 279,
    compareAt: 389,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
    size: "5 x 7 ft",
    sizes: ["5 x 7 ft", "8 x 10 ft"],
    stock: 6,
    badge: "Sale",
    rating: 4.5,
    reviews: 18,
    colors: ["Indigo", "Oat"],
    best: false,
    description: "A framed area rug that adds structure under coffee tables, beds, and dining spaces without overpowering the room.",
    details: ["Low pile construction", "Cotton and wool blend", "Rug pad recommended"]
  },
  {
    id: "moss-ribbed-throw",
    name: "Moss Ribbed Chenille Throw",
    brand: "Home Weavers",
    category: "Throws",
    subcategory: "Blankets",
    price: 44,
    compareAt: 69,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
    size: "50 x 70 in",
    sizes: ["50 x 70 in"],
    stock: 16,
    badge: "Sale",
    rating: 4.8,
    reviews: 57,
    colors: ["Moss", "Oat", "Indigo"],
    best: true,
    description: "A ribbed chenille throw with a plush hand, soft moss color, and fringe that layers easily over sofas or beds.",
    details: ["Soft chenille texture", "Finished fringe", "Machine washable cold"]
  },
  {
    id: "oat-boucle-pillow-pair",
    name: "Oat Boucle Pillow Pair",
    brand: "Home Weavers Studio",
    category: "Home Decor",
    subcategory: "Decorative Pillows",
    price: 59,
    compareAt: 92,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    size: "20 x 20 in",
    sizes: ["20 x 20 in"],
    stock: 12,
    badge: "Sale",
    rating: 4.7,
    reviews: 29,
    colors: ["Oat", "Clay"],
    best: false,
    description: "A pair of boucle pillow covers that brings soft texture to sectionals, beds, and accent chairs.",
    details: ["Set of two covers", "Concealed zipper", "Fits 20 x 20 in inserts"]
  },
  {
    id: "clay-waffle-towel-set",
    name: "Clay Waffle Towel Set",
    brand: "Home Weavers Bath",
    category: "Bath",
    subcategory: "Towels",
    price: 64,
    compareAt: 98,
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=80",
    size: "Set of 6",
    sizes: ["Set of 4", "Set of 6"],
    stock: 15,
    badge: "Sale",
    rating: 4.6,
    reviews: 33,
    colors: ["Clay", "Oat", "Moss"],
    best: false,
    description: "A quick-dry waffle towel set with warm clay color and everyday bath-ready texture.",
    details: ["Includes bath towels, hand towels, and washcloths", "Quick-dry cotton weave", "Machine washable"]
  }
];

const catalogVersion = "sale-six-items-v1";
const categoryVersion = "home-decor-category-v1";

const defaultCategories = [
  { name: "Bedding", subcategories: ["Comforters", "Quilts", "Duvet Covers", "Sheets", "Blankets"] },
  { name: "Bath", subcategories: ["Shower Curtains", "Towels", "Bath Rugs", "Bath Accessories"] },
  { name: "Rugs", subcategories: ["Area Rugs", "Runner Rugs"] },
  { name: "Throws", subcategories: ["Blankets"] },
  { name: "Home Decor", subcategories: ["Decorative Pillows", "Pillow Covers"] },
  { name: "Table Linens", subcategories: ["Table Runners", "Napkins"] }
];
const canonicalCategoryName = (name) => (name === "Pillows" ? "Home Decor" : name);
const canonicalizeProduct = (product) => ({ ...product, category: canonicalCategoryName(product.category) });
const skuSlug = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const productWithSkuVariants = (product) => {
  const nextProduct = canonicalizeProduct(product);
  const existingVariants = Array.isArray(nextProduct.variants)
    ? nextProduct.variants.filter((variant) => variant?.sku)
    : [];
  if (existingVariants.length) return nextProduct;

  const sizes = (Array.isArray(nextProduct.sizes) && nextProduct.sizes.length ? nextProduct.sizes : [nextProduct.size || "One Size"])
    .map((item) => String(item || "").trim())
    .filter(Boolean);
  const colors = (Array.isArray(nextProduct.colors) && nextProduct.colors.length ? nextProduct.colors : ["Oat"])
    .map((item) => String(item || "").trim())
    .filter(Boolean);
  const variantStock = Math.max(0, Math.floor(Number(nextProduct.stock || 0)));
  const variants = sizes.flatMap((size) =>
    colors.map((color) => ({
      sku: `${nextProduct.id}-${skuSlug(size)}-${skuSlug(color)}`,
      size,
      color,
      price: Number(nextProduct.price || 0),
      compareAt: Number(nextProduct.compareAt || nextProduct.price || 0),
      stock: variantStock,
      active: true,
      image: nextProduct.image || "",
      images: Array.isArray(nextProduct.images) ? nextProduct.images : [],
      description: nextProduct.description || "",
      details: Array.isArray(nextProduct.details) ? nextProduct.details : []
    }))
  );
  const defaultVariant = variants[0] || {};

  return {
    ...nextProduct,
    defaultSku: nextProduct.defaultSku || defaultVariant.sku || "",
    size: sizes.join("/"),
    sizes,
    colors,
    variants
  };
};
const canonicalizeCategories = (sourceCategories = []) => {
  const categoryMap = new Map();
  sourceCategories.forEach((category) => {
    const name = canonicalCategoryName(category.name);
    const existing = categoryMap.get(name) || { name, enabled: true, disabledSubcategories: [], subcategories: [] };
    existing.enabled = existing.enabled !== false && category.enabled !== false;
    existing.disabledSubcategories = [
      ...new Set([...existing.disabledSubcategories, ...(category.disabledSubcategories || [])])
    ];
    existing.subcategories = [...new Set([...existing.subcategories, ...(category.subcategories || [])])];
    categoryMap.set(name, existing);
  });
  return [...categoryMap.values()];
};

const defaultSettings = {
  brandName: "Home Weavers Inc.",
  logoUrl: "assets/home-weavers-logo.jpeg",
  searchPlaceholder: "What can we help you find?",
  searchKeywords: "comforter, quilt, rug, bath towel, pillow, throw, dining, sale",
  promo: "Memorial Week Sale: 20% off select woven sets · Free shipping over $250",
  heroEyebrow: "Designer-inspired home textiles",
  heroTitle: "Refresh every room with woven texture.",
  heroText:
    "Shop coordinated bedding, rugs, throws, pillows, and dining textiles made in small batches for layered, lived-in homes.",
  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=80",
      eyebrow: "Home Weavers edit",
      title: "Designed layers for a finished home",
      text: "Shop bedding, bath, rugs, pillows, and dining textiles selected for comfort, color, and everyday style.",
      button: "Shop New Arrivals >",
      url: "new-arrivals.html#shop"
    },
    {
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
      eyebrow: "Bedding refresh",
      title: "Soft layers, finished beds",
      text: "Comforters, quilts, sheets, and blankets made to build a complete bedroom story.",
      button: "Shop Bedding >",
      url: "bedding.html#shop"
    },
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
      eyebrow: "Decor update",
      title: "Color and texture for every room",
      text: "Accent pillows, rugs, and woven details that make everyday spaces feel styled.",
      button: "Shop Home Décor >",
      url: "pillows.html#shop"
    }
  ],
  bannerImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=80",
  bannerEyebrow: "New season edit",
  bannerTitle: "Layered comfort for every room",
  bannerButton: "Shop Bedding >",
  bannerUrl: "bedding.html#shop",
  secondaryBannerImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=80",
  secondaryBannerEyebrow: "Bath and dining refresh",
  secondaryBannerTitle: "Small updates, finished spaces",
  secondaryBannerButton: "Shop Bath >",
  secondaryBannerUrl: "bath.html#shop",
  categoryImages: {
    Bedding: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    Bath: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    Rugs: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    Throws: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=900&q=80",
    "Home Decor": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    "Table Linens": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80"
  },
  homeAboutTitle: "Designer Home Décor & Furnishings",
  homeAboutText:
    "Designing a living space you love with textiles and décor you are passionate about has never been more enjoyable. At Home Weavers, we help customers style their homes with coordinated bedding, bath, rugs, pillows, dining linens, and everyday décor at a thoughtful value.",
  homeAboutText2:
    "From bedroom layers and bathroom textiles to accent rugs, throw pillows, table linens, and seasonal home accessories, our collections are designed to make every room feel complete.",
  exclusiveTitle: "Home Weavers Exclusive",
  exclusiveText: "Sign up for sale and trend alerts. Get 15% off your next purchase.",
  exclusivePlaceholder: "Email address",
  exclusiveButton: "Subscribe",
  footerCopyright: "© 2026 Home Weavers. All rights reserved.",
  footerServiceTitle: "Customer Service",
  footerPhone: "510.931.9647",
  footerHours: "Mon - Fri\n10:00AM - 6:30PM EST\nnitish@homeweavers.net",
  footerLinksText: "About Us | about-us.html\nContact Us | contact-us.html\nReturns | returns.html\nAdmin | admin.html",
  footerPolicyLinksText: "Product Review | product-review.html\nPrice Match | price-match.html\nPrivacy Policy | privacy-policy.html\nRewards | rewards.html",
  footerLinks: [
    { label: "About Us", url: "about-us.html", enabled: true },
    { label: "Contact Us", url: "contact-us.html", enabled: true },
    { label: "Returns", url: "returns.html", enabled: true },
    { label: "Admin", url: "admin.html", enabled: true },
    { label: "Test 1", url: "test1.html", enabled: false },
    { label: "Test 2", url: "test2.html", enabled: false },
    { label: "Test 3", url: "test3.html", enabled: false }
  ],
  footerPolicyLinks: [
    { label: "Product Review", url: "product-review.html", enabled: true },
    { label: "Price Match", url: "price-match.html", enabled: true },
    { label: "Privacy Policy", url: "privacy-policy.html", enabled: true },
    { label: "Rewards", url: "rewards.html", enabled: true },
    { label: "Test 4", url: "test4.html", enabled: false },
    { label: "Test 5", url: "test5.html", enabled: false },
    { label: "Test 6", url: "test6.html", enabled: false }
  ],
  socialFacebookImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
  socialFacebookUrl: "https://www.facebook.com/",
  socialPinterestImage: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=80",
  socialPinterestUrl: "https://www.pinterest.com/",
  socialHouzzImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  socialHouzzUrl: "https://www.houzz.com/",
  socialInstagramImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  socialInstagramUrl: "https://www.instagram.com/",
  aboutHeroTitle: "Home textiles that make rooms feel finished.",
  aboutHeroText: "Home Weavers is built for customers who want designer-inspired rooms without making home styling feel complicated.",
  aboutHeroKicker: "About Home Weavers",
  aboutStoryKicker: "Our story",
  aboutStoryTitle: "Designed around everyday rooms.",
  aboutStoryText: "We curate bedding, bath, rugs, pillows, throws, and dining textiles around complete room stories. Each piece is chosen for texture, color, comfort, and everyday use.",
  aboutStoryText2: "Every page on this site is built so the catalog can grow with your business while keeping shopping simple for customers.",
  aboutVideoUrl: "https://www.youtube.com/embed/73C4Fa75kwA?start=18",
  aboutCard1Title: "Coordinated by category",
  aboutCard1Text: "Bedding, bath, rugs, home decor, throws, and dining pieces stay organized by category and subcategory.",
  aboutCard2Title: "Built for real selling",
  aboutCard2Text: "Products can be added, tagged for sale, grouped by color and size, and managed from the admin area.",
  aboutCard3Title: "Customer-first service",
  aboutCard3Text: "Clear contact information, returns guidance, price match details, reviews, and rewards all support the shopper.",
  contactHeroKicker: "Contact Us",
  contactHeroTitle: "We are here to help.",
  contactHeroText: "Reach Home Weavers for order questions, product details, wholesale support, or help choosing the right home textile collection.",
  contactPhoneLabel: "Phone",
  contactPhone: "510.931.9647",
  contactPhoneText: "Call for customer service and product support.",
  contactEmailLabel: "Email",
  contactEmail: "nitish@homeweavers.net",
  contactEmailText: "Send product, order, or partnership questions.",
  contactAdminLabel: "Admin",
  contactAdminTitle: "Manage website",
  contactAdminText: "Update products, banners, footer links, and pages.",
  contactFormTitle: "Send us a message",
  contactNamePlaceholder: "Your name",
  contactEmailPlaceholder: "you@example.com",
  contactMessagePlaceholder: "How can we help?",
  contactButton: "Submit request",
  returnsHeroKicker: "Returns",
  returnsHeroTitle: "Simple return support.",
  returnsHeroText: "Use this page to explain how customers can return eligible items and what information they need to include.",
  returnsCard1Title: "Return window",
  returnsCard1Text: "Set your return window here, such as 30 days from delivery for unused items in original packaging.",
  returnsCard2Title: "Start a return",
  returnsCard2Text: "Ask customers to email nitish@homeweavers.net with order number, item name, and reason for return.",
  returnsCard3Title: "Condition guidelines",
  returnsCard3Text: "Clarify that washed, used, final sale, or damaged-by-customer items may not be eligible.",
  productReviewHeroKicker: "Product Review",
  productReviewHeroTitle: "Customer feedback helps shoppers choose confidently.",
  productReviewHeroText: "Use this page to explain how customers can submit reviews and what review details are most useful.",
  productReviewCard1Title: "What to include",
  productReviewCard1Text: "Encourage comments about texture, color, size, quality, and how the item looks in the room.",
  productReviewCard2Title: "Review photos",
  productReviewCard2Text: "Invite customers to send styled photos so future shoppers can see real home use.",
  productReviewCard3Title: "Moderation",
  productReviewCard3Text: "Explain that reviews may be checked for spam, offensive content, or unrelated comments before publishing.",
  priceMatchHeroKicker: "Price Match",
  priceMatchHeroTitle: "A clear policy builds trust.",
  priceMatchHeroText: "Use this page to describe when Home Weavers can match a lower advertised price.",
  priceMatchCard1Title: "Eligible items",
  priceMatchCard1Text: "Match identical items from authorized retailers when size, color, and availability are the same.",
  priceMatchCard2Title: "How to request",
  priceMatchCard2Text: "Ask customers to email the product link, competitor price, and screenshot before purchase.",
  priceMatchCard3Title: "Exclusions",
  priceMatchCard3Text: "Promos, clearance, marketplace sellers, coupons, and expired offers can be excluded here.",
  privacyPolicyHeroKicker: "Privacy Policy",
  privacyPolicyHeroTitle: "Your privacy matters.",
  privacyPolicyHeroText: "Use this page to explain what customer information is collected and how it is protected.",
  privacyPolicyCard1Title: "Information collected",
  privacyPolicyCard1Text: "Contact details, order details, site usage, and messages may be collected to operate the store.",
  privacyPolicyCard2Title: "How it is used",
  privacyPolicyCard2Text: "Information can support order processing, service replies, site improvements, and promotional emails.",
  privacyPolicyCard3Title: "Customer choices",
  privacyPolicyCard3Text: "Customers can contact Home Weavers to update information or request support with privacy questions.",
  rewardsHeroKicker: "Rewards",
  rewardsHeroTitle: "Reward loyal Home Weavers customers.",
  rewardsHeroText: "Use this page to describe points, perks, exclusive sales, or future loyalty benefits.",
  rewardsCard1Title: "Earn perks",
  rewardsCard1Text: "Customers can earn future rewards for purchases, reviews, referrals, or seasonal promotions.",
  rewardsCard2Title: "Member offers",
  rewardsCard2Text: "Use rewards to share early access, exclusive sale alerts, or special discount codes.",
  rewardsCard3Title: "Future ready",
  rewardsCard3Text: "This page is ready for a full rewards program when you decide to launch it.",
  dealTitle: "Layered bedroom sets from $119.",
  dealText: "Mix quilts, pillow covers, and throws in coordinated palettes without waiting for custom work."
};

const contentPageDefinitions = [
  { page: "about-us.html", prefix: "about", label: "About Us" },
  { page: "contact-us.html", prefix: "contact", label: "Contact Us" },
  { page: "returns.html", prefix: "returns", label: "Returns" },
  { page: "product-review.html", prefix: "productReview", label: "Product Review" },
  { page: "price-match.html", prefix: "priceMatch", label: "Price Match" },
  { page: "privacy-policy.html", prefix: "privacyPolicy", label: "Privacy Policy" },
  { page: "rewards.html", prefix: "rewards", label: "Rewards" },
  { page: "test1.html", prefix: "test1", label: "Test 1" },
  { page: "test2.html", prefix: "test2", label: "Test 2" },
  { page: "test3.html", prefix: "test3", label: "Test 3" },
  { page: "test4.html", prefix: "test4", label: "Test 4" },
  { page: "test5.html", prefix: "test5", label: "Test 5" },
  { page: "test6.html", prefix: "test6", label: "Test 6" }
];

Object.assign(defaultSettings, {
  aboutBannerImage: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=80",
  contactBannerImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=80",
  returnsBannerImage: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1800&q=80",
  productReviewBannerImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80",
  priceMatchBannerImage: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1800&q=80",
  privacyPolicyBannerImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=80",
  rewardsBannerImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=80"
});

contentPageDefinitions
  .filter((page) => page.prefix.startsWith("test"))
  .forEach((page) => {
    const title = page.label;
    Object.assign(defaultSettings, {
      [`${page.prefix}BannerImage`]: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
      [`${page.prefix}HeroKicker`]: title,
      [`${page.prefix}HeroTitle`]: `${title} page`,
      [`${page.prefix}HeroText`]: "Use this future page for a new policy, service, collection note, wholesale page, or customer information.",
      [`${page.prefix}Card1Title`]: "Section one",
      [`${page.prefix}Card1Text`]: "Edit this card from Admin > Content pages.",
      [`${page.prefix}Card2Title`]: "Section two",
      [`${page.prefix}Card2Text`]: "Use this area for details customers should know.",
      [`${page.prefix}Card3Title`]: "Section three",
      [`${page.prefix}Card3Text`]: "Turn the footer link on when this page is ready."
    });
  });

const savedCatalogVersion = localStorage.getItem("homeWeaversCatalogVersion");
const savedProducts = JSON.parse(localStorage.getItem("homeWeaversProducts") || "null");
const hasSavedCatalog = savedCatalogVersion === catalogVersion && Array.isArray(savedProducts) && savedProducts.length;
let products = hasSavedCatalog ? [...savedProducts] : [...defaultProducts];
let productsMigrated = false;
products = products.map((product) => {
  const nextProduct = productWithSkuVariants(product);
  if (nextProduct.category !== product.category) productsMigrated = true;
  if (!Array.isArray(product.variants) || !product.variants.length) productsMigrated = true;
  return nextProduct;
});

if (hasSavedCatalog) {
  const savedIds = new Set(products.map((product) => product.id));
  defaultProducts.forEach((product) => {
    if (!savedIds.has(product.id)) products.push(productWithSkuVariants(product));
  });
}

if (savedCatalogVersion !== catalogVersion) {
  localStorage.setItem("homeWeaversProducts", JSON.stringify(defaultProducts.map(productWithSkuVariants)));
  localStorage.setItem("homeWeaversCatalogVersion", catalogVersion);
} else if (hasSavedCatalog && (products.length !== savedProducts.length || productsMigrated)) {
  localStorage.setItem("homeWeaversProducts", JSON.stringify(products));
}
let selectedId = products[0]?.id || null;
let bannerOptionPage = 0;
let bannerOptionTheme = "";
const savedSettings = JSON.parse(localStorage.getItem("homeWeaversSettings") || "null") || {};
let settings = {
  ...defaultSettings,
  ...savedSettings,
  categoryImages: {
    ...defaultSettings.categoryImages,
    ...(savedSettings.categoryImages || {})
  }
};
const savedCategoryVersion = localStorage.getItem("homeWeaversCategoryVersion");
const savedCategories = JSON.parse(localStorage.getItem("homeWeaversCategories") || "null");
const cloneDefaultCategories = () => defaultCategories.map((category) => ({ ...category, subcategories: [...category.subcategories] }));
const mergeDefaultCategories = (saved = []) => {
  const merged = canonicalizeCategories(Array.isArray(saved) && saved.length ? saved : cloneDefaultCategories()).map((category) => ({
    name: canonicalCategoryName(category.name),
    enabled: category.enabled !== false,
    disabledSubcategories: [...new Set(category.disabledSubcategories || [])],
    subcategories: [...new Set(category.subcategories || [])]
  }));

  if (savedCategoryVersion !== categoryVersion) {
    const bathCategory = merged.find((item) => item.name === "Bath");
    if (bathCategory && !bathCategory.subcategories.includes("Bath Accessories")) {
      bathCategory.subcategories.push("Bath Accessories");
    }
  }

  return merged;
};
let categories = mergeDefaultCategories(savedCategories);
let activeProductCategory = null;

const selectors = {
  settingForms: document.querySelectorAll("[data-settings-form], [data-banner-form], [data-page-form]"),
  saveSettingsButtons: document.querySelectorAll("[data-save-settings]"),
  logoUpload: document.querySelector("[data-logo-upload]"),
  sectionButtons: document.querySelectorAll("[data-admin-section-target]"),
  sections: document.querySelectorAll("[data-admin-section]"),
  categoryForm: document.querySelector("[data-category-form]"),
  subcategoryForm: document.querySelector("[data-subcategory-form]"),
  categoryManager: document.querySelector("[data-category-manager]"),
  categoryImageManager: document.querySelector("[data-category-image-manager]"),
  footerLinkManager: document.querySelector("[data-footer-link-manager]"),
  pageForm: document.querySelector("[data-page-form]"),
  parentCategorySelect: document.querySelector("[data-parent-category-select]"),
  productList: document.querySelector("[data-admin-products]"),
  productForm: document.querySelector("[data-product-form]"),
  downloadProducts: document.querySelector("[data-download-products]"),
  uploadProducts: document.querySelector("[data-upload-products]"),
  downloadStock: document.querySelector("[data-download-stock]"),
  uploadStock: document.querySelector("[data-upload-stock]"),
  downloadVariants: document.querySelector("[data-download-variants]"),
  uploadVariants: document.querySelector("[data-upload-variants]"),
  imageUpload: document.querySelector("[data-image-upload]"),
  imagePreview: document.querySelector("[data-image-preview]"),
  variantRows: document.querySelector("[data-variant-rows]"),
  addVariant: document.querySelector("[data-add-variant]"),
  aiGenerate: document.querySelector("[data-ai-generate]"),
  editorTitle: document.querySelector("[data-editor-title]"),
  saveProducts: document.querySelector("[data-save-products]"),
  newProductButtons: document.querySelectorAll("[data-new-product]"),
  resetStore: document.querySelector("[data-reset-store]"),
  toast: document.querySelector("[data-admin-toast]"),
  statProducts: document.querySelector("[data-stat-products]"),
  statStock: document.querySelector("[data-stat-stock]"),
  statSale: document.querySelector("[data-stat-sale]"),
  dashboardOrders: document.querySelector("[data-dashboard-orders]"),
  dashboardVisits: document.querySelector("[data-dashboard-visits]"),
  dashboardRevenue: document.querySelector("[data-dashboard-revenue]"),
  dashboardConversion: document.querySelector("[data-dashboard-conversion]"),
  ordersList: document.querySelector("[data-admin-orders]"),
  clearOrders: document.querySelector("[data-clear-orders]"),
  couponForm: document.querySelector("[data-coupon-form]"),
  saveCoupon: document.querySelector("[data-save-coupon]"),
  couponList: document.querySelector("[data-coupon-list]"),
  subscriberList: document.querySelector("[data-subscriber-list]"),
  clearSubscribers: document.querySelector("[data-clear-subscribers]"),
  campaignForm: document.querySelector("[data-campaign-form]"),
  saveCampaign: document.querySelector("[data-save-campaign]"),
  aiCampaignMessage: document.querySelector("[data-ai-campaign-message]"),
  aiBannerOptions: document.querySelector("[data-ai-banner-options]"),
  aiDesignedBanners: document.querySelector("[data-ai-designed-banners]"),
  campaignBannerOptions: document.querySelector("[data-campaign-banner-options]"),
  sendTestCampaign: document.querySelector("[data-send-test-campaign]"),
  sendCampaign: document.querySelector("[data-send-campaign]"),
  campaignList: document.querySelector("[data-campaign-list]"),
  campaignSubscriberCount: document.querySelector("[data-campaign-subscriber-count]"),
  campaignCount: document.querySelector("[data-campaign-count]"),
  emailPreview: document.querySelector("[data-email-preview]"),
  richEditor: document.querySelector("[data-rich-editor]"),
  richMessageInput: document.querySelector('[data-campaign-form] [name="message"]'),
  richToolbar: document.querySelector(".rich-toolbar")
};

const colorMap = {
  Oat: [216, 190, 160],
  Indigo: [40, 72, 102],
  Clay: [164, 86, 60],
  Moss: [94, 111, 85]
};

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

const footerLinksFromText = (value) =>
  String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, url] = line.split("|").map((part) => part.trim());
      return { label, url: url || "#", enabled: true };
    })
    .filter((link) => link.label);

const footerLinksFor = (key, textKey) => {
  const savedLinks = Array.isArray(settings[key]) ? settings[key] : [];
  const legacyLinks = settings[textKey] ? footerLinksFromText(settings[textKey]) : [];
  const defaults = defaultSettings[key] || [];
  const byLabel = new Map();
  const testUrlFor = (label) => {
    const match = String(label || "").match(/^test\s*(\d+)/i);
    return match ? `test${match[1]}.html` : "";
  };
  [...defaults, ...legacyLinks, ...savedLinks].forEach((link) => {
    if (!link?.label) return;
    const testMatch = link.label.match(/^test\s*(\d+)/i);
    if (key === "footerLinks" && testMatch && Number(testMatch[1]) > 3) return;
    if (key === "footerPolicyLinks" && testMatch && Number(testMatch[1]) <= 3) return;
    byLabel.set(link.label, {
      label: link.label,
      url: testUrlFor(link.label) || link.url || "#",
      enabled: link.enabled !== false
    });
  });
  return [...byLabel.values()];
};

const toast = (message) => {
  selectors.toast.textContent = message;
  selectors.toast.classList.add("show");
  window.setTimeout(() => selectors.toast.classList.remove("show"), 2200);
};

const signalStorefrontUpdate = () => {
  localStorage.setItem("homeWeaversLastUpdate", String(Date.now()));
};

const saveProducts = () => {
  localStorage.setItem("homeWeaversProducts", JSON.stringify(products));
  localStorage.setItem("homeWeaversCatalogVersion", catalogVersion);
  signalStorefrontUpdate();
};

const saveSettings = () => {
  localStorage.setItem("homeWeaversSettings", JSON.stringify(settings));
  signalStorefrontUpdate();
};

const saveCategories = () => {
  localStorage.setItem("homeWeaversCategories", JSON.stringify(categories));
  localStorage.setItem("homeWeaversCategoryVersion", categoryVersion);
  signalStorefrontUpdate();
};

const readDeletedCategories = () =>
  JSON.parse(localStorage.getItem("homeWeaversDeletedCategories") || "[]");

const saveDeletedCategories = (deletedCategories) => {
  localStorage.setItem("homeWeaversDeletedCategories", JSON.stringify([...new Set(deletedCategories)]));
  signalStorefrontUpdate();
};

const readCoupons = () => JSON.parse(localStorage.getItem("homeWeaversCoupons") || "[]");
const saveCoupons = (coupons) => {
  localStorage.setItem("homeWeaversCoupons", JSON.stringify(coupons));
  signalStorefrontUpdate();
};
const readSubscribers = () => JSON.parse(localStorage.getItem("homeWeaversSubscribers") || "[]");
const saveSubscribers = (subscribers) => {
  localStorage.setItem("homeWeaversSubscribers", JSON.stringify(subscribers));
};
const readCampaigns = () => JSON.parse(localStorage.getItem("homeWeaversCampaigns") || "[]");
const saveCampaigns = (campaigns) => {
  localStorage.setItem("homeWeaversCampaigns", JSON.stringify(campaigns));
};

const normalizeCategoryData = () => {
  const deletedCategories = new Set(readDeletedCategories());
  products.forEach((product) => {
    if (deletedCategories.has(product.category)) return;
    let category = categories.find((item) => item.name === product.category);
    if (!category) {
      category = { name: product.category, subcategories: [] };
      categories.push(category);
    }
    if (product.subcategory && !category.subcategories.includes(product.subcategory)) {
      category.subcategories.push(product.subcategory);
    }
  });
  categories = categories
    .filter((category) => category.name && !deletedCategories.has(category.name))
    .map((category) => ({
      name: category.name,
      enabled: category.enabled !== false,
      disabledSubcategories: [...new Set(category.disabledSubcategories || [])],
      subcategories: [...new Set((category.subcategories || []).filter(Boolean))]
    }));
};

const readOrders = () => JSON.parse(localStorage.getItem("homeWeaversOrders") || "[]");

const saveOrders = (orders) => {
  localStorage.setItem("homeWeaversOrders", JSON.stringify(orders));
};

const isSaleTagged = (product) => String(product.badge || "").toLowerCase() === "sale";

const readAnalytics = () =>
  JSON.parse(
    localStorage.getItem("homeWeaversAnalytics") ||
      '{"visits":0,"uniqueVisitors":0,"pages":{},"firstVisit":"","lastVisit":""}'
  );

const openAdminSection = (section) => {
  const requested = section || "dashboard";
  const productCategorySlug = requested.startsWith("products-") ? requested.replace("products-", "") : "";
  const productCategory = productCategorySlug
    ? categories.find((category) => slugify(category.name) === productCategorySlug)
    : null;
  const target = productCategorySlug ? "products" : requested;
  activeProductCategory = target === "products" && productCategory ? productCategory.name : null;
  selectors.sections.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.adminSection === target);
  });
  selectors.sectionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.adminSectionTarget === target);
  });
  const nextHash = productCategory ? `products-${slugify(productCategory.name)}` : target;
  if (window.location.hash.replace("#", "") !== nextHash) {
    window.history.replaceState(null, "", `#${nextHash}`);
  }
};

const selectedProduct = () => products.find((product) => product.id === selectedId);

const updatePreview = (src) => {
  if (!src) {
    selectors.imagePreview.hidden = true;
    selectors.imagePreview.removeAttribute("src");
    return;
  }

  selectors.imagePreview.src = src;
  selectors.imagePreview.hidden = false;
};

const categoryImageFor = (category) =>
  settings.categoryImages?.[category] ||
  defaultSettings.categoryImages?.[category] ||
  products.find((product) => product.category === category)?.image ||
  defaultSettings.bannerImage;

const ensureImageOption = (src, label = "Uploaded product image") => {
  const imageField = selectors.productForm.elements.image;
  if (!src || [...imageField.options].some((option) => option.value === src)) return;

  const option = new Option(label, src);
  imageField.add(option, 0);
};

const flatSettings = () => {
  const slides = settings.heroSlides || defaultSettings.heroSlides;
  return {
    ...settings,
    heroSlide1Eyebrow: slides[0]?.eyebrow || "",
    heroSlide1Title: slides[0]?.title || "",
    heroSlide1Text: slides[0]?.text || "",
    heroSlide1Image: slides[0]?.image || "",
    heroSlide1Button: slides[0]?.button || "",
    heroSlide1Url: slides[0]?.url || "",
    heroSlide2Eyebrow: slides[1]?.eyebrow || "",
    heroSlide2Title: slides[1]?.title || "",
    heroSlide2Text: slides[1]?.text || "",
    heroSlide2Image: slides[1]?.image || "",
    heroSlide2Button: slides[1]?.button || "",
    heroSlide2Url: slides[1]?.url || "",
    heroSlide3Eyebrow: slides[2]?.eyebrow || "",
    heroSlide3Title: slides[2]?.title || "",
    heroSlide3Text: slides[2]?.text || "",
    heroSlide3Image: slides[2]?.image || "",
    heroSlide3Button: slides[2]?.button || "",
    heroSlide3Url: slides[2]?.url || ""
  };
};

const populateSettings = () => {
  renderContentPageManager();
  const values = flatSettings();
  selectors.settingForms.forEach((form) => {
    Object.entries(values).forEach(([key, value]) => {
      const field = form.elements[key];
      if (field && field.type !== "file") field.value = value ?? "";
    });
  });
  renderCategoryImageManager();
  renderFooterLinkManager();
};

const settingsFromForms = () => {
  const entries = {};
  selectors.settingForms.forEach((form) => {
    Object.assign(entries, Object.fromEntries(new FormData(form).entries()));
  });

  const heroSlides = [1, 2, 3].map((number) => ({
    image: entries[`heroSlide${number}Image`] || "",
    eyebrow: entries[`heroSlide${number}Eyebrow`] || "",
    title: entries[`heroSlide${number}Title`] || "",
    text: entries[`heroSlide${number}Text`] || "",
    button: entries[`heroSlide${number}Button`] || "",
    url: entries[`heroSlide${number}Url`] || ""
  }));

  Object.keys(entries).forEach((key) => {
    if (key.startsWith("heroSlide")) delete entries[key];
  });
  const categoryImages = { ...(settings.categoryImages || {}) };
  document.querySelectorAll("[data-category-image-input]").forEach((input) => {
    categoryImages[input.dataset.categoryImageInput] = input.value.trim();
  });
  const footerLinks = [...document.querySelectorAll('[data-footer-link-row="footerLinks"]')].map((row) => ({
    label: row.querySelector("[data-footer-link-label]")?.value.trim() || "",
    url: row.querySelector("[data-footer-link-url]")?.value.trim() || "#",
    enabled: Boolean(row.querySelector("[data-footer-link-enabled]")?.checked)
  })).filter((link) => link.label);
  const footerPolicyLinks = [...document.querySelectorAll('[data-footer-link-row="footerPolicyLinks"]')].map((row) => ({
    label: row.querySelector("[data-footer-link-label]")?.value.trim() || "",
    url: row.querySelector("[data-footer-link-url]")?.value.trim() || "#",
    enabled: Boolean(row.querySelector("[data-footer-link-enabled]")?.checked)
  })).filter((link) => link.label);

  return {
    ...settings,
    ...entries,
    categoryImages,
    footerLinks,
    footerPolicyLinks,
    heroSlides
  };
};

const populateProductForm = () => {
  const product = selectedProduct();
  if (!product) {
    selectors.productForm.reset();
    writeVariantFields([]);
    return;
  }

  selectors.editorTitle.textContent = `Edit ${product.name}`;
	  selectors.productForm.elements.category.value = product.category;
	  populateSubcategorySelect();
	  Object.entries(product).forEach(([key, value]) => {
	    const field = selectors.productForm.elements[key];
	    if (!field) return;
	
	    if (field.type === "checkbox") {
	      field.checked = Boolean(value);
	    } else if (key === "sizes") {
      field.value = value.join("\n");
    } else if (Array.isArray(value)) {
      field.value = value.join("\n");
    } else {
      field.value = value;
	    }
	  });
  const editableVariants = productVariants(product).map((variant) => ({
    ...variant,
    description: variant.description || product.description || "",
    details: variant.details?.length ? variant.details : product.details || []
  }));
  writeVariantFields(editableVariants, product.defaultSku || "");

  if (selectors.productForm.elements.saleTag) {
    selectors.productForm.elements.saleTag.checked = isSaleTagged(product);
  }
  if (selectors.productForm.elements.active) {
    selectors.productForm.elements.active.checked = productEnabled(product);
  }
};

const productCountForCategory = (categoryName) => products.filter((product) => product.category === categoryName).length;

const productCountForSubcategory = (categoryName, subcategoryName) =>
  products.filter((product) => product.category === categoryName && product.subcategory === subcategoryName).length;

const enabledLabel = (enabled) => (enabled ? "Enabled" : "Disabled");
const categoryEnabled = (category) => category?.enabled !== false;
const subcategoryEnabled = (category, subcategory) => !(category?.disabledSubcategories || []).includes(subcategory);
const productEnabled = (product) => product?.active !== false;
const productCsvColumns = [
  "id",
  "name",
  "brand",
  "category",
  "subcategory",
  "defaultSku",
  "active",
  "saleTag",
  "badge",
  "rating",
  "reviews",
  "size",
  "sizes",
  "colors",
  "variants",
  "searchWords",
  "description",
  "details"
];
const stockCsvColumns = ["id", "sku", "name", "category", "subcategory", "size", "color", "stock", "active"];
const variantCsvColumns = [
  "id",
  "name",
  "category",
  "subcategory",
  "default",
  "sku",
  "size",
  "color",
  "price",
  "compareAt",
  "stock",
  "active",
  "image",
  "images",
  "description",
  "details"
];

const csvEscape = (value) => {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const downloadCsv = (filename, columns, rows) => {
  const csv = [columns.join(","), ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else if (char !== "\r") {
      value += char;
    }
  }
  row.push(value);
  rows.push(row);
  const headers = (rows.shift() || []).map((header) => header.trim());
  return rows
    .filter((item) => item.some((cell) => String(cell).trim()))
    .map((item) => Object.fromEntries(headers.map((header, index) => [header, item[index] ?? ""])));
};

const boolFromCsv = (value, fallback = true) => {
  const text = String(value ?? "").trim().toLowerCase();
  if (!text) return fallback;
  return ["true", "yes", "1", "enabled", "active"].includes(text);
};

const listFromCsv = (value) =>
  String(value || "")
    .split(/[|\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);

const colorListFromCsv = (value) =>
  String(value || "")
    .split(/[|,\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);

const normalizeNumber = (value, fallback = 0) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

const parseVariantsText = (value) =>
  String(value || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [sku, size, color, price, compareAt, stock, image, ...images] = line.split("|").map((item) => item.trim());
      return {
        sku,
        size,
        color,
        price: normalizeNumber(price, 0),
        compareAt: normalizeNumber(compareAt, price || 0),
        stock: Math.max(0, Math.floor(normalizeNumber(stock, 0))),
        active: true,
        image,
        images: images.filter(Boolean)
      };
    })
    .filter((variant) => variant.sku && variant.size && variant.color);

const serializeVariants = (variants = []) =>
  variants
    .map((variant) =>
      [
        variant.sku,
        variant.size,
        variant.color,
        variant.price,
        variant.compareAt,
        variant.stock,
        variant.image,
        ...(variant.images || [])
      ]
        .filter((item, index) => index < 7 || String(item || "").trim())
        .join(" | ")
    )
    .join("\n");

const productVariants = (product) => (Array.isArray(product?.variants) ? product.variants.filter((variant) => variant.sku) : []);
const variantStockTotal = (variants) =>
  variants.reduce((sum, variant) => sum + (variant.active === false ? 0 : Number(variant.stock || 0)), 0);
const parseVariantImages = (value) =>
  String(value || "")
    .split(/\n+|,/)
    .map((item) => item.trim())
    .filter(Boolean);
const parseVariantDetails = (value) =>
  String(value || "")
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
const variantRowMarkup = (variant = {}, defaultSku = "") => `
  <tr data-variant-row>
    <td><input data-variant-default type="radio" name="defaultVariantSku" ${variant.sku && variant.sku === defaultSku ? "checked" : ""} aria-label="Make this SKU default"></td>
    <td><input data-variant-field="sku" type="text" value="${escapeHtml(variant.sku || "")}" placeholder="SKU"></td>
    <td><input data-variant-field="size" type="text" value="${escapeHtml(variant.size || "")}" placeholder="Queen"></td>
    <td><input data-variant-field="color" type="text" value="${escapeHtml(variant.color || "")}" placeholder="Ivory"></td>
    <td><input data-variant-field="price" type="number" min="0" step="1" value="${escapeHtml(variant.price ?? "")}"></td>
    <td><input data-variant-field="compareAt" type="number" min="0" step="1" value="${escapeHtml(variant.compareAt ?? "")}"></td>
    <td><input data-variant-field="stock" type="number" min="0" step="1" value="${escapeHtml(variant.stock ?? "")}"></td>
    <td><input data-variant-field="image" type="text" value="${escapeHtml(variant.image || "")}" placeholder="Image URL"></td>
    <td><textarea data-variant-field="images" rows="2" placeholder="One image URL per line">${escapeHtml((variant.images || []).join("\n"))}</textarea></td>
    <td><textarea data-variant-field="description" rows="2" placeholder="Description for this SKU">${escapeHtml(variant.description || "")}</textarea></td>
    <td><textarea data-variant-field="details" rows="2" placeholder="One detail per line">${escapeHtml((variant.details || []).join("\n"))}</textarea></td>
    <td><button class="sku-remove" type="button" data-remove-variant>Remove</button></td>
  </tr>
`;
const readVariantFields = () =>
  [...(selectors.variantRows?.querySelectorAll("[data-variant-row]") || [])]
    .map((row) => {
      const value = (field) => row.querySelector(`[data-variant-field="${field}"]`)?.value.trim() || "";
      const sku = value("sku");
      const size = value("size");
      const color = value("color");
      if (!sku && !size && !color) return null;
      return {
        sku,
        size,
        color,
        price: normalizeNumber(value("price"), 0),
        compareAt: normalizeNumber(value("compareAt"), value("price") || 0),
        stock: Math.max(0, Math.floor(normalizeNumber(value("stock"), 0))),
        active: true,
        image: value("image"),
        images: parseVariantImages(value("images")),
        description: value("description"),
        details: parseVariantDetails(value("details"))
      };
    })
    .filter((variant) => variant?.sku && variant.size && variant.color);
const readDefaultSkuFromRows = (variants = []) => {
  const checkedRow = selectors.variantRows?.querySelector("[data-variant-default]:checked")?.closest("[data-variant-row]");
  const checkedSku = checkedRow?.querySelector('[data-variant-field="sku"]')?.value.trim();
  return checkedSku || variants[0]?.sku || "";
};
const writeVariantFields = (variants = [], defaultSku = "") => {
  if (!selectors.variantRows) return;
  const rows = variants.length ? variants : [{}];
  const selectedSku = defaultSku || rows[0]?.sku || "";
  selectors.variantRows.innerHTML = rows.map((variant) => variantRowMarkup(variant, selectedSku)).join("");
  if (!selectors.variantRows.querySelector("[data-variant-default]:checked")) {
    const firstDefault = selectors.variantRows.querySelector("[data-variant-default]");
    if (firstDefault) firstDefault.checked = true;
  }
};
const parseVariantsFromCsvRow = (row, existing = {}) => {
  const wideVariantNumbers = [
    ...new Set(
      Object.keys(row)
        .map((key) => key.match(/^variant(\d+)Sku$/)?.[1])
        .filter(Boolean)
    )
  ];
  const wideVariants = wideVariantNumbers
    .map((number) => ({
      sku: String(row[`variant${number}Sku`] || "").trim(),
      size: String(row[`variant${number}Size`] || "").trim(),
      color: String(row[`variant${number}Color`] || "").trim(),
      price: normalizeNumber(row[`variant${number}Price`], 0),
      compareAt: normalizeNumber(row[`variant${number}CompareAt`], row[`variant${number}Price`] || 0),
      stock: Math.max(0, Math.floor(normalizeNumber(row[`variant${number}Stock`], 0))),
      active: true,
      image: String(row[`variant${number}Image`] || "").trim(),
      images: listFromCsv(row[`variant${number}Images`]),
      description: String(row[`variant${number}Description`] || "").trim(),
      details: listFromCsv(row[`variant${number}Details`])
    }))
    .filter((variant) => variant.sku && variant.size && variant.color);
  if (wideVariants.length) return wideVariants;
  return parseVariantsText(row.variants || serializeVariants(existing.variants || []));
};

const defaultVariantCopy = (product) =>
  productVariants(product).find((variant) => variant.sku === product.defaultSku) || productVariants(product)[0] || {};

const productToCsvRow = (product) => {
  const defaultVariant = defaultVariantCopy(product);
  return {
    id: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    subcategory: product.subcategory,
    defaultSku: product.defaultSku || "",
    active: productEnabled(product) ? "TRUE" : "FALSE",
    saleTag: isSaleTagged(product) ? "TRUE" : "FALSE",
    badge: product.badge,
    rating: product.rating,
    reviews: product.reviews,
    size: product.size,
    sizes: product.sizes || [],
    colors: product.colors || [],
    variants: serializeVariants(productVariants(product)),
    searchWords: product.searchWords,
    description: defaultVariant.description || product.description || "",
    details: defaultVariant.details?.length ? defaultVariant.details : product.details || []
  };
};

const variantToCsvRows = () =>
  products.flatMap((product) =>
    productVariants(product).map((variant) => ({
      id: product.id,
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      default: variant.sku === product.defaultSku ? "TRUE" : "FALSE",
      sku: variant.sku,
      size: variant.size,
      color: variant.color,
      price: variant.price,
      compareAt: variant.compareAt,
      stock: variant.stock,
      active: variant.active === false ? "FALSE" : "TRUE",
      image: variant.image,
      images: variant.images || [],
      description: variant.description || product.description || "",
      details: variant.details?.length ? variant.details : product.details || []
    }))
  );

const variantFromCsvRow = (row) => ({
  sku: String(row.sku || "").trim(),
  size: String(row.size || "").trim(),
  color: String(row.color || "").trim(),
  price: normalizeNumber(row.price, 0),
  compareAt: normalizeNumber(row.compareAt, row.price || 0),
  stock: Math.max(0, Math.floor(normalizeNumber(row.stock, 0))),
  active: boolFromCsv(row.active, true),
  image: String(row.image || "").trim(),
  images: listFromCsv(row.images),
  description: String(row.description || "").trim(),
  details: listFromCsv(row.details)
});

const productFromCsvRow = (row, existing = {}) => {
  const badge = row.badge ?? existing.badge ?? "";
  const saleTag = boolFromCsv(row.saleTag, isSaleTagged(existing));
  const productDescription = row.description || existing.description || "";
  const productDetails = listFromCsv(row.details).length ? listFromCsv(row.details) : existing.details || [];
  const variants = parseVariantsFromCsvRow(row, existing).map((variant) => ({
    ...variant,
    description: variant.description || productDescription,
    details: variant.details?.length ? variant.details : productDetails
  }));
  const variantSizes = [...new Set(variants.map((variant) => variant.size).filter(Boolean))];
  const variantColors = [...new Set(variants.map((variant) => variant.color).filter(Boolean))];
  const defaultVariant = variants.find((variant) => variant.sku === row.defaultSku) || variants[0];
  return canonicalizeProduct({
    ...existing,
    id: String(row.id || existing.id || `product-${Date.now()}`).trim(),
    name: row.name || existing.name || "Untitled product",
    brand: row.brand || existing.brand || "Home Weavers",
    category: canonicalCategoryName(row.category || existing.category || "Bedding"),
    subcategory: row.subcategory || existing.subcategory || "General",
    defaultSku: row.defaultSku || existing.defaultSku || defaultVariant?.sku || "",
    price: defaultVariant ? normalizeNumber(defaultVariant.price, 0) : normalizeNumber(row.price, existing.price || 0),
    compareAt: defaultVariant ? normalizeNumber(defaultVariant.compareAt, defaultVariant.price || 0) : normalizeNumber(row.compareAt, existing.compareAt || row.price || 0),
    stock: variants.length
      ? variantStockTotal(variants)
      : Math.max(0, Math.floor(normalizeNumber(row.stock, existing.stock || 0))),
    active: boolFromCsv(row.active, existing.active !== false),
    badge: saleTag && !String(badge).trim() ? "Sale" : badge,
    rating: normalizeNumber(row.rating, existing.rating || 0),
    reviews: Math.max(0, Math.floor(normalizeNumber(row.reviews, existing.reviews || 0))),
    size: row.size || existing.size || "",
    sizes: variantSizes.length ? variantSizes : listFromCsv(row.sizes).length ? listFromCsv(row.sizes) : existing.sizes || [],
    colors: variantColors.length ? variantColors : colorListFromCsv(row.colors).length ? colorListFromCsv(row.colors) : existing.colors || [],
    image: defaultVariant?.image || row.image || existing.image || defaultSettings.bannerImage,
    images: [],
    searchWords: row.searchWords || existing.searchWords || "",
    description: productDescription,
    details: productDetails,
    variants
  });
};

const importCsvFile = (file, mode) => {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const rows = parseCsv(String(reader.result || ""));
    if (!rows.length) {
      toast("No rows found in the uploaded file.");
      return;
    }
    const byId = new Map(products.map((product) => [product.id, product]));
	    if (mode === "stock") {
      let updated = 0;
      rows.forEach((row) => {
        const id = String(row.id || "").trim();
        const product = byId.get(id);
        if (!product) return;
        const sku = String(row.sku || "").trim();
        const variants = productVariants(product);
        const variant =
          sku && variants.find((item) => item.sku === sku)
            ? variants.find((item) => item.sku === sku)
            : variants.find((item) => item.size === row.size && item.color === row.color);
        if (variant) {
          variant.stock = Math.max(0, Math.floor(normalizeNumber(row.stock, variant.stock || 0)));
          variant.active = boolFromCsv(row.active, variant.active !== false);
          product.stock = variantStockTotal(variants);
        } else {
          product.stock = Math.max(0, Math.floor(normalizeNumber(row.stock, product.stock || 0)));
          product.active = boolFromCsv(row.active, product.active !== false);
        }
        updated += 1;
      });
      saveProducts();
      sync();
	      toast(`${updated} stock row${updated === 1 ? "" : "s"} updated.`);
	      return;
	    }
    if (mode === "variants") {
      let updated = 0;
      rows.forEach((row) => {
        const id = String(row.id || "").trim();
        const product = byId.get(id);
        if (!product) return;
        const variant = variantFromCsvRow(row);
        if (!variant.sku || !variant.size || !variant.color) return;
        const variants = productVariants(product);
        const index = variants.findIndex((item) => item.sku === variant.sku);
        if (index >= 0) variants[index] = variant;
        else variants.push(variant);
        product.variants = variants;
        if (boolFromCsv(row.default, false)) product.defaultSku = variant.sku;
        if (!product.defaultSku) product.defaultSku = variants[0]?.sku || "";
        product.sizes = [...new Set(variants.map((item) => item.size).filter(Boolean))];
        product.colors = [...new Set(variants.map((item) => item.color).filter(Boolean))];
        product.size = product.sizes.join("/");
        product.stock = variantStockTotal(variants);
        updated += 1;
      });
      saveProducts();
      sync();
      toast(`${updated} SKU row${updated === 1 ? "" : "s"} imported.`);
      return;
    }
    const imported = rows.map((row) => productFromCsvRow(row, byId.get(String(row.id || "").trim()) || {}));
    const importedIds = new Set(imported.map((product) => product.id));
    products = [...imported, ...products.filter((product) => !importedIds.has(product.id))];
    selectedId = products[0]?.id || selectedId;
    normalizeCategoryData();
    saveCategories();
    saveProducts();
    sync();
    toast(`${imported.length} product row${imported.length === 1 ? "" : "s"} imported.`);
  });
  reader.readAsText(file);
};

const populateCategorySelects = () => {
  const categoryOptions = categories.map((category) => `<option>${escapeHtml(category.name)}</option>`).join("");
  selectors.parentCategorySelect.innerHTML = categoryOptions;
  selectors.productForm.elements.category.innerHTML = categoryOptions;
  populateSubcategorySelect();
};

const populateSubcategorySelect = () => {
  const selectedCategory = selectors.productForm.elements.category.value || categories[0]?.name || "";
  const category = categories.find((item) => item.name === selectedCategory) || categories[0];
  const options = (category?.subcategories || [])
    .map((subcategory) => `<option>${escapeHtml(subcategory)}</option>`)
    .join("");
  selectors.productForm.elements.subcategory.innerHTML = options || "<option>General</option>";
};

const renderCategories = () => {
  populateCategorySelects();
  selectors.categoryManager.innerHTML = categories
    .map((category) => {
      const categoryCount = productCountForCategory(category.name);
      const subcategoryRows = (category.subcategories || [])
        .map((subcategory) => {
          const count = productCountForSubcategory(category.name, subcategory);
          return `
            <article class="subcategory-row">
              <div>
                <strong>${escapeHtml(subcategory)}</strong>
                <span>${count} product${count === 1 ? "" : "s"} · ${enabledLabel(subcategoryEnabled(category, subcategory))}</span>
              </div>
              <div class="category-actions">
                <button class="category-action" type="button" data-toggle-subcategory="${escapeHtml(category.name)}|${escapeHtml(subcategory)}">${subcategoryEnabled(category, subcategory) ? "Disable" : "Enable"}</button>
                <button class="category-action" type="button" data-edit-subcategory="${escapeHtml(category.name)}|${escapeHtml(subcategory)}">Edit</button>
                <button class="category-action danger" type="button" data-delete-subcategory="${escapeHtml(category.name)}|${escapeHtml(subcategory)}">Delete</button>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <article class="category-block">
          <div class="category-block-head">
            <div>
              <h3>${escapeHtml(category.name)}</h3>
              <p>${categoryCount} product${categoryCount === 1 ? "" : "s"} · ${(category.subcategories || []).length} subcategories · ${enabledLabel(categoryEnabled(category))}</p>
            </div>
            <div class="category-actions">
              <button class="category-action" type="button" data-toggle-category="${escapeHtml(category.name)}">${categoryEnabled(category) ? "Disable" : "Enable"}</button>
              <button class="category-action" type="button" data-edit-category="${escapeHtml(category.name)}">Edit</button>
              <button class="category-action danger" type="button" data-delete-category="${escapeHtml(category.name)}">Delete</button>
            </div>
          </div>
          <div class="subcategory-list">${subcategoryRows || "<p>No subcategories yet.</p>"}</div>
        </article>
      `;
    })
    .join("");
};

const renderCategoryImageManager = () => {
  if (!selectors.categoryImageManager) return;
  selectors.categoryImageManager.innerHTML = categories
    .map((category) => {
      const image = categoryImageFor(category.name);
      return `
        <article class="category-image-card">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(category.name)} category image" data-category-image-preview="${escapeHtml(category.name)}">
          <div>
            <strong>${escapeHtml(category.name)}</strong>
            <label>
              Image URL
              <input type="url" value="${escapeHtml(image)}" data-category-image-input="${escapeHtml(category.name)}">
            </label>
            <label>
              Upload image
              <input type="file" accept="image/*" data-category-image-upload="${escapeHtml(category.name)}">
            </label>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderFooterLinkManager = () => {
  if (!selectors.footerLinkManager) return;
  const renderColumn = (title, key, textKey) => `
    <section class="footer-link-column">
      <h4>${title}</h4>
      ${footerLinksFor(key, textKey)
        .map(
          (link) => `
            <article class="footer-link-row" data-footer-link-row="${key}">
              <label class="admin-checkbox footer-link-toggle">
                <input type="checkbox" ${link.enabled !== false ? "checked" : ""} data-footer-link-enabled>
                Enabled
              </label>
              <label>
                Link name
                <input type="text" value="${escapeHtml(link.label)}" data-footer-link-label>
              </label>
              <label>
                Link URL
                <input type="text" value="${escapeHtml(link.url || "#")}" data-footer-link-url>
              </label>
            </article>
          `
        )
        .join("")}
    </section>
  `;
  selectors.footerLinkManager.innerHTML =
    renderColumn("Footer column 1", "footerLinks", "footerLinksText") +
    renderColumn("Footer column 2", "footerPolicyLinks", "footerPolicyLinksText");
};

const renderContentPageManager = () => {
  if (!selectors.pageForm) return;
  const textarea = (name, label, rows = 2) => `
    <label class="wide-field">
      ${label}
      <textarea name="${name}" rows="${rows}"></textarea>
    </label>
  `;
  const input = (name, label, type = "text") => `
    <label>
      ${label}
      <input name="${name}" type="${type}">
    </label>
  `;
  const commonFields = (page) => `
    <div class="wide-field category-image-editor">
      <div>
        <p class="section-kicker">${page.label}</p>
        <h3>Banner, hero, and page cards</h3>
      </div>
      ${input(`${page.prefix}BannerImage`, "Banner image URL", "url")}
    </div>
    ${input(`${page.prefix}HeroKicker`, "Page eyebrow")}
    ${input(`${page.prefix}HeroTitle`, "Page title")}
    ${textarea(`${page.prefix}HeroText`, "Page intro text", 3)}
    ${input(`${page.prefix}Card1Title`, "Card 1 title")}
    ${textarea(`${page.prefix}Card1Text`, "Card 1 text")}
    ${input(`${page.prefix}Card2Title`, "Card 2 title")}
    ${textarea(`${page.prefix}Card2Text`, "Card 2 text")}
    ${input(`${page.prefix}Card3Title`, "Card 3 title")}
    ${textarea(`${page.prefix}Card3Text`, "Card 3 text")}
  `;
  const aboutFields = `
    ${input("aboutStoryKicker", "Story eyebrow")}
    ${input("aboutStoryTitle", "Story title")}
    ${input("aboutVideoUrl", "Embedded video URL", "url")}
    ${textarea("aboutStoryText", "Story paragraph 1", 3)}
    ${textarea("aboutStoryText2", "Story paragraph 2", 3)}
  `;
  const contactFields = `
    ${input("contactPhoneLabel", "Phone card label")}
    ${input("contactPhone", "Phone number")}
    ${textarea("contactPhoneText", "Phone card text")}
    ${input("contactEmailLabel", "Email card label")}
    ${input("contactEmail", "Email address", "email")}
    ${textarea("contactEmailText", "Email card text")}
    ${input("contactAdminLabel", "Admin card label")}
    ${input("contactAdminTitle", "Admin card title")}
    ${textarea("contactAdminText", "Admin card text")}
    ${input("contactFormTitle", "Contact form title")}
    ${input("contactNamePlaceholder", "Name placeholder")}
    ${input("contactEmailPlaceholder", "Email placeholder")}
    ${input("contactMessagePlaceholder", "Message placeholder")}
    ${input("contactButton", "Form button text")}
  `;
  selectors.pageForm.innerHTML = contentPageDefinitions
    .map((page) => `${commonFields(page)}${page.prefix === "about" ? aboutFields : ""}${page.prefix === "contact" ? contactFields : ""}`)
    .join("");
};

const readUpload = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = src;
  });

const distance = (a, b) =>
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);

const closestPaletteColor = (rgb) =>
  Object.entries(colorMap)
    .map(([name, value]) => ({ name, score: distance(rgb, value) }))
    .sort((a, b) => a.score - b.score)[0].name;

const detectColors = async (src) => {
  const image = await loadImage(src);
  const canvas = document.createElement("canvas");
  const size = 80;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, size, size);

  const pixels = context.getImageData(0, 0, size, size).data;
  const counts = {};

  for (let index = 0; index < pixels.length; index += 16) {
    const alpha = pixels[index + 3];
    if (alpha < 180) continue;

    const rgb = [pixels[index], pixels[index + 1], pixels[index + 2]];
    const brightness = (rgb[0] + rgb[1] + rgb[2]) / 3;
    if (brightness < 24 || brightness > 244) continue;

    const color = closestPaletteColor(rgb);
    counts[color] = (counts[color] || 0) + 1;
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([color]) => color);
};

const writeSelectedColors = (colors) => {
  const firstVariantRow = selectors.variantRows?.querySelector("[data-variant-row]");
  const colorField = firstVariantRow?.querySelector('[data-variant-field="color"]');
  if (colorField && colors[0]) colorField.value = colors[0];
};

const draftFromImage = async () => {
  const form = selectors.productForm;
  const image = readVariantFields()[0]?.image || "";
  if (!image) {
    toast("Upload or choose an image first.");
    return;
  }

  selectors.aiGenerate.disabled = true;
  selectors.aiGenerate.textContent = "Generating...";

  try {
    const colors = await detectColors(image);
    const category = form.elements.category.value;
    const name = form.elements.name.value.trim() || "New Product";
    const palette = colors.length ? colors.join(", ").toLowerCase() : "natural woven";
    const categoryCopy = {
      Bedding: "a coordinated bedding layer with soft texture and an easy designer look",
      Bath: "a soft bath textile with spa-inspired texture and easy everyday care",
      Rugs: "a grounding woven rug with durable texture for everyday rooms",
      Throws: "a soft throw made for sofa styling, reading corners, and layered beds",
      "Home Decor": "a decorative home accent designed to mix easily with solids and prints",
      "Table Linens": "a dining textile made for hosting, layering, and everyday meals"
    };
    const details = {
      Bedding: ["Coordinated woven bedding layer", "Designed for easy room refreshes", `Palette detected: ${palette}`],
      Bath: ["Soft bath-ready textile", "Designed for everyday comfort and easy care", `Palette detected: ${palette}`],
      Rugs: ["Low-profile woven surface", "Works in living rooms, halls, and bedrooms", `Palette detected: ${palette}`],
      Throws: ["Soft hand feel with visible woven texture", "Finished for sofa and bed layering", `Palette detected: ${palette}`],
      "Home Decor": ["Decor cover with woven face texture", "Pairs with neutral and patterned rooms", `Palette detected: ${palette}`],
      "Table Linens": ["Woven dining layer for everyday tables", "Easy to pair with ceramic, wood, and glass", `Palette detected: ${palette}`]
    };

    writeSelectedColors(colors.length ? colors : ["Oat"]);
    const firstVariantRow = selectors.variantRows?.querySelector("[data-variant-row]");
    const descriptionField = firstVariantRow?.querySelector('[data-variant-field="description"]');
    const detailsField = firstVariantRow?.querySelector('[data-variant-field="details"]');
    if (descriptionField) {
      descriptionField.value = `${name} is ${categoryCopy[category]} in a ${palette} palette. The uploaded image suggests a tactile, home-ready piece with visible weave and warm styling potential.`;
    }
    if (detailsField) detailsField.value = details[category].join("\n");
    if (!form.elements.badge.value.trim()) form.elements.badge.value = "AI Draft";
    toast("ChatGPT-style product copy created. Real ChatGPT can be connected after deployment.");
  } catch (error) {
    toast("Could not read that image. Try another product photo.");
  } finally {
    selectors.aiGenerate.disabled = false;
    selectors.aiGenerate.textContent = "Generate product description";
  }
};

const renderProducts = () => {
  selectors.statProducts.textContent = products.length;
  selectors.statStock.textContent = products.reduce((sum, product) => sum + Number(product.stock || 0), 0);
  selectors.statSale.textContent = products.filter(isSaleTagged).length;

  const productRow = (product) => `
    <article class="admin-product-row">
      <img src="${product.image}" alt="${escapeHtml(product.name)}">
      <div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.category)} · ${escapeHtml(product.subcategory || "No subcategory")} · Default SKU ${escapeHtml(product.defaultSku || "Not set")} · ${product.stock} in stock · ${productEnabled(product) ? "Enabled" : "Disabled"}${Number(product.stock || 0) <= 0 ? " · Sold out hidden" : ""}</p>
      </div>
      <div class="row-actions">
        <button type="button" data-toggle-product="${product.id}">${productEnabled(product) ? "Disable" : "Enable"}</button>
        <button type="button" data-edit="${product.id}">Edit</button>
        <button class="danger" type="button" data-delete="${product.id}">Delete</button>
      </div>
    </article>
  `;

  const categoryPage = (category) => {
      const categoryProducts = products.filter((product) => product.category === category.name);
      const categorySubcategories = [
        ...new Set([
          ...(category.subcategories || []),
          ...categoryProducts.map((product) => product.subcategory).filter(Boolean)
        ])
      ];
      const subcategoryGroups = categorySubcategories
        .map((subcategory) => {
          const groupedProducts = categoryProducts.filter((product) => product.subcategory === subcategory);
          return `
            <section class="admin-subcategory-group">
              <div class="admin-subcategory-head">
                <h4>${escapeHtml(subcategory)}</h4>
                <span>${groupedProducts.length} product${groupedProducts.length === 1 ? "" : "s"}</span>
              </div>
              ${
                groupedProducts.length
                  ? groupedProducts.map(productRow).join("")
                  : '<p class="empty-subcategory">No products in this subcategory yet.</p>'
              }
            </section>
          `;
        })
        .join("");

      const uncategorizedProducts = categoryProducts.filter((product) => !product.subcategory);
      const uncategorizedGroup = uncategorizedProducts.length
        ? `
          <section class="admin-subcategory-group">
            <div class="admin-subcategory-head">
              <h4>No subcategory</h4>
              <span>${uncategorizedProducts.length} product${uncategorizedProducts.length === 1 ? "" : "s"}</span>
            </div>
            ${uncategorizedProducts.map(productRow).join("")}
          </section>
        `
        : "";

      return `
        <section class="admin-category-group">
          <a class="admin-back-link" href="#products" data-open-product-index>&lt; All categories</a>
          <div class="admin-category-group-head">
            <div>
              <p class="section-kicker">Category catalog</p>
              <h3>${escapeHtml(category.name)}</h3>
            </div>
            <span>${categoryProducts.length} product${categoryProducts.length === 1 ? "" : "s"}</span>
          </div>
          ${subcategoryGroups || '<p class="empty-subcategory">No subcategories in this category yet.</p>'}
          ${uncategorizedGroup}
        </section>
      `;
  };

  const activeCategory = activeProductCategory
    ? categories.find((category) => category.name === activeProductCategory)
    : null;

  if (activeCategory) {
    selectors.productList.innerHTML = categoryPage(activeCategory);
    return;
  }

  selectors.productList.innerHTML = `
    <section class="admin-catalog-index">
      <div class="admin-catalog-index-head">
        <div>
          <p class="section-kicker">Product catalog</p>
          <h3>Choose a category to manage</h3>
        </div>
        <span>${products.length} total products</span>
      </div>
      <div class="admin-catalog-cards">
        ${categories
          .map((category) => {
            const categoryProducts = products.filter((product) => product.category === category.name);
            return `
              <a class="admin-catalog-card" href="#products-${slugify(category.name)}" data-open-product-category="${escapeHtml(category.name)}">
                <img src="${escapeHtml(categoryImageFor(category.name))}" alt="${escapeHtml(category.name)} category">
                <span>
                  <strong>${escapeHtml(category.name === "Table Linens" ? "Dining" : category.name)}</strong>
                  <em>${categoryProducts.length} product${categoryProducts.length === 1 ? "" : "s"} · ${(category.subcategories || []).length} subcategories</em>
                </span>
              </a>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
};

const formatMoney = (value) => `$${Number(value || 0).toFixed(2)}`;

const renderDashboard = () => {
  const orders = readOrders();
  const analytics = readAnalytics();
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const visits = Number(analytics.visits || 0);
  const conversion = visits ? Math.round((orders.length / visits) * 1000) / 10 : 0;

  selectors.dashboardOrders.textContent = orders.length;
  selectors.dashboardVisits.textContent = visits;
  selectors.dashboardRevenue.textContent = formatMoney(revenue);
  selectors.dashboardConversion.textContent = `${conversion}%`;
};

const renderOrders = () => {
  const orders = readOrders();

  if (!orders.length) {
    selectors.ordersList.innerHTML = `
      <div class="empty-admin">
        <strong>No orders yet.</strong>
        <p>Orders placed through the checkout mockup will show here with customer details, items, totals, and status controls.</p>
      </div>
    `;
    return;
  }

  selectors.ordersList.innerHTML = orders
    .map((order) => {
      const itemSummary = (order.items || [])
        .map((item) => `<li>${item.quantity || 1} x ${item.name}</li>`)
        .join("");

      return `
        <article class="admin-order-row">
          <div>
            <p class="section-kicker">${order.id || "Order"}</p>
            <h3>${order.email || "Guest customer"}</h3>
            <p>${order.delivery || "Standard delivery"} · ${new Date(order.createdAt || Date.now()).toLocaleString()}</p>
            <ul>${itemSummary}</ul>
          </div>
          <div class="admin-order-total">
            <strong>${formatMoney(order.total)}</strong>
            <p>${order.coupon ? `Coupon ${escapeHtml(order.coupon)} · Discount ${formatMoney(order.discount)}` : "No coupon"}</p>
            <label>
              Status
              <select data-order-status="${order.id}">
                ${["New", "Processing", "Shipped", "Cancelled"]
                  .map((status) => `<option${(order.status || "New") === status ? " selected" : ""}>${status}</option>`)
                  .join("")}
              </select>
            </label>
            <button class="danger" type="button" data-delete-order="${order.id}">Delete</button>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderCoupons = () => {
  if (!selectors.couponList || !selectors.subscriberList) return;
  const coupons = readCoupons();
  selectors.couponList.innerHTML = coupons.length
    ? coupons
        .map(
          (coupon) => `
            <article class="coupon-row">
              <div>
                <p class="section-kicker">${coupon.active === false ? "Disabled" : "Active"}</p>
                <h3>${escapeHtml(coupon.code)}</h3>
                <p>${coupon.type === "percent" ? `${Number(coupon.amount || 0)}% off` : `${formatMoney(coupon.amount)} off`} · Created ${new Date(coupon.createdAt || Date.now()).toLocaleDateString()}</p>
              </div>
              <div class="row-actions">
                <button type="button" data-toggle-coupon="${escapeHtml(coupon.code)}">${coupon.active === false ? "Enable" : "Disable"}</button>
                <button class="danger" type="button" data-delete-coupon="${escapeHtml(coupon.code)}">Delete</button>
              </div>
            </article>
          `
        )
        .join("")
    : `
      <div class="empty-admin">
        <strong>No coupons yet.</strong>
        <p>Create a code like NEW1001, choose the discount, and send it to subscribers.</p>
      </div>
    `;

  const subscribers = readSubscribers();
  selectors.subscriberList.innerHTML = subscribers.length
    ? subscribers
        .map(
          (subscriber) => `
            <article class="subscriber-row">
              <div>
                <strong>${escapeHtml(subscriber.email)}</strong>
                <p>${new Date(subscriber.createdAt || Date.now()).toLocaleString()}</p>
              </div>
            </article>
          `
        )
        .join("")
    : `
      <div class="empty-admin">
        <strong>No subscribers yet.</strong>
        <p>Emails from the homepage signup form will appear here.</p>
      </div>
    `;
};

const renderCampaigns = () => {
  if (!selectors.campaignList) return;
  const campaigns = readCampaigns();
  const subscribers = readSubscribers();
  if (selectors.campaignSubscriberCount) selectors.campaignSubscriberCount.textContent = subscribers.length;
  if (selectors.campaignCount) selectors.campaignCount.textContent = campaigns.length;
  selectors.campaignList.innerHTML = campaigns.length
    ? campaigns
        .map(
          (campaign) => `
            <article class="campaign-row">
              <div>
                <p class="section-kicker">${escapeHtml(campaign.status || "Draft")}</p>
                <h3>${escapeHtml(campaign.name)}</h3>
                <p><strong>${escapeHtml(campaign.subject)}</strong></p>
                <p>${escapeHtml(campaign.message)}</p>
                <p>${campaign.coupon ? `Coupon: ${escapeHtml(campaign.coupon)} · ` : ""}${campaign.banner ? "Banner added · " : ""}${escapeHtml(campaign.audience || "all")} subscribers · ${new Date(campaign.createdAt || Date.now()).toLocaleString()}</p>
              </div>
              <div class="row-actions">
                <button type="button" data-load-campaign="${escapeHtml(campaign.id)}">Edit</button>
                <button type="button" data-mark-campaign="${escapeHtml(campaign.id)}">Mark sent</button>
                <button class="danger" type="button" data-delete-campaign="${escapeHtml(campaign.id)}">Delete</button>
              </div>
            </article>
          `
        )
        .join("")
    : `
      <div class="empty-admin">
        <strong>No campaigns yet.</strong>
        <p>Save a draft for welcome emails, coupon blasts, sale announcements, or new arrivals.</p>
      </div>
    `;
};

const sanitizeRichMessage = (html) => {
  const template = document.createElement("template");
  template.innerHTML = String(html || "");
  template.content.querySelectorAll("script, iframe, object, embed, form, input, button, style").forEach((node) => node.remove());
  template.content.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value || "";
      if (name.startsWith("on") || (name === "href" && value.trim().toLowerCase().startsWith("javascript:"))) {
        node.removeAttribute(attribute.name);
      }
    });
  });
  return template.innerHTML;
};

const syncRichMessage = () => {
  if (!selectors.richEditor || !selectors.richMessageInput) return;
  selectors.richMessageInput.value = sanitizeRichMessage(selectors.richEditor.innerHTML).trim();
};

const productImageOptions = () =>
  products
    .flatMap((product) =>
      productVariants(product).flatMap((variant) =>
        [variant.image, ...(variant.images || [])]
          .filter(Boolean)
          .map((image) => ({
            image,
            name: product.name,
            category: product.category,
            subcategory: product.subcategory,
            color: variant.color || "",
            sku: variant.sku || ""
          }))
      )
    )
    .filter((option, index, options) => options.findIndex((item) => item.image === option.image) === index);

const renderBannerOptions = (options = []) => {
  if (!selectors.campaignBannerOptions) return;
  selectors.campaignBannerOptions.innerHTML = options.length
    ? `
      <div class="admin-catalog-index-head">
        <div>
          <p class="section-kicker">ChatGPT banner ideas</p>
          <h3>Select one option for this campaign banner</h3>
        </div>
      </div>
      <div class="campaign-banner-grid">
        ${options
          .map(
            (option) => `
              <button type="button" data-select-campaign-banner="${escapeHtml(option.image)}">
                <img src="${escapeHtml(option.image)}" alt="">
                <span>${escapeHtml(option.name)}</span>
                <em>${escapeHtml([option.category, option.subcategory, option.color].filter(Boolean).join(" · "))}</em>
              </button>
            `
          )
          .join("")}
      </div>
    `
    : "";
};

const designedBannerPalette = (theme) => {
  const value = theme.toLowerCase();
  if (/(xmas|christmas|holiday|winter)/.test(value)) return ["#6f1f1f", "#0f4b34", "#f8efe0", "#c7a24a"];
  if (/(4th|july|independence|patriotic|america)/.test(value)) return ["#132a4f", "#b5262f", "#ffffff", "#d7b780"];
  if (/(fall|autumn|thanksgiving)/.test(value)) return ["#6b3d2e", "#b66b35", "#f4eadb", "#8a7a43"];
  if (/(spring|easter|garden)/.test(value)) return ["#466b57", "#d9a6a0", "#fff7e8", "#8fb7a2"];
  if (/(sale|clearance|deal)/.test(value)) return ["#5f4f47", "#b35a3f", "#fff7e8", "#d7b780"];
  return ["#5f4f47", "#d7b780", "#fff7e8", "#3f332e"];
};

const svgDataUri = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const designedBannerOptions = (theme) => {
  const cleanTheme = theme.trim() || "Home Weavers Campaign";
  const [dark, accent, light, gold] = designedBannerPalette(cleanTheme);
  const titles = [
    cleanTheme,
    `${cleanTheme} Event`,
    `Home Weavers ${cleanTheme}`,
    `${cleanTheme} Collection`,
    `Shop ${cleanTheme}`
  ];
  return titles.map((title, index) => {
    const subtitle = index % 2 === 0 ? "Thoughtful textiles for every room" : "Bedding, bath, rugs, pillows and home decor";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="520" viewBox="0 0 1400 520">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${dark}"/>
            <stop offset="1" stop-color="${accent}"/>
          </linearGradient>
          <pattern id="weave" width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M0 21H42M21 0V42" stroke="${light}" stroke-opacity=".12" stroke-width="2"/>
          </pattern>
        </defs>
        <rect width="1400" height="520" fill="url(#bg)"/>
        <rect width="1400" height="520" fill="url(#weave)"/>
        <circle cx="${210 + index * 40}" cy="95" r="82" fill="${gold}" opacity=".22"/>
        <circle cx="${1140 - index * 36}" cy="410" r="128" fill="${light}" opacity=".14"/>
        <path d="M0 430 C240 360 390 520 620 430 S1020 340 1400 420 V520 H0Z" fill="${light}" opacity=".18"/>
        <text x="90" y="215" fill="${light}" font-family="Georgia, serif" font-size="72" font-weight="700">${escapeHtml(title)}</text>
        <text x="94" y="285" fill="${light}" font-family="Arial, sans-serif" font-size="30" font-weight="700" opacity=".92">${escapeHtml(subtitle)}</text>
        <rect x="94" y="330" width="250" height="58" rx="0" fill="${light}"/>
        <text x="132" y="367" fill="${dark}" font-family="Arial, sans-serif" font-size="22" font-weight="800">SHOP NOW</text>
        <text x="1040" y="185" fill="${light}" font-family="Georgia, serif" font-size="88" font-weight="700" opacity=".9">H|W</text>
      </svg>
    `;
    return {
      image: svgDataUri(svg),
      name: title,
      category: "Designed banner",
      subcategory: "AI theme",
      color: cleanTheme
    };
  });
};

const renderEmailPreview = () => {
  if (!selectors.emailPreview || !selectors.campaignForm) return;
  syncRichMessage();
  const form = selectors.campaignForm;
  const logoUrl = settings.logoUrl || "assets/home-weavers-logo.jpeg";
  const subject = form.querySelector('[name="subject"]').value.trim() || "Welcome to Home Weavers";
  const message =
    sanitizeRichMessage(form.querySelector('[name="message"]').value.trim()) ||
    "Thank you for joining Home Weavers. Explore coordinated home textiles, seasonal arrivals, and thoughtful pieces for every room.";
  const coupon = form.querySelector('[name="coupon"]').value.trim().toUpperCase();
  const banner = form.querySelector('[name="banner"]').value.trim();
  selectors.emailPreview.innerHTML = `
    <div class="email-preview-top">
      <span>From: Home Weavers</span>
      <span>To: subscriber@example.com</span>
    </div>
    <div class="email-preview-subject">${escapeHtml(subject)}</div>
    <div class="email-preview-body">
      <img class="email-preview-logo" src="${escapeHtml(logoUrl)}" alt="Home Weavers">
      ${banner ? `<img class="email-preview-banner" src="${escapeHtml(banner)}" alt="">` : ""}
      <h2>${escapeHtml(subject)}</h2>
      <div class="email-preview-message">${message}</div>
      ${
        coupon
          ? `<div class="email-preview-coupon">
              <span>Your code</span>
              <strong>${escapeHtml(coupon)}</strong>
            </div>`
          : ""
      }
      <a href="index.html">Shop Home Weavers</a>
      <small>You are receiving this because you subscribed to Home Weavers updates. Unsubscribe link will be added when real email sending is connected.</small>
    </div>
  `;
};

const sync = () => {
  renderDashboard();
  renderCategories();
  renderCategoryImageManager();
  renderProducts();
  renderOrders();
  renderCoupons();
  renderCampaigns();
  renderEmailPreview();
  populateProductForm();
};

const formToProduct = () => {
  const form = selectors.productForm;
  const name = form.elements.name.value.trim();
  const existingId = form.elements.id.value;
  const id = existingId || slugify(name || `product-${Date.now()}`);
  const variants = readVariantFields();
  const variantSizes = [...new Set(variants.map((variant) => variant.size).filter(Boolean))];
  const variantColors = [...new Set(variants.map((variant) => variant.color).filter(Boolean))];
  const requestedDefaultSku = readDefaultSkuFromRows(variants);
  const defaultVariant = variants.find((variant) => variant.sku === requestedDefaultSku) || variants[0];
  const searchWords = form.elements.searchWords.value.split(/[\n,]+/).map((item) => item.trim()).filter(Boolean);
  const badge = form.elements.saleTag.checked ? "Sale" : form.elements.badge.value.trim() || "New";

  return {
    id,
    name,
    brand: form.elements.brand.value.trim(),
    category: form.elements.category.value,
    subcategory: form.elements.subcategory.value,
    searchWords,
    defaultSku: requestedDefaultSku || defaultVariant?.sku || "",
    price: defaultVariant ? Number(defaultVariant.price || 0) : 0,
    compareAt: defaultVariant ? Number(defaultVariant.compareAt || defaultVariant.price || 0) : 0,
    image: defaultVariant?.image || "",
    size: variantSizes.join("/"),
    sizes: variantSizes,
    stock: variantStockTotal(variants),
    active: form.elements.active ? Boolean(form.elements.active.checked) : true,
    badge,
    rating: Number(form.elements.rating.value || 4.8),
    reviews: Number(form.elements.reviews.value || 0),
    colors: variantColors.length ? variantColors : ["Oat"],
    best: form.elements.best.checked,
    description: defaultVariant?.description || "",
    images: [],
    details: defaultVariant?.details || [],
    variants
  };
};

selectors.saveSettingsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    settings = settingsFromForms();
    saveSettings();
    populateSettings();
    toast("Settings saved. Refresh the store to see it.");
  });
});

selectors.sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAdminSection(button.dataset.adminSectionTarget);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("hashchange", () => {
  openAdminSection(window.location.hash.replace("#", "") || "dashboard");
  renderProducts();
});

selectors.categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = selectors.categoryForm.elements.categoryName.value.trim();
  if (!name) return;

  const editing = selectors.categoryForm.dataset.editingCategory;
  if (editing && editing !== name) {
    products = products.map((product) => (product.category === editing ? { ...product, category: name } : product));
    const category = categories.find((item) => item.name === editing);
    if (category) category.name = name;
    if (activeProductCategory === editing) activeProductCategory = name;
    settings.categoryImages = {
      ...(settings.categoryImages || {}),
      [name]: settings.categoryImages?.[editing] || categoryImageFor(editing)
    };
    delete settings.categoryImages[editing];
  } else if (!categories.some((category) => category.name.toLowerCase() === name.toLowerCase())) {
    categories.push({ name, subcategories: [] });
  }

  delete selectors.categoryForm.dataset.editingCategory;
  selectors.categoryForm.reset();
  saveCategories();
  saveProducts();
  saveSettings();
  sync();
  toast("Category saved.");
});

selectors.subcategoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const parent = selectors.subcategoryForm.elements.parentCategory.value;
  const name = selectors.subcategoryForm.elements.subcategoryName.value.trim();
  if (!parent || !name) return;

  const editingParent = selectors.subcategoryForm.dataset.editingParent;
  const editingSubcategory = selectors.subcategoryForm.dataset.editingSubcategory;
  const category = categories.find((item) => item.name === parent);
  if (!category) return;

  if (editingParent && editingSubcategory) {
    products = products.map((product) =>
      product.category === editingParent && product.subcategory === editingSubcategory
        ? { ...product, category: parent, subcategory: name }
        : product
    );
    const oldCategory = categories.find((item) => item.name === editingParent);
    if (oldCategory) {
      const wasDisabled = (oldCategory.disabledSubcategories || []).includes(editingSubcategory);
      oldCategory.subcategories = oldCategory.subcategories.filter((item) => item !== editingSubcategory);
      oldCategory.disabledSubcategories = (oldCategory.disabledSubcategories || []).filter((item) => item !== editingSubcategory);
      if (wasDisabled) {
        category.disabledSubcategories = [...new Set([...(category.disabledSubcategories || []), name])];
      }
    }
  }

  if (!category.subcategories.includes(name)) category.subcategories.push(name);

  delete selectors.subcategoryForm.dataset.editingParent;
  delete selectors.subcategoryForm.dataset.editingSubcategory;
  selectors.subcategoryForm.reset();
  saveCategories();
  saveProducts();
  sync();
  toast("Subcategory saved.");
});

selectors.categoryManager.addEventListener("click", (event) => {
  const editCategory = event.target.closest("[data-edit-category]");
  const deleteCategory = event.target.closest("[data-delete-category]");
  const editSubcategory = event.target.closest("[data-edit-subcategory]");
  const deleteSubcategory = event.target.closest("[data-delete-subcategory]");
  const toggleCategory = event.target.closest("[data-toggle-category]");
  const toggleSubcategory = event.target.closest("[data-toggle-subcategory]");

  if (toggleCategory) {
    const categoryName = toggleCategory.dataset.toggleCategory;
    const category = categories.find((item) => item.name === categoryName);
    if (!category) return;
    category.enabled = category.enabled === false;
    saveCategories();
    sync();
    toast(`${categoryName} ${category.enabled === false ? "disabled" : "enabled"} on website.`);
    return;
  }

  if (toggleSubcategory) {
    const [categoryName, subcategoryName] = toggleSubcategory.dataset.toggleSubcategory.split("|");
    const category = categories.find((item) => item.name === categoryName);
    if (!category) return;
    const disabled = new Set(category.disabledSubcategories || []);
    if (disabled.has(subcategoryName)) disabled.delete(subcategoryName);
    else disabled.add(subcategoryName);
    category.disabledSubcategories = [...disabled];
    saveCategories();
    sync();
    toast(`${subcategoryName} ${disabled.has(subcategoryName) ? "disabled" : "enabled"} on website.`);
    return;
  }

  if (editCategory) {
    selectors.categoryForm.elements.categoryName.value = editCategory.dataset.editCategory;
    selectors.categoryForm.dataset.editingCategory = editCategory.dataset.editCategory;
    selectors.categoryForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (editSubcategory) {
    const [categoryName, subcategoryName] = editSubcategory.dataset.editSubcategory.split("|");
    selectors.subcategoryForm.elements.parentCategory.value = categoryName;
    selectors.subcategoryForm.elements.subcategoryName.value = subcategoryName;
    selectors.subcategoryForm.dataset.editingParent = categoryName;
    selectors.subcategoryForm.dataset.editingSubcategory = subcategoryName;
    selectors.subcategoryForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (deleteCategory) {
    const categoryName = deleteCategory.dataset.deleteCategory;
    const count = productCountForCategory(categoryName);
    const ok = window.confirm(
      `Are you sure you want to delete the ${categoryName} category? ${count} product${count === 1 ? "" : "s"} will be deleted.`
    );
    if (!ok) return;
    saveDeletedCategories([...readDeletedCategories(), categoryName]);
    categories = categories.filter((category) => category.name !== categoryName);
    products = products.filter((product) => product.category !== categoryName);
    delete settings.categoryImages?.[categoryName];
    selectedId = products[0]?.id || null;
    saveCategories();
    saveProducts();
    saveSettings();
    sync();
    toast("Category deleted.");
  }

  if (deleteSubcategory) {
    const [categoryName, subcategoryName] = deleteSubcategory.dataset.deleteSubcategory.split("|");
    const count = productCountForSubcategory(categoryName, subcategoryName);
    const ok = window.confirm(
      `Are you sure you want to delete the ${subcategoryName} subcategory? ${count} product${count === 1 ? "" : "s"} will be deleted.`
    );
    if (!ok) return;
    const category = categories.find((item) => item.name === categoryName);
    if (category) category.subcategories = category.subcategories.filter((item) => item !== subcategoryName);
    products = products.filter((product) => !(product.category === categoryName && product.subcategory === subcategoryName));
    selectedId = products[0]?.id || null;
    saveCategories();
    saveProducts();
    sync();
    toast("Subcategory deleted.");
  }
});

selectors.categoryImageManager?.addEventListener("input", (event) => {
  const input = event.target.closest("[data-category-image-input]");
  if (!input) return;
  const category = input.dataset.categoryImageInput;
  const preview = selectors.categoryImageManager.querySelector(`[data-category-image-preview="${CSS.escape(category)}"]`);
  if (preview) preview.src = input.value.trim() || categoryImageFor(category);
});

selectors.categoryImageManager?.addEventListener("change", async (event) => {
  const upload = event.target.closest("[data-category-image-upload]");
  if (!upload) return;
  const [file] = upload.files;
  if (!file) return;

  const category = upload.dataset.categoryImageUpload;
  const imageData = await readUpload(file);
  const input = selectors.categoryImageManager.querySelector(`[data-category-image-input="${CSS.escape(category)}"]`);
  const preview = selectors.categoryImageManager.querySelector(`[data-category-image-preview="${CSS.escape(category)}"]`);
  if (input) input.value = imageData;
  if (preview) preview.src = imageData;
  settings = settingsFromForms();
  saveSettings();
  toast(`${category} image updated.`);
});

selectors.saveProducts.addEventListener("click", () => {
  if (!selectors.productForm.reportValidity()) return;
  const product = formToProduct();
  const index = products.findIndex((item) => item.id === product.id);

  if (index >= 0) products[index] = product;
  else products = [product, ...products];

  selectedId = product.id;
  saveProducts();
  sync();
  toast("Products saved. Refresh the store to see changes.");
});

selectors.downloadProducts?.addEventListener("click", () => {
  downloadCsv("home-weavers-products.csv", productCsvColumns, products.map(productToCsvRow));
});

selectors.downloadVariants?.addEventListener("click", () => {
  downloadCsv("home-weavers-skus.csv", variantCsvColumns, variantToCsvRows());
});

selectors.downloadStock?.addEventListener("click", () => {
  const rows = products.flatMap((product) => {
    const variants = productVariants(product);
    if (!variants.length) return [productToCsvRow(product)];
    return variants.map((variant) => ({
      id: product.id,
      sku: variant.sku,
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      size: variant.size,
      color: variant.color,
      stock: variant.stock,
      active: variant.active === false ? "FALSE" : "TRUE"
    }));
  });
  downloadCsv("home-weavers-stock.csv", stockCsvColumns, rows);
});

selectors.uploadProducts?.addEventListener("change", (event) => {
  importCsvFile(event.target.files?.[0], "products");
  event.target.value = "";
});

selectors.uploadStock?.addEventListener("change", (event) => {
  importCsvFile(event.target.files?.[0], "stock");
  event.target.value = "";
});

selectors.uploadVariants?.addEventListener("change", (event) => {
  importCsvFile(event.target.files?.[0], "variants");
  event.target.value = "";
});

selectors.addVariant?.addEventListener("click", () => {
  selectors.variantRows?.insertAdjacentHTML("beforeend", variantRowMarkup({}, ""));
});

selectors.variantRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-variant]");
  if (!button) return;
  button.closest("[data-variant-row]")?.remove();
  if (!selectors.variantRows.querySelector("[data-variant-row]")) {
    selectors.variantRows.insertAdjacentHTML("beforeend", variantRowMarkup({}, ""));
  }
});

selectors.productForm.elements.category.addEventListener("change", () => {
  populateSubcategorySelect();
});

selectors.logoUpload.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  const imageData = await readUpload(file);
  settings.logoUrl = imageData;
  selectors.settingForms.forEach((form) => {
    if (form.elements.logoUrl) form.elements.logoUrl.value = imageData;
  });
  saveSettings();
  toast("Logo uploaded. Refresh the store to see it.");
});

selectors.aiGenerate?.addEventListener("click", draftFromImage);

const addNewProduct = () => {
  const id = `new-product-${Date.now()}`;
  const newCategory = activeProductCategory || "Bedding";
  const newSubcategory = categories.find((category) => category.name === newCategory)?.subcategories?.[0] || "General";
  products = [
    {
      id,
      name: "New Product",
      brand: "Home Weavers",
      category: newCategory,
      subcategory: newSubcategory,
      price: 99,
      compareAt: 129,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      size: "Queen",
      sizes: ["Queen", "King"],
      stock: 5,
      active: true,
      badge: "New",
      rating: 4.8,
      reviews: 0,
      colors: ["Oat"],
      best: false,
      searchWords: ["new product"],
      description: "Describe this product.",
      images: [],
      details: ["Add product detail"],
      defaultSku: `${id}-queen-oat`,
      variants: [
        {
          sku: `${id}-queen-oat`,
          size: "Queen",
          color: "Oat",
          price: 99,
          compareAt: 129,
          stock: 5,
          active: true,
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          images: [],
          description: "Describe this SKU.",
          details: ["Add SKU detail"]
        }
      ]
    },
    ...products
  ];
  selectedId = id;
  saveProducts();
  sync();
  document.querySelector("#product-editor").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("New product added. Fill in the details and save when finished.");
};

selectors.newProductButtons.forEach((button) => {
  button.addEventListener("click", addNewProduct);
});

selectors.productList.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-open-product-category]");
  const indexButton = event.target.closest("[data-open-product-index]");
  const editButton = event.target.closest("[data-edit]");
  const deleteButton = event.target.closest("[data-delete]");
  const toggleButton = event.target.closest("[data-toggle-product]");

  if (toggleButton) {
    const product = products.find((item) => item.id === toggleButton.dataset.toggleProduct);
    if (!product) return;
    product.active = product.active === false;
    saveProducts();
    sync();
    toast(`${product.name} ${product.active === false ? "disabled" : "enabled"} on website.`);
    return;
  }

  if (categoryButton) {
    event.preventDefault();
    const category = categoryButton.dataset.openProductCategory;
    activeProductCategory = category;
    window.location.hash = `products-${slugify(category)}`;
    openAdminSection(window.location.hash.replace("#", "") || "products");
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (indexButton) {
    event.preventDefault();
    activeProductCategory = null;
    window.location.hash = "products";
    openAdminSection("products");
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (editButton) {
    selectedId = editButton.dataset.edit;
    sync();
    openAdminSection("products");
    document.querySelector("#product-editor").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (deleteButton) {
    products = products.filter((product) => product.id !== deleteButton.dataset.delete);
    selectedId = products[0]?.id || null;
    saveProducts();
    sync();
    toast("Product deleted.");
  }
});

selectors.ordersList.addEventListener("change", (event) => {
  const field = event.target.closest("[data-order-status]");
  if (!field) return;

  const orders = readOrders().map((order) =>
    order.id === field.dataset.orderStatus ? { ...order, status: field.value } : order
  );
  saveOrders(orders);
  renderDashboard();
  renderOrders();
  toast("Order status updated.");
});

selectors.ordersList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-order]");
  if (!button) return;

  const orders = readOrders().filter((order) => order.id !== button.dataset.deleteOrder);
  saveOrders(orders);
  renderDashboard();
  renderOrders();
  toast("Order deleted.");
});

selectors.clearOrders.addEventListener("click", () => {
  localStorage.removeItem("homeWeaversOrders");
  renderDashboard();
  renderOrders();
  toast("Orders cleared.");
});

selectors.saveCoupon?.addEventListener("click", () => {
  if (!selectors.couponForm?.reportValidity()) return;
  const formData = new FormData(selectors.couponForm);
  const code = String(formData.get("code") || "").trim().toUpperCase();
  const coupon = {
    code,
    type: formData.get("type") || "fixed",
    amount: Math.max(0, Number(formData.get("amount") || 0)),
    active: selectors.couponForm.elements.active.checked,
    createdAt: new Date().toISOString()
  };
  const coupons = readCoupons().filter((item) => item.code !== code);
  saveCoupons([coupon, ...coupons]);
  selectors.couponForm.reset();
  selectors.couponForm.elements.active.checked = true;
  renderCoupons();
  toast(`Coupon ${code} saved.`);
});

selectors.couponList?.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle-coupon]");
  const remove = event.target.closest("[data-delete-coupon]");
  if (toggle) {
    const code = toggle.dataset.toggleCoupon;
    const coupons = readCoupons().map((coupon) =>
      coupon.code === code ? { ...coupon, active: coupon.active === false } : coupon
    );
    saveCoupons(coupons);
    renderCoupons();
    toast("Coupon updated.");
  }
  if (remove) {
    const code = remove.dataset.deleteCoupon;
    saveCoupons(readCoupons().filter((coupon) => coupon.code !== code));
    renderCoupons();
    toast("Coupon deleted.");
  }
});

selectors.clearSubscribers?.addEventListener("click", () => {
  saveSubscribers([]);
  renderCoupons();
  renderCampaigns();
  toast("Subscribers cleared.");
});

const campaignFromForm = () => {
  const form = selectors.campaignForm;
  const formData = new FormData(form);
  return {
    id: form.dataset.editingCampaign || `campaign-${Date.now()}`,
    name: String(formData.get("name") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    coupon: String(formData.get("coupon") || "").trim().toUpperCase(),
    banner: String(formData.get("banner") || "").trim(),
    theme: String(formData.get("theme") || "").trim(),
    audience: formData.get("audience") || "all",
    message: String(formData.get("message") || "").trim(),
    testEmail: String(formData.get("testEmail") || "").trim(),
    status: "Draft",
    createdAt: new Date().toISOString()
  };
};

const saveCampaignDraft = () => {
  if (!selectors.campaignForm?.reportValidity()) return null;
  syncRichMessage();
  const campaign = campaignFromForm();
  const existing = readCampaigns().filter((item) => item.id !== campaign.id);
  saveCampaigns([campaign, ...existing]);
  selectors.campaignForm.reset();
  delete selectors.campaignForm.dataset.editingCampaign;
  renderCampaigns();
  toast("Campaign saved.");
  return campaign;
};

selectors.saveCampaign?.addEventListener("click", saveCampaignDraft);
selectors.campaignForm?.addEventListener("input", renderEmailPreview);
selectors.campaignForm?.addEventListener("change", renderEmailPreview);
selectors.richEditor?.addEventListener("input", () => {
  syncRichMessage();
  renderEmailPreview();
});
selectors.richToolbar?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rich-command]");
  if (!button) return;
  selectors.richEditor?.focus();
  document.execCommand(button.dataset.richCommand, false, null);
  syncRichMessage();
  renderEmailPreview();
});
document.querySelector("[data-rich-font]")?.addEventListener("change", (event) => {
  selectors.richEditor?.focus();
  document.execCommand("fontName", false, event.target.value);
  syncRichMessage();
  renderEmailPreview();
});
document.querySelector("[data-rich-size]")?.addEventListener("change", (event) => {
  selectors.richEditor?.focus();
  document.execCommand("fontSize", false, "3");
  document.querySelectorAll(".rich-editor font[size='3']").forEach((font) => {
    font.removeAttribute("size");
    font.style.fontSize = event.target.value;
  });
  syncRichMessage();
  renderEmailPreview();
});
document.querySelector("[data-rich-color]")?.addEventListener("input", (event) => {
  selectors.richEditor?.focus();
  document.execCommand("foreColor", false, event.target.value);
  syncRichMessage();
  renderEmailPreview();
});

selectors.aiCampaignMessage?.addEventListener("click", () => {
  if (!selectors.campaignForm) return;
  const form = selectors.campaignForm;
  const name = form.querySelector('[name="name"]').value.trim() || "Home Weavers update";
  const subjectField = form.querySelector('[name="subject"]');
  const coupon = form.querySelector('[name="coupon"]').value.trim().toUpperCase();
  const messageField = form.querySelector('[name="message"]');
  const audience = form.querySelector('[name="audience"]').value === "new" ? "new subscribers" : "our subscribers";
  const richMessage = [
    `<p>Hi,</p>`,
    `<p>Thank you for being part of Home Weavers. We selected this update for ${audience} who love thoughtful bedding, bath, rugs, pillows, and home textiles.</p>`,
    `<p>${coupon ? `Use code <strong>${escapeHtml(coupon)}</strong> at checkout to enjoy your special offer.` : "Explore our latest arrivals and coordinated home pieces made to refresh everyday rooms."}</p>`,
    `<p><strong>Shop the collection today</strong> and bring a more finished, comfortable look to your home.</p>`
  ].join("");
  if (!subjectField.value.trim()) subjectField.value = coupon ? `Your Home Weavers offer: ${coupon}` : name;
  messageField.value = richMessage;
  if (selectors.richEditor) selectors.richEditor.innerHTML = richMessage;
  renderEmailPreview();
  toast("ChatGPT-style campaign message created. Real ChatGPT can be connected after deployment.");
});

selectors.aiBannerOptions?.addEventListener("click", () => {
  if (!selectors.campaignForm) return;
  const theme = selectors.campaignForm.querySelector('[name="theme"]').value.trim().toLowerCase();
  if (theme !== bannerOptionTheme) {
    bannerOptionTheme = theme;
    bannerOptionPage = 0;
  }
  const words = theme.split(/[^a-z0-9]+/).filter(Boolean);
  const rankedOptions = productImageOptions()
    .map((option, index) => {
      const haystack = [option.name, option.category, option.subcategory, option.color, option.sku].join(" ").toLowerCase();
      const score = words.reduce((sum, word) => sum + (haystack.includes(word) ? 5 : 0), 0) + Math.max(0, 5 - index * 0.1);
      return { ...option, score };
    })
    .sort((a, b) => b.score - a.score);
  const start = (bannerOptionPage * 5) % Math.max(rankedOptions.length, 1);
  const options = [...rankedOptions.slice(start, start + 5), ...rankedOptions.slice(0, Math.max(0, start + 5 - rankedOptions.length))].slice(0, 5);
  if (rankedOptions.length) bannerOptionPage += 1;
  renderBannerOptions(options);
  toast(options.length ? "Next 5 banner options created from product photos." : "Add product photos first, then create banner options.");
});

selectors.aiDesignedBanners?.addEventListener("click", () => {
  if (!selectors.campaignForm) return;
  const theme = selectors.campaignForm.querySelector('[name="theme"]').value.trim() || "Home Weavers Campaign";
  renderBannerOptions(designedBannerOptions(theme));
  toast(`5 banner designs created for ${theme}.`);
});

selectors.campaignBannerOptions?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-select-campaign-banner]");
  if (!option || !selectors.campaignForm) return;
  selectors.campaignForm.querySelector('[name="banner"]').value = option.dataset.selectCampaignBanner;
  selectors.campaignBannerOptions.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
  option.classList.add("active");
  renderEmailPreview();
  toast("Campaign banner selected.");
});

selectors.sendTestCampaign?.addEventListener("click", () => {
  const campaign = saveCampaignDraft();
  if (!campaign) return;
  toast("Test email is saved. Real sending will connect after Render and Resend are live.");
});

selectors.sendCampaign?.addEventListener("click", () => {
  const campaign = saveCampaignDraft();
  if (!campaign) return;
  toast("Campaign is saved. Real email blast sending will connect after Render and Resend are live.");
});

selectors.campaignList?.addEventListener("click", (event) => {
  const load = event.target.closest("[data-load-campaign]");
  const mark = event.target.closest("[data-mark-campaign]");
  const remove = event.target.closest("[data-delete-campaign]");
  if (load) {
    const campaign = readCampaigns().find((item) => item.id === load.dataset.loadCampaign);
    if (!campaign || !selectors.campaignForm) return;
    selectors.campaignForm.querySelector('[name="name"]').value = campaign.name || "";
    selectors.campaignForm.querySelector('[name="subject"]').value = campaign.subject || "";
    selectors.campaignForm.querySelector('[name="coupon"]').value = campaign.coupon || "";
    selectors.campaignForm.querySelector('[name="banner"]').value = campaign.banner || "";
    selectors.campaignForm.querySelector('[name="theme"]').value = campaign.theme || "";
    selectors.campaignForm.querySelector('[name="audience"]').value = campaign.audience || "all";
    selectors.campaignForm.querySelector('[name="message"]').value = campaign.message || "";
    if (selectors.richEditor) selectors.richEditor.innerHTML = campaign.message || "";
    selectors.campaignForm.querySelector('[name="testEmail"]').value = campaign.testEmail || "";
    selectors.campaignForm.dataset.editingCampaign = campaign.id;
    renderEmailPreview();
    toast("Campaign loaded for editing.");
  }
  if (mark) {
    saveCampaigns(
      readCampaigns().map((campaign) =>
        campaign.id === mark.dataset.markCampaign ? { ...campaign, status: "Sent", sentAt: new Date().toISOString() } : campaign
      )
    );
    renderCampaigns();
    toast("Campaign marked sent.");
  }
  if (remove) {
    saveCampaigns(readCampaigns().filter((campaign) => campaign.id !== remove.dataset.deleteCampaign));
    renderCampaigns();
    toast("Campaign deleted.");
  }
});

selectors.resetStore.addEventListener("click", () => {
  localStorage.removeItem("homeWeaversProducts");
  localStorage.removeItem("homeWeaversSettings");
  localStorage.removeItem("homeWeaversCatalogVersion");
  localStorage.removeItem("homeWeaversCategories");
  localStorage.removeItem("homeWeaversCategoryVersion");
  localStorage.removeItem("homeWeaversDeletedCategories");
  localStorage.removeItem("homeWeaversOrders");
  localStorage.removeItem("homeWeaversAnalytics");
  localStorage.removeItem("homeWeaversVisitorId");
  localStorage.removeItem("homeWeaversCoupons");
  localStorage.removeItem("homeWeaversSubscribers");
  localStorage.removeItem("homeWeaversCampaigns");
  products = defaultProducts.map(canonicalizeProduct);
  categories = cloneDefaultCategories();
  settings = { ...defaultSettings };
  selectedId = products[0].id;
  populateSettings();
  saveProducts();
  saveCategories();
  saveSettings();
  sync();
  toast("Demo data restored.");
});

normalizeCategoryData();
saveCategories();
populateSettings();
openAdminSection(window.location.hash.replace("#", "") || "dashboard");
sync();
