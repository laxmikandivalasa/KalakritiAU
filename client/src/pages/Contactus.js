import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  const styles = {
    section: {
      background: 'linear-gradient(to right, #fff3e0, #ffe0b2)',
      padding: '60px 0',
    },
    card: {
      backgroundColor: '#fffaf0',
      borderRadius: '1rem',
      padding: '30px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    maroonText: {
      color: '#800000',
    },
    maroonButton: {
      backgroundColor: '#800000',
      color: '#fff',
      border: 'none',
    },
    maroonButtonHover: {
      backgroundColor: '#a93226',
      color: '#fff',
    },
    socialIcon: {
      fontSize: '1.5rem',
      color: '#800000',
      marginRight: '15px',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={styles.maroonText}>Get in Touch</h2>
          <p className="text-muted">We’d love to hear from you! Whether you're a creator, customer, or curious soul.</p>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <div style={styles.card}>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold" style={styles.maroonText}>Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" style={styles.maroonText}>Email</label>
                  <input type="email" className="form-control" placeholder="example@domain.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" style={styles.maroonText}>Message</label>
                  <textarea rows="4" className="form-control" placeholder="Tell us what's on your mind..."></textarea>
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={styles.maroonButton}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#a93226')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#800000')}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div style={styles.card}>
              <h5 style={styles.maroonText} className="fw-bold mb-3">Contact Details</h5>
              <p><strong>Email:</strong> support@kalakriti.in</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> Jaipur, Rajasthan, India</p>

              <h6 className="mt-4 fw-semibold" style={styles.maroonText}>Follow Us</h6>
              <div>
                <a href="#" style={styles.socialIcon}><i className="bi bi-instagram"></i></a>
                <a href="#" style={styles.socialIcon}><i className="bi bi-facebook"></i></a>
                <a href="#" style={styles.socialIcon}><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
