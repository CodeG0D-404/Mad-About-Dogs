import "./CSS/About.css";

const About = () => {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">ABOUT US</span>

          <h1>
            A Place Where
            <span> Pets Come First</span>
          </h1>

          <p>
            From premium nutrition and professional grooming to trusted
            guidance and everyday essentials, we're proud to be a destination
            pet parents trust.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="container story-grid">
          <div className="story-image">
            <img
              src="/images/about-story.png"
              alt="Pet care and grooming"
            />
          </div>

          <div className="story-content">
            <span className="section-tag">OUR STORY</span>

            <h2>Built Around a Love for Pets</h2>

            <p>
              Mad About Dogs was founded on a simple belief — pets deserve the
              same love, care, and attention as every member of the family.
            </p>

            <p>
              What began as a passion for helping pet parents find quality
              products and trusted services has grown into a welcoming space
              where pets and their owners feel at home.
            </p>

            <p>
              Today, we continue that mission by offering premium pet products,
              professional grooming services, and personalized guidance that
              helps pets live happier, healthier lives.
            </p>

            <div className="story-stats">
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Happy Pets</p>
              </div>

              <div className="stat-card">
                <h3>5★</h3>
                <p>Customer Experience</p>
              </div>

              <div className="stat-card">
                <h3>Premium</h3>
                <p>Brands & Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">OUR VALUES</span>
            <h2>What Guides Everything We Do</h2>
          </div>

          <div className="values-grid">
            <article className="value-card">
              <h3>Care</h3>
              <p>
                Every recommendation, product, and service starts with your
                pet's wellbeing.
              </p>
            </article>

            <article className="value-card">
              <h3>Trust</h3>
              <p>
                We focus on quality, transparency, and guidance pet parents can
                rely on.
              </p>
            </article>

            <article className="value-card">
              <h3>Community</h3>
              <p>
                Building lasting relationships with local pet families is at
                the heart of what we do.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="container">
          <span className="section-tag section-tag-light">
            MORE THAN A STORE
          </span>

          <h2>
            Everything Your Pet Needs,
            <br />
            Under One Roof
          </h2>

          <p>
            We bring together trusted pet products, professional grooming, and
            expert support to create a complete pet care experience.
          </p>

          <div className="experience-grid">
            <div className="experience-card">
              <h3>Premium Products</h3>
            </div>

            <div className="experience-card">
              <h3>Professional Grooming</h3>
            </div>

            <div className="experience-card">
              <h3>Trusted Guidance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY BANNER */}
      <section className="gallery-banner">
        <div className="container">
          <div className="gallery-overlay">
            <div className="gallery-item">Grooming</div>
            <div className="gallery-item">Nutrition</div>
            <div className="gallery-item">Accessories</div>
            <div className="gallery-item">Pet Care</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready To Visit?</h2>

          <p>
            Whether you're shopping for essentials, booking grooming, or simply
            looking for advice, we'd love to welcome you and your pet.
          </p>

          <div className="cta-buttons">
            <a href="/contact" className="primary-btn">
              Contact Us
            </a>

            <a href="/products" className="secondary-btn">
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;