import {
  Stethoscope,
  Syringe,
  Microscope,
  Scissors,
  ArrowRight,
} from "lucide-react";

import "./HomeSections.css";

const services = [
  {
    icon: Syringe,
    title: "Vaccinations",
    description:
      "Essential protection against common infectious diseases.",
  },
  {
    icon: Microscope,
    title: "Diagnostics",
    description:
      "Accurate testing and evaluations for early detection.",
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    description:
      "Professional bathing, styling, hygiene, and coat care.",
  },
  {
    icon: Stethoscope,
    title: "Preventive Care",
    description:
      "Regular wellness plans to keep pets healthy year-round.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Veterinary & Grooming Services
          </span>

          <h2>
            Complete Care For Every
            <span> Stage Of Life</span>
          </h2>

          <p>
            From routine checkups to advanced treatments and
            professional grooming, we provide comprehensive care
            tailored to your pet's unique needs.
          </p>
        </div>

        <div className="services-layout">
          <div className="featured-service">
            <div className="featured-icon">
              <Stethoscope size={34} />
            </div>

            <h3>Comprehensive Veterinary Care</h3>

            <p>
              Our experienced veterinarians offer consultations,
              diagnostics, treatment plans, preventive healthcare,
              and ongoing support to ensure your pets live healthy,
              happy lives.
            </p>

            <button className="service-link">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card"
              >
                <service.icon size={28} />

                <h4>{service.title}</h4>

                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;