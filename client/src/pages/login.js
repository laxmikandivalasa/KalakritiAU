import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Login submitted:', { email, password });
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

  
      // Save token
      localStorage.setItem('token', response.data.token);
      alert("Login successful!");
      // Redirect to dashboard or protected page
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
    // Add authentication logic here
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center" 
         style={{ background: 'linear-gradient(to right, #fff3e0, #ffe0b2)' }}>
      
      <div className="card shadow-lg border-0" style={{ 
        width: '850px', 
        maxWidth: '95%',
        borderRadius: '1rem',
        overflow: 'hidden'
      }}>
        <div className="row g-0">
          {/* Left side with form - white curved shape */}
          <div className="col-md-7 position-relative">
            <div className="card-body p-5">
              <div className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div style={{ 
                    width: '30px', 
                    height: '30px', 
                    backgroundColor: 'maroon',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      width: '15px', 
                      height: '15px', 
                      backgroundColor: 'beige',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <span className="ms-2 fw-bold text-secondary">Kalakriti</span>
                </div>
                
                <h4 className="text-secondary">Hello there,</h4>
                <h3 className="fw-bold text-dark">welcome to Kalakriti</h3>
              </div>
              
              <div className="mb-4">
                <label className="form-label small text-uppercase fw-bold text-secondary">Email</label>
                <input 
                  type="email" 
                  className="form-control border-0 border-bottom rounded-0" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{ paddingLeft: 0 }}
                />
              </div>
              
              <div className="mb-2">
                <label className="form-label small text-uppercase fw-bold text-secondary">Password</label>
                <input 
                  type="password" 
                  className="form-control border-0 border-bottom rounded-0" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Set a strong password"
                  style={{ paddingLeft: 0 }}
                />
              </div>
              
              <div className="mb-4 text-end">
                <a href="#" className="text-secondary small text-decoration-none">Forgot password?</a>
              </div>
              
              <div className="d-grid mb-5">
                <button 
                  onClick={handleSubmit}
                  className="btn py-2 text-white fw-bold"
                  style={{ 
                    backgroundColor: 'maroon',
                    borderRadius: '0.5rem'
                  }}
                >
                  Log In
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-secondary small mb-3">Sign in with:</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="#" className="text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Top-right corner buttons */}
            <div className="position-absolute top-0 end-0 m-3">
              <span className="text-secondary me-2">Sign In</span>
              <span className="text-secondary">|</span>
              <span className="text-secondary ms-2">Sign Up</span>
            </div>
          </div>
          
          {/* Right side with plant illustration - using your color palette */}
          <div className="col-md-5 d-none d-md-block position-relative" 
          style={{ 
            backgroundImage: "url('/imgcycle.jpeg')",
            // background:
            overflow: 'hidden'
          }}>
          </div>
        </div>
      </div>
    </div>
  );
}