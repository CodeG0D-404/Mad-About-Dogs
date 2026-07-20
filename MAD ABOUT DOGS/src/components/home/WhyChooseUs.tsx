import {
  Award,
  HeartPulse,
  ShieldCheck,
  Scissors,
  Check,
} from "lucide-react";

import "./HomeSections.css";
import clinicImage from "../../assets/clinic.png";

const features = [
  {
    icon: Award,
    title: "Experienced Veterinary Team",
    description:
      "Dedicated professionals with years of clinical experience.",
  },
  {
    icon: HeartPulse,
    title: "Advanced Treatments",
    description:
      "Modern diagnostics and evidence-based healthcare.",
  },
  {
    icon: Scissors,
    title: "Professional Grooming",
    description:
      "Complete hygiene and grooming services for pets.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted By Pet Parents",
    description:
      "Known for compassionate care and long-term relationships.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <div className="why-image-side">
          <img
            src={clinicImage}
            alt="Veterinary Clinic"
            className="why-image"
          />

          <div className="why-badge">
            <h3>5000+</h3>
            <span>Happy Pets Treated</span>
          </div>
        </div>

        <div className="why-content">
          <span className="section-tag">
            Why Pet Parents Choose Us
          </span>

          <h2>
            Exceptional Care,
            <span> Trusted Expertise</span>
          </h2>

          <p>
            We combine professional veterinary medicine,
            modern facilities, and compassionate care to
            provide a comfortable experience for pets and
            their families.
          </p>

          <div className="why-features">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="why-feature"
              >
                <div className="why-icon">
                  <feature.icon size={22} />
                </div>

                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="why-list">
            <li>
              <Check size={18} />
              Personalized treatment plans
            </li>

            <li>
              <Check size={18} />
              Dedicated veterinary consultations
            </li>

            <li>
              <Check size={18} />
              Comprehensive grooming services
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;