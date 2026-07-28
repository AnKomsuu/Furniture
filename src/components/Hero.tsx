interface HeroProps {
  workshopName: string;
  onCalculateClick: () => void;
}

export default function Hero({ workshopName, onCalculateClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/70 to-wood-dark/50" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://s3.stroi-news.ru/img/mebel-na-belom-fone-oboi-1.jpg')" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {workshopName}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
          Мебель на заказ в Майлуу-Суу. Делаем, доставляем, устанавливаем.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCalculateClick}
            className="px-8 py-3 bg-wood text-white font-medium rounded-lg hover:bg-wood-dark transition-colors shadow-lg"
          >
            Рассчитать стоимость
          </button>
          <a
            href="#catalog"
            className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
}
