export const servicesData = [
  {
    id: 1,
    title: 'Hegkezelések',
    image: '/wellness.jpg',
    imageAlt: 'Hegkezelések',
    description:
      'A hegek nem csak esztétikai kérdések. A manuális hegkezelés célja a letapadások oldása és a szövetek szabadabb működésének elősegítése.',
    details: [
      { name: 'Kis kiterjedésű hegkezelés', duration: 20, price: '4.300 Ft' },
      {
        name: 'Közepes kiterjedésű hegkezelés',
        duration: 30,
        price: '5.300 Ft',
      },
      { name: '1-es típus hegkezelés', duration: 45, price: '6.700 Ft' },
      {
        name: '2-es típus hegkezelés',
        duration: 60,
        price: '8.300 Ft',
      },
    ],
    note: '⚠️ Pattanások okozta hegek kezelésére nem alkalmazható.',
    reverse: false,
  },
  {
    id: 2,
    title: 'Arckezelések',
    image: '/plant1.jpg',
    imageAlt: 'Arckezelések',
    description:
      'Eberlin Biocosmetics professzionális arckezelések a bőr egyensúlyáért, tisztaságáért és megújulásáért.',
    details: [
      {
        name: '„Kék kezelés” – bőrkép helyreállító',
        duration: 120,
        price: '10.600 Ft',
      },
      {
        name: 'Kímélő arctisztító kezelés I. típúsú',
        duration: 120,
        price: '16.700 Ft',
      },
      {
        name: 'Kímélő arctisztító kezelés II. típúsú',
        duration: 120,
        price: '18.500 Ft',
      },
      { name: 'Firmezza Anti-Aging kezelés', duration: 60, price: '16.500 Ft' },
    ],
    note: '',
    reverse: true,
  },
  {
    id: 3,
    title: 'Dekor kezelések – Szemöldök styling',
    image: '/petal.jpg',
    imageAlt: 'Szemöldök styling',
    description:
      'Természetes, harmonikus szemöldökformázás az arc karakteréhez igazítva.',
    details: [
      {
        name: 'Teljes szemöldök styling – 1. alkalom',
        duration: 90,
        price: '10.900 Ft',
      },
      {
        name: 'Teljes szemöldök styling – következő alkalom',
        duration: 60,
        price: '9.700 Ft',
      },
      { name: 'Szemöldök laminálás', duration: 45, price: '7.800 Ft' },
      { name: 'Szemöldökszedés és festés', duration: 30, price: '5.200 Ft' },
    ],
    note: '',
    reverse: false,
  },
  {
    id: 4,
    title: 'Dekor kezelések – Szemöldök & Szempilla festés',
    image: '/plant2.jpg',
    imageAlt: 'Szempilla festés',
    description:
      'Finom, mégis látványos kezelések a természetesen ápolt megjelenésért.',
    details: [
      { name: 'Szemöldökszedés + festés', duration: 30, price: '5.200 Ft' },
      {
        name: 'Szemöldökszedés + szempillafestés',
        duration: 45,
        price: '6.200 Ft',
      },
      {
        name: 'Szemöldökszedés + festés + szempillafestés',
        duration: 60,
        price: '8.000 Ft',
      },
      { name: 'Szempillafestés', duration: 45, price: '4.200 Ft' },
    ],
    note: '',
    reverse: true,
  },
]

export const waxServices = {
  id: 5,
  title: 'WAX kezelések',
  image: '/wellness.jpg',
  imageAlt: 'Wax kezelések',
  description:
    'Pierrewax termékekkel végzett, bőrbarát, luxus érzetű szőrtelenítés.',
  details: [
    // Female
    {
      gender: 'female',
      name: 'Brazil wax',
      price: '11.900 Ft',
      duration: { regular: 30, new: 60 },
    },
    {
      gender: 'female',
      name: 'Részleges brazil wax',
      price: '10.900 Ft',
      duration: { regular: 30, new: 60 },
    },
    {
      gender: 'female',
      name: 'Fazon wax',
      price: '11.900 Ft',
      duration: { regular: 30, new: 60 },
    },
    {
      gender: 'female',
      name: 'Bikiniwax',
      price: '5.800 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Hascsík',
      price: '3.100 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Fenék belső ív',
      price: '4.200 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Fenék külső ív',
      price: '3.300 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'female',
      name: 'Fenék belső-külső',
      price: '6.600 Ft',
      duration: { regular: 45, new: 60 },
    },
    {
      gender: 'female',
      name: 'Derék',
      price: '2.800 Ft',
      duration: { regular: 30, new: 30 },
    },
    {
      gender: 'female',
      name: 'Hónalj',
      price: '2.500 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Szemöldök',
      price: '2.500 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Bajusz',
      price: '2.500 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Pajesz',
      price: '2.500 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Áll',
      price: '2.500 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Kar',
      price: '6.800 Ft',
      duration: { regular: 45, new: 60 },
    },
    {
      gender: 'female',
      name: 'Alkar',
      price: '4.200 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'female',
      name: 'Felkar',
      price: '3.900 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'female',
      name: 'Láb',
      price: '9.900 Ft',
      duration: { regular: 60, new: 75 },
    },
    {
      gender: 'female',
      name: 'Lábszár',
      price: '4.800 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'female',
      name: 'Comb',
      price: '5.900 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'female',
      name: 'Részleges comb',
      price: '3.900 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'female',
      name: 'Mellbimbó',
      price: '2.200 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'female',
      name: 'Orr',
      price: '1.800 Ft',
      duration: { regular: 15, new: 30 },
    },

    // Male
    {
      gender: 'male',
      name: 'Boxermaxi',
      price: '19.500 Ft',
      duration: { regular: 105, new: 105 },
    },
    {
      gender: 'male',
      name: 'Fecskén túl',
      price: '18.900 Ft',
      duration: { regular: 60, new: 75 },
    },
    {
      gender: 'male',
      name: 'Teljes Intim',
      price: '17.900 Ft',
      duration: { regular: 60, new: 60 },
    },
    {
      gender: 'male',
      name: 'Részleges Intim',
      price: '16.200 Ft',
      duration: { regular: 45, new: 45 },
    },
    {
      gender: 'male',
      name: 'Fenék belső ív',
      price: '5.700 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'male',
      name: 'Fenék külső ív',
      price: '5.700 Ft',
      duration: { regular: 30, new: 30 },
    },
    {
      gender: 'male',
      name: 'Fenék belső-külső',
      price: '7.700 Ft',
      duration: { regular: 45, new: 45 },
    },
    {
      gender: 'male',
      name: 'Orr',
      price: '3.900 Ft',
      duration: { regular: 15, new: 15 },
    },
    {
      gender: 'male',
      name: 'Fül',
      price: '3.900 Ft',
      duration: { regular: 15, new: 15 },
    },
    {
      gender: 'male',
      name: 'Teljes hát',
      price: '12.000 Ft',
      duration: { regular: 60, new: 75 },
    },
    {
      gender: 'male',
      name: 'Tarkó-váll',
      price: '7.300 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Derék',
      price: '4.700 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'male',
      name: 'Hát',
      price: '8.200 Ft',
      duration: { regular: 45, new: 60 },
    },
    {
      gender: 'male',
      name: 'Hónalj',
      price: '4.900 Ft',
      duration: { regular: 15, new: 30 },
    },
    {
      gender: 'male',
      name: 'Teljes front',
      price: '11.200 Ft',
      duration: { regular: 60, new: 75 },
    },
    {
      gender: 'male',
      name: 'Mellkas',
      price: '7.400 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Has',
      price: '5.300 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Mellbimbó',
      price: '2.900 Ft',
      duration: { regular: 15, new: 15 },
    },
    {
      gender: 'male',
      name: 'Karok',
      price: '7.900 Ft',
      duration: { regular: 45, new: 60 },
    },
    {
      gender: 'male',
      name: 'Alkar',
      price: '5.100 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Felkar',
      price: '4.900 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Lábak',
      price: '12.800 Ft',
      duration: { regular: 60, new: 75 },
    },
    {
      gender: 'male',
      name: 'Comb',
      price: '7.800 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Lábszár',
      price: '6.500 Ft',
      duration: { regular: 30, new: 45 },
    },
    {
      gender: 'male',
      name: 'Lábfej',
      price: '2.900 Ft',
      duration: { regular: 15, new: 15 },
    },
    {
      gender: 'male',
      name: 'Szemöldök',
      price: '2.900 Ft',
      duration: { regular: 15, new: 15 },
    },
  ],
  note: '',
  reverse: false,
}

export const generalFAQ = [
  {
    question: 'Hogyan tudok időpontot foglalni?',
    answer: 'Időpontot telefonon tudsz foglalni. +36 20 347 7262',
    icon: '📞',
  },
  {
    question: 'Első alkalommal mire számíthatok?',
    answer:
      'Az első alkalom egy rövid egyeztetéssel kezdődik, ahol átbeszéljük az igényeidet és kérdéseidet.',
    icon: '🌸',
  },
  {
    question: 'Mennyivel érkezzek a kezelés előtt?',
    answer:
      'Érdemes 5–10 cel korábban érkezni, hogy kényelmesen fel tudj készülni.',
    icon: '⏱️',
  },
  {
    question: 'Milyen fizetési módok érhetők el?',
    answer: 'A kozmetikában készpénzes és elektronikus fizetés is elérhető.',
    icon: '💳',
  },
  {
    question: 'Lemondhatom vagy módosíthatom az időpontomat?',
    answer:
      'Igen. Kérjük, hogy legalább 12-24 órával a kezelés előtt jelezd a módosítást vagy lemondást.',
    icon: '❗',
  },
  {
    question: 'Férfi vendégeket is fogadtok?',
    answer:
      'Igen, bizonyos szolgáltatásaink férfi vendégek számára is elérhetők.',
    icon: '🧑',
  },
  {
    question: 'Terhesség alatt igénybe vehetők a kezelések?',
    answer:
      'Egyes kezelések igen, mások nem. Ilyen esetben javasolt előzetesen egyeztetni.',
    icon: '🤰',
  },
]

export const waxFAQ = [
  {
    question: 'Fájdalmas a wax?',
    answer:
      'A wax kellemetlen lehet, de a fájdalom mértéke egyénenként eltérő. A kezelések során figyelünk a megfelelő technikára és tempóra, hogy a lehető legkíméletesebb élményt nyújtsuk.',
    icon: '🌿',
  },
  {
    question: 'Mennyi ideig tart egy wax?',
    answer:
      'Az időtartam a kezelt területtől és az egyéni adottságoktól függ. A kezelések többsége 15–50  között mozog.',
    icon: '⏱️',
  },
  {
    question: 'Milyen hosszú szőr szükséges a waxhoz?',
    answer:
      'A waxolás akkor tud igazán szép és alapos eredményt adni, ha a szőrszálak már megfelelő hosszúságúak. Ideális esetben ez körülbelül 0,5–1 cm.',
    icon: '✂️',
  },
  {
    question: 'Első alkalommal is lehet intim waxot kérni?',
    answer:
      'Igen, természetesen. Sok vendégünk első alkalommal is az intim waxot választja. A kezelést diszkréten, ítélkezés nélkül végezzük.',
    icon: '🌸',
  },
  {
    question: 'Menstruáció idején ajánlott a wax?',
    answer:
      'Az intim wax menstruáció ideje alatt is elvégezhető, amennyiben a vendég a kezelés során komfortosan érzi magát, és megfelelő higiéniai eszközt (tampon vagy menstruációs kehely) használ.',
    icon: '🩸',
  },
]
