import "./HomeSections.css";
import heroImage from "../../assets/hero.png";
import {
  CalendarDays,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left Content */}

        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={18} />
            <span>Trusted Veterinary & Grooming Care</span>
          </div>

          <h1>
            Premium Healthcare
            <br />
            For Every
            <span> Beloved Pet</span>
          </h1>

          <p className="hero-description">
            From routine wellness examinations and vaccinations to
            diagnostics, surgery, and professional grooming, our
            experienced veterinary team provides compassionate care
            tailored to every stage of your pet's life.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              <CalendarDays size={18} />
              Book Appointment
            </button>

            <button className="btn-secondary">
              <Phone size={18} />
              Call Clinic
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>15+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>5000+</h3>
              <span>Happy Pets</span>
            </div>

            <div>
              <h3>7 Days</h3>
              <span>Open Weekly</span>
            </div>
          </div>
        </div>

        {/* Right Image */}

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Mad About Dogs Clinic"
            className="hero-image"
            />

          <div className="floating-card">
            <Stethoscope size={20} />

            <div>
              <strong>Veterinary Consultations</strong>
              <p>Experienced doctors available daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;