// src/data/supermarketData.js

export const sectionsRaw = [
  {
    id: "deals",
    title: "عروض الأسبوع",
    subtitle: "خصومات قوية على منتجات مختارة",
    homeLimit: 4,
    items: [
      {
        id: "d1",
        title: "أرز مصري 1 كجم",
        meta: "حبة طويلة • درجة أولى",
        price: 35,
        oldPrice: 49,
        discount: 29,
        image:
          "https://img.freepik.com/free-photo/boiled-rice-with-spice-white-plate-table_141793-2902.jpg?t=st=1757220217~exp=1757223817~hmac=03c5a801da1bda955eff585edb6e77b2097581130f559a2c70488679744149ff&w=1480",
        featured: true,
      },
      {
        id: "d2",
        title: "زيت دوار الشمس 1 لتر",
        meta: "نقي • طهي وقلي",
        price: 79,
        oldPrice: 95,
        discount: 17,
        image:
          "https://img.freepik.com/free-photo/png-sunflowers-oil-plastic-bottle-glass-jars-isolated-white-background_185193-164266.jpg?t=st=1757220366~exp=1757223966~hmac=33fa4af6d862a1113fed72f959b5beefe45995b800fe42f95ac2ce2926b86389&w=1480",
        featured: true,
      },
      {
        id: "d3",
        title: "سكر أبيض 1 كجم",
        meta: "مكرر",
        price: 32,
        oldPrice: 38,
        discount: 16,
        image:
          "https://img.freepik.com/free-photo/sugar-lies-black-background_1304-3468.jpg?t=st=1757220409~exp=1757224009~hmac=5bcb36277023c946fe5a42ef260df3392ebfe76f5a517adaff60e1e6abf6ac44&w=1480",
        featured: true,
      },
      {
        id: "d4",
        title: "مكرونة قلم 400 جم",
        meta: "قمح صلب",
        price: 18,
        oldPrice: 24,
        discount: 25,
        image:
          "https://img.freepik.com/free-photo/top-view-raw-italian-pasta-different-formed-dark-purple-background-ingredient-food-meal-raw_140725-64981.jpg?t=st=1757220476~exp=1757224076~hmac=ebbf1e1b7622f84c56a7be0771db5ae369037ea6fd500007095742ac858363e2&w=1480",
        featured: true,
      },

      {
        id: "d5",
        title: "عدس أصفر 500 جم",
        meta: "محلي",
        price: 30,
        oldPrice: 36,
        discount: 17,
        image:
          "https://img.freepik.com/free-photo/top-view-raw-red-lentils-wooden-bowl-purple-rustic-background_141793-7123.jpg?t=st=1757220547~exp=1757224147~hmac=467a1bfb0eb1194c62056040f9964fe0709368dc70c42a23dc5949bd7418f5c3&w=1480",
      },
      {
        id: "d6",
        title: "فول مدمس 1 كجم",
        meta: "حب كامل",
        price: 28,
        image:
          "https://img.freepik.com/free-photo/high-angle-chilli-beans-bowl_23-2148660401.jpg?t=st=1757220641~exp=1757224241~hmac=9f54a6c29e19147451abce5416569d304be3d499c02d6568912afb88567a6dc8&w=1480",
      },
      {
        id: "d7",
        title: "دقيق فاخر 1 كجم",
        meta: "للمخبوزات",
        price: 27,
        image:
          "https://img.freepik.com/free-photo/ingredient-bag-full-flour_23-2149482602.jpg?t=st=1757220691~exp=1757224291~hmac=b22cbfbf294b22bd55d5b6c918cf82c479df1d11e7dc1193d358623243860913&w=1480",
      },
      {
        id: "d8",
        title: "ملح طعام 1 كجم",
        meta: "مكرر",
        price: 10,
        image:
          "https://img.freepik.com/free-photo/sea-salt-coming-out-salt-shaker_176474-1689.jpg?t=st=1757220805~exp=1757224405~hmac=c9b3186c6d46732c06cb22f0d0a36035ba480aa57e2d47109bc7b6a0babc1437&w=1480",
      },
      {
        id: "d9",
        title: "صلصة طماطم 320 جم",
        meta: "مركزة",
        price: 17,
        image:
          "https://img.freepik.com/free-vector/promotion-banner-with-realistic-glass-bottle-ketchup-with-splashes-red-sauce_1441-1780.jpg?t=st=1757220881~exp=1757224481~hmac=902acb24d75f15adc8b680e5bcb63f0bd5f7874a204dba295622bab2185619ee&w=1480",
      },
      {
        id: "d10",
        title: "خل أبيض 1 لتر",
        meta: "للتتبيل والتنظيف",
        price: 22,
        image:
          "https://img.freepik.com/free-photo/apple-juice-fresh-apples-blue-background-high-quality-photo_114579-78032.jpg?t=st=1757221020~exp=1757224620~hmac=a6af3aa0e1c5dd7509690cb5569abb7d662fde8465a6c88c6f992d52969bdd4e&w=1480",
      },
    ],
  },
  {
    id: "produce",
    title: "الخضار والفواكه الطازة",
    subtitle: "طازة يوم بيومه",
    homeLimit: 4,
    items: [
      {
        id: "p1",
        title: "طماطم بلدي 1 كجم",
        meta: "حمراء • طازة",
        price: 24,
        image:
          "https://img.freepik.com/free-photo/some-juicy-tomatoes-wooden-basket_114579-37255.jpg?t=st=1757221089~exp=1757224689~hmac=beb7a2596340e3f01f9542ecb40b9d83a573490f73c99e2bb3141d987237426d&w=1480",
        featured: true,
      },
      {
        id: "p2",
        title: "خيار 1 كجم",
        meta: "قرمش • للسلطات",
        price: 22,
        image:
          "https://img.freepik.com/free-photo/fresh-cucumbers-sliced-marble-background_1150-45036.jpg?t=st=1757221138~exp=1757224738~hmac=4b1aa106d53814cf721574d0bc253cef64e07219df827ff842113cc892e92fda&w=1480",
        featured: true,
      },
      {
        id: "p3",
        title: "موز 1 كجم",
        meta: "حلو المذاق",
        price: 40,
        image:
          "https://img.freepik.com/free-photo/closeup-shot-bunch-banana_181624-26471.jpg?t=st=1757221215~exp=1757224815~hmac=63541fb01ebee6f3c38a6f4009a9c5c8d7c55ebb1836a324927182f7720302d2&w=1480",
        featured: true,
      },
      {
        id: "p4",
        title: "تفاح أحمر 1 كجم",
        meta: "مستورد",
        price: 65,
        image:
          "https://img.freepik.com/free-photo/delicious-red-shiny-apples-placed-wooden-board_2831-8289.jpg?t=st=1757221351~exp=1757224951~hmac=0175544775c9eb5d6198b9ecc82739b6f0e06e5cfd7a7c585f8dd13cb9a3a002&w=1480",
        featured: true,
      },

      {
        id: "p5",
        title: "برتقال عصير 1 كجم",
        meta: "حلو • كثير العصير",
        price: 30,
        image:
          "https://img.freepik.com/free-photo/orange-juice-pile-oranges-bowl_23-2148594965.jpg?t=st=1757221419~exp=1757225019~hmac=9d38daefb8d128685886df65fc1df0a29faf5fe82145ad2dae9a7d1958ff22c7&w=1480",
      },
      {
        id: "p6",
        title: "ليمون 1 كجم",
        meta: "طازة",
        price: 35,
        image:
          "https://img.freepik.com/free-photo/delicious-lime-fruits-blue-bowl_114579-86897.jpg?t=st=1757221497~exp=1757225097~hmac=cb4bedc70f1308d003448a7ac6f6a76c6b5c3028b0e7adea7494585821913485&w=1480",
      },
      {
        id: "p7",
        title: "بطاطس 1 كجم",
        meta: "مناسبة للقلي",
        price: 20,
        image:
          "https://img.freepik.com/free-photo/fresh-potato-kitchen-ready-be-cooked_1150-14558.jpg?t=st=1757221597~exp=1757225197~hmac=4469916850fe0d680ef92ebe6506afe4d201aa28971eeb4d07f36e95e87bd54b&w=1480",
      },
      {
        id: "p8",
        title: "بصل 1 كجم",
        meta: "ذهبي",
        price: 18,
        image:
          "https://img.freepik.com/free-photo/close-up-view-basket-red-onions_141793-5351.jpg?t=st=1757221688~exp=1757225288~hmac=151c153be5d6dd0ef66776ac1e2a7a87b2f5b3529675bbcb3363bf0691c07879&w=1480",
      },
      {
        id: "p9",
        title: "عنب أحمر 1 كجم",
        meta: "طازة",
        price: 55,
        image:
          "https://img.freepik.com/free-photo/front-view-fresh-grapes-blue-color-photo-fruit-wine-mellow-juice_140725-144059.jpg?t=st=1757221763~exp=1757225363~hmac=d48590978beb10e4d35e16481876b3428b94f51356b55e5f47aca422c5111725&w=1480",
      },
      {
        id: "p10",
        title: "فراولة 500 جم",
        meta: "طازة",
        price: 38,
        image:
          "https://img.freepik.com/free-photo/front-close-view-fresh-red-strawberries-inside-brown-pot-light-white-desk-berry-fruit-fresh-vitamine-taste-photo_140725-52666.jpg?t=st=1757221843~exp=1757225443~hmac=e2440aa9e5b32aad860ca5bc8979476ada9be713a3e362ce9ff17e595955b851&w=1480",
      },
    ],
  },
  {
    id: "beverages",
    title: "المشروبات",
    subtitle: "غازية • عصائر • مياه",
    homeLimit: 4,
    items: [
      {
        id: "b1",
        title: "مياه معدنية 1.5 لتر",
        meta: "زجاجة كبيرة",
        price: 12,
        image:
          "https://img.freepik.com/free-photo/front-view-water-recipients-ice-cube-copy-space_23-2148728782.jpg?t=st=1757221931~exp=1757225531~hmac=2766265a219dc78f0c567f6d282b7c468cb9b89a2e7bcf9d2143d27c775d68ce&w=1480",
        featured: true,
      },
      {
        id: "b2",
        title: "عصير مانجو 1 لتر",
        meta: "بدون مواد حافظة",
        price: 28,
        image:
          "https://img.freepik.com/free-photo/front-view-sliced-mango-blackboard-with-glass-orange-juice-mint-leaves_141793-9522.jpg?t=st=1757222033~exp=1757225633~hmac=b5e4de623a92803ba47e852603e3498ed96c6d491eb2b794d2a900bf5092b764&w=1480",
        featured: true,
      },
      {
        id: "b3",
        title: "مشروب غازي 1 لتر",
        meta: "كولا",
        price: 22,
        image:
          "https://img.freepik.com/free-photo/fruit-juices-composition-black-background_23-2148227515.jpg?t=st=1757222139~exp=1757225739~hmac=52e5014f7eaf2143dcd96e75cd31f2f7c52f1679ae9955d45ac94d0bb3461096&w=1480",
        featured: true,
      },
      {
        id: "b4",
        title: "شاي أكياس 100 فتلة",
        meta: "أوراق منتقاة",
        price: 55,
        image:
          "https://img.freepik.com/premium-photo/close-up-red-drink-table_1048944-14552516.jpg?w=1480",
        featured: true,
      },

      {
        id: "b5",
        title: "قهوة مطحونة 200 جم",
        meta: "تحميص متوسط",
        price: 95,
        image:
          "https://img.freepik.com/free-photo/steaming-cup-coffee-with-coffee-beans-black-background_9975-124588.jpg?t=st=1757222278~exp=1757225878~hmac=9a2686672c2b60a4c29727295477a3309c90b5f377ebbb8f23764ed1f9dd0712&w=1480",
      },
      {
        id: "b6",
        title: "عصير برتقال 1 لتر",
        meta: "طبيعي",
        price: 26,
        image: "",
      },
      {
        id: "b7",
        title: "مشروب طاقة 250 مل",
        meta: "بارد",
        price: 30,
        image: "",
      },
      {
        id: "b8",
        title: "مياه فوارة 500 مل",
        meta: "غاز طبيعي",
        price: 18,
        image: "",
      },
      {
        id: "b9",
        title: "حليب 1 لتر",
        meta: "نصف دسم",
        price: 42,
        image: "",
      },
      {
        id: "b10",
        title: "قهوة سريعة التحضير 20 ظرف",
        meta: "فوري",
        price: 68,
        image: "",
      },
    ],
  },
  {
    id: "homecare",
    title: "المنظفات والمستلزمات المنزلية",
    subtitle: "نظافة ورعاية يومية",
    homeLimit: 4,
    items: [
      {
        id: "h1",
        title: "مسحوق غسيل 3 كجم",
        meta: "إزالة البقع الصعبة",
        price: 189,
        oldPrice: 219,
        discount: 14,
        image:
          "https://img.freepik.com/premium-photo/shirt-show-washing-with-whirlpool-vortex-water-rotating-fabric-fiber-surface-3d-advertising-illustration-clean-with-washing-powder-liquid-detergent-3d-render-isolated-blue_1071747-1685.jpg?w=1480",
        featured: true,
      },
      {
        id: "h2",
        title: "مناديل مطبخ 6 رول",
        meta: "امتصاص عالي",
        price: 85,
        image:
          "https://img.freepik.com/free-photo/folded-napkin-wooden-table_1373-66.jpg?t=st=1757222641~exp=1757226241~hmac=8997a5cbd07dbf580835fcee328773ba2dea1739d408610797ff04862186ff28&w=1480",
        featured: true,
      },
      {
        id: "h3",
        title: "مطهر أسطح 1 لتر",
        meta: "قتل 99.9% من الجراثيم",
        price: 79,
        image:
          "https://img.freepik.com/free-photo/hands-with-surgical-gloves-cleaning-hand-rail-with-cloth-ablution_23-2148571840.jpg?t=st=1757222700~exp=1757226300~hmac=45b3a4c1cb91455145772bad139b4bd5f388219732267292c1d3031fd8bc0da4&w=1480",
        featured: true,
      },
      {
        id: "h4",
        title: "سائل أطباق 1 لتر",
        meta: "رغوة كثيفة",
        price: 39,
        image:
          "https://img.freepik.com/premium-photo/green-dish-washing-gel-set-plates-light-background_94064-12644.jpg?w=1480",
        featured: true,
      },

      {
        id: "h5",
        title: "منظف زجاج 650 مل",
        meta: "لمعان سريع",
        price: 35,
        image:
          "https://img.freepik.com/free-photo/sanitary-products-with-copy-space_23-2148333843.jpg?t=st=1757222863~exp=1757226463~hmac=25419f2e647b7d9933797da56b77fce7800e01aec883b990e4bab2259b8e4b79&w=1480",
      },
      {
        id: "h6",
        title: "أكياس قمامة 50 كيس",
        meta: "مقاس كبير",
        price: 52,
        image: "",
      },
      {
        id: "h7",
        title: "معطر جو 300 مل",
        meta: "روائح متعددة",
        price: 44,
        image: "",
      },
      {
        id: "h8",
        title: "اسفنج تنظيف 5 قطع",
        meta: "متعدد الاستعمال",
        price: 25,
        image: "",
      },
      {
        id: "h9",
        title: "كلور مبيّض 1 لتر",
        meta: "تعقيم قوي",
        price: 27,
        image: "",
      },
      {
        id: "h10",
        title: "منعم أقمشة 2 لتر",
        meta: "انتعاش يدوم",
        price: 95,
        image: "",
      },
    ],
  },
];

const withSku = sectionsRaw.map((sec) => ({
  ...sec,
  items: sec.items.map((it, idx) => ({
    ...it,
    featured: it.featured === true,
    sku: it.sku ?? `${sec.id}-${it.id}-${idx}`,
  })),
}));

export const sections = withSku;

export const allItems = sections.flatMap((s) =>
  s.items.map((it) => ({ ...it, sectionId: s.id, sectionTitle: s.title }))
);
