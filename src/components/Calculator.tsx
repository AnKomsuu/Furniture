"use client";

import { useState, useMemo } from "react";
import { PRICES, WHATSAPP_NUMBER } from "@/data";

const FURNITURE_TYPES = [
  { id: "kitchen", label: "Кухня" },
  { id: "wardrobe", label: "Шкаф" },
  { id: "sofa", label: "Диван" },
  { id: "table", label: "Стол" },
  { id: "bed", label: "Кровать" },
  { id: "other", label: "Другое" },
];

const MATERIALS_LIST = [
  { id: "ldsp", name: "ЛДСП (Ламинированная ДСП)", multiplier: 1.0 },
  { id: "mdf", name: "МДФ под эмалью / пленкой", multiplier: 1.2 },
  { id: "veneer", name: "Натуральный шпон", multiplier: 1.45 },
  { id: "wood", name: "Массив дерева", multiplier: 1.7 },
  { id: "plastic", name: "Пластик HPL", multiplier: 1.3 },
];

const COLORS_LIST = [
  { id: "white", name: "Белый", hex: "#FFFFFF" },
  { id: "cream", name: "Бежевый / Кремовый", hex: "#F5F5DC" },
  { id: "gray", name: "Серый", hex: "#9CA3AF" },
  { id: "dark_gray", name: "Графит", hex: "#4B5563" },
  { id: "black", name: "Черный", hex: "#111827" },
  { id: "brown", name: "Коричневый", hex: "#78350F" },
  { id: "blue", name: "Синий", hex: "#1E3A8A" },
  { id: "green", name: "Зеленый", hex: "#064E3B" },
];

export default function Calculator() {
  const [furnitureType, setFurnitureType] = useState("kitchen");
  const [width, setWidth] = useState<number>(2);
  const [height, SetHeight] = useState<number>(2.5);
  const [material, setMaterial] = useState("ldsp");
  const [color, setColor] = useState("white");
  const [otherDescription, setOtherDescription] = useState("");

  const priceData = useMemo(() => {
    const priceMap: Record<string, { minPrice: number; maxPrice: number }> = {
      kitchen: PRICES[0],
      wardrobe: PRICES[1],
      sofa: PRICES[5] || { minPrice: 12000, maxPrice: 25000 },
      table: PRICES[2],
      bed: PRICES[4],
      other: PRICES[6] || { minPrice: 5000, maxPrice: 20000 },
    };
    return priceMap[furnitureType] || PRICES[0];
  }, [furnitureType]);

  const materialData = useMemo(
    () => MATERIALS_LIST.find((m) => m.id === material) || MATERIALS_LIST[0],
    [material]
  );

  const area = width * height;

  const priceRange = useMemo(() => {
    const min = Math.round(area * priceData.minPrice * materialData.multiplier);
    const max = Math.round(area * priceData.maxPrice * materialData.multiplier);
    return { min, max };
  }, [area, priceData, materialData]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU").format(price);

  const selectedTypeLabel = FURNITURE_TYPES.find((t) => t.id === furnitureType)?.label;
  const selectedColorName = COLORS_LIST.find((c) => c.id === color)?.name;

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте! Хочу заказать ${selectedTypeLabel}${
      furnitureType === "other" && otherDescription.trim()
        ? ` (${otherDescription.trim()})`
        : ""
    }.\n\nПараметры:\n- Размер: ${width}м × ${height}м = ${area.toFixed(
      1
    )} м²\n- Материал: ${materialData.name}\n- Цвет: ${selectedColorName}\n\nПримерная стоимость: ${formatPrice(
      priceRange.min
    )} – ${formatPrice(priceRange.max)} сом.\n\nХочу уточнить детали и записаться на замер.`
  );

  return (
    <section id="calculator" className="py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-wood-dark">
          Калькулятор стоимости
        </h2>
        <p className="text-center text-warm-gray mb-10">
          Рассчитайте примерную стоимость вашей будущей мебели за пару кликов
        </p>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-wood-dark">
                Тип мебели
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FURNITURE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFurnitureType(type.id)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      furnitureType === type.id
                        ? "bg-wood text-white"
                        : "bg-accent-light text-warm-gray hover:text-wood-dark"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {furnitureType === "other" && (
              <div className="animate-fadeIn">
                <label className="block text-sm font-medium mb-2 text-wood-dark">
                  Что именно вы хотите заказать?
                </label>
                <textarea
                  value={otherDescription}
                  onChange={(e) => setOtherDescription(e.target.value)}
                  placeholder="Опишите подробно мебель, которую вы хотите заказать (например: обувница в прихожую, тумбочка, мебель для ванной и т.д.)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-wood/20"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-wood-dark">
                  Ширина (м)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                  min={0.5}
                  max={10}
                  step={0.1}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-wood/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-wood-dark">
                  Высота (м)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => SetHeight(Number(e.target.value) || 0)}
                  min={0.5}
                  max={5}
                  step={0.1}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-wood/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-wood-dark">
                Материал корпуса и фасадов
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-wood/20"
              >
                {MATERIALS_LIST.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                    {m.multiplier > 1 ? ` (+${Math.round((m.multiplier - 1) * 100)}%)` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-wood-dark">
                Цвет: <span className="font-semibold text-wood">{selectedColorName}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {COLORS_LIST.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setColor(c.id)}
                    className={`w-10 h-10 rounded-lg relative transition-all ${
                      color === c.id
                        ? "ring-2 ring-wood ring-offset-2 scale-110"
                        : "hover:scale-105"
                    } ${c.id === "white" ? "border border-gray-300" : ""}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    aria-label={c.name}
                  >
                    {color === c.id && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className={`w-5 h-5 ${
                            c.id === "white" || c.id === "cream" ? "text-gray-800" : "text-white"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent-light rounded-xl">
            <div className="text-center">
              <p className="text-sm text-warm-gray mb-2">
                Примерная стоимость
              </p>
              <p className="text-3xl font-bold text-wood-dark mb-1">
                {formatPrice(priceRange.min)} – {formatPrice(priceRange.max)} сом
              </p>
              <p className="text-xs text-warm-gray mb-6">
                Площадь изделия: {area.toFixed(1)} м² • Точная стоимость определяется после бесплатного замера
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Обсудить заказ в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
