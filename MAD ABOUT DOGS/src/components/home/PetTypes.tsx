import "./HomeSections.css";

const pets = [
  {
    title: "Dogs",
    image: "/pets/dog.png",
  },
  {
    title: "Cats",
    image: "/pets/cat.png",
  },
  {
    title: "Birds",
    image: "/pets/bird.png",
  },
  {
    title: "Rabbits",
    image: "/pets/rabbit.png",
  },
  {
    title: "Small Pets",
    image: "/pets/smallpets.png",
  },
];

const PetTypes = () => {
  return (
    <section className="pets-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Pets We Welcome
          </span>

          <h2>
            Caring For Every
            <span> Companion</span>
          </h2>

          <p>
            Our clinic provides dedicated healthcare,
            preventive treatment, and grooming services
            for a wide range of companion animals.
          </p>
        </div>

        <div className="pets-grid">
          {pets.map((pet) => (
            <div key={pet.title} className="pet-card">
              <img
                src={pet.image}
                alt={pet.title}
                className="pet-image"
              />

              <div className="pet-overlay">
                <h3>{pet.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetTypes;