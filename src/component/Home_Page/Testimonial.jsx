import { FastForward, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Raman Kirana Store",
      location: "Barwasagar, Jhansi",
      rating: 5,
      date: "15-August-25",
      product: "Biscuits and Kirana Items",
      review: "Excellent service and very good quality products!",
    },
    {
      name: "Ratan General Store",
      location: "Niwari, Madhya Pradesh",
      rating: 5,
      date: "11-July-25",
      product: "All General Store Items",
      review: "All Products are available at best wholesale prices and best delivery service. Highly recommended!",
    },
    {
      name: "GS Ready Made Garments",
      location: "Prithvipur, Madhya Pradesh",
      rating: 4,
      date: "07-August-25",
      product: "Sirtex Innerwears and Hosiery",
      review: "Service is too fast , Book the order at morning and recived it just after 3hrs.",
    },
  ];

  return (
    <div className=" py-3 bg-gradient-to-r from-[#d18b2e] to-[#f1c27d] ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-[26px] font-bold text-center">
          Ratings <span className=" underline decoration-yellow-600">&</span> Reviews
        </h2>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <p className="text-5xl font-extrabold text-gray-600">4.6/5</p>
          <p className="text-gray-600">Based on 241 reviews</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 px-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < t.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 italic mb-4">"{t.review}"</p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>

              {/* Product + Date */}
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  <span className="font-semibold">Product:</span> {t.product}
                </p>
                <p>{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
