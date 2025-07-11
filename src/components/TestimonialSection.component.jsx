import { useEffect, useState } from "react";
import axios from "axios";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/testimonials");
        const data = Array.isArray(res.data) ? res.data : [];
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setTestimonials([]);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-2">
        {Array.from({ length: 5 }, (_, i) => {
          const full = i + 1 <= Math.floor(rating);
          const half = rating % 1 !== 0 && Math.ceil(rating) === i + 1;
          return (
            <span key={i} className="text-yellow-400 text-lg">
              {full ? "★" : half ? "⯨" : "☆"}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section id="testimonials" className="bg-blue-50 py-15 px-9 md:px-19">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.length === 0 ? (
          <p className="text-center text-slate-500 col-span-full">
            No testimonials yet.
          </p>
        ) : (
          testimonials.map((t) => (
            <div key={t._id} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic mb-3">"{t.feedback}"</p>
              {renderStars(t.rating)}
              <h4 className="font-semibold text-blue-700 text-right">- {t.name}</h4>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
