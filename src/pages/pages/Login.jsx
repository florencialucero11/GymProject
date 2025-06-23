import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-violet-300 to-indigo-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-violet-700">Iniciar sesión</h2>

        <div className="flex flex-col">
          <label htmlFor="formBasicEmail" className="mb-1 font-medium text-gray-700">
            Email address
          </label>
          <input
            id="formBasicEmail"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-300'
                : 'border-gray-300 focus:ring-violet-400'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="formBasicPassword" className="mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            id="formBasicPassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password
                ? 'border-red-500 focus:ring-red-300'
                : 'border-gray-300 focus:ring-violet-400'
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg font-semibold transition-colors"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
