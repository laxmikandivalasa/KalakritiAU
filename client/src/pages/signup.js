import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [area, setArea] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                fullName,
                email,
                gender,
                dob,
                mobileNumber,
                state,
                district,
                area,
                password,
                confirmPassword,
            });
            
            // Save token to localStorage (or cookie)
            localStorage.setItem('token', response.data.token);
        
            // Optional: navigate to dashboard
            window.location.href = '/dashboard'; 
          } catch (error) {
            console.error('Signup failed:', error.response?.data || error.message);
            alert('Signup failed. Please try again.');
          }
        // Add registration logic here
    };

    // Color palette from your specs
    const colors = {
        darkRed: '#C40C0C',
        orange: '#FF6500',
        lightOrange: '#FF8A08',
        yellow: '#FFC100'
    };

    // Sample states for dropdown
    const states = [
        "Select State", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
        "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
        "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    // Sample districts (will change based on state in a real app)
    const districts = ["Select District", "District 1", "District 2", "District 3"];

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        style={{
            backgroundImage: 'linear-gradient(to bottom right,#FF8A08,#FF6500)',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            <div className="card shadow-lg border-0" style={{
                width: '950px',
                maxWidth: '95%',
                borderRadius: '1rem',
                overflow: 'hidden'
            }}>
                <div className="row g-0">
                    {/* Left side with form - white curved shape */}
                    <div className="col-md-7 position-relative">
                        <div className="card-body p-md-5 p-4">
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        backgroundColor: colors.yellow,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            width: '15px',
                                            height: '15px',
                                            backgroundColor: colors.orange,
                                            borderRadius: '50%'
                                        }}></div>
                                    </div>
                                    <span className="ms-2 fw-bold text-secondary">Kalakriti</span>
                                </div>

                                <h4 className="text-secondary">Create an account,</h4>
                                <h3 className="fw-bold text-dark">join Kalakriti today</h3>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control border-0 border-bottom rounded-0"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Enter your full name"
                                        style={{ paddingLeft: 0 }}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
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
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">Gender</label>
                                    <select
                                        className="form-select border-0 border-bottom rounded-0"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        style={{ paddingLeft: 0 }}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        <option value="prefer_not_to_say">Prefer not to say</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="form-control border-0 border-bottom rounded-0"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        style={{ paddingLeft: 0 }}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Mobile Number</label>
                                <input
                                    type="tel"
                                    className="form-control border-0 border-bottom rounded-0"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    placeholder="Enter your mobile number"
                                    style={{ paddingLeft: 0 }}
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">State</label>
                                    <select
                                        className="form-select border-0 border-bottom rounded-0"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        style={{ paddingLeft: 0 }}
                                    >
                                        {states.map((state, index) => (
                                            <option key={index} value={state === "Select State" ? "" : state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">District</label>
                                    <select
                                        className="form-select border-0 border-bottom rounded-0"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        style={{ paddingLeft: 0 }}
                                    >
                                        {districts.map((district, index) => (
                                            <option key={index} value={district === "Select District" ? "" : district}>
                                                {district}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Area</label>
                                <input
                                    type="text"
                                    className="form-control border-0 border-bottom rounded-0"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                    placeholder="Enter your area/locality"
                                    style={{ paddingLeft: 0 }}
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">Password</label>
                                    <input
                                        type="password"
                                        className="form-control border-0 border-bottom rounded-0"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Create a strong password"
                                        style={{ paddingLeft: 0 }}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label small text-uppercase fw-bold text-secondary">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control border-0 border-bottom rounded-0"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm your password"
                                        style={{ paddingLeft: 0 }}
                                    />
                                </div>
                            </div>

                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" id="terms" />
                                <label className="form-check-label small text-secondary" htmlFor="terms">
                                    I agree to the <a href="#" className="text-decoration-none" style={{ color: colors.orange }}>Terms of Service</a> and <a href="#" className="text-decoration-none" style={{ color: colors.orange }}>Privacy Policy</a>
                                </label>
                            </div>

                            <div className="d-grid mb-4">
                                <button
                                    onClick={handleSubmit}
                                    className="btn py-2 text-white fw-bold"
                                    style={{
                                        backgroundColor: colors.yellow,
                                        borderRadius: '0.5rem'
                                    }}
                                >
                                    Create Account
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-secondary small mb-3">Or sign up with:</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href="#" className="text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Top-right corner buttons */}
                        <div className="position-absolute top-0 end-0 m-3">
                            <a href="#" className="text-secondary me-2 text-decoration-none">Sign In</a>
                            <span className="text-secondary">|</span>
                            <a href="#" className="text-secondary ms-2 fw-bold text-decoration-none">Sign Up</a>
                        </div>
                    </div>

                    {/* Right side with plant illustration - using your color palette */}
                    <div
                        className="col-md-5 d-none d-md-block position-relative"
                        style={{
                            backgroundImage: "url('/imgtoy.jpeg')", // No "./public"
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '130vh',
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
}
