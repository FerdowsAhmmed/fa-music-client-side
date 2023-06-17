import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      console.log(email, password);
      const result = await signIn(email, password);
      const user = result.user;
      console.log(user);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      console.log(user);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithFacebook();
      const user = result.user;
      console.log(user);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="hero mt-40 mb-10">
        <div className="hero-content w-full">
          <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl font-bold pt-4">Login here</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`input input-bordered ${errors.email ? "input-error" : ""}`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="text-error">{errors.email.message}</span>}
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`input input-bordered ${errors.password ? "input-error" : ""}`}
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className="text-error">{errors.password.message}</span>}
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center pb-4">
              New Here? Please,{" "}
              <Link to="/registration" className="text-primary">
                Register here
              </Link>{" "}
            </p>
            <div className="flex flex-col justify-center">
              <button className="btn  mb-2 w-3/4 mx-auto hover:bg-orange-700" onClick={handleGoogleLogin}>
                Login with Google
              </button>
              <button className="btn   w-3/4 mx-auto mb-4 hover:bg-orange-700" onClick={handleFacebookLogin}>
                Login with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
