import { useState } from "react";
import {
  CalendarDays,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import clinicImage from "../assets/contact.png";
import "./CSS/Contact.css";

const contactCards = [
  {
    icon: Phone,
    title: "Call the care desk",
    text: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MessageCircle,
    title: "Ask a question",
    text: "hello@madaboutdogs.in",
    href: "mailto:hello@madaboutdogs.in",
  },
  {
    icon: MapPin,
    title: "Visit our centre",
    text: "Newtown, Kolkata",
    href: "#visit",
  },
  {
    icon: Clock,
    title: "Open hours",
    text: "Mon-Sat: 9 AM - 8 PM",
    href: "#visit",
  },
];

const careNotes = [
  {
    icon: ShieldCheck,
    title: "Gentle handling",
    text: "Every visit is paced around your pet's comfort.",
  },
  {
    icon: CalendarDays,
    title: "Easy scheduling",
    text: "Tell us what you need and we'll guide the next step.",
  },
  {
    icon: Sparkles,
    title: "Clean, calm care",
    text: "A warm space for grooming, products, and pet support.",
  },
];

const heroStats = [
  { value: "4", label: "ways to reach us" },
  { value: "1", label: "friendly care team" },
  { value: "24h", label: "typical response" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    petType: "",
    subject: "",
    message: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      console.warn("Spam submission blocked");
      return;
    }

    console.log("Form Submitted:", formData);

    alert("Thank you! We'll get back to you soon.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      petType: "",
      subject: "",
      message: "",
      website: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="contact-kicker">
              <HeartHandshake />
              We are happy to help
            </span>
            <h1>Let's care for your pet, together.</h1>
            <p>
              Questions about grooming, products, visits, or everyday pet
              care? Send us a note or call the care desk. We will keep it
              simple, kind, and useful.
            </p>

            <div className="contact-hero-actions">
              <a href="#message" className="contact-primary-action">
                <Send />
                Send a message
              </a>
              <a href="tel:+91XXXXXXXXXX" className="contact-secondary-action">
                <Phone />
                Call now
              </a>
            </div>

            <div className="contact-hero-stats" aria-label="Contact highlights">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-hero-media" aria-label="Friendly pet care">
            <img src={clinicImage} alt="Veterinarian caring for a dog" />
            <div className="contact-floating-note">
              <span>Care desk</span>
              <strong>Ready when you are</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info" aria-label="Contact options">
        <div className="container contact-card-row">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a href={card.href} className="contact-card" key={card.title}>
                <span className="contact-card-icon">
                  <Icon />
                </span>
                <span>
                  <strong>{card.title}</strong>
                  <small>{card.text}</small>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="contact-message-section" id="message">
        <div className="container contact-message-grid">
          <aside className="contact-care-panel">
            <span className="contact-section-label">How we help</span>
            <h2>Friendly support before you even visit.</h2>
            <p>
              Share what your pet needs and our team will help you choose the
              right service, product, or appointment.
            </p>

            <div className="contact-care-list">
              {careNotes.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-care-item" key={item.title}>
                    <span>
                      <Icon />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-topline">
              <span>
                <Phone />
                +91 XXXXX XXXXX
              </span>
              <span>
                <Clock />
                Mon-Sat, 9 AM - 8 PM
              </span>
            </div>

            <div className="form-heading">
              <span className="contact-section-label">Write to us</span>
              <h2>Tell us what your pet needs.</h2>
              <p>We will get back to you with the clearest next step.</p>
            </div>

            <div className="honeypot">
              <label htmlFor="website">Leave this field empty</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="petType">Pet Type</label>
                <select
                  id="petType"
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Rabbit</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Grooming, products, appointment..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a little about your pet and how we can help."
              />
            </div>

            <button type="submit" className="contact-btn">
              <Send />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="contact-visit-section" id="visit">
        <div className="container contact-visit-grid">
          <div className="contact-visit-copy">
            <span className="contact-section-label">Visit us</span>
            <h2>Drop by when your pet needs care, comfort, or a little extra love.</h2>
            <p>
              Find us in Newtown, Kolkata. Call before visiting for grooming
              slots or appointment availability.
            </p>
            <a href="tel:+91XXXXXXXXXX" className="contact-secondary-action">
              <Phone />
              Check availability
            </a>
          </div>

          <div className="contact-location-card">
            <div className="contact-map-visual">
              <MapPin />
            </div>
            <div className="contact-location-details">
              <strong>Mad About Dogs</strong>
              <span>Newtown, Kolkata</span>
              <span>Mon-Sat: 9 AM - 8 PM</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
