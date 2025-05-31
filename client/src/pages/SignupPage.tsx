import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface FieldError {
  [key: string]: string;
}
const server="http://localhost:3000";

const SignupPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setGeneralError('');

    try {
      const res = await axios.post(`${server}/api/auth/register`, form);
      const { token, role } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

       navigate('/login');
      // else if (role === 'instructor') navigate('/instructor/dashboard');
      // else navigate('/dashboard');

    } catch (err: any) {
      if (err.response?.data?.errors) {
        const errors: FieldError = {};
        err.response.data.errors.forEach((e: any) => {
          errors[e.path] = e.msg;
        });
        setFieldErrors(errors);
      } else {
        setGeneralError(err.response?.data?.message || 'Signup failed');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white shadow-lg rounded p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {generalError && <p className="text-red-500 text-sm mb-2">{generalError}</p>}

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={`border rounded px-3 py-2 w-full ${fieldErrors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {fieldErrors.name && <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`border rounded px-3 py-2 w-full ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {fieldErrors.email && <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`border rounded px-3 py-2 w-full ${fieldErrors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {fieldErrors.password && <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>}
        </div>

        <div className="mb-4">
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
