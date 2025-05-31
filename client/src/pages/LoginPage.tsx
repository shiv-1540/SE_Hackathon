import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const server="http://localhost:3000";

interface FieldError {
  [key: string]: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setGeneralError('');

    try {
      const res = await axios.post(`${server}/api/auth/login`, { email, password });
      const { token, role } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === 'student') navigate('/logins');
      else if (role === 'instructor') navigate('/instructor/dashboard');
      else navigate('/dashboard');
    } catch (err: any) {
      if (err.response?.data?.errors) {
        const errors: FieldError = {};
        err.response.data.errors.forEach((e: any) => {
          errors[e.path] = e.msg;
        });
        setFieldErrors(errors);
      } else {
        setGeneralError(err.response?.data?.message || 'Login failed');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {generalError && <p className="text-red-500 text-sm mb-2">{generalError}</p>}

        <div className="mb-4">
          <input
            type="email"
            className={`border rounded px-3 py-2 w-full ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {fieldErrors.email && <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            className={`border rounded px-3 py-2 w-full ${fieldErrors.password ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {fieldErrors.password && <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
