import { Star } from "lucide-react";
import "./HomeSections.css";

const reviews = [
  {
    name: "Sarah Johnson",
    pet: "Golden Retriever Owner",
    review:
      "The doctors were incredibly patient and thorough. The entire team made our dog feel comfortable throughout the visit.",
  },
  {
    name: "Michael Davis",
    pet: "Cat Parent",
    review:
      "Professional service, clean facility, and excellent communication. We trust them completely with our pets.",
  },
  {
    name: "Emma Wilson",
    pet: "Multiple Pets",
    review:
      "From vaccinations to grooming, every experience has been outstanding. Highly recommended for pet owners.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Client Testimonials
          </span>

          <h2>
            Trusted By
            <span> Pet Parents</span>
          </h2>

          <p>
            Nothing means more to us than the trust families place
            in our veterinary and grooming team.
          </p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="testimonial-card"
            >
              <div className="testimonial-stars">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="testimonial-text">
                "{review.review}"
              </p>

              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.pet}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;