import {
  ShieldCheck,
  Stethoscope,
  Scissors,
  HeartHandshake,
} from "lucide-react";

import "./HomeSections.css";

const items = [
  {
    icon: ShieldCheck,
    title: "Experienced Veterinarians",
    subtitle: "Qualified professionals",
  },
  {
    icon: Stethoscope,
    title: "Preventive Healthcare",
    subtitle: "Routine wellness plans",
  },
  {
    icon: Scissors,
    title: "Professional Grooming",
    subtitle: "Bathing & styling",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    subtitle: "Pets treated like family",
  },
];

const TrustBar = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-wrapper">
          {items.map((item) => (
            <div key={item.title} className="trust-card">
              <div className="trust-icon">
                <item.icon size={24} />
              </div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;