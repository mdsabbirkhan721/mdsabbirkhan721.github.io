import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/profile';
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      authActions.login({
        name,
        email,
        phone,
        address,
      })
    );

    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow">
            <h1 className="h3 mb-3 fw-normal text-center">Login / Signup</h1>

            {/* Name */}
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            {/* Phone */}
            <div className="form-floating mb-2">
              <input
                type="tel"
                className="form-control"
                id="floatingPhone"
                placeholder="+880"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="floatingPhone">Phone Number</label>
            </div>

            {/* Address */}
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="floatingAddress"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label htmlFor="floatingAddress">Address</label>
            </div>
            {/* Email */}
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            {/* Password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
