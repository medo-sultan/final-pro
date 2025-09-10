// src/data/supermarketData.js

export const sectionsRaw = [
  {
    id: "deals",
    title: "عروض الأسبوع",
    subtitle: "خصومات قوية على منتجات مختارة",
    homeLimit: 4,
    items: [
      {
        id: "ph1",
        title: "هاتف Pro Max 256GB",
        meta: "شاشة 6.7” • كاميرا 48MP",
        price: 38999,
        oldPrice: 41999,
        discount: 7,
        tag: "جديد",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1480&q=80",
        featured: true,
      },
      {
        id: "ph2",
        title: "هاتف Ultra 5G 512GB",
        meta: "Snapdragon • 120Hz",
        price: 32999,
        oldPrice: 35999,
        discount: 8,
        image:
          "https://img.freepik.com/free-vector/side-view-smartphone_23-2147697944.jpg?t=st=1756058661~exp=1756062261~hmac=8f8b182edf0a5015867096dc72f8275ea0b670ab81221e33344d67a46dd7ef13&w=1480",
        featured: true,
      },
      {
        id: "ph3",
        title: "هاتف Lite 128GB",
        meta: "بطارية 5000mAh",
        price: 11999,
        image:
          "https://img.freepik.com/free-vector/triple-camera-black-smartphone-concept-mockup_1017-19784.jpg?t=st=1756058761~exp=1756062361~hmac=2623bfb4812ca27bb99473b727f9d62e92d1b75f441497d3ba3031fe0f5e1604&w=1480",
        featured: true,
      },
      {
        id: "ph4",
        title: "هاتف Compact 256GB",
        meta: "هيكل ألومنيوم • كاميرا مزدوجة",
        price: 15499,
        image:
          "https://img.freepik.com/premium-psd/dark-smartphone-mockup_149660-816.jpg?w=1480",
        featured: true,
      },

      {
        id: "d5",
        title: "عدس أصفر 500 جم",
        meta: "محلي",
        price: 30,
        oldPrice: 36,
        discount: 17,
        image: "https://picsum.photos/seed/lentils/600/400",
      },
      {
        id: "d6",
        title: "فول مدمس 1 كجم",
        meta: "حب كامل",
        price: 28,
        image: "https://picsum.photos/seed/fava/600/400",
      },
      {
        id: "d7",
        title: "دقيق فاخر 1 كجم",
        meta: "للمخبوزات",
        price: 27,
        image: "https://picsum.photos/seed/flour/600/400",
      },
      {
        id: "d8",
        title: "ملح طعام 1 كجم",
        meta: "مكرر",
        price: 10,
        image: "https://picsum.photos/seed/salt/600/400",
      },
      {
        id: "d9",
        title: "صلصة طماطم 320 جم",
        meta: "مركزة",
        price: 17,
        image: "https://picsum.photos/seed/tomato-paste/600/400",
      },
      {
        id: "d10",
        title: "خل أبيض 1 لتر",
        meta: "للتتبيل والتنظيف",
        price: 22,
        image: "https://picsum.photos/seed/vinegar/600/400",
      },
    ],
  },
  {
    id: "laptops",
    title: "لابتوبات",
    subtitle: "للألعاب، الشغل، والدراسة",
    homeLimit: 4,
    items: [
      {
        id: "lp1",
        title: "Gaming 15” RTX",
        meta: "Core i7 • RTX 4060 • SSD 1TB",
        price: 56999,
        oldPrice: 61999,
        discount: 8,
        tag: "HOT",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1480&q=80",
        featured: true,
      },
      {
        id: "lp2",
        title: "Ultrabook 14”",
        meta: "خفيف جداً • 1.2kg",
        price: 42999,
        image:
          "https://img.freepik.com/free-photo/laptop-device-with-minimalist-monochrome-background_23-2150763337.jpg?t=st=1756059063~exp=1756062663~hmac=6b26b6b6b2da441e652c508f3b8c73e16deabd0c6b49191b1fc8e3c3abfc9d62&w=1480",
        featured: true,
      },
      {
        id: "lp3",
        title: "Creator 16”",
        meta: "شاشة 4K • ألوان دقيقة",
        price: 74999,
        image:
          "https://img.freepik.com/free-photo/laptop-device-with-minimalist-monochrome-background_23-2150763336.jpg?t=st=1756059316~exp=1756062916~hmac=47badf681a2980d73ce41f4b06efee75f36d2516c4d83d7adccc7cea6913b682&w=1480",
        featured: true,
      },
      {
        id: "lp4",
        title: "Student 15.6”",
        meta: "Core i5 • SSD 512GB",
        price: 28999,
        image:
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1480&q=80",
        featured: true,
      },

      {
        id: "p5",
        title: "برتقال عصير 1 كجم",
        meta: "حلو • كثير العصير",
        price: 30,
        image: "https://picsum.photos/seed/orange/600/400",
      },
      {
        id: "p6",
        title: "ليمون 1 كجم",
        meta: "طازة",
        price: 35,
        image: "https://picsum.photos/seed/lemon/600/400",
      },
      {
        id: "p7",
        title: "بطاطس 1 كجم",
        meta: "مناسبة للقلي",
        price: 20,
        image: "https://picsum.photos/seed/potato/600/400",
      },
      {
        id: "p8",
        title: "بصل 1 كجم",
        meta: "ذهبي",
        price: 18,
        image: "https://picsum.photos/seed/onion/600/400",
      },
      {
        id: "p9",
        title: "عنب أحمر 1 كجم",
        meta: "طازة",
        price: 55,
        image: "https://picsum.photos/seed/grapes/600/400",
      },
      {
        id: "p10",
        title: "فراولة 500 جم",
        meta: "طازة",
        price: 38,
        image: "https://picsum.photos/seed/strawberry/600/400",
      },
    ],
  },
  {
    id: "audio",
    title: "سماعات",
    subtitle: "سماعات رأس وEarbuds بنقاء عالي",
    items: [
      {
        id: "au1",
        title: "Headphones Studio",
        meta: "عزل ضوضاء نشط",
        price: 5999,
        oldPrice: 6999,
        discount: 14,
        image:
          "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074308.jpg?t=st=1756059415~exp=1756063015~hmac=069fce15977c7caa7a7bae1ff2d276e92957ec1579e65e0da65931289203010f&w=1480",
        featured: true,
      },
      {
        id: "au2",
        title: "Wireless Earbuds Pro",
        meta: "IPX4 • شحن سريع",
        price: 3499,
        image:
          "https://img.freepik.com/free-photo/wireless-inear-headphones-with-case-pink-background-flat-lay_169016-23020.jpg?t=st=1756059775~exp=1756063375~hmac=fdca38884c514301b62cb26740f17a87180e2f886e41443d583cbfff94b0b1db&w=1480",
        featured: true,
      },
      {
        id: "au3",
        title: "On-Ear Lite",
        meta: "بطارية 40 ساعة",
        price: 2799,
        image:
          "https://img.freepik.com/free-photo/view-horizontal-bluetooth-speaker-with-simple-minimal-modern-design_23-2150807997.jpg?t=st=1756059611~exp=1756063211~hmac=288a8738b49363bda9370228ecd8ebd91aa9b1056efdef028054e5f8b8a7821e&w=1480",
        featured: true,
      },
      {
        id: "au4",
        title: "Headset Gaming 7.1",
        meta: "ميكروفون معزول للضوضاء",
        price: 4399,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1480&q=80",
        featured: true,
      },

      {
        id: "b5",
        title: "قهوة مطحونة 200 جم",
        meta: "تحميص متوسط",
        price: 95,
        image: "https://picsum.photos/seed/coffee/600/400",
      },
      {
        id: "b6",
        title: "عصير برتقال 1 لتر",
        meta: "طبيعي",
        price: 26,
        image: "https://picsum.photos/seed/orange-juice/600/400",
      },
      {
        id: "b7",
        title: "مشروب طاقة 250 مل",
        meta: "بارد",
        price: 30,
        image: "https://picsum.photos/seed/energy/600/400",
      },
      {
        id: "b8",
        title: "مياه فوارة 500 مل",
        meta: "غاز طبيعي",
        price: 18,
        image: "https://picsum.photos/seed/sparkling/600/400",
      },
      {
        id: "b9",
        title: "حليب 1 لتر",
        meta: "نصف دسم",
        price: 42,
        image: "https://picsum.photos/seed/milk/600/400",
      },
      {
        id: "b10",
        title: "قهوة سريعة التحضير 20 ظرف",
        meta: "فوري",
        price: 68,
        image: "https://picsum.photos/seed/instant-coffee/600/400",
      },
    ],
  },
  {
    id: "wearables",
    title: "ساعات ذكية وملحقات",
    subtitle: "Smartwatch | شواحن | كابلات",
    homeLimit: 4,
    items: [
      {
        id: "wr1",
        title: "Smartwatch Series",
        meta: "مراقبة نبضات • GPS",
        price: 6999,
        image:
          "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722614.jpg?t=st=1756059868~exp=1756063468~hmac=5c6886abd5c2a180a2489d9573a2322e8a7993fabbcc97d5cfa191e84fa0cdf6&w=1480",
        featured: true,
      },
      {
        id: "wr2",
        title: "Smartwatch Sport",
        meta: "مقاومة للماء 5ATM",
        price: 5499,
        image:
          "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1756060099~exp=1756063699~hmac=fc7cdcfd004050f437145685bf852fdfa8ef0fc3db8c90dd6a5cc90d4f6d1b93&w=1480",
        featured: true,
      },
      {
        id: "wr3",
        title: "MagSafe Charger",
        meta: "شحن سريع لاسلكي",
        price: 1299,
        image:
          "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96809.jpg?t=st=1756059924~exp=1756063524~hmac=f445b0ea9120633f94d6baf16c1099d70e73dc833d93cd10782cedd23c220bd1&w=1480",
        featured: true,
      },
      {
        id: "wr4",
        title: "Cable USB-C 1.5m",
        meta: "PD 60W • نايلون مضفّر",
        price: 399,
        image:
          "https://img.freepik.com/premium-photo/two-black-white-modern-smart-watch-with-straps-yellow-background-3d-rendering_476612-18622.jpg?w=1480",
        featured: true,
      },
    ],
  },
  {
    id: "others",
    title: "إلكترونيات أخرى",
    subtitle: "كاميرات، درون، قطع إبداعية",
    homeLimit: 4,
    items: [
      {
        id: "ot1",
        title: "طائرة Drone 4K",
        meta: "تتبع ذكي • استقرار عالي",
        price: 18999,
        image:
          "https://img.freepik.com/free-vector/usb-flash-drives-illustration-3d-realistic-memory-stick-black-white-plastic-mockup_33099-588.jpg?t=st=1756058835~exp=1756062435~hmac=dcde9da8c947fb1c7d53cda8c80ea999ef34cac47b44556af4982701068a506d&w=1480",
        featured: true,
      },
      {
        id: "ot2",
        title: "عدسة 50mm f/1.8",
        meta: "بوكيه رائع • تصوير بورتريه",
        price: 6999,
        image:
          "https://img.freepik.com/free-photo/top-view-photo-camera-indoors-still-life_23-2150630942.jpg?t=st=1756060412~exp=1756064012~hmac=2b70e3f6541c7a647ed1edd2ee7c5ceac8ca41bc1f5f086ac22ff1a4e7df210a&w=1480",
        featured: true,
      },
      {
        id: "ot3",
        title: "كيبورد ميكانيكي",
        meta: "Switches زرقاء • إضاءة",
        price: 1999,
        image:
          "https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529368.jpg?t=st=1756060272~exp=1756063872~hmac=ff11492fd4b2fb44e1ba3146c4d69f63608b9abd2e0891e624811edd2a4fc93a&w=1480",
        featured: true,
      },
      {
        id: "ot4",
        title: "كنترولر ألعاب",
        meta: "بلوتوث • بطارية طويلة",
        price: 1599,
        image:
          "https://img.freepik.com/premium-photo/two-joystick-controller-red-background-top-view_93675-159071.jpg?w=1480",
        featured: true,
      },
    ],
  },
];

// 2) تطبيع: أضف SKU فريد لكل عنصر
const withSku = sectionsRaw.map((sec) => ({
  ...sec,
  items: sec.items.map((it, idx) => ({
    ...it,
    featured: it.featured === true,
    sku: it.sku ?? `${sec.id}-${it.id}-${idx}`, // فريد حتى لو id اتكرر
  })),
}));

export const sections = withSku;

// 3) لستة مسطّحة لكل العناصر (مفيدة لصفحة /market)
export const allItems = sections.flatMap((s) =>
  s.items.map((it) => ({ ...it, sectionId: s.id, sectionTitle: s.title }))
);
