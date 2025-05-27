npx create-react-app maayer-mishti
cd maayer-mishti
npm install react-icons


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <h1>MAAYER MISHTI</h1>
        <nav className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
          <a href="#home" onClick={() => setIsMobile(false)}>Home</a>
          <a href="#about" onClick={() => setIsMobile(false)}>About</a>
          <a href="#products" onClick={() => setIsMobile(false)}>Products</a>
          <a href="#contact" className="btn-outline" onClick={() => setIsMobile(false)}>Contact</a>
        </nav>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-overlay">
      <h2>Sweet indulgence</h2>
      <p>Experience the finest sweets online!</p>
      <a href="#products" className="btn">View Products</a>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <div className="about-content">
      <div className="about-text">
        <h5>SWEET DELIGHTS AWAIT</h5>
        <h2>Discover the essence of indulgence</h2>
        <p>
          At MAAYER MISHTI, we specialize in crafting exquisite sweets that
          tantalize your taste buds and warm your heart...
        </p>
        <a href="#contact" className="link">Get in touch</a>
      </div>
      <div className="about-img">
        <img src="https://i.imgur.com/oqPUEgd.png" alt="donut" />
      </div>
    </div>
  </section>
);

const products = [
  {
    image: 'https://i.imgur.com/0T8O8kS.png',
    title: 'Mango lassi delight',
    description: 'Savor the tropical sweetness of our Mango Lassi Delight.',
  },
  {
    image: 'https://i.imgur.com/t2DwNf2.png',
    title: 'Chocolate coconut truffles',
    description: 'Indulge in the rich flavors of our Chocolate Coconut Truffles.',
  },
  {
    image: 'https://i.imgur.com/UcwFlkO.png',
    title: 'Cardamom pistachio barfi',
    description: 'Enjoy the rich, nutty flavor of our Cardamom Pistachio Barfi.',
  },
];

const ProductCard = ({ image, title, description }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <h4>{title} <span>›</span></h4>
    <p>{description}</p>
  </div>
);

const Products = () => (
  <section className="products" id="products">
    <div className="products-container">
      <h5>DELIGHTFUL SWEETS</h5>
      <h2>Indulge in our exquisite treats</h2>
      <div className="product-grid">
        {products.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', consent: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!formData.name) err.name = 'Name required';
    if (!formData.email) err.email = 'Email required';
    if (!formData.phone) err.phone = 'Phone required';
    if (!formData.consent) err.consent = 'Consent required';
    return err;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      alert('Form submitted!');
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    } else {
      setErrors(err);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>We'd love to hear from you!</h2>
          <label>Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Phone *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

          <label className="checkbox">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            I allow this website to store my submission.
          </label>
          {errors.consent && <span className="error">{errors.consent}</span>}

          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
    </>
  );
}

export default App;
