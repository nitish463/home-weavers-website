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
const readStorage = (key, fallback = null) => {
  try {
    const value = window.localStorage?.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};
const writeStorage = (key, value) => {
  try {
    window.localStorage?.setItem(key, JSON.stringify(value));
  } catch {
    // The storefront should still work when browser storage is unavailable.
  }
};
const readStorageText = (key, fallback = "") => {
  try {
    return window.localStorage?.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};
const writeStorageText = (key, value) => {
  try {
    window.localStorage?.setItem(key, value);
  } catch {
    // The storefront should still work when browser storage is unavailable.
  }
};

window.addEventListener("storage", (event) => {
  if (
    [
      "homeWeaversLastUpdate",
      "homeWeaversSettings",
      "homeWeaversCategories",
      "homeWeaversCategoryVersion",
      "homeWeaversDeletedCategories",
      "homeWeaversProducts",
      "homeWeaversCatalogVersion"
    ].includes(event.key)
  ) {
    window.location.reload();
  }
});

const trackSiteVisit = () => {
  const analytics = readStorage("homeWeaversAnalytics", {
    visits: 0,
    uniqueVisitors: 0,
    pages: {},
    firstVisit: "",
    lastVisit: ""
  });
  const visitorId = readStorageText("homeWeaversVisitorId", "");
  const now = new Date().toISOString();
  const page = window.location.pathname.split("/").pop() || "index.html";

  analytics.visits = Number(analytics.visits || 0) + 1;
  analytics.pages = analytics.pages || {};
  analytics.pages[page] = Number(analytics.pages[page] || 0) + 1;
  analytics.firstVisit = analytics.firstVisit || now;
  analytics.lastVisit = now;

  if (!visitorId) {
    writeStorageText("homeWeaversVisitorId", `visitor-${Date.now()}`);
    analytics.uniqueVisitors = Number(analytics.uniqueVisitors || 0) + 1;
  }

  writeStorage("homeWeaversAnalytics", analytics);
};
const savedProducts = readStorage("homeWeaversProducts", null);
const savedCatalogVersion = readStorageText("homeWeaversCatalogVersion");
const hasSavedCatalog = savedCatalogVersion === catalogVersion && Array.isArray(savedProducts) && savedProducts.length;
const products = hasSavedCatalog ? [...savedProducts] : [...defaultProducts];
let productsMigrated = false;
products.forEach((product, index) => {
  const nextProduct = productWithSkuVariants(product);
  if (nextProduct.category !== product.category) productsMigrated = true;
  if (!Array.isArray(product.variants) || !product.variants.length) productsMigrated = true;
  products[index] = nextProduct;
});

if (hasSavedCatalog) {
  const savedIds = new Set(products.map((product) => product.id));
  defaultProducts.forEach((product) => {
    if (!savedIds.has(product.id)) products.push(productWithSkuVariants(product));
  });
}

if (savedCatalogVersion !== catalogVersion) {
  writeStorage("homeWeaversProducts", defaultProducts.map(productWithSkuVariants));
  writeStorageText("homeWeaversCatalogVersion", catalogVersion);
} else if (hasSavedCatalog && (products.length !== savedProducts.length || productsMigrated)) {
  writeStorage("homeWeaversProducts", products);
}
const cloneDefaultCategories = () => defaultCategories.map((category) => ({ ...category, subcategories: [...category.subcategories] }));
const readCategories = () => {
  const savedCategories = readStorage("homeWeaversCategories", null);
  const savedCategoryVersion = readStorageText("homeWeaversCategoryVersion");
  const deletedCategories = new Set(readStorage("homeWeaversDeletedCategories", []));
  const merged = canonicalizeCategories(
    Array.isArray(savedCategories) && savedCategories.length ? savedCategories : cloneDefaultCategories()
  ).map(
    (category) => ({
      name: canonicalCategoryName(category.name),
      enabled: category.enabled !== false,
      disabledSubcategories: [...new Set(category.disabledSubcategories || [])],
      subcategories: [...new Set(category.subcategories || [])]
    })
  );

  if (savedCategoryVersion !== categoryVersion) {
    const bathCategory = merged.find((item) => item.name === "Bath");
    if (bathCategory && !bathCategory.subcategories.includes("Bath Accessories")) {
      bathCategory.subcategories.push("Bath Accessories");
    }
    writeStorage("homeWeaversCategories", merged.filter((category) => !deletedCategories.has(category.name)));
    writeStorageText("homeWeaversCategoryVersion", categoryVersion);
  }

  return merged.filter((category) => !deletedCategories.has(category.name));
};
const categories = readCategories();
const categoryEnabled = (categoryName) => categories.find((category) => category.name === categoryName)?.enabled !== false;
const subcategoryEnabled = (categoryName, subcategoryName) => {
  const category = categories.find((item) => item.name === categoryName);
  return !(category?.disabledSubcategories || []).includes(subcategoryName);
};
const productVariants = (product) => (Array.isArray(product?.variants) ? product.variants.filter((variant) => variant.sku) : []);
const sellableVariants = (product) =>
  productVariants(product).filter((variant) => variant.active !== false && Number(variant.stock || 0) > 0);
const defaultVariantForProduct = (product) => {
  const variants = sellableVariants(product);
  return variants.find((variant) => variant.sku === product?.defaultSku) || variants[0] || null;
};
const productStock = (product) => {
  const variants = productVariants(product);
  return variants.length
    ? variants.reduce((sum, variant) => sum + (variant.active === false ? 0 : Number(variant.stock || 0)), 0)
    : Number(product?.stock || 0);
};
const sellablePriceList = (product, field = "price") => {
  const variants = sellableVariants(product);
  return variants.length ? variants.map((variant) => Number(variant[field] || 0)).filter(Number.isFinite) : [Number(product?.[field] || 0)];
};
const productSalePrice = (product) => defaultVariantForProduct(product)?.price ?? Math.min(...sellablePriceList(product, "price"));
const productComparePrice = (product) => defaultVariantForProduct(product)?.compareAt ?? Math.max(...sellablePriceList(product, "compareAt"));
const productAvailableOnStorefront = (product) =>
  product?.active !== false &&
  productStock(product) > 0 &&
  categoryEnabled(product.category) &&
  subcategoryEnabled(product.category, product.subcategory);
const storefrontProducts = () => products.filter(productAvailableOnStorefront);
const storefrontCategories = () =>
  categories
    .filter((category) => category.enabled !== false)
    .map((category) => ({
      ...category,
      subcategories: (category.subcategories || []).filter((subcategory) => subcategoryEnabled(category.name, subcategory))
    }));

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

const savedSettings = readStorage("homeWeaversSettings", null);
const settings = {
  ...defaultSettings,
  ...(savedSettings || {}),
  categoryImages: {
    ...defaultSettings.categoryImages,
    ...((savedSettings || {}).categoryImages || {})
  }
};

const colorMap = {
  Oat: "#d8bea0",
  Indigo: "#284866",
  Clay: "#a4563c",
  Moss: "#5e6f55"
};
const commonColorMap = {
  ivory: "#f4efe2",
  white: "#ffffff",
  black: "#1f1d1b",
  gray: "#8f8a84",
  grey: "#8f8a84",
  charcoal: "#383838",
  navy: "#1f3556",
  blue: "#3e6d9c",
  sage: "#9aa58c",
  green: "#6e8568",
  beige: "#d8c7ad",
  taupe: "#9b8978",
  brown: "#725546",
  cream: "#f1e7d3",
  blush: "#d8aaa1",
  pink: "#d9a7b4",
  red: "#a94d45",
  gold: "#c9a35d"
};
const colorSwatch = (color) => {
  const value = String(color || "").trim();
  if (!value) return "#d8bea0";
  if (colorMap[value]) return colorMap[value];
  if (/^#|^rgb|^hsl/i.test(value)) return value;
  return commonColorMap[value.toLowerCase()] || "#d8bea0";
};

const materialByCategory = {
  Bedding: ["Cotton", "Linen"],
  Bath: ["Cotton"],
  Rugs: ["Wool", "Cotton"],
  Throws: ["Chenille", "Cotton"],
  "Home Decor": ["Linen", "Cotton"],
  "Table Linens": ["Linen", "Cotton"]
};

const styleByCategory = {
  Bedding: ["Classic", "Casual"],
  Bath: ["Modern", "Textured"],
  Rugs: ["Modern", "Textured"],
  Throws: ["Casual", "Textured"],
  "Home Decor": ["Modern", "Textured"],
  "Table Linens": ["Classic", "Casual"]
};

const galleryByCategory = {
  Bedding: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1617325247661-675ab4b64b2f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80"
  ],
  Bath: [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=80"
  ],
  Rugs: [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80"
  ],
  Throws: [
    "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  ],
  "Home Decor": [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80"
  ],
  "Table Linens": [
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
  ]
};

const variantGalleryByColor = {
  Oat: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80"
  ],
  Clay: [
    "https://images.unsplash.com/photo-1617325247661-675ab4b64b2f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  ],
  Indigo: [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
  ],
  Moss: [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
  ]
};

const variantGalleryBySize = {
  Twin: ["https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80"],
  Full: ["https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"],
  Queen: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"],
  King: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80"],
  "Set of 2": ["https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"],
  "Set of 4": ["https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80"],
  "Set of 6": ["https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"]
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const sampleNewArrivalIds = new Set([
  "hearthline-comforter-set",
  "hearthline-runner",
  "indigo-pillow-pair",
  "gathering-runner",
  "linen-shower-curtain"
]);
const isNewArrival = (product) =>
  sampleNewArrivalIds.has(product.id) || String(product.badge || "").toLowerCase().includes("new");
const isSaleTagged = (product) => String(product.badge || "").toLowerCase() === "sale";

const pageCategoryMap = {
  "bedding.html": "Bedding",
  "bath.html": "Bath",
  "rugs.html": "Rugs",
  "throws.html": "Throws",
  "pillows.html": "Home Decor",
  "dining.html": "Table Linens",
  "sale.html": "Sale"
};
const pageCollectionMap = {
  "new-arrivals.html": "new"
};
const pageSubcategoryMap = {
  "comforters.html": "Comforters",
  "quilts.html": "Quilts",
  "duvet-covers.html": "Duvet Covers",
  "sheets.html": "Sheets",
  "blankets.html": "Blankets",
  "shower-curtains.html": "Shower Curtains",
  "towels.html": "Towels",
  "bath-rugs.html": "Bath Rugs",
  "area-rugs.html": "Area Rugs",
  "runner-rugs.html": "Runner Rugs",
  "decorative-pillows.html": "Decorative Pillows",
  "pillow-covers.html": "Pillow Covers",
  "table-runners.html": "Table Runners",
  "napkins.html": "Napkins"
};
const categoryPageByName = Object.fromEntries(Object.entries(pageCategoryMap).map(([page, category]) => [category, page]));
const subcategoryPageByName = Object.fromEntries(
  Object.entries(pageSubcategoryMap).map(([page, subcategory]) => [subcategory, page])
);
const currentPage = window.location.pathname.split("/").pop();
const searchParams = new URLSearchParams(window.location.search);
const categoryForSubcategory = (subcategory) =>
  storefrontCategories().find((category) => (category.subcategories || []).includes(subcategory))?.name ||
  products.find((product) => product.subcategory === subcategory)?.category ||
  "All";
const urlCategory = searchParams.get("category") || "";
const urlSubcategory = searchParams.get("subcategory") || "";
const initialCategory =
  urlCategory ||
  (urlSubcategory ? categoryForSubcategory(urlSubcategory) : "") ||
  document.body.dataset.startCategory ||
  pageCategoryMap[currentPage] ||
  "All";
const initialSaleOnly = initialCategory === "Sale";
const initialSubcategory = urlSubcategory || document.body.dataset.startSubcategory || pageSubcategoryMap[currentPage] || "All";
const initialCollection = document.body.dataset.startCollection || pageCollectionMap[currentPage] || "";

const state = {
  category: initialSaleOnly ? "All" : initialCategory,
  subcategory: initialSubcategory,
  collection: initialCollection,
  saleOnly: initialSaleOnly,
  search: urlCategory || urlSubcategory ? "" : searchParams.get("q") || "",
  sort: "featured",
  price: "all",
  page: 1,
  pageSize: 12,
  colors: new Set(),
  materials: new Set(),
  styles: new Set(),
  sizes: new Set(),
  brands: new Set(),
  quickGallery: [],
  quickGalleryIndex: 0,
  lightboxOpen: false,
  couponCode: readStorageText("homeWeaversAppliedCoupon", ""),
  cart: readStorage("homeWeaversCart", {})
};

const selectors = {
  settingTargets: document.querySelectorAll("[data-setting]"),
  products: document.querySelector("[data-products]"),
  homeNewArrivals: document.querySelector("[data-home-new-arrivals]"),
  homeNewPrev: document.querySelector("[data-home-new-prev]"),
  homeNewNext: document.querySelector("[data-home-new-next]"),
  homeSaleItems: document.querySelector("[data-home-sale-items]"),
  homeSalePrev: document.querySelector("[data-home-sale-prev]"),
  homeSaleNext: document.querySelector("[data-home-sale-next]"),
  categoryCarousel: document.querySelector("[data-category-carousel]"),
  categoryPrev: document.querySelector("[data-category-prev]"),
  categoryNext: document.querySelector("[data-category-next]"),
  heroBanner: document.querySelector("[data-hero-banner]"),
  heroSlides: document.querySelectorAll("[data-hero-slide]"),
  heroPrev: document.querySelector("[data-hero-prev]"),
  heroNext: document.querySelector("[data-hero-next]"),
  heroDots: document.querySelectorAll("[data-hero-dot]"),
  empty: document.querySelector("[data-empty]"),
  searches: document.querySelectorAll("[data-search]"),
  sort: document.querySelector("[data-sort]"),
  pageSize: document.querySelector("[data-page-size]"),
  tabs: document.querySelectorAll("[data-category]"),
  navCategories: document.querySelectorAll("[data-nav-category]"),
  navCollections: document.querySelectorAll("[data-nav-collection]"),
  navSubcategories: document.querySelectorAll("[data-nav-subcategory]"),
  subcategoryMenus: document.querySelectorAll("[data-menu-category]"),
  filtersPanel: document.querySelector(".filters"),
  priceFilters: document.querySelectorAll("[data-price-filter]"),
  colorFilters: document.querySelectorAll("[data-color-filter]"),
  materialFilters: document.querySelectorAll("[data-material-filter]"),
  styleFilters: document.querySelectorAll("[data-style-filter]"),
  sizeFilters: document.querySelectorAll("[data-size-filter]"),
  brandFilters: document.querySelectorAll("[data-brand-filter]"),
  filterLegends: document.querySelectorAll(".filters .filter-legend"),
  clearFilters: document.querySelector("[data-clear-filters]"),
  resultsCount: document.querySelector("[data-results-count]"),
  pagination: document.querySelector("[data-pagination]"),
  cart: document.querySelector("[data-cart]"),
  cartOpenButtons: document.querySelectorAll("[data-cart-open]"),
  cartCloseButtons: document.querySelectorAll("[data-cart-close]"),
  cartCount: document.querySelector("[data-cart-count]"),
  cartItems: document.querySelector("[data-cart-items]"),
  cartEmpty: document.querySelector("[data-cart-empty]"),
  subtotal: document.querySelector("[data-subtotal]"),
  shipping: document.querySelector("[data-shipping]"),
  tax: document.querySelector("[data-tax]"),
  total: document.querySelector("[data-total]"),
  checkout: document.querySelector("[data-checkout]"),
  orderMessage: document.querySelector("[data-order-message]"),
  scrim: document.querySelector(".cart-scrim"),
  customForm: document.querySelector(".custom-form"),
  quickView: document.querySelector("[data-quick-view]"),
  quickContent: document.querySelector("[data-quick-content]"),
  quickClose: document.querySelector("[data-quick-close]")
};

const ensureCartCouponBox = () => {
  const summary = document.querySelector(".cart-summary");
  if (!summary || document.querySelector("[data-coupon-form]")) return;
  const couponValue = String(state.couponCode || "").replace(/"/g, "&quot;");
  summary.insertAdjacentHTML(
    "beforebegin",
    `
      <form class="coupon-form" data-coupon-form>
        <label>
          Coupon code
          <span>
            <input name="coupon" type="text" placeholder="NEW1001" value="${couponValue}">
            <button type="submit">Apply</button>
          </span>
        </label>
        <p class="coupon-message" data-coupon-message></p>
      </form>
    `
  );
};
ensureCartCouponBox();

const socialIconPaths = {
  Facebook:
    "M14.2 8.2h3.2V4.4c-.6-.1-2.6-.3-4.8-.3-4.8 0-8 2.9-8 8.2v4.6H1.4V21h3.2v-8.1h-3.2V8.2h3.2V5.3C4.6 2.1 6.5 0 9.8 0c1.6 0 3 .1 3.4.2v4h-2.3c-1.8 0-2.1.8-2.1 2v2h4.2l-.6 4.7H8.8V21h5.4v-8.1Z",
  Pinterest:
    "M12.1 1.8C6.5 1.8 3 5.4 3 10.1c0 3.2 1.8 5 3.7 5 .6 0 1-.3 1.1-.9l.4-1.5c.1-.5 0-.7-.3-1.1-.7-.8-1.1-1.8-1.1-3.2 0-3 2.2-5.7 5.9-5.7 3.2 0 5 2 5 4.8 0 3.4-1.5 6.3-3.8 6.3-1.2 0-2.2-1-1.9-2.3.4-1.5 1.1-3.1 1.1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3 0 1.1.4 1.8.4 1.8l-1.5 6.2c-.4 1.8-.1 3.9 0 4.1.1.1.2.1.3 0 .1-.1 1.7-2.1 2.2-3.8l.8-3c.4.8 1.6 1.5 2.9 1.5 3.8 0 6.4-3.5 6.4-8.1 0-3.5-3-6.8-7.6-6.8Z",
  Houzz: "M4 2.2v19.6l7.2-4.1v-7.9l8.8-5V2.2l-8.8 5V2.2H4Zm8.8 8.6v10.9l7.2-4.1V6.7l-7.2 4.1Z",
  Instagram:
    "M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm5.6-2.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
};

const footerLinksFromText = (value) =>
  String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, url] = line.split("|").map((part) => part.trim());
      return { label, url: url || "#" };
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

const applySettings = () => {
  const setText = (element, value, options = {}) => {
    if (!element) return;
    const text = value ?? "";
    element.textContent = text;
    if (options.hideWhenBlank) element.hidden = String(text).trim() === "";
  };
  const setImage = (image, value) => {
    if (!image) return;
    const source = value ?? "";
    image.hidden = String(source).trim() === "";
    if (source) image.src = source;
  };
  const valueFor = (key) => settings[key] ?? defaultSettings[key] ?? "";
  const paragraph = (key) => {
    const text = String(valueFor(key)).trim();
    return text ? `<p>${escapeHtml(text)}</p>` : "";
  };
  const heading = (tag, key) => {
    const text = String(valueFor(key)).trim();
    return text ? `<${tag}>${escapeHtml(text)}</${tag}>` : "";
  };
  const pageBanner = (prefix) => {
    const image = String(valueFor(`${prefix}BannerImage`)).trim();
    return image ? `<section class="info-page-banner"><img src="${escapeHtml(image)}" alt=""></section>` : "";
  };
  const pageHero = (prefix) => {
    const hasContent = [`${prefix}HeroKicker`, `${prefix}HeroTitle`, `${prefix}HeroText`].some((key) =>
      String(valueFor(key)).trim()
    );
    if (!hasContent) return "";
    return `
      <section class="info-hero">
        <div>
          ${heading("p", `${prefix}HeroKicker`).replace("<p>", '<p class="section-kicker">')}
          ${heading("h1", `${prefix}HeroTitle`)}
          ${paragraph(`${prefix}HeroText`)}
        </div>
      </section>
    `;
  };
  const pageCards = (prefix) => {
    const cards = [1, 2, 3]
      .map((number) => {
        const title = String(valueFor(`${prefix}Card${number}Title`)).trim();
        const text = String(valueFor(`${prefix}Card${number}Text`)).trim();
        if (!title && !text) return "";
        return `<article>${title ? `<h2>${escapeHtml(title)}</h2>` : ""}${text ? `<p>${escapeHtml(text)}</p>` : ""}</article>`;
      })
      .filter(Boolean)
      .join("");
    return cards ? `<section class="info-cards">${cards}</section>` : "";
  };
  const videoUrlFor = (url) => {
    const value = String(url || "").trim();
    if (!value) return "";
    const match = value.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
    const start = value.match(/[?&]t=(\d+)s?/) || value.match(/[?&]start=(\d+)/);
    if (!match) return value;
    return `https://www.youtube.com/embed/${match[1]}${start ? `?start=${start[1]}` : ""}`;
  };
  const renderEditableContentPage = () => {
    const page = contentPageDefinitions.find((item) => item.page === currentPage);
    const main = document.querySelector("main.info-page");
    if (!page || !main) return;
    const prefix = page.prefix;
    if (prefix === "about") {
      const videoUrl = videoUrlFor(valueFor("aboutVideoUrl"));
      const storyContent = ["aboutStoryKicker", "aboutStoryTitle", "aboutStoryText", "aboutStoryText2"].some((key) =>
        String(valueFor(key)).trim()
      );
      main.className = "info-page about-info-page";
      main.innerHTML = `
        ${pageBanner(prefix)}
        ${pageHero(prefix)}
        ${
          storyContent || videoUrl
            ? `<section class="info-video-grid">
                <div>
                  ${heading("p", "aboutStoryKicker").replace("<p>", '<p class="section-kicker">')}
                  ${heading("h2", "aboutStoryTitle")}
                  ${paragraph("aboutStoryText")}
                  ${paragraph("aboutStoryText2")}
                </div>
                ${videoUrl ? `<iframe src="${escapeHtml(videoUrl)}" title="Home Weavers video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` : ""}
              </section>`
            : ""
        }
        ${pageCards(prefix)}
      `;
      return;
    }
    if (prefix === "contact") {
      const phone = String(valueFor("contactPhone")).trim();
      const email = String(valueFor("contactEmail")).trim();
      const adminCard = ["contactAdminLabel", "contactAdminTitle", "contactAdminText"].some((key) => String(valueFor(key)).trim());
      const formContent = ["contactFormTitle", "contactNamePlaceholder", "contactEmailPlaceholder", "contactMessagePlaceholder", "contactButton"].some((key) =>
        String(valueFor(key)).trim()
      );
      main.className = "info-page contact-info-page";
      main.innerHTML = `
        ${pageBanner(prefix)}
        ${pageHero(prefix)}
        <section class="contact-cards">
          ${phone ? `<a href="tel:${escapeHtml(phone.replace(/[^0-9+]/g, ""))}"><span>${escapeHtml(valueFor("contactPhoneLabel"))}</span><strong>${escapeHtml(phone)}</strong><em>${escapeHtml(valueFor("contactPhoneText"))}</em></a>` : ""}
          ${email ? `<a href="mailto:${escapeHtml(email)}"><span>${escapeHtml(valueFor("contactEmailLabel"))}</span><strong>${escapeHtml(email)}</strong><em>${escapeHtml(valueFor("contactEmailText"))}</em></a>` : ""}
          ${adminCard ? `<a href="admin.html"><span>${escapeHtml(valueFor("contactAdminLabel"))}</span><strong>${escapeHtml(valueFor("contactAdminTitle"))}</strong><em>${escapeHtml(valueFor("contactAdminText"))}</em></a>` : ""}
        </section>
        ${
          formContent
            ? `<section class="contact-form">
                ${heading("h2", "contactFormTitle")}
                <form data-contact-form>
                  <label>Name<input name="name" type="text" placeholder="${escapeHtml(valueFor("contactNamePlaceholder"))}" required></label>
                  <label>Email<input name="email" type="email" placeholder="${escapeHtml(valueFor("contactEmailPlaceholder"))}" required></label>
                  <label>Message<textarea name="message" rows="5" placeholder="${escapeHtml(valueFor("contactMessagePlaceholder"))}" required></textarea></label>
                  <button type="submit">${escapeHtml(valueFor("contactButton"))}</button>
                  <p class="contact-message" data-contact-message role="status"></p>
                </form>
              </section>`
            : ""
        }
      `;
      return;
    }
    main.className = "info-page";
    main.innerHTML = `${pageBanner(prefix)}${pageHero(prefix)}${pageCards(prefix)}`;
  };

  selectors.settingTargets.forEach((target) => {
    const key = target.dataset.setting;
    setText(target, settings[key], { hideWhenBlank: true });
  });

  document.querySelectorAll(".home-logo, .site-header .brand").forEach((logo) => {
    logo.dataset.brandName = settings.brandName ?? defaultSettings.brandName;
    const image = logo.querySelector("img");
    setImage(image, settings.logoUrl);
  });

  document.querySelectorAll(".home-footer-logo img").forEach((image) => {
    setImage(image, settings.logoUrl);
  });

  selectors.searches.forEach((input) => {
    input.placeholder = settings.searchPlaceholder ?? defaultSettings.searchPlaceholder;
  });

  (settings.heroSlides || []).forEach((slide, index) => {
    const element = selectors.heroSlides[index];
    if (!element) return;
    const image = element.querySelector("img");
    const eyebrow = element.querySelector(".home-hero-copy span");
    const title = element.querySelector(".home-hero-copy h1");
    const text = element.querySelector(".home-hero-copy p");
    const button = element.querySelector(".home-hero-button");
    setImage(image, slide.image);
    setText(eyebrow, slide.eyebrow, { hideWhenBlank: true });
    setText(title, slide.title, { hideWhenBlank: true });
    setText(text, slide.text, { hideWhenBlank: true });
    if (button) {
      setText(button, slide.button, { hideWhenBlank: true });
      if (slide.url) button.href = slide.url;
    }
  });

  const updateBanner = (selector, prefix) => {
    const banner = document.querySelector(selector);
    if (!banner) return;
    const image = banner.querySelector("img");
    const eyebrow = banner.querySelector("span");
    const title = banner.querySelector("h2");
    const button = banner.querySelector("a");
    setImage(image, settings[`${prefix}Image`]);
    setText(eyebrow, settings[`${prefix}Eyebrow`], { hideWhenBlank: true });
    setText(title, settings[`${prefix}Title`], { hideWhenBlank: true });
    if (button) {
      setText(button, settings[`${prefix}Button`], { hideWhenBlank: true });
      if (settings[`${prefix}Url`]) button.href = settings[`${prefix}Url`];
    }
  };
  updateBanner(".home-banner:not(.home-banner-secondary)", "banner");
  updateBanner(".home-banner-secondary", "secondaryBanner");

  const homeAbout = document.querySelector(".home-about");
  if (homeAbout) {
    const title = homeAbout.querySelector("h1");
    const paragraphs = homeAbout.querySelectorAll("p");
    setText(title, settings.homeAboutTitle, { hideWhenBlank: true });
    setText(paragraphs[0], settings.homeAboutText, { hideWhenBlank: true });
    setText(paragraphs[1], settings.homeAboutText2, { hideWhenBlank: true });
  }

  const socialStrip = document.querySelector(".home-social-strip");
  if (socialStrip) {
    const socials = [
      ["Facebook", settings.socialFacebookImage, settings.socialFacebookUrl],
      ["Pinterest", settings.socialPinterestImage, settings.socialPinterestUrl],
      ["Houzz", settings.socialHouzzImage, settings.socialHouzzUrl],
      ["Instagram", settings.socialInstagramImage, settings.socialInstagramUrl]
    ];
    socialStrip.innerHTML = socials
      .filter(([, image]) => String(image ?? "").trim())
      .map(
        ([name, image, url]) => `
          <a class="home-social-card" href="${escapeHtml(url || "#")}" aria-label="Home Weavers on ${escapeHtml(name)}">
            <img src="${escapeHtml(image)}" alt="Home Weavers ${escapeHtml(name)} feature">
            <svg class="home-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="${socialIconPaths[name]}"/>
            </svg>
          </a>
        `
      )
      .join("");
  }

  const exclusive = document.querySelector(".home-exclusive");
  if (exclusive) {
    const title = exclusive.querySelector("h2");
    const text = exclusive.querySelector("p");
    const input = exclusive.querySelector("input");
    const button = exclusive.querySelector("button");
    setText(title, settings.exclusiveTitle, { hideWhenBlank: true });
    setText(text, settings.exclusiveText, { hideWhenBlank: true });
    if (input) input.placeholder = settings.exclusivePlaceholder ?? defaultSettings.exclusivePlaceholder;
    setText(button, settings.exclusiveButton, { hideWhenBlank: true });
  }

  renderEditableContentPage();

  const footer = document.querySelector(".home-footer");
  if (footer) {
    const columns = footer.children;
    const copyright = columns[0]?.querySelector("p:not(.home-footer-logo)");
    setText(copyright, settings.footerCopyright, { hideWhenBlank: true });
    const renderLinks = (nav, text) => {
      if (!nav) return;
      nav.innerHTML = text
        .filter((link) => link.enabled !== false)
        .map((link) => `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`)
        .join("");
    };
    renderLinks(columns[1], footerLinksFor("footerLinks", "footerLinksText"));
    renderLinks(columns[2], footerLinksFor("footerPolicyLinks", "footerPolicyLinksText"));
    const serviceTitle = columns[3]?.querySelector("strong");
    const phone = columns[3]?.querySelector(".home-phone");
    const serviceText = columns[3]?.querySelector("p:not(.home-phone)");
    setText(serviceTitle, settings.footerServiceTitle, { hideWhenBlank: true });
    setText(phone, settings.footerPhone, { hideWhenBlank: true });
    if (serviceText) {
      const footerHours = settings.footerHours ?? defaultSettings.footerHours;
      serviceText.innerHTML = escapeHtml(footerHours).replace(/\n/g, "<br>");
      serviceText.hidden = String(footerHours).trim() === "";
    }
  }

  const aboutHero = document.querySelector(".about-hero-copy");
  if (aboutHero) {
    const title = aboutHero.querySelector("h1");
    const text = aboutHero.querySelector("p:not(.section-kicker)");
    setText(title, settings.aboutHeroTitle, { hideWhenBlank: true });
    setText(text, settings.aboutHeroText, { hideWhenBlank: true });
  }
  const storyBlock = document.querySelector(".content-panel .content-block:not(.video-feature)");
  if (storyBlock) {
    const title = storyBlock.querySelector("h2");
    const text = storyBlock.querySelector("p");
    setText(title, settings.aboutStoryTitle, { hideWhenBlank: true });
    setText(text, settings.aboutStoryText, { hideWhenBlank: true });
  }
  const aboutVideo = document.querySelector(".content-video iframe");
  if (aboutVideo) {
    const videoUrl = settings.aboutVideoUrl ?? defaultSettings.aboutVideoUrl;
    aboutVideo.hidden = String(videoUrl).trim() === "";
    if (videoUrl) aboutVideo.src = videoUrl;
  }
};

const saveCart = () => {
  writeStorage("homeWeaversCart", state.cart);
  writeStorageText("homeWeaversAppliedCoupon", state.couponCode || "");
};

const saveOrder = (order) => {
  const orders = readStorage("homeWeaversOrders", []);
  writeStorage("homeWeaversOrders", [order, ...orders]);
};
const saveProductsToStore = () => {
  writeStorage("homeWeaversProducts", products);
  writeStorageText("homeWeaversCatalogVersion", catalogVersion);
  writeStorageText("homeWeaversLastUpdate", String(Date.now()));
};

const getProduct = (id) => products.find((product) => product.id === id);
const productSizes = (product) => {
  const variants = productVariants(product);
  if (variants.length) return [...new Set(variants.filter((variant) => variant.active !== false).map((variant) => variant.size).filter(Boolean))];
  return product.sizes || product.size.split("/").map((size) => size.trim()).filter(Boolean);
};
const productColors = (product, selectedSize = "") => {
  const variants = productVariants(product);
  if (!variants.length) return product.colors || [];
  const matching = variants.filter((variant) => variant.active !== false && (!selectedSize || variant.size === selectedSize));
  return [...new Set(matching.map((variant) => variant.color).filter(Boolean))];
};
const findVariant = (product, size, color) => {
  const variants = productVariants(product);
  if (!variants.length) return null;
  return (
    variants.find((variant) => variant.size === size && variant.color === color && variant.active !== false) ||
    variants.find((variant) => variant.size === size && variant.active !== false) ||
    variants.find((variant) => variant.active !== false) ||
    null
  );
};
const defaultVariantSelection = (product) => {
  const variant = defaultVariantForProduct(product);
  return {
    size: variant?.size || productSizes(product)[0],
    color: variant?.color || productColors(product, variant?.size || productSizes(product)[0])[0] || product.colors[0],
    variant
  };
};
const productMaterials = (product) => product.materials || materialByCategory[product.category] || ["Cotton"];
const productStyles = (product) => product.styles || styleByCategory[product.category] || ["Casual"];
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

const categoryLabel = (category) =>
  category === "Table Linens" ? "Dining" : category;

const categoryUrl = (category) =>
  `${categoryPageByName[category] || `category.html?category=${encodeURIComponent(category)}`}#shop`;

const subcategoryUrl = (subcategory) =>
  `${subcategoryPageByName[subcategory] || `category.html?subcategory=${encodeURIComponent(subcategory)}`}#shop`;

const categoryImage = (category) => {
  if (settings.categoryImages?.[category]) return settings.categoryImages[category];
  const product = storefrontProducts().find((item) => item.category === category) || products.find((item) => item.category === category);
  return (
    product?.image ||
    galleryByCategory[category]?.[0] ||
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80"
  );
};

const renderCategoryNavigation = () => {
  const visibleCategories = storefrontCategories();
  const categoryLinks = visibleCategories
    .map(
      (category) =>
        `<a href="${categoryUrl(category.name)}" data-nav-category="${escapeHtml(category.name)}">${escapeHtml(categoryLabel(category.name))}</a>`
    )
    .join("");
  const subcategoryMenus = visibleCategories
    .map(
      (category) => `
        <div data-menu-category="${escapeHtml(category.name)}">
          <strong>${escapeHtml(categoryLabel(category.name))}</strong>
          ${(category.subcategories || [])
            .map(
              (subcategory) =>
                `<a href="${subcategoryUrl(subcategory)}" data-nav-subcategory="${escapeHtml(subcategory)}">${escapeHtml(subcategory)}</a>`
            )
            .join("")}
        </div>
      `
    )
    .join("");

  document.querySelectorAll(".home-nav, .category-nav").forEach((nav) => {
    const hasNewArrivals = Boolean(nav.querySelector("[data-nav-collection='new']")) || nav.classList.contains("home-nav");
    nav.innerHTML = `
      ${categoryLinks}
      <a href="sale.html#shop" data-nav-category="Sale">Sale</a>
      ${hasNewArrivals ? '<a href="new-arrivals.html#shop" data-nav-collection="new">New Arrivals</a>' : ""}
    `;
  });

  document.querySelectorAll(".subcategory-nav").forEach((nav) => {
    nav.innerHTML = subcategoryMenus;
  });

  if (selectors.categoryCarousel) {
    selectors.categoryCarousel.innerHTML = visibleCategories
      .map(
        (category) => `
          <a class="home-tile" href="${categoryUrl(category.name)}" data-nav-category="${escapeHtml(category.name)}">
            <img src="${categoryImage(category.name)}" alt="${escapeHtml(categoryLabel(category.name))}">
            <span>
              <strong>${escapeHtml(categoryLabel(category.name))}</strong>
              <em>Explore Now &gt;</em>
            </span>
          </a>
        `
      )
      .join("");
  }

  document.querySelectorAll(".home-category-links").forEach((container) => {
    container.innerHTML = visibleCategories
      .map((category) => `<a href="${categoryUrl(category.name)}">${escapeHtml(categoryLabel(category.name))} &gt;</a>`)
      .join("");
  });

  selectors.navCategories = document.querySelectorAll("[data-nav-category]");
  selectors.navCollections = document.querySelectorAll("[data-nav-collection]");
  selectors.navSubcategories = document.querySelectorAll("[data-nav-subcategory]");
  selectors.subcategoryMenus = document.querySelectorAll("[data-menu-category]");
};
const productGallery = (product) => {
  const images = [product.image, ...(product.images || [])];
  return [...new Set(images)].slice(0, 6);
};
const productVariantGallery = (product, size, color) => {
  const selectedVariant = findVariant(product, size, color);
  if (selectedVariant) {
    return [...new Set([selectedVariant.image || product.image, ...(selectedVariant.images || [])].filter(Boolean))].slice(0, 6);
  }
  const variants = product.variantImages || {};
  const exactImages = variants[`${size}|${color}`] || variants[`${color}|${size}`] || [];
  const colorImages = variants[color] || [];
  const sizeImages = variants[size] || [];
  const images = [...exactImages, ...colorImages, ...sizeImages, ...productGallery(product)];
  return [...new Set(images)].slice(0, 6);
};
const variantKey = (id, size, color, sku = "") =>
  `${id}__${encodeURIComponent(size)}__${encodeURIComponent(color)}__${encodeURIComponent(sku)}`;
const parseVariantKey = (key) => {
  const [id, size = "", color = "", sku = ""] = key.split("__");
  return { id, size: decodeURIComponent(size), color: decodeURIComponent(color), sku: decodeURIComponent(sku) };
};
const totalProductQuantity = (id) =>
  Object.entries(state.cart).reduce((sum, [key, quantity]) => {
    const variant = parseVariantKey(key);
    return variant.id === id ? sum + quantity : sum;
  }, 0);
const variantQuantity = (id, size, color, sku = "") => state.cart[variantKey(id, size, color, sku)] || 0;
const cartEntries = () =>
  Object.entries(state.cart)
    .map(([key, quantity]) => {
      const variant = parseVariantKey(key);
      const product = getProduct(variant.id);
      const selectedVariant = product ? findVariant(product, variant.size, variant.color) : null;
      return { key, product, selectedVariant, quantity, ...variant };
    })
    .filter((entry) => entry.product && productAvailableOnStorefront(entry.product) && entry.quantity > 0);

const readCoupons = () => readStorage("homeWeaversCoupons", []);
const activeCoupon = () => {
  const code = String(state.couponCode || "").trim().toUpperCase();
  if (!code) return null;
  return readCoupons().find((coupon) => coupon.code === code && coupon.active !== false) || null;
};
const couponDiscount = (subtotal) => {
  const coupon = activeCoupon();
  if (!coupon || subtotal <= 0) return 0;
  const amount =
    coupon.type === "percent"
      ? subtotal * (Number(coupon.amount || 0) / 100)
      : Number(coupon.amount || 0);
  return Math.min(subtotal, Math.max(0, amount));
};

const cartTotals = () => {
  const subtotal = cartEntries().reduce(
    (sum, entry) => sum + (entry.selectedVariant?.price ?? entry.product.price) * entry.quantity,
    0
  );
  const discount = couponDiscount(subtotal);
  return { subtotal, discount, shipping: null, tax: null, total: subtotal - discount };
};

const matchesPrice = (product) => {
  const price = productSalePrice(product);
  if (state.price === "under-100") return price < 100;
  if (state.price === "100-200") return price >= 100 && price <= 200;
  if (state.price === "over-200") return price > 200;
  return true;
};

const matchesCategory = (product) => {
  if (!productAvailableOnStorefront(product)) return false;
  if (state.saleOnly && !isSaleTagged(product)) return false;
  if (state.category === "All") return true;
  return product.category === state.category;
};

const matchesCollection = (product) => {
  if (state.collection !== "new") return true;
  return isNewArrival(product);
};

const matchesSubcategory = (product) => {
  if (state.subcategory === "All") return true;
  return product.subcategory === state.subcategory;
};

const baseFilterProducts = () =>
  storefrontProducts().filter((product) => matchesCollection(product) && matchesCategory(product) && matchesSubcategory(product));

const fieldsetByLabel = (label) =>
  selectors.filtersPanel
    ? [...selectors.filtersPanel.querySelectorAll("fieldset")].find((fieldset) => fieldset.getAttribute("aria-label") === label)
    : null;

const configureFilterLegend = (fieldset) => {
  const legend = fieldset?.querySelector(".filter-legend");
  if (!legend) return;
  if (window.matchMedia("(max-width: 720px)").matches && !fieldset.dataset.filterInitialized) {
    fieldset.classList.add("collapsed");
    fieldset.dataset.filterInitialized = "true";
  }
  const label = fieldset.getAttribute("aria-label") || legend.textContent.trim();
  legend.setAttribute("role", "button");
  legend.setAttribute("tabindex", "0");
  legend.setAttribute("aria-expanded", String(!fieldset.classList.contains("collapsed")));
  legend.setAttribute("aria-label", `Toggle ${label} filter`);
};

const updateFieldset = (label, optionsMarkup) => {
  const fieldset = fieldsetByLabel(label);
  if (!fieldset) return;
  const collapsed = fieldset.classList.contains("collapsed");
  fieldset.innerHTML = `<div class="filter-legend">${label}</div>${optionsMarkup || '<p class="filter-empty">No options</p>'}`;
  fieldset.classList.toggle("collapsed", collapsed);
  configureFilterLegend(fieldset);
};

const sortByOrder = (values, order = []) =>
  [...values].sort((a, b) => {
    const aIndex = order.indexOf(a);
    const bIndex = order.indexOf(b);
    if (aIndex !== -1 || bIndex !== -1) return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    return a.localeCompare(b);
  });

const checkboxMarkup = (values, selectedSet, attribute) =>
  values
    .map(
      (value) => `
        <label><input type="checkbox" value="${escapeHtml(value)}" ${selectedSet.has(value) ? "checked" : ""} ${attribute}> ${escapeHtml(value)}</label>
      `
    )
    .join("");

const singleCheckboxMarkup = (value, label, checked, attribute) =>
  `<label><input type="checkbox" value="${escapeHtml(value)}" ${checked ? "checked" : ""} ${attribute}> ${escapeHtml(label)}</label>`;

const categoryFilterMarkup = (scopedProducts) => {
  const categoryOrder = ["Bedding", "Bath", "Rugs", "Throws", "Home Decor", "Table Linens"];
  const availableProducts = storefrontProducts();
  const categorySourceProducts = state.collection === "new" ? availableProducts.filter(matchesCollection) : state.saleOnly ? availableProducts.filter(isSaleTagged) : scopedProducts;
  const categoryChoices = sortByOrder(new Set(categorySourceProducts.map((product) => product.category)), categoryOrder);
  const categoryOptions = `
    ${singleCheckboxMarkup("All", "All", state.category === "All" && state.subcategory === "All", "data-category-filter")}
    ${categoryChoices
      .map((category) => {
        const label = category === "Table Linens" ? "Dining" : category;
        return singleCheckboxMarkup(category, label, state.category === category && state.subcategory === "All", "data-category-filter");
      })
      .join("")}
  `;

  if (state.category !== "All" || state.subcategory !== "All") {
    const activeCategory =
      state.category !== "All" ? state.category : availableProducts.find((product) => product.subcategory === state.subcategory)?.category;
    const subcategories = sortByOrder(
      new Set(categorySourceProducts.filter((product) => product.category === activeCategory).map((product) => product.subcategory)),
      [
        "Comforters",
        "Quilts",
        "Duvet Covers",
        "Sheets",
        "Shower Curtains",
        "Towels",
        "Bath Rugs",
        "Area Rugs",
        "Runner Rugs",
        "Blankets",
        "Decorative Pillows",
        "Pillow Covers",
        "Table Runners",
        "Napkins"
      ]
    );
    return `
      ${categoryOptions}
      ${subcategories
        .map(
          (subcategory) =>
            singleCheckboxMarkup(subcategory, subcategory, state.subcategory === subcategory, "data-subcategory-filter")
        )
        .join("")}
    `;
  }

  return categoryOptions;
};

const pruneSelectedSet = (selectedSet, validValues) => {
  selectedSet.forEach((value) => {
    if (!validValues.has(value)) selectedSet.delete(value);
  });
};

const renderFilters = () => {
  if (!selectors.filtersPanel) return;
  const scopedProducts = baseFilterProducts();
  const materials = sortByOrder(new Set(scopedProducts.flatMap(productMaterials)), ["Cotton", "Linen", "Wool", "Chenille"]);
  const styles = sortByOrder(new Set(scopedProducts.flatMap(productStyles)), ["Modern", "Classic", "Casual", "Textured"]);
  const colors = sortByOrder(new Set(scopedProducts.flatMap((product) => productColors(product))), Object.keys(colorMap));
  const sizes = sortByOrder(new Set(scopedProducts.flatMap(productSizes)), ["Twin", "Full", "Queen", "King"]);
  const brands = sortByOrder(new Set(scopedProducts.map((product) => product.brand)));
  const validMaterials = new Set(materials);
  const validStyles = new Set(styles);
  const validColors = new Set(colors);
  const validSizes = new Set(sizes);
  const validBrands = new Set(brands);
  pruneSelectedSet(state.materials, validMaterials);
  pruneSelectedSet(state.styles, validStyles);
  pruneSelectedSet(state.colors, validColors);
  pruneSelectedSet(state.sizes, validSizes);
  pruneSelectedSet(state.brands, validBrands);

  const priceOptions = [
    ["all", "All", true],
    ["under-100", "Under $100", scopedProducts.some((product) => productSalePrice(product) < 100)],
    ["100-200", "$100 to $200", scopedProducts.some((product) => {
      const price = productSalePrice(product);
      return price >= 100 && price <= 200;
    })],
    ["over-200", "Over $200", scopedProducts.some((product) => productSalePrice(product) > 200)]
  ].filter(([, , available]) => available);
  if (!priceOptions.some(([value]) => value === state.price)) state.price = "all";

  updateFieldset("Material", checkboxMarkup(materials, state.materials, "data-material-filter"));
  updateFieldset("Style", checkboxMarkup(styles, state.styles, "data-style-filter"));
  updateFieldset("Color", checkboxMarkup(colors, state.colors, "data-color-filter"));
  updateFieldset(
    "Price",
    priceOptions
      .map(
        ([value, label]) =>
          `<label><input type="radio" name="price" value="${escapeHtml(value)}" ${state.price === value ? "checked" : ""} data-price-filter> ${escapeHtml(label)}</label>`
      )
      .join("")
  );
  updateFieldset("Size", checkboxMarkup(sizes, state.sizes, "data-size-filter"));
  updateFieldset("Brand", checkboxMarkup(brands, state.brands, "data-brand-filter"));
};

const filteredProducts = () => {
  const search = state.search.trim().toLowerCase();
  const activeColors = [...state.colors];
  const activeMaterials = [...state.materials];
  const activeStyles = [...state.styles];
  const activeSizes = [...state.sizes];
  const activeBrands = [...state.brands];

  const filtered = storefrontProducts().filter((product) => {
    const inSearch = [
      product.name,
      product.brand,
      product.category,
      product.subcategory,
      product.description,
      product.size,
      (product.searchWords || []).join(" "),
      productColors(product).join(" "),
      productMaterials(product).join(" "),
      productStyles(product).join(" "),
      productSizes(product).join(" ")
    ]
      .join(" ")
      .toLowerCase()
      .includes(search);
    const inColor = activeColors.length === 0 || activeColors.some((color) => productColors(product).includes(color));
    const inMaterial =
      activeMaterials.length === 0 || activeMaterials.some((material) => productMaterials(product).includes(material));
    const inStyle = activeStyles.length === 0 || activeStyles.some((style) => productStyles(product).includes(style));
    const sizes = productSizes(product);
    const inSize =
      activeSizes.length === 0 ||
      activeSizes.some((size) =>
        size === "Set"
          ? sizes.some((item) => item.toLowerCase().includes("set"))
          : size === "Rug"
          ? product.category === "Rugs" || sizes.some((item) => item.toLowerCase().includes("ft"))
          : sizes.includes(size)
      );
    const inBrand = activeBrands.length === 0 || activeBrands.includes(product.brand);

    return (
      matchesCollection(product) &&
      matchesCategory(product) &&
      matchesSubcategory(product) &&
      matchesPrice(product) &&
      inColor &&
      inMaterial &&
      inStyle &&
      inSize &&
      inBrand &&
      inSearch
    );
  });

  return filtered.sort((a, b) => {
    if (state.sort === "best") return Number(b.best) - Number(a.best) || b.reviews - a.reviews;
    if (state.sort === "price-low") return productSalePrice(a) - productSalePrice(b);
    if (state.sort === "price-high") return productSalePrice(b) - productSalePrice(a);
    if (state.sort === "name") return a.name.localeCompare(b.name);
    return products.indexOf(a) - products.indexOf(b);
  });
};

const setPage = (page) => {
  state.page = Math.max(1, page);
  renderProducts();
  document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const resetPage = () => {
  state.page = 1;
};

const setCategory = (category) => {
  state.saleOnly = category === "Sale";
  state.category = state.saleOnly ? "All" : category;
  state.subcategory = "All";
  state.collection = "";
  resetPage();
  selectors.tabs.forEach((item) => item.classList.toggle("active", item.dataset.category === category));
  selectors.navCategories.forEach((item) =>
    item.classList.toggle(
      "active",
      item.dataset.navCategory === category ||
        (item.dataset.navCategory === "Sale" && state.saleOnly)
    )
  );
  selectors.navCollections.forEach((item) => item.classList.remove("active"));
  renderProducts();
};

const setFilterCategory = (category) => {
  state.category = category;
  state.subcategory = "All";
  resetPage();
  renderProducts();
};

const setSubcategory = (subcategory) => {
  state.subcategory = subcategory;
  state.collection = "";
  const product = products.find((item) => item.subcategory === subcategory);
  if (product) state.category = product.category;
  resetPage();
  renderProducts();
};

const setCollection = (collection) => {
  state.collection = collection;
  state.category = "All";
  state.subcategory = "All";
  state.saleOnly = false;
  resetPage();
  renderProducts();
};

const closeDepartmentMenu = (header) => {
  if (!header) return;
  delete header.dataset.menuOpen;
  delete header.dataset.openCategory;
  header.querySelectorAll("[data-menu-category]").forEach((menu) => menu.classList.remove("active"));
};

const positionDepartmentMenu = (header, trigger) => {
  if (!header || !trigger) return;
  const headerRect = header.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const menuWidth = Math.min(320, document.documentElement.clientWidth - 32);
  const edgeSpace = menuWidth / 2 + 16;
  const triggerCenter = triggerRect.left + triggerRect.width / 2 - headerRect.left;
  const clampedCenter = Math.min(
    Math.max(triggerCenter, edgeSpace),
    Math.max(edgeSpace, headerRect.width - edgeSpace)
  );
  header.style.setProperty("--menu-left", `${clampedCenter}px`);
};

const openDepartmentMenu = (category, header, trigger) => {
  if (!header) return;
  const menus = [...header.querySelectorAll("[data-menu-category]")];
  const matchingMenu = menus.find((menu) => menu.dataset.menuCategory === category);
  menus.forEach((menu) => menu.classList.toggle("active", menu === matchingMenu));

  if (matchingMenu) {
    positionDepartmentMenu(header, trigger);
    header.dataset.menuOpen = "true";
    header.dataset.openCategory = category;
  } else {
    closeDepartmentMenu(header);
  }
};

const productCardMarkup = (product, badgeOverride = "") => {
  const quantity = totalProductQuantity(product.id);
  const stock = productStock(product);
  const colors = productColors(product);
  const soldOut = quantity >= stock;
  const badge = badgeOverride || (isSaleTagged(product) ? "Sale" : isNewArrival(product) ? "New" : product.badge);
  const defaultVariant = defaultVariantForProduct(product);
  const cardPrice = productSalePrice(product);
  const cardCompareAt = productComparePrice(product);
  const colorDots = colors
    .map((color) => `<span class="color-dot" title="${color}" style="background:${colorSwatch(color)}"></span>`)
    .join("");

  return `
    <article class="product-card" data-product-card="${product.id}" tabindex="0" role="button" aria-label="View ${product.name}">
      <div class="product-image" data-quick="${product.id}">
        <img src="${defaultVariant?.image || product.image}" alt="${product.name}">
        <span class="product-badge">${badge}</span>
        <button class="quicklook-label" type="button" data-quick="${product.id}">Quicklook</button>
      </div>
      <div class="product-body">
        <span class="brand-name">${product.brand}</span>
        <h3 data-quick="${product.id}">${product.name}</h3>
        <div class="quick-row">
          <button class="quick-text" type="button" data-quick="${product.id}">Quicklook</button>
          <span>+ Colors</span>
        </div>
        <div class="price-row">
          <span class="compare-price">${currency.format(cardCompareAt)}</span>
          <span class="product-price">${currency.format(cardPrice)}</span>
        </div>
        <div class="rating-row">
          <span class="stars">★★★★★</span>
          <span>${product.rating} (${product.reviews})</span>
        </div>
        <span class="visually-hidden">${stock - quantity} available ${colorDots} ${soldOut}</span>
      </div>
    </article>
  `;
};

const renderHomeNewArrivals = () => {
  if (!selectors.homeNewArrivals) return;
  const newProducts = storefrontProducts().filter((product) => isNewArrival(product));
  if (!newProducts.length) return;
  selectors.homeNewArrivals.innerHTML = newProducts.map((product) => productCardMarkup(product)).join("");
};

const renderHomeSaleItems = () => {
  if (!selectors.homeSaleItems) return;
  const saleProducts = storefrontProducts().filter((product) => isSaleTagged(product));
  if (!saleProducts.length) return;
  selectors.homeSaleItems.innerHTML = saleProducts.map((product) => productCardMarkup(product, "Sale")).join("");
};

const renderProducts = () => {
  if (!selectors.products) return;
  renderFilters();

  const visibleProducts = filteredProducts();
  const label =
    state.search.trim()
      ? `Search results for "${state.search.trim()}"`
      : state.collection === "new"
      ? "New Arrivals"
      : state.subcategory !== "All"
      ? state.subcategory
      : state.saleOnly && state.category === "All"
      ? "Sale collection"
      : state.saleOnly
      ? `${state.category} sale`
      : state.category === "All"
        ? "all products"
        : state.category;
  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const startIndex = (state.page - 1) * state.pageSize;
  const pagedProducts = visibleProducts.slice(startIndex, startIndex + state.pageSize);
  selectors.tabs.forEach((item) => item.classList.toggle("active", item.dataset.category === state.category));
  selectors.navCategories.forEach((item) =>
    item.classList.toggle(
      "active",
      item.dataset.navCategory === state.category ||
        (item.dataset.navCategory === "Sale" && state.saleOnly)
    )
  );
  selectors.navCollections.forEach((item) =>
    item.classList.toggle("active", item.dataset.navCollection === state.collection)
  );
  selectors.navSubcategories.forEach((item) =>
    item.classList.toggle("active", item.dataset.navSubcategory === state.subcategory)
  );
  const firstResult = visibleProducts.length ? startIndex + 1 : 0;
  const lastResult = Math.min(startIndex + pagedProducts.length, visibleProducts.length);
  if (selectors.resultsCount) {
    selectors.resultsCount.textContent = `Showing ${firstResult}-${lastResult} of ${visibleProducts.length} Results`;
  }
  const breadcrumbCurrent = document.querySelector(".breadcrumb span:last-child");
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent =
      state.search.trim()
        ? "Search"
        : state.collection === "new"
        ? "New Arrivals"
        : state.subcategory !== "All"
        ? state.subcategory
        : state.saleOnly
        ? "Sale"
        : state.category === "All"
        ? "Products"
        : categoryLabel(state.category);
  }
  const shopTitle = document.querySelector("[data-shop-title]");
  if (shopTitle) {
    shopTitle.textContent =
      state.search.trim()
        ? label
        : state.collection === "new"
        ? label
        : state.subcategory !== "All"
          ? label
          : state.saleOnly
          ? label
          : state.category === "All"
          ? "Designer home textiles"
          : `${state.category} collection`;
  }

  selectors.products.innerHTML = pagedProducts.map((product) => productCardMarkup(product)).join("");

  if (selectors.empty) selectors.empty.hidden = visibleProducts.length > 0;
  if (selectors.pagination) {
    selectors.pagination.innerHTML =
      totalPages <= 1
      ? ""
      : `
        <button type="button" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>Previous</button>
        <span>Page ${state.page} of ${totalPages}</span>
        <button type="button" data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>Next</button>
      `;
  }
};

const renderCart = () => {
  if (!selectors.cart || !selectors.cartCount || !selectors.cartItems || !selectors.checkout) return;
  const entries = cartEntries();
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const totals = cartTotals();
  const coupon = activeCoupon();
  const couponMessage = document.querySelector("[data-coupon-message]");
  const couponDiscountLine = document.querySelector("[data-discount-line]");
  if (!couponDiscountLine && selectors.subtotal?.closest(".cart-summary")) {
    selectors.subtotal.closest(".cart-summary").querySelector("[data-subtotal]")?.closest("div")?.insertAdjacentHTML(
      "afterend",
      `<div class="discount-line" data-discount-line hidden><span>Discount</span><strong data-discount>$0</strong></div>`
    );
  }

  selectors.cartCount.textContent = itemCount;
  selectors.cartEmpty.hidden = entries.length > 0;
  selectors.checkout.querySelector("button").disabled = entries.length === 0;
  selectors.cartItems.innerHTML = entries
    .map(
      ({ key, product, selectedVariant, quantity, size, color, sku }) => `
        <article class="cart-item">
          <img src="${selectedVariant?.image || product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${sku ? `${sku} · ` : ""}${size} · ${color} · ${currency.format(selectedVariant?.price ?? product.price)}</p>
            <div class="cart-item-actions">
              <div class="quantity-control" aria-label="Quantity for ${product.name}">
                <button type="button" data-decrease="${key}" aria-label="Decrease ${product.name}">−</button>
                <strong>${quantity}</strong>
                <button type="button" data-increase="${key}" aria-label="Increase ${product.name}" ${
        selectedVariant
          ? quantity >= Number(selectedVariant.stock || 0)
          : totalProductQuantity(product.id) >= productStock(product)
          ? "disabled"
          : ""
      }>+</button>
              </div>
              <button class="remove-button" type="button" data-remove="${key}">Remove</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  selectors.subtotal.textContent = currency.format(totals.subtotal);
  const discountLine = document.querySelector("[data-discount-line]");
  const discountValue = document.querySelector("[data-discount]");
  if (discountLine && discountValue) {
    discountLine.hidden = totals.discount <= 0;
    discountValue.textContent = `-${currency.format(totals.discount)}`;
  }
  selectors.shipping.textContent = "TBD";
  if (selectors.tax) selectors.tax.textContent = "TBD";
  selectors.total.textContent = currency.format(totals.total);
  if (couponMessage) {
    couponMessage.textContent = state.couponCode
      ? coupon
        ? `${coupon.code} applied.`
        : "Coupon is not active or was not found."
      : "";
  }
};

const sync = () => {
  saveCart();
  renderHomeNewArrivals();
  renderHomeSaleItems();
  renderProducts();
  renderCart();
};

const addToCart = (id, size, color) => {
  const product = getProduct(id);
  if (!productAvailableOnStorefront(product)) return;
  const selectedSize = size || productSizes(product)[0];
  const selectedColor = color || productColors(product, selectedSize)[0] || product.colors[0];
  const selectedVariant = findVariant(product, selectedSize, selectedColor);
  const selectedSku = selectedVariant?.sku || "";
  const key = variantKey(id, selectedSize, selectedColor, selectedSku);
  const currentQuantity = state.cart[key] || 0;

  if (!product) return;
  if (selectedVariant && currentQuantity >= Number(selectedVariant.stock || 0)) return;
  if (!selectedVariant && totalProductQuantity(id) >= productStock(product)) return;
  state.cart[key] = currentQuantity + 1;
  selectors.orderMessage.textContent = "";
  sync();
};

const increaseCart = (key) => {
  const variant = parseVariantKey(key);
  addToCart(variant.id, variant.size, variant.color);
};

const decreaseCart = (key) => {
  if (!state.cart[key]) return;
  state.cart[key] -= 1;
  if (state.cart[key] <= 0) delete state.cart[key];
  sync();
};

const removeFromCart = (key) => {
  delete state.cart[key];
  sync();
};

const addDefaultVariantToCart = (id) => {
  const product = getProduct(id);
  if (!product) return;
  const { size, color } = defaultVariantSelection(product);
  addToCart(id, size, color);
};

const openCart = () => {
  selectors.cart.classList.add("open");
  selectors.cart.setAttribute("aria-hidden", "false");
  selectors.scrim.hidden = false;
  document.body.classList.add("cart-open");
};

const closeCart = () => {
  selectors.cart.classList.remove("open");
  selectors.cart.setAttribute("aria-hidden", "true");
  selectors.scrim.hidden = true;
  document.body.classList.remove("cart-open");
};

const openQuickView = (id) => {
  const product = getProduct(id);
  if (!product) return;
  const sizes = productSizes(product);
  const { size: defaultSize, color: defaultColor, variant: defaultVariant } = defaultVariantSelection(product);
  state.quickGallery = productVariantGallery(product, defaultSize, defaultColor);
  state.quickGalleryIndex = 0;

  const colors = productColors(product, defaultSize);
  const colorDots = colors
    .map((color) => `<span class="color-dot" title="${color}" style="background:${colorSwatch(color)}"></span>`)
    .join("");
  const sizeOptions = sizes
    .map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`)
    .join("");
  const colorOptions = colors
    .map((color) => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`)
    .join("");
  const shownPrice = defaultVariant?.price ?? product.price;
  const shownCompareAt = defaultVariant?.compareAt ?? product.compareAt;
  const shownStock = defaultVariant
    ? Number(defaultVariant.stock || 0) - variantQuantity(product.id, defaultSize, defaultColor, defaultVariant.sku)
    : productStock(product) - totalProductQuantity(product.id);
  const shownDescription = defaultVariant?.description || product.description || "";
  const shownDetails = defaultVariant?.details?.length ? defaultVariant.details : product.details || [];

  selectors.quickContent.innerHTML = `
    <div class="quick-content">
      <div class="quick-gallery" data-gallery>
        <div class="quick-main-image">
          <button class="gallery-arrow prev" type="button" data-gallery-prev aria-label="Previous product image">‹</button>
          <button class="gallery-image-button" type="button" data-open-gallery aria-label="Open larger product image">
            <img src="${state.quickGallery[0]}" alt="${product.name}" data-gallery-main>
          </button>
          <button class="gallery-arrow next" type="button" data-gallery-next aria-label="Next product image">›</button>
        </div>
        <div class="quick-thumbs" aria-label="Product image thumbnails" data-gallery-thumbs></div>
      </div>
      <div class="quick-copy">
        <p class="section-kicker">${product.brand}</p>
        <h2>${product.name}</h2>
        <div class="price-row">
          <span class="compare-price" data-quick-compare>${currency.format(shownCompareAt)}</span>
          <span class="product-price" data-quick-price>${currency.format(shownPrice)}</span>
        </div>
        <p data-quick-description>${escapeHtml(shownDescription)}</p>
        <div class="rating-row">
          <span class="stars">★★★★★</span>
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="color-dots" aria-label="${colors.join(", ")}" data-quick-color-dots>${colorDots}</div>
        <ul data-quick-detail-list>
          ${shownDetails.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
        </ul>
        <ul>
          <li>${product.size}</li>
          <li data-quick-stock>${shownStock} currently available</li>
          <li data-quick-sku ${defaultVariant?.sku ? "" : "hidden"}>SKU: ${defaultVariant?.sku || ""}</li>
        </ul>
        <div class="variant-controls quick-variants" data-variant-controls="${product.id}">
          <label>
            Size
            <select data-size-for="${product.id}">${sizeOptions}</select>
          </label>
          <label>
            Color
            <select data-color-for="${product.id}">${colorOptions}</select>
          </label>
        </div>
        <button class="button primary" type="button" data-add="${product.id}">Add to cart · ${currency.format(shownPrice)}</button>
      </div>
    </div>
  `;

  renderQuickGallery(product);
  selectors.quickView.showModal();
};

const quickVariantSelection = (product) => {
  const size = selectors.quickContent?.querySelector(`[data-size-for="${product.id}"]`)?.value || productSizes(product)[0];
  const color =
    selectors.quickContent?.querySelector(`[data-color-for="${product.id}"]`)?.value ||
    productColors(product, size)[0] ||
    product.colors[0];
  return { size, color };
};

const renderQuickGallery = (product, syncColorOptions = false) => {
  const { size, color } = quickVariantSelection(product);
  const colors = productColors(product, size);
  const colorSelect = selectors.quickContent?.querySelector(`[data-color-for="${product.id}"]`);
  let selectedColor = color;
  if (syncColorOptions && colorSelect) {
    selectedColor = colors.includes(color) ? color : colors[0] || color;
    colorSelect.innerHTML = colors.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    colorSelect.value = selectedColor;
  }
  const selectedVariant = findVariant(product, size, selectedColor);
  state.quickGallery = productVariantGallery(product, size, selectedColor);
  state.quickGalleryIndex = 0;
  const mainImage = selectors.quickContent?.querySelector("[data-gallery-main]");
  if (mainImage) {
    mainImage.src = state.quickGallery[0];
	    mainImage.alt = `${product.name} in ${selectedColor}, ${size}`;
	  }
  const price = selectedVariant?.price ?? product.price;
  const compareAt = selectedVariant?.compareAt ?? product.compareAt;
  const available = selectedVariant
    ? Number(selectedVariant.stock || 0) - variantQuantity(product.id, size, selectedColor, selectedVariant.sku)
    : productStock(product) - totalProductQuantity(product.id);
  const priceElement = selectors.quickContent?.querySelector("[data-quick-price]");
  const compareElement = selectors.quickContent?.querySelector("[data-quick-compare]");
  const descriptionElement = selectors.quickContent?.querySelector("[data-quick-description]");
  const detailList = selectors.quickContent?.querySelector("[data-quick-detail-list]");
  const stockElement = selectors.quickContent?.querySelector("[data-quick-stock]");
  const skuElement = selectors.quickContent?.querySelector("[data-quick-sku]");
  const addButton = selectors.quickContent?.querySelector(`[data-add="${product.id}"]`);
  const dots = selectors.quickContent?.querySelector("[data-quick-color-dots]");
  const description = selectedVariant?.description || product.description || "";
  const details = selectedVariant?.details?.length ? selectedVariant.details : product.details || [];
  if (priceElement) priceElement.textContent = currency.format(price);
  if (compareElement) compareElement.textContent = currency.format(compareAt);
  if (descriptionElement) descriptionElement.textContent = description;
  if (detailList) detailList.innerHTML = details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("");
  if (stockElement) stockElement.textContent = `${Math.max(0, available)} currently available`;
  if (skuElement) {
    skuElement.hidden = !selectedVariant?.sku;
    skuElement.textContent = selectedVariant?.sku ? `SKU: ${selectedVariant.sku}` : "";
  }
  if (addButton) {
    addButton.textContent = `Add to cart · ${currency.format(price)}`;
    addButton.disabled = available <= 0;
  }
  if (dots) {
    dots.setAttribute("aria-label", colors.join(", "));
    dots.innerHTML = colors
      .map((item) => `<span class="color-dot" title="${item}" style="background:${colorSwatch(item)}"></span>`)
      .join("");
  }
  const thumbs = selectors.quickContent?.querySelector("[data-gallery-thumbs]");
  if (thumbs) {
    thumbs.innerHTML = state.quickGallery
      .map(
        (image, index) => `
          <button class="quick-thumb ${index === 0 ? "active" : ""}" type="button" data-gallery-thumb="${index}" aria-label="Show ${color} ${size} product image ${index + 1}">
            <img src="${image}" alt="${product.name} ${color} ${size} detail ${index + 1}">
          </button>
        `
      )
      .join("");
  }
  closeImageLightbox();
};

const setGalleryImage = (index) => {
  if (!state.quickGallery.length) return;
  state.quickGalleryIndex = (index + state.quickGallery.length) % state.quickGallery.length;
  const image = state.quickGallery[state.quickGalleryIndex];
  const mainImage = selectors.quickContent?.querySelector("[data-gallery-main]");
  if (mainImage) mainImage.src = image;
  selectors.quickContent?.querySelectorAll("[data-gallery-thumb]").forEach((thumb) => {
    thumb.classList.toggle("active", Number(thumb.dataset.galleryThumb) === state.quickGalleryIndex);
  });
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  if (lightboxImage) lightboxImage.src = image;
  const counter = document.querySelector("[data-lightbox-count]");
  if (counter) counter.textContent = `${state.quickGalleryIndex + 1} / ${state.quickGallery.length}`;
};

const closeImageLightbox = () => {
  document.querySelector("[data-image-lightbox]")?.remove();
  state.lightboxOpen = false;
};

const openImageLightbox = (index = state.quickGalleryIndex) => {
  if (!state.quickGallery.length) return;
  closeImageLightbox();
  state.lightboxOpen = true;
  setGalleryImage(index);

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.dataset.imageLightbox = "";
  lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" data-lightbox-close aria-label="Close image viewer">×</button>
    <button class="image-lightbox-arrow prev" type="button" data-lightbox-prev aria-label="Previous large image">‹</button>
    <img src="${state.quickGallery[state.quickGalleryIndex]}" alt="Large product view" data-lightbox-image>
    <button class="image-lightbox-arrow next" type="button" data-lightbox-next aria-label="Next large image">›</button>
    <div class="image-lightbox-count" data-lightbox-count>${state.quickGalleryIndex + 1} / ${state.quickGallery.length}</div>
  `;
  (selectors.quickView || document.body).append(lightbox);
};

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const quickButton = event.target.closest("[data-quick]");
  const productCard = event.target.closest("[data-product-card]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");
  const galleryPrev = event.target.closest("[data-gallery-prev]");
  const galleryNext = event.target.closest("[data-gallery-next]");
  const galleryThumb = event.target.closest("[data-gallery-thumb]");
  const galleryOpen = event.target.closest("[data-open-gallery]");
  const lightboxPrev = event.target.closest("[data-lightbox-prev]");
  const lightboxNext = event.target.closest("[data-lightbox-next]");
  const lightboxClose = event.target.closest("[data-lightbox-close]");
  const lightbox = event.target.closest("[data-image-lightbox]");

	  if (addButton) {
	    const id = addButton.dataset.add;
	    const container = addButton.closest(".quick-copy") || document;
	    const size = container.querySelector(`[data-size-for="${id}"]`)?.value;
	    const color = container.querySelector(`[data-color-for="${id}"]`)?.value;
	    if (size && color) addToCart(id, size, color);
	    else addDefaultVariantToCart(id);
	    closeImageLightbox();
	    if (selectors.quickView?.open) selectors.quickView.close();
	    openCart();
	  }

  if (galleryPrev) {
    setGalleryImage(state.quickGalleryIndex - 1);
    return;
  }
  if (galleryNext) {
    setGalleryImage(state.quickGalleryIndex + 1);
    return;
  }
  if (galleryThumb) {
    setGalleryImage(Number(galleryThumb.dataset.galleryThumb));
    return;
  }
  if (galleryOpen) {
    openImageLightbox();
    return;
  }
  if (lightboxPrev) {
    setGalleryImage(state.quickGalleryIndex - 1);
    return;
  }
  if (lightboxNext) {
    setGalleryImage(state.quickGalleryIndex + 1);
    return;
  }
  if (lightboxClose || (lightbox && event.target === lightbox)) {
    closeImageLightbox();
    return;
  }

  if (quickButton) {
    openQuickView(quickButton.dataset.quick);
    return;
  }
  if (productCard && !event.target.closest("button, a, select, input, label")) {
    openQuickView(productCard.dataset.productCard);
    return;
  }
  if (increaseButton) increaseCart(increaseButton.dataset.increase);
  if (decreaseButton) decreaseCart(decreaseButton.dataset.decrease);
  if (removeButton) removeFromCart(removeButton.dataset.remove);

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) setPage(Number(pageButton.dataset.page));
});

document.addEventListener("change", (event) => {
  const controls = event.target.closest("[data-variant-controls]");
  if (!controls) return;
  const product = getProduct(controls.dataset.variantControls);
  if (product) renderQuickGallery(product, Boolean(event.target.closest("[data-size-for]")));
});

renderCategoryNavigation();

selectors.tabs.forEach((tab) => {
  tab.addEventListener("click", () => setCategory(tab.dataset.category));
});

selectors.navCategories.forEach((link) => {
  link.addEventListener("click", () => setCategory(link.dataset.navCategory));
  link.addEventListener("mouseenter", () => {
    openDepartmentMenu(link.dataset.navCategory, link.closest(".site-header, .home-header"), link);
  });
  link.addEventListener("focus", () => {
    openDepartmentMenu(link.dataset.navCategory, link.closest(".site-header, .home-header"), link);
  });
});

selectors.navCollections.forEach((link) => {
  link.addEventListener("click", () => setCollection(link.dataset.navCollection));
});

selectors.navSubcategories.forEach((link) => {
  link.addEventListener("click", () => setSubcategory(link.dataset.navSubcategory));
});

document.querySelectorAll(".site-header, .home-header").forEach((header) => {
  header.addEventListener("mouseleave", () => closeDepartmentMenu(header));
  header.addEventListener("focusout", () => {
    requestAnimationFrame(() => {
      if (!header.contains(document.activeElement)) closeDepartmentMenu(header);
    });
  });
});

document.addEventListener("keydown", (event) => {
  const productCard = event.target.closest("[data-product-card]");
  if (!productCard || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openQuickView(productCard.dataset.productCard);
});

const scrollHomeNewArrivals = (direction) => {
  if (!selectors.homeNewArrivals) return;
  selectors.homeNewArrivals.scrollBy({
    left: direction * selectors.homeNewArrivals.clientWidth,
    behavior: "smooth"
  });
};

selectors.homeNewPrev?.addEventListener("click", () => scrollHomeNewArrivals(-1));
selectors.homeNewNext?.addEventListener("click", () => scrollHomeNewArrivals(1));

const scrollHomeSaleItems = (direction) => {
  if (!selectors.homeSaleItems) return;
  selectors.homeSaleItems.scrollBy({
    left: direction * selectors.homeSaleItems.clientWidth,
    behavior: "smooth"
  });
};

selectors.homeSalePrev?.addEventListener("click", () => scrollHomeSaleItems(-1));
selectors.homeSaleNext?.addEventListener("click", () => scrollHomeSaleItems(1));

const scrollCategoryCarousel = (direction) => {
  if (!selectors.categoryCarousel) return;
  selectors.categoryCarousel.scrollBy({
    left: direction * selectors.categoryCarousel.clientWidth,
    behavior: "smooth"
  });
};

selectors.categoryPrev?.addEventListener("click", () => scrollCategoryCarousel(-1));
selectors.categoryNext?.addEventListener("click", () => scrollCategoryCarousel(1));

let heroIndex = 0;
let heroTimer = null;
const setHeroSlide = (index) => {
  if (!selectors.heroSlides.length) return;
  heroIndex = (index + selectors.heroSlides.length) % selectors.heroSlides.length;
  selectors.heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === heroIndex);
  });
  selectors.heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === heroIndex);
  });
};

selectors.heroPrev?.addEventListener("click", () => setHeroSlide(heroIndex - 1));
selectors.heroNext?.addEventListener("click", () => setHeroSlide(heroIndex + 1));
selectors.heroDots.forEach((dot) => {
  dot.addEventListener("click", () => setHeroSlide(Number(dot.dataset.heroDot)));
});
const startHeroTimer = () => {
  if (heroTimer || selectors.heroSlides.length <= 1) return;
  heroTimer = window.setInterval(() => setHeroSlide(heroIndex + 1), 6500);
};
const stopHeroTimer = () => {
  if (!heroTimer) return;
  window.clearInterval(heroTimer);
  heroTimer = null;
};
selectors.heroBanner?.addEventListener("mouseenter", stopHeroTimer);
selectors.heroBanner?.addEventListener("mouseleave", startHeroTimer);
selectors.heroBanner?.addEventListener("focusin", stopHeroTimer);
selectors.heroBanner?.addEventListener("focusout", () => {
  requestAnimationFrame(() => {
    if (!selectors.heroBanner.contains(document.activeElement)) startHeroTimer();
  });
});
startHeroTimer();

selectors.searches.forEach((searchInput) => {
  searchInput.value = state.search;
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    resetPage();
    selectors.searches.forEach((input) => {
      if (input !== event.target) input.value = event.target.value;
    });
    renderProducts();
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;
    window.location.href = `search.html?q=${encodeURIComponent(query)}#shop`;
  });
});

selectors.sort?.addEventListener("change", (event) => {
  state.sort = event.target.value;
  resetPage();
  renderProducts();
});

selectors.pageSize?.addEventListener("change", (event) => {
  state.pageSize = Number(event.target.value);
  resetPage();
  renderProducts();
});

selectors.filtersPanel?.querySelectorAll("fieldset").forEach(configureFilterLegend);

const toggleFilterLegend = (legend) => {
  const fieldset = legend.closest("fieldset");
  if (!fieldset) return;
  const collapsed = fieldset.classList.toggle("collapsed");
  legend.setAttribute("aria-expanded", String(!collapsed));
};

selectors.filtersPanel?.addEventListener("click", (event) => {
  const legend = event.target.closest(".filter-legend");
  if (legend) {
    toggleFilterLegend(legend);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    setFilterCategory(categoryButton.dataset.category);
    return;
  }

  const subcategoryButton = event.target.closest("[data-subcategory]");
  if (subcategoryButton) setSubcategory(subcategoryButton.dataset.subcategory);
});

selectors.filtersPanel?.addEventListener("keydown", (event) => {
  const legend = event.target.closest(".filter-legend");
  if (!legend || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  toggleFilterLegend(legend);
});

selectors.filtersPanel?.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.matches("[data-price-filter]")) state.price = input.value;
  if (input.matches("[data-category-filter]")) {
    setFilterCategory(input.checked ? input.value : "All");
    return;
  }
  if (input.matches("[data-subcategory-filter]")) {
    if (input.checked) setSubcategory(input.value);
    else {
      state.subcategory = "All";
      resetPage();
      renderProducts();
    }
    return;
  }
  if (input.matches("[data-color-filter]")) input.checked ? state.colors.add(input.value) : state.colors.delete(input.value);
  if (input.matches("[data-material-filter]"))
    input.checked ? state.materials.add(input.value) : state.materials.delete(input.value);
  if (input.matches("[data-style-filter]")) input.checked ? state.styles.add(input.value) : state.styles.delete(input.value);
  if (input.matches("[data-size-filter]")) input.checked ? state.sizes.add(input.value) : state.sizes.delete(input.value);
  if (input.matches("[data-brand-filter]")) input.checked ? state.brands.add(input.value) : state.brands.delete(input.value);
  resetPage();
  renderProducts();
});

selectors.clearFilters?.addEventListener("click", () => {
  state.category = "All";
  state.subcategory = "All";
  state.collection = "";
  state.price = "all";
  state.colors.clear();
  state.materials.clear();
  state.styles.clear();
  state.sizes.clear();
  state.brands.clear();
  state.search = "";
  resetPage();
  selectors.searches.forEach((input) => {
    input.value = "";
  });
  selectors.filtersPanel?.querySelectorAll("[data-price-filter]").forEach((input) => {
    input.checked = input.value === "all";
  });
  selectors.filtersPanel?.querySelectorAll("[data-color-filter]").forEach((input) => {
    input.checked = false;
  });
  [
    selectors.filtersPanel?.querySelectorAll("[data-material-filter]") || [],
    selectors.filtersPanel?.querySelectorAll("[data-style-filter]") || [],
    selectors.filtersPanel?.querySelectorAll("[data-size-filter]") || [],
    selectors.filtersPanel?.querySelectorAll("[data-brand-filter]") || []
  ].forEach((inputs) => {
    inputs.forEach((input) => {
      input.checked = false;
    });
  });
  setCategory("All");
});

selectors.cartOpenButtons.forEach((button) => button.addEventListener("click", openCart));
selectors.cartCloseButtons.forEach((button) => button.addEventListener("click", closeCart));
document.querySelector("[data-coupon-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = String(new FormData(event.currentTarget).get("coupon") || "").trim().toUpperCase();
  state.couponCode = code;
  saveCart();
  renderCart();
});
selectors.quickClose?.addEventListener("click", () => {
  closeImageLightbox();
  selectors.quickView.close();
});
selectors.quickView?.addEventListener("close", closeImageLightbox);
window.addEventListener("keydown", (event) => {
  if (state.lightboxOpen && event.key === "Escape") {
    closeImageLightbox();
    return;
  }
  if (state.lightboxOpen && event.key === "ArrowLeft") {
    setGalleryImage(state.quickGalleryIndex - 1);
    return;
  }
  if (state.lightboxOpen && event.key === "ArrowRight") {
    setGalleryImage(state.quickGalleryIndex + 1);
    return;
  }
  if (event.key === "Escape") closeCart();
});

selectors.checkout?.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = cartEntries();
  if (!entries.length) return;

  const orderId = `HW-${Date.now().toString().slice(-6)}`;
  const totals = cartTotals();
  saveOrder({
    id: orderId,
    createdAt: new Date().toISOString(),
    status: "Account required",
    email: "",
    delivery: "",
    items: entries.map((entry) => ({
      id: entry.product.id,
      name: entry.product.name,
      size: entry.size,
      color: entry.color,
      sku: entry.sku,
      quantity: entry.quantity,
      price: entry.selectedVariant?.price ?? entry.product.price
    })),
    subtotal: totals.subtotal,
    discount: totals.discount,
    coupon: activeCoupon()?.code || "",
    shipping: totals.shipping,
    tax: totals.tax,
    total: totals.total
  });
  entries.forEach((entry) => {
    const variant = findVariant(entry.product, entry.size, entry.color);
    if (variant) {
      variant.stock = Math.max(0, Number(variant.stock || 0) - Number(entry.quantity || 0));
      entry.product.stock = productStock(entry.product);
    } else {
      entry.product.stock = Math.max(0, Number(entry.product.stock || 0) - Number(entry.quantity || 0));
    }
  });
  saveProductsToStore();
  state.cart = {};
  state.couponCode = "";
  sync();
  selectors.orderMessage.textContent = "Please sign up or sign in to continue checkout.";
  selectors.checkout.reset();
});

document.querySelector(".home-exclusive form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = event.currentTarget.querySelector('input[type="email"]');
  const email = emailInput?.value.trim();
  if (!email) return;
  const subscribers = readStorage("homeWeaversSubscribers", []);
  const exists = subscribers.some((subscriber) => String(subscriber.email).toLowerCase() === email.toLowerCase());
  const nextSubscribers = exists
    ? subscribers
    : [{ email, createdAt: new Date().toISOString(), source: "Homepage signup" }, ...subscribers];
  writeStorage("homeWeaversSubscribers", nextSubscribers);
  emailInput.value = "";
  const message = event.currentTarget.querySelector("[data-subscribe-message]") || document.createElement("p");
  message.dataset.subscribeMessage = "";
  message.className = "subscribe-message";
  message.textContent = exists ? "You are already subscribed." : "Thank you. Your email was saved.";
  event.currentTarget.append(message);
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-contact-form]");
  if (!form) return;
  event.preventDefault();
  const button = form.querySelector("button");
  const message = form.querySelector("[data-contact-message]");
  const formData = new FormData(form);
  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    message: String(formData.get("message") || "").trim()
  };
  if (!payload.name || !payload.email || !payload.message) return;

  const contacts = readStorage("homeWeaversContactMessages", []);
  writeStorage("homeWeaversContactMessages", [{ ...payload, createdAt: new Date().toISOString() }, ...contacts]);

  button.disabled = true;
  button.textContent = "Sending...";
  message.textContent = "";
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Email is not connected yet.");
    message.textContent = "Thank you. Your message was sent to Home Weavers.";
    form.reset();
  } catch (error) {
    message.textContent = "Your message was saved. Email sending will work after the backend email key is added.";
  } finally {
    button.disabled = false;
    button.textContent = valueFor("contactButton") || "Submit request";
  }
});

selectors.customForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = selectors.customForm.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Request sent";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    selectors.customForm.reset();
  }, 1800);
});

trackSiteVisit();
applySettings();
sync();
