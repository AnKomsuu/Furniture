import { REVIEWS } from "@/data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-wood-dark">Отзывы</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 flex flex-col shadow-sm"
            >
              <div className="flex-1">
                <p className="text-warm-gray leading-relaxed mb-4">
                  «{review.text}»
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-wood/10 flex items-center justify-center text-sm font-medium text-wood">
                  {review.author.charAt(0)}
                </div>
                <span className="text-sm font-medium text-wood-dark">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
