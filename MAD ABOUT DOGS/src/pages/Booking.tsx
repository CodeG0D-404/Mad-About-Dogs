console.log(
  `${import.meta.env.VITE_API_URL}/api/doctors`
);
import { useEffect, useState } from "react";
import "./CSS/Booking.css";


const Booking = () => {
  const [doctors, setDoctors] = useState<
    {
      _id: string;
      name: string;
    }[]
  >([]);

  const [formData, setFormData] = useState({
  petParentName: "",
  phone: "",
  whatsapp: "",
  email: "",
  petName: "",
  species: "",
  breed: "",
  ageYears: 0,
  ageMonths: 0,
  gender: "",
  weight: "",
  doctorId: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/doctors`
        );

        const data =
          await response.json();

        setDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement |
    HTMLSelectElement |
    HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  const honeypot = (
    e.currentTarget as HTMLFormElement
  ).website?.value;

  if (honeypot) return;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to create appointment"
      );
    }

    alert(
      "Appointment request submitted successfully!"
    );

    console.log(data);
  } catch (error) {
    console.error(error);

    alert(
      "Failed to submit appointment"
    );
  }
};

  return (
    <main className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <span className="section-tag">
            APPOINTMENT REQUEST
          </span>

          <h1>Book An Appointment</h1>

          <p>
            Schedule a visit for your pet. Our team
            will review your request and confirm the
            appointment.
          </p>
        </div>
      </section>
<section className="booking-section">
  <div className="container">
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      <div className="honeypot">
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="form-section">
        <h2>Pet Parent Information</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Pet Parent Name *</label>
            <input
              type="text"
              name="petParentName"
              value={formData.petParentName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>Pet Information</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Pet Name *</label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Species *</label>

            <select
              name="species"
              value={formData.species}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Species
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Breed</label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Breed (optional)"
            />
          </div>

          <div className="age-group">
            <div className="form-group">
              <label>Years *</label>

              <input
                type="number"
                name="ageYears"
                value={formData.ageYears}
                onChange={handleChange}
                min="0"
                max="50"
                required
              />
            </div>

            <div className="form-group">
              <label>Months *</label>

              <input
                type="number"
                name="ageMonths"
                value={formData.ageMonths}
                onChange={handleChange}
                min="0"
                max="11"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Gender *</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Gender
              </option>
              <option value="Male">
                Male
              </option>
              <option value="Female">
                Female
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Weight</label>

            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>Visit Information</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>
              Service Required *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Service
              </option>
              <option value="Vaccination">
                Vaccination
              </option>
              <option value="General Checkup">
                General Checkup
              </option>
              <option value="Emergency">
                Emergency
              </option>
              <option value="Surgery Consultation">
                Surgery Consultation
              </option>
              <option value="Grooming">
                Grooming
              </option>
              <option value="Dental Care">
                Dental Care
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Preferred Date *
            </label>

            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Select Doctor *
            </label>

            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Doctor
              </option>

              {doctors.map(
                (doctor) => (
                  <option
                    key={doctor._id}
                    value={doctor._id}
                  >
                    {doctor.name}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="form-group">
            <label>
              Preferred Time *
            </label>

            <select
              name="preferredTime"
              value={
                formData.preferredTime
              }
              onChange={handleChange}
              required
            >
              <option value="">
                Select Slot
              </option>
              <option value="09:00 AM">
                09:00 AM
              </option>
              <option value="10:00 AM">
                10:00 AM
              </option>
              <option value="11:00 AM">
                11:00 AM
              </option>
              <option value="12:00 PM">
                12:00 PM
              </option>
              <option value="04:00 PM">
                04:00 PM
              </option>
              <option value="05:00 PM">
                05:00 PM
              </option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>
            Symptoms / Notes
          </label>

          <textarea
            rows={5}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us about your pet's condition or special requests."
          />
        </div>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          required
          id="consent"
        />

        <label htmlFor="consent">
          I confirm the information
          provided is accurate.
        </label>
      </div>

      <button
        type="submit"
        className="submit-btn"
      >
        Request Appointment
      </button>
    </form>
  </div>
</section>

      <section className="booking-process">
        <div className="container">
          <h2>What Happens Next?</h2>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Submit Request</h3>
              <p>
                Complete the appointment form.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>We Review</h3>
              <p>
                Our team checks availability.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Confirmation</h3>
              <p>
                We'll contact you to confirm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;