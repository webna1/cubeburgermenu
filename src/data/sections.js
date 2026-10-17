// The site's own look for each section, keyed by the master menu's category id.
// Items, names, prices and photos are NOT here: they come live from the master
// menu (edited in the HR app's Menu tab). Only banners, taglines and intros live
// in this file. A category with no entry still shows, with a plain heading.
export const SECTION_LOOK = {
  appetizers: {
    img: '/images/sec-appetizers.webp',
    kicker_en: 'To share… or not!', kicker_ar: 'للمشاركة… أو لا!',
  },
  fries: {
    img: '/images/sec-fries.webp',
    kicker_en: 'Fries to satisfy!', kicker_ar: 'بطاطا تُرضي رغباتك!',
  },
  salads: {
    img: '/images/sec-salads.webp',
    kicker_en: 'Go green', kicker_ar: 'كُن أخضر',
    intro_en: 'Refreshing, cool & crunchy — crispy lettuce, ripe vegetables and flavorful toppings with house-made dressings.',
    intro_ar: 'منعشة وباردة ومقرمشة — خس مقرمش وخضار ناضجة وإضافات غنيّة مع صلصات منزليّة.',
  },
  wings: {
    img: '/images/sec-wings.webp',
    kicker_en: 'Signature', kicker_ar: 'المميّزة',
    intro_en: 'Our delicious wings made your way. Hand-tossed in your choice of sauce, served with carrot & dipping sauce.',
    intro_ar: 'أجنحة دجاج محضّرة على ذوقك، متبّلة بصلصتك المفضّلة، تُقدّم مع الجزر وصلصة الغمس.',
  },
  'beef-burgers': {
    img: '/images/sec-burgers.webp',
    kicker_en: 'The Beef Angus', kicker_ar: 'لحم الأنغوس',
    intro_en: 'Made with selected 100% pure Angus beef on a freshly baked toasted bun with fresh veggies & house-made sauces. All beef burgers are now 150g.',
    intro_ar: 'محضّر من لحم الأنغوس النقي ١٠٠٪ في خبز طازج محمّص مع خضار طازجة وصلصات منزليّة. جميع برجر اللحم الآن ١٥٠غ.',
  },
  'chicken-burgers': {
    img: '/images/sec-burgers.webp',
    kicker_en: 'High quality fresh chicken breast', kicker_ar: 'صدر دجاج طازج عالي الجودة',
  },
  kids: { kicker_en: 'For the little ones', kicker_ar: 'للصغار' },
  desserts: { kicker_en: 'Sweet finish', kicker_ar: 'ختام حلو' },
  milkshakes: { kicker_en: 'Thick & creamy', kicker_ar: 'كثيف وكريمي' },
  'cold-drinks': { kicker_en: 'Classic Sips', kicker_ar: 'مشروبات كلاسيكية' },
  mocktails: { kicker_en: 'Refreshing Sips', kicker_ar: 'رشفات منعشة' },
  sauces: { kicker_en: 'On the side', kicker_ar: 'إضافات جانبيّة', layout: 'grid' },
  'hot-drinks': { kicker_en: 'Warm Sips', kicker_ar: 'مشروبات ساخنة' },
}

// Built from the burgers' and sides' add-on lists, shown just before Sauces.
export const EXTRAS_LOOK = {
  id: 'extras', name_en: 'Extras', name_ar: 'إضافات',
  kicker_en: 'Make it yours', kicker_ar: 'خصّصها كما تشاء',
}
export const UPGRADES_LOOK = {
  id: 'upgrades', name_en: 'Fries Upgrades', name_ar: 'ترقيات البطاطا',
  kicker_en: 'Upgrade your meal', kicker_ar: 'طوّر وجبتك',
}
