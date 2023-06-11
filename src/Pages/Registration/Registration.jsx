import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emptyFieldsError, setEmptyFieldsError] = useState('');
  console.log(name,email,password,confirmPassword,photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setPasswordError('');
    setEmptyFieldsError('');

    // Check for empty fields
    if (!email || !password) {
      setEmptyFieldsError('Email and password fields cannot be empty.');
      return;
    }

    // Check password criteria
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must contain at least one capital letter.');
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError('Password must contain at least one special character.');
      return;
    }
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhotoURL('');

    // Handle registration logic here
  };

  return (
    <section className="min-h-screen mt-20">
      <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Registration Page</h2>
      {emptyFieldsError && <p className="text-red-500">{emptyFieldsError}</p>}
      {passwordError && <p className="text-red-500">{passwordError}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-lg font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="text-lg font-semibold">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Register
        </button>
      </form>
      <p className="text-center py-4">
        Already have an account?
        <Link to="/login">
          <span className="text-primary"> Click to Login</span>
        </Link>
      </p>
    </div>
    </section>
  );
};

export default Registration;
