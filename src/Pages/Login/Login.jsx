import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // Redirect the user to the desired page after successful login
    navigate('/dashboard');
  };

  return (
    <section className="min-h-screen">
      <div className="max-w-md mx-auto my-28 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <form onSubmit={handleSubmit}>
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
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <span
              className="absolute top-3 right-3 cursor-pointer text-blue-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4">
        Do not have an account? <Link to="/registration"><span className='text-primary'>Click to Register</span></Link>
      </div>
    </div>
    </section>
  );
};

export default Login;
