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
              Мы производим качественную мебель на заказ в Майлуу-Суу. Наша команда создает стильные и долговечные решения для вашего дома и бизнеса, воплощая любые дизайнерские идеи.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Наше преимущество — работа под ключ. Мы выполняем все этапы: от точного бесплатного замера до доставки и бережной сборки на месте. Вы получаете готовый результат без лишних забот.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed">
              Работаем по Майлуу-Суу, всей Жалал-Абадской области и готовы изготовить и доставить ваш заказ в любой регион Кыргызстана.
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
