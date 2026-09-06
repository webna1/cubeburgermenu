export const MENU = [
  {
    id:"appetizers", img:"/images/sec-appetizers.webp",
    kicker_en:"To share… or not!", kicker_ar:"للمشاركة… أو لا!",
    name_en:"Appetizers", name_ar:"المقبّلات",
    items:[
      {nm_en:"Dynamite Shrimps", nm_ar:"روبيان ديناميت",
       ds_en:"Marinated crispy fried shrimps coated in a spicy, tangy mayo sauce.",
       ds_ar:"روبيان مقلي مقرمش متبّل بصلصة مايونيز حارّة ولاذعة.", price:"14,000", img:"/images/item-dynamite-shrimps.webp", imgPos:"center 35%"},
      {nm_en:"Dynamite Chicken", nm_ar:"دجاج ديناميت",
       ds_en:"Marinated crispy fried chicken breast cuts coated in a spicy, tangy mayo sauce.",
       ds_ar:"قطع صدر دجاج مقلية مقرمشة بصلصة مايونيز حارّة ولاذعة.", price:"9,750", img:"/images/item-dynamite-chicken.webp", imgPos:"center 40%"},
      {nm_en:"Crab Balls 5 pcs", nm_ar:"كرات السلطعون ٥ قطع",
       ds_en:"Five fried balls of crab meat, cream cheese & green onions, served with our spicy dynamite sauce.",
       ds_ar:"خمس كرات من لحم السلطعون وجبنة الكريمة والبصل الأخضر، تُقدّم مع صلصة الديناميت الحارّة.", price:"8,500", img:"/images/item-crab-balls.webp", imgPos:"center 60%"},
      {nm_en:"Mozzarella Cubes  6 pcs", nm_ar:"مكعّبات الموزاريلا  ٦ قطع",
       ds_en:"Lightly fried hard-breaded mozzarella cheese, served with house-made marinara sauce.",
       ds_ar:"جبنة موزاريلا مقلية بطبقة مقرمشة، تُقدّم مع صلصة المارينارا المنزليّة.", price:"7,750", img:"/images/item-mozzarella-cubes.webp", imgPos:"center 50%"},
      {nm_en:"Jalapeño Cheese Nuggets  9 pcs", nm_ar:"ناغتس الجبن والهالبينو ٩ قطع",
       ds_en:"Lightly fried mix of cheese and chili pepper, served with special sauce.",
       ds_ar:"مزيج مقلي من الجبن والفلفل الحار، يُقدّم مع صلصة خاصة.", price:"7,750", img:"/images/item-jalapeno-nuggets.webp", imgPos:"center 45%"},
      {nm_en:"Onion Rings 10 pcs", nm_ar:"حلقات البصل ١٠ قطع",
       ds_en:"Ten fried crispy onion rings served with BBQ dipping sauce.",
       ds_ar:"عشر حلقات بصل مقرمشة تُقدّم مع صلصة الباربكيو.", price:"5,500", img:"/images/item-onion-rings.webp", imgPos:"center 55%"}
    ]
  },
  {
    id:"fries", img:"/images/sec-fries.webp",
    kicker_en:"Fries to satisfy!", kicker_ar:"بطاطا تُرضي رغباتك!",
    name_en:"Fries", name_ar:"البطاطا",
    items:[
      {nm_en:"French Fries", nm_ar:"بطاطا مقلية", price:"2,000", img:"/images/item-french-fries.webp", imgPos:"center 40%"},
      {nm_en:"Curly Fries", nm_ar:"بطاطا كيرلي", price:"4,000", img:"/images/item-curly-fries.webp", imgPos:"center 40%"},
      {nm_en:"Cube French Fries", nm_ar:"بطاطا كيوب",
       ds_en:"Served with garlic mayo.", ds_ar:"تُقدّم مع مايونيز الثوم.", price:"3,500", img:"/images/item-cube-fries.webp", imgPos:"center 40%"},
      {nm_en:"Texas Fries", nm_ar:"بطاطا تكساس",
       ds_en:"Cheesy fries topped with hot chili sauce, jalapeños & garnished with beef bacon.",
       ds_ar:"بطاطا بالجبن مع صلصة الفلفل الحار والهالبينو ولحم بقري مدخّن.", price:"8,500", img:"/images/item-texas-fries.webp", imgPos:"center 55%"},
      {nm_en:"Cube Style Fries", nm_ar:"بطاطا بنكهة كيوب",
       ds_en:"Cubes of cheesy fries topped with bell pepper sauce, green onions & beef bacon.",
       ds_ar:"مكعّبات بطاطا بالجبن مع صلصة الفلفل والبصل الأخضر ولحم بقري مدخّن.", price:"8,500", img:"/images/item-cube-style-fries.webp", imgPos:"center 40%"},
      {nm_en:"Chicken Alfredo Fries", nm_ar:"بطاطا ألفريدو بالدجاج",
       ds_en:"Creamy white sauce with grilled chicken strips over fries & cheese sauce, topped with parmesan & green onion.",
       ds_ar:"صلصة بيضاء كريميّة مع شرائح دجاج مشوي فوق البطاطا والجبن، مع البارميزان والبصل الأخضر.", price:"8,500", img:"/images/item-alfredo-fries.webp", imgPos:"center 65%"}
    ]
  },
  {
    id:"salads", img:"/images/sec-salads.webp",
    kicker_en:"Go green", kicker_ar:"كُن أخضر",
    name_en:"Salads", name_ar:"السلطات",
    intro_en:"Refreshing, cool & crunchy — crispy lettuce, ripe vegetables and flavorful toppings with house-made dressings.",
    intro_ar:"منعشة وباردة ومقرمشة — خس مقرمش وخضار ناضجة وإضافات غنيّة مع صلصات منزليّة.",
    items:[
      {nm_en:"Caesar Salad", nm_ar:"سلطة سيزر",
       ds_en:"Freshly chopped iceberg lettuce tossed in Caesar dressing, topped with croutons & grated parmesan.",
       ds_ar:"خس مفروم طازج بصلصة السيزر مع الكروتون والبارميزان المبشور.",
       img:"/images/item-caesar-salad.webp", imgPos:"center 50%",
       opts:[
         {o_en:"Classic Caesar", o_ar:"كلاسيك", price:"7,000"},
         {o_en:"with Grilled Chicken", o_ar:"مع دجاج مشوي", price:"11,000"},
         {o_en:"with Grilled Shrimp", o_ar:"مع روبيان مشوي", price:"14,500"}
       ]},
      {nm_en:"Summer Garden", nm_ar:"حديقة الصيف",
       ds_en:"Mixed greens, cherry tomato, cucumber, red cabbage, green onion & croutons in feta dressing, topped with wonton strips & black olives.",
       ds_ar:"خضار مشكّلة وطماطم كرزيّة وخيار وملفوف أحمر وبصل أخضر وكروتون بصلصة الفيتا، مع شرائح الونتون والزيتون الأسود.", price:"6,500", img:"/images/item-summer-garden.webp", imgPos:"center 45%"},
      {nm_en:"Cube Salad", nm_ar:"سلطة كيوب",
       ds_en:"Grilled chicken breast on mixed greens, red cabbage & green onions with croutons in balsamic dressing, topped with corn relish, drizzled with chipotle ranch & garnished with wonton strips. Served with cheese quesadillas.",
       ds_ar:"صدر دجاج مشوي على خضار مشكّلة وملفوف أحمر وبصل أخضر مع كروتون بصلصة البلسميك، مغطّى بصلصة الذرة، مرشوش بتشيبوتلي رانش ومزيّن بشرائح الونتون. يُقدّم مع كاساديا بالجبن.", price:"14,500", img:"/images/item-cube-salad.webp", imgPos:"80% 45%"},
      {nm_en:"Crab Salad", nm_ar:"سلطة السلطعون",
       ds_en:"Julienned crab meat, carrots & cucumbers in candied sauce, topped with red cabbage, wonton strips & cashew nuts.",
       ds_ar:"شرائح لحم سلطعون وجزر وخيار بصلصة محلّاة، مع الملفوف الأحمر وشرائح الونتون والكاجو.", price:"13,500", img:"/images/item-crab-salad.webp", imgPos:"center 40%"}
    ]
  },
  {
    id:"chicken", img:"/images/sec-boneless.webp",
    kicker_en:"Chicken Sides", kicker_ar:"أطباق الدجاج الجانبيّة",
    name_en:"Boneless", name_ar:"بدون عظم",
    items:[
      {nm_en:"Buffalo · Honey Mustard · BBQ", nm_ar:"بافلو · هاني مسترد · باربكيو",
       ds_en:"Bites of chicken breast, hand-breaded, deep fried to golden crispy & tossed in your choice of our homemade sauces.",
       ds_ar:"قطع صدر دجاج مغطّاة يدويًا ومقليّة حتى الذهبيّة والقرمشة، متبّلة بصلصتك المفضّلة.",
       img:"/images/item-boneless-classic.webp", imgPos:"center 45%",
       opts:[
         {o_en:"6 pcs", o_ar:"٦ قطع", price:"8,500"},
         {o_en:"10 pcs", o_ar:"١٠ قطع", price:"13,500"}
       ]},
      {nm_en:"Parmesan Buffalo · Crazy Bites · Garlic Parmesan", nm_ar:"بارميزان بافلو · كريزي بايتس · غارليك بارميزان",
       ds_en:"Bites of chicken breast, hand-breaded, deep fried to golden crispy & tossed in your choice of our homemade sauces.",
       ds_ar:"قطع صدر دجاج مغطّاة يدويًا ومقليّة حتى الذهبيّة والقرمشة، متبّلة بصلصتك المفضّلة.",
       img:"/images/item-boneless-premium.webp", imgPos:"center 40%",
       opts:[
         {o_en:"6 pcs", o_ar:"٦ قطع", price:"9,500"},
         {o_en:"10 pcs", o_ar:"١٠ قطع", price:"14,500"}
       ]}
    ]
  },
  {
    id:"wings", img:"/images/sec-wings.webp",
    kicker_en:"Signature", kicker_ar:"المميّزة",
    name_en:"Wings", name_ar:"الأجنحة",
    intro_en:"Our delicious bone-in wings made your way. Hand-tossed in your choice of sauce, served with carrot & dipping sauce.",
    intro_ar:"أجنحة دجاج بالعظم محضّرة على ذوقك، متبّلة بصلصتك المفضّلة، تُقدّم مع الجزر وصلصة الغمس.",
    items:[
      {nm_en:"Buffalo · Honey Mustard · BBQ", nm_ar:"بافلو · هاني مسترد · باربكيو",
       img:"/images/item-wings-classic.webp", imgPos:"center 50%",
       opts:[
         {o_en:"10 pcs", o_ar:"١٠ قطع", price:"7,500"}
       ]},
      {nm_en:"Garlic Parmesan · Crazy Wings · Buffalo & BBQ Mix", nm_ar:"غارليك بارميزان · كريزي وينغز · مكس بافلو وباربكيو",
       img:"/images/item-wings-premium.webp", imgPos:"center 40%",
       opts:[
         {o_en:"10 pcs", o_ar:"١٠ قطع", price:"8,500"}
       ]}
    ]
  },
  {
    id:"beef", img:"/images/sec-burgers.webp",
    kicker_en:"The Beef Angus", kicker_ar:"لحم الأنغوس",
    name_en:"Beef Burgers", name_ar:"برجر اللحم",
    intro_en:"Made with selected 100% pure Angus beef on a freshly baked toasted bun with fresh veggies & house-made sauces. All beef burgers are now 150g.",
    intro_ar:"محضّر من لحم الأنغوس النقي ١٠٠٪ في خبز طازج محمّص مع خضار طازجة وصلصات منزليّة. جميع برجر اللحم الآن ١٥٠غ.",
    items:[
      {nm_en:"Cube Burger", nm_ar:"برجر كيوب",
       ds_en:"150g Angus beef, mixed cheese, lettuce, tomato, onions & pickles, basted with our special Cube sauce.",
       ds_ar:"١٥٠غ لحم أنغوس، جبن مشكّل، خس، طماطم، بصل ومخلّل، مع صلصة كيوب الخاصة.", sm:["9,500","12,500"], img:"/images/item-cube-burger.webp", imgPos:"30% 50%"},
      {nm_en:"Classic Burger", nm_ar:"برجر كلاسيك",
       ds_en:"150g Angus beef, mixed cheese, ketchup, garlic mayo, mustard, lettuce, tomato, onions & pickles.",
       ds_ar:"١٥٠غ لحم أنغوس، جبن مشكّل، كاتشب، مايونيز الثوم، مسترد، خس، طماطم، بصل ومخلّل.", sm:["8,500","11,500"], img:"/images/item-classic-burger.webp", imgPos:"center 30%"},
      {nm_en:"Hard Rock Style", nm_ar:"هارد روك ستايل",
       ds_en:"150g Angus beef, white cheese, tomato, pickles, garlic mayo with sautéed mushrooms & onions, topped Hard Rock style.",
       ds_ar:"١٥٠غ لحم أنغوس، جبن أبيض، طماطم، مخلّل، مايونيز الثوم مع فطر وبصل مشوّح، بأسلوب هارد روك.", sm:["12,000","15,000"], img:"/images/item-hard-rock.webp", imgPos:"center 50%"},
      {nm_en:"Dynamite Burger", nm_ar:"برجر ديناميت",
       ds_en:"150g Angus beef, cheddar, green onions, tomato, pickles, lettuce, topped with sriracha hot chili & basted with house-made dynamite sauce.",
       ds_ar:"١٥٠غ لحم أنغوس، شيدر، بصل أخضر، طماطم، مخلّل، خس، مع صلصة سريراتشا الحارّة وصلصة الديناميت المنزليّة.", sm:["12,000","15,000"], img:"/images/item-dynamite-burger.webp", imgPos:"center 55%"},
      {nm_en:"Chili N Cheese", nm_ar:"تشيلي آند تشيز",
       ds_en:"150g Angus beef, cheddar, onions, tomato, jalapeños, garlic mayo, topped with house-made hot chili sauce.",
       ds_ar:"١٥٠غ لحم أنغوس، شيدر، بصل، طماطم، هالبينو، مايونيز الثوم، مع صلصة التشيلي الحارّة المنزليّة.", sm:["12,500","15,500"], img:"/images/item-chili-cheese.webp", imgPos:"center 45%"},
      {nm_en:"Beef Bacon Jam", nm_ar:"بيف بيكن جام",
       ds_en:"150g Angus beef, smoked cheese, onions, tomato, pickles, garlic mayo & topped with Cube's beef bacon jam recipe.",
       ds_ar:"١٥٠غ لحم أنغوس، جبن مدخّن، بصل، طماطم، مخلّل، مايونيز الثوم، مع وصفة مربّى لحم البقري المدخّن من كيوب.", sm:["13,000","16,000"], img:"/images/item-beef-bacon-jam.webp", imgPos:"center 55%"}
    ],
    note_en:"Meal +3,000 — served with fries, a drink & garlic mayo sauce.",
    note_ar:"الوجبة +٣٬٠٠٠ — تُقدّم مع البطاطا ومشروب ومايونيز الثوم."
  },
  {
    id:"chickenburger", img:"/images/sec-burgers.webp",
    kicker_en:"High quality fresh chicken breast", kicker_ar:"صدر دجاج طازج عالي الجودة",
    name_en:"Chicken Burgers", name_ar:"برجر الدجاج",
    items:[
      {nm_en:"Chicken Ranch", nm_ar:"تشيكن رانش",
       ds_en:"Crispy fried chicken breast, buffalo sauce, cheddar, lettuce, tomato, onions, pickles & basted with ranch sauce.",
       ds_ar:"صدر دجاج مقلي مقرمش، صلصة بافلو، شيدر، خس، طماطم، بصل، مخلّل، مع صلصة الرانش.", sm:["8,500","11,500"], img:"/images/item-chicken-ranch.webp", imgPos:"center 45%"},
      {nm_en:"Rebel Chicken", nm_ar:"ريبل تشيكن",
       ds_en:"Crispy fried chicken breast, garlic mayo, pickles, onions, cheddar, topped with smoked turkey slices & a pinch of tangy coleslaw.",
       ds_ar:"صدر دجاج مقلي مقرمش، مايونيز الثوم، مخلّل، بصل، شيدر، مع شرائح ديك رومي مدخّن ولمسة كول سلو.", sm:["13,500","16,500"], img:"/images/item-rebel-chicken.webp", imgPos:"center 55%"},
      {nm_en:"Grilled Chicken", nm_ar:"دجاج مشوي",
       ds_en:"Grilled chicken breast marinated in our chef's recipe, white cheese, garlic mayo, lettuce, tomato, onions & pickles.",
       ds_ar:"صدر دجاج مشوي متبّل بوصفة الشيف، جبن أبيض، مايونيز الثوم، خس، طماطم، بصل ومخلّل.", sm:["8,500","11,500"], img:"/images/item-grilled-chicken.webp", imgPos:"20% 50%"},
      {nm_en:"Chicken Philly Cheese Steak", nm_ar:"فيلي تشيز ستيك بالدجاج",
       ds_en:"Chicken breast cuts, mixed cheese, fresh mushrooms, onion, mixed bell pepper & garlic mayo.",
       ds_ar:"قطع صدر دجاج، جبن مشكّل، فطر طازج، بصل، فلفل ملوّن، مايونيز الثوم.", sm:["9,500","12,500"], img:"/images/item-chicken-philly.webp", imgPos:"center 60%"},
      {nm_en:"Bacon Chicken Burger", nm_ar:"بيكن تشيكن برجر",
       ds_en:"Freshly grilled chicken breast marinated with our chef's recipe, topped with beef bacon slice and BBQ sauce, white cheese, tomato, onions, lettuce, pickles & garlic mayo.",
       ds_ar:"صدر دجاج مشوي طازج متبّل بوصفة الشيف، مغطّى بشريحة لحم بقري مدخّن وصلصة الباربكيو، جبن أبيض، طماطم، بصل، خس، مخلّل ومايونيز الثوم.", sm:["10,500","13,500"], img:"/images/item-bacon-chicken-burger.webp", imgPos:"center 50%"},
      {nm_en:"BBQ Chicken Burger", nm_ar:"باربكيو تشيكن برجر",
       ds_en:"Freshly crispy fried chicken breast topped with fried onion rings, BBQ sauce, cheddar cheese, lettuce, tomato, pickles & basted with ranch sauce.",
       ds_ar:"صدر دجاج مقلي مقرمش طازج مغطّى بحلقات البصل المقلية وصلصة الباربكيو والشيدر والخس والطماطم والمخلّل، مرشوش بصلصة الرانش.", sm:["11,000","14,000"], img:"/images/item-bbq-chicken-burger.webp", imgPos:"center 50%"}
    ],
    note_en:"Meal +3,000 — served with fries, a drink & garlic mayo sauce.",
    note_ar:"الوجبة +٣٬٠٠٠ — تُقدّم مع البطاطا ومشروب ومايونيز الثوم."
  },
  {
    id:"kids", img:null,
    kicker_en:"For the little ones", kicker_ar:"للصغار",
    name_en:"Kids", name_ar:"الأطفال",
    items:[
      {nm_en:"Kids Burger", nm_ar:"برجر الأطفال",
       ds_en:"100g beef patty, served with French fries & juice.",
       ds_ar:"قطعة لحم ١٠٠غ، تُقدّم مع البطاطا المقليّة والعصير.", price:"7,500"},
      {nm_en:"Kids Bites", nm_ar:"كيدز بايتس",
       ds_en:"Crispy chicken bites served with French fries & juice.",
       ds_ar:"قطع دجاج مقرمشة تُقدّم مع البطاطا المقليّة والعصير.", price:"7,500", img:"/images/item-kids-bites.webp", imgPos:"center 50%"}
    ]
  },
  {
    id:"desserts", img:null,
    kicker_en:"Sweet finish", kicker_ar:"ختام حلو",
    name_en:"Desserts", name_ar:"الحلويّات",
    items:[
      {nm_en:"Molten Chocolate Cake", nm_ar:"مولتن كيك", price:"7,000"},
      {nm_en:"Brownies Sundae", nm_ar:"براوني صنداي",
       ds_en:"Add a scoop of ice cream +1,000.",
       ds_ar:"أضف كرة آيس كريم +١٬٠٠٠.", price:"5,500"},
      {nm_en:"Cookies Melt", nm_ar:"بافي كوكيز",
       ds_en:"Milk chocolate or double chocolate.",
       ds_ar:"شوكولاتة بالحليب أو دبل شوكولاتة.", price:"7,000"},
      {nm_en:"San Sebastian", nm_ar:"سان سيبستيان",
       ds_en:"Cheesecake with chocolate sauce.",
       ds_ar:"تشيز كيك مع صلصة الشوكولاتة.", price:"6,500"},
      {nm_en:"Lutsella", nm_ar:"لوتسيلا", price:"7,000"}
    ]
  },
  {
    id:"addons", img:null,
    kicker_en:"Make it yours", kicker_ar:"خصّصها كما تشاء",
    name_en:"Extras", name_ar:"إضافات",
    sauces:[
      {sn_en:"Add Beef Patty (150g)", sn_ar:"إضافة قطعة لحم ١٥٠غ", price:"5,500"},
      {sn_en:"Add Crab Meat", sn_ar:"إضافة لحم سلطعون", price:"5,000"},
      {sn_en:"Add Grilled Shrimps", sn_ar:"إضافة روبيان مشوي", price:"5,500"},
      {sn_en:"Add Chicken Breast", sn_ar:"إضافة صدر دجاج", price:"3,500"},
      {sn_en:"Add Beef Bacon", sn_ar:"إضافة لحم بقري مدخّن", price:"2,000"},
      {sn_en:"Add Cheese to Burger", sn_ar:"إضافة جبن للبرجر", price:"1,000"},
      {sn_en:"Add Cheese to Fries", sn_ar:"إضافة جبن للبطاطا", price:"1,250"}
    ]
  },
  {
    id:"upgrades", img:null,
    kicker_en:"Upgrade your meal", kicker_ar:"طوّر وجبتك",
    name_en:"Fries Upgrades", name_ar:"ترقيات البطاطا",
    sauces:[
      {sn_en:"Curly Fries", sn_ar:"بطاطا كيرلي", price:"+2,000"},
      {sn_en:"Cube Fries", sn_ar:"بطاطا كيوب", price:"+1,500"},
      {sn_en:"Onion Rings (10 pcs)", sn_ar:"حلقات البصل ١٠ قطع", price:"+3,000"},
      {sn_en:"Texas Fries", sn_ar:"بطاطا تكساس", price:"+4,500"},
      {sn_en:"Cube Style Fries", sn_ar:"بطاطا ستايل كيوب", price:"+4,500"},
      {sn_en:"Alfredo Fries", sn_ar:"بطاطا ألفريدو", price:"+4,500"}
    ]
  },
  {
    id:"sauces", img:null,
    kicker_en:"On the side", kicker_ar:"إضافات جانبيّة",
    name_en:"Dipping Sauces", name_ar:"صلصات الغمس",
    sauces:[
      {sn_en:"Cube Sauce", sn_ar:"صلصة كيوب", price:"1,000"},
      {sn_en:"Ranch", sn_ar:"رانش", price:"1,000"},
      {sn_en:"Honey Mustard", sn_ar:"هاني مسترد", price:"1,000"},
      {sn_en:"Bell Pepper Sauce", sn_ar:"صلصة الفلفل", price:"1,000"},
      {sn_en:"Buffalo", sn_ar:"بافلو", price:"1,000"},
      {sn_en:"Garlic Mayo", sn_ar:"مايونيز الثوم", price:"1,000"},
      {sn_en:"BBQ Sauce", sn_ar:"باربكيو", price:"1,000"},
      {sn_en:"Marinara Sauce", sn_ar:"مارينارا", price:"1,000"},
      {sn_en:"Chipotle Ranch", sn_ar:"تشيبوتلي رانش", price:"1,000"},
      {sn_en:"Melted Cheese", sn_ar:"جبن ذائب", price:"1,500"},
      {sn_en:"Dynamite Sauce", sn_ar:"صلصة ديناميت", price:"1,500"},
      {sn_en:"Garlic Parmesan", sn_ar:"غارليك بارميزان", price:"1,500"},
      {sn_en:"Chili Sauce", sn_ar:"صلصة تشيلي", price:"1,500"},
      {sn_en:"Blue Cheese", sn_ar:"بلو تشيز", price:"1,500"}
    ]
  }
]

export const DRINKS = [
  {
    id:"mocktails", img:null,
    kicker_en:"Refreshing Sips", kicker_ar:"رشفات منعشة",
    name_en:"Mocktails & Smoothies", name_ar:"موكتيل وسموذي",
    items:[
      {nm_en:"Breezy Bay", nm_ar:"بريزي باي", price:"8,000"},
      {nm_en:"Bali Mojito", nm_ar:"بالي موهيتو", price:"7,000"},
      {nm_en:"Tropical Mocktail", nm_ar:"موكتيل استوائي", price:"4,000"},
      {nm_en:"Frozen Cherry Pepsi", nm_ar:"بيبسي كرز بارد", price:"6,000"},
      {nm_en:"Pina Colada", nm_ar:"بينا كولادا", price:"5,000"},
      {nm_en:"Lemon and Mint", nm_ar:"ليمون ونعناع", price:"4,000"},
      {nm_en:"Blue Curacao Mocktail", nm_ar:"موكتيل بلو كيوراساو", price:"4,500"},
      {nm_en:"Cube Avocado", nm_ar:"كيوب أفوكادو", price:"7,000"}
    ]
  },
  {
    id:"milkshakes", img:null,
    kicker_en:"Thick & creamy", kicker_ar:"كثيف وكريمي",
    name_en:"Milkshakes", name_ar:"ميلك شيك",
    items:[
      {nm_en:"Vanilla", nm_ar:"فانيلا",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,000"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,000"}]},
      {nm_en:"Chocolate", nm_ar:"شوكولاتة",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,000"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,000"}]},
      {nm_en:"Strawberry", nm_ar:"فراولة",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,000"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,000"}]},
      {nm_en:"Mango", nm_ar:"مانجو",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,000"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,000"}]},
      {nm_en:"Oreo", nm_ar:"أوريو",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,500"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,500"}]},
      {nm_en:"Lotus", nm_ar:"لوتس",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,500"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,500"}]},
      {nm_en:"Nutella", nm_ar:"نوتيلا",
       opts:[{o_en:"350 ml", o_ar:"٣٥٠ مل", price:"5,500"}, {o_en:"500 ml", o_ar:"٥٠٠ مل", price:"7,500"}]}
    ]
  },
  {
    id:"softdrinks", img:null,
    kicker_en:"Classic Sips", kicker_ar:"مشروبات كلاسيكية",
    name_en:"Cold Drinks", name_ar:"مشروبات باردة",
    items:[
      {nm_en:"Local Soft Drinks", nm_ar:"مشروبات غازية محلية",
       ds_en:"Pepsi, Diet Pepsi, Miranda, Mountain Dew, 7UP.",
       ds_ar:"بيبسي، بيبسي دايت، ميراندا، ماونتن ديو، سفن أب.", price:"1,000"},
      {nm_en:"Bottled Juice", nm_ar:"عصير معبأ", price:"1,000"},
      {nm_en:"Cube Pepsi", nm_ar:"بيبسي كيوب", price:"1,500"},
      {nm_en:"Mineral Water", nm_ar:"مياه معدنية", price:"750"}
    ]
  },
  {
    id:"hotdrinks", img:null,
    kicker_en:"Warm Sips", kicker_ar:"مشروبات ساخنة",
    name_en:"Hot Drinks", name_ar:"مشروبات ساخنة",
    items:[
      {nm_en:"Tea", nm_ar:"شاي", price:"1,000"}
    ]
  }
]
