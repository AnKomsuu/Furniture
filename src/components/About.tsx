export default function About() {
  const stats = [
    { value: "5+", label: "Лет опыта" },
    { value: "200+", label: "Выполненных заказов" },
    { value: "100%", label: "Довольных клиентов" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-wood-dark">О нас</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Мы — небольшая мебельная мастерская из Майлуу-Суу. Наша команда
              из 2–3 человек создает качественную мебель на заказ для вашего дома
              и бизнеса.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Наше преимущество — полный цикл: от замера до установки. Мы не
              просто делаем мебель, мы доставляем её и устанавливаем на месте.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed">
              Работаем по всей Жалал-Абадской области и готовы выполнить заказ
              в любом городе Кыргызстана.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-wood mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-warm-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
