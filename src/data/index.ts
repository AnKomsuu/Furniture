export interface Work {
  id: number;
  src: string;
  alt: string;
  category: "kitchen" | "wardrobe" | "other";
}

export interface Review {
  id: number;
  text: string;
  author: string;
}

export interface PriceItem {
  type: string;
  minPrice: number;
  maxPrice: number;
}

export const WORKS: Work[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Современная белая кухня", category: "kitchen" },
  { id: 2, src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", alt: "Шкаф-купе с зеркалом", category: "wardrobe" },
  { id: 3, src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", alt: "Кухня в тёмных тонах", category: "kitchen" },
  { id: 4, src: "https://images.unsplash.com/photo-1558997519-8ef363837d86?w=800&q=80", alt: "Встроенный шкаф", category: "wardrobe" },
  { id: 5, src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80", alt: "Обеденный стол", category: "other" },
  { id: 6, src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80", alt: "Кухня с островом", category: "kitchen" },
  { id: 7, src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", alt: "Шкаф для прихожей", category: "wardrobe" },
  { id: 8, src: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&q=80", alt: "Минималистичная кухня", category: "kitchen" },
  { id: 9, src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80", alt: "Детский шкаф", category: "wardrobe" },
  { id: 10, src: "https://images.unsplash.com/photo-1556909190-67f98e371014?w=800&q=80", alt: "Угловая кухня", category: "kitchen" },
  { id: 11, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Гардеробная", category: "wardrobe" },
  { id: 12, src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80", alt: "Кухня классика", category: "kitchen" },
  { id: 13, src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80", alt: "Рабочий стол", category: "other" },
  { id: 14, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Современная кухня", category: "kitchen" },
  { id: 15, src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", alt: "Раздвижной шкаф", category: "wardrobe" },
  { id: 16, src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80", alt: "Кухня с подсветкой", category: "kitchen" },
  { id: 17, src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", alt: "Угловой шкаф", category: "wardrobe" },
  { id: 18, src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80", alt: "Кровать на заказ", category: "other" },
  { id: 19, src: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&q=80", alt: "Кухня-остров", category: "kitchen" },
  { id: 20, src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80", alt: "Книжный шкаф", category: "wardrobe" },
  { id: 21, src: "https://images.unsplash.com/photo-1556909190-67f98e371014?w=800&q=80", alt: "Эргономичная кухня", category: "kitchen" },
  { id: 22, src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80", alt: "Письменный стол", category: "other" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    text: "Заказывали кухню. Ребята молодцы, всё сделали качественно и в срок. Доставили и установили прямо в квартиру. Очень довольны!",
    author: "Айбек, Майлуу-Суу",
  },
  {
    id: 2,
    text: "Шкаф-купе получился именно такой, как мечтала. Спасибо за индивидуальный подход и внимание к деталям!",
    author: "Гульнара, Джалал-Абад",
  },
  {
    id: 3,
    text: "Заказывали мебель для кафе. Всё сделали быстро, качество отличное. Рекомендую всем!",
    author: "Сергей, Кербен",
  },
  {
    id: 4,
    text: "Долго выбирали компанию. Остановились на них — и не пожалели. Кухня просто супер!",
    author: "Нуржан, Таш-Кумыр",
  },
  {
    id: 5,
    text: "Отличная работа! Шкаф встал идеально, всё продумали до мелочей. Спасибо большое!",
    author: "Алтынай, Майлуу-Суу",
  },
];

export const PRICES: PriceItem[] = [
  { type: "Кухни", minPrice: 8000, maxPrice: 15000 },
  { type: "Шкафы", minPrice: 6000, maxPrice: 12000 },
  { type: "Столы", minPrice: 5000, maxPrice: 10000 },
  { type: "Стулья", minPrice: 3000, maxPrice: 6000 },
  { type: "Кровати", minPrice: 10000, maxPrice: 18000 },
  { type: "Диваны", minPrice: 12000, maxPrice: 25000 },
  { type: "Другое", minPrice: 5000, maxPrice: 20000 },
];

export const MATERIALS = [
  { id: "white", name: "Белый глянец", multiplier: 1.0 },
  { id: "black", name: "Чёрный глянец", multiplier: 1.0 },
  { id: "beige", name: "Бежевый матовый", multiplier: 1.0 },
  { id: "wood", name: "Дерево (венге)", multiplier: 1.1 },
  { id: "oak", name: "Дуб натуральный", multiplier: 1.2 },
  { id: "custom", name: "Индивидуальный цвет", multiplier: 1.15 },
];

export const WHATSAPP_NUMBER = "996555123456";
export const INSTAGRAM_URL = "https://instagram.com/mebel_mailuusuu";
export const WORKSHOP_NAME = "Мебель";
export const CITY = "Майлуу-Суу, Жалал-Абадская область";
