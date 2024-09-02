import React, { useState } from "react";
import "./Contactme.css";
import pic from "../../images/dummyImg.jpg";

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "+971542460219"; // Without the '+' sign
    const { name, email, budget, message } = formData;
    const formattedMessage = `
      Name: ${name}
      Email: ${email}
      Budget: ${budget}
      Message: ${message}
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#EFEBE9" }}>
      <div className="container">
        <div className="row align-items-center" style={{ maxHeight: "80vh" }}>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="text-center mb-4">
                <img
                  src={pic}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: "180px", height: "180px" }}
                />
              </div>

              <h3 className="text-center">
                Mohamed Hachimi
                <div></div>
                <small className="d-block text-muted">
                  Sr. Investment Consultant
                </small>
              </h3>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control form-control-sm"
                  id="budget"
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control form-control-sm"
                  id="message"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "rgba(72, 2, 2, 0.636)",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
