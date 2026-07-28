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
  { id: 1, src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80", alt: "Современная светлая кухня", category: "kitchen" },
  { id: 2, src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", alt: "Стильный зеркальный шкаф-купе", category: "wardrobe" },
  { id: 3, src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80", alt: "Кухня в стиле лофт", category: "kitchen" },
  { id: 4, src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", alt: "Встроенный деревянный шкаф", category: "wardrobe" },
  { id: 5, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Премиальный мягкий диван", category: "other" },
  { id: 6, src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Минималистичная белая кухня", category: "kitchen" },
  { id: 7, src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", alt: "Современная гардеробная система", category: "wardrobe" },
  { id: 8, src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", alt: "Просторная дизайнерская кухня", category: "kitchen" },
  { id: 9, src: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80", alt: "Обеденный стол из массива дерева", category: "other" },
  { id: 10, src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80", alt: "Комфортная двуспальная кровать", category: "other" },
  { id: 11, src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80", alt: "Вместительный шкаф в прихожую", category: "wardrobe" },
  { id: 12, src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80", alt: "Эргономичный рабочий стол", category: "other" }
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
