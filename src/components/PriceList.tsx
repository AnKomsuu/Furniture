import { PRICES } from "@/data";

export default function PriceList() {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU").format(price);

  return (
    <section id="prices" className="py-20 px-4 bg-accent-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-wood-dark">Прайс-лист</h2>
        <p className="text-center text-warm-gray mb-10">
          Базовые цены за квадратный метр
        </p>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-wood text-white text-sm font-medium">
            <div className="px-6 py-4">Тип мебели</div>
            <div className="px-6 py-4 text-center">От (сом/м²)</div>
            <div className="px-6 py-4 text-center">До (сом/м²)</div>
          </div>

          {PRICES.map((item, index) => (
            <div
              key={item.type}
              className={`grid grid-cols-3 text-sm ${
                index % 2 === 0 ? "bg-white" : "bg-accent-light"
              }`}
            >
              <div className="px-6 py-4 font-medium text-wood-dark">{item.type}</div>
              <div className="px-6 py-4 text-center text-warm-gray">
                {formatPrice(item.minPrice)}
              </div>
              <div className="px-6 py-4 text-center text-warm-gray">
                {formatPrice(item.maxPrice)}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-warm-gray mt-6">
          * Цена может варьироваться в зависимости от сложности и материала.
          Точная стоимость определяется после замера.
        </p>
      </div>
    </section>
  );
}
