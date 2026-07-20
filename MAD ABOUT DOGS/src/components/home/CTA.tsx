import {
  CalendarDays,
  Phone,
} from "lucide-react";

import "./HomeSections.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-overlay"></div>

          <div className="cta-content">
            <span className="cta-tag">
              Caring For Pets, Supporting Families
            </span>

            <h2>
              Give Your Pet The
              <span> Care They Deserve</span>
            </h2>

            <p>
              Whether it's a routine wellness visit,
              vaccination, grooming session, or medical
              consultation, our team is here to help your
              pet live a healthier and happier life.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <CalendarDays size={18} />
                Book Appointment
              </button>

              <button className="cta-secondary">
                <Phone size={18} />
                Call Clinic
              </button>
            </div>

            <div className="cta-contact">
              Need immediate assistance?
              <span> +91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;