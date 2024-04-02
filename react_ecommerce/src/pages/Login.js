import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    emailError: '',
    passwordError: '',
  });

  const { email, password, error, emailError, passwordError } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: '', emailError: '', passwordError: '' });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setValues({
        ...values,
        emailError: 'Please enter a valid email.',
      });
      return;
    }

    if (password.length < 3) {
      setValues({
        ...values,
        passwordError: 'Password must be at least 3 characters long.',
      });
      return;
    }

    axios
      .post('http://127.0.0.1:8000/api/user/login/', {
        email,
        password,
      })
      .then((response) => {
        console.log('Login response:', response.data);
        if (response.data.token) {
          console.log('Login successful');
          const { token, user } = response.data;
          login(token, user.id, user.name,user.email,user.phone);
          navigate('/', { state: { userId: user.id, userName: user.name,email:user.email, phone: user.phone,token:token} });
        } else {
          setValues({ ...values, error: response.data.error });
        }
        
      })
      .catch((error) => {
        console.error('Login error:', error);
        setValues({
          ...values,
          error: 'Something went wrong. Please try again.',
        });
      });
      
  };
 
  return (
    <>
      <Header />
      <div className="container vh-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="card text-dark bg-light">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">Login</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      value={email}
                      onChange={handleChange('email')}
                      placeholder="name@example.com"
                    />
                    {emailError && (
                      <div className="text-danger">{emailError}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordInput"
                      value={password}
                      onChange={handleChange('password')}
                      placeholder="Password"
                    />
                    {passwordError && (
                      <div className="text-danger">{passwordError}</div>
                    )}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                  {error && <div className="text-danger mt-3">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
