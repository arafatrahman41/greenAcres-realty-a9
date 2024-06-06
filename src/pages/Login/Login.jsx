import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import Social from "../../components/Social/Social";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // handle login
  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
        toast.success("logged in successfully")
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>GreenAcres Realty-Login</title>
      </Helmet>

      {/* Login Form */}
      <div className="md:w-2/3 p-8 space-y-3 mx-auto bg-[#82896E] my-20 text-gray-200">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-4 bg-base-200 text-gray-600"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="space-y-1 relative">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-4 bg-base-200 text-gray-600"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <span
              className="text-gray-700 absolute top-11 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff size={25} /> : <IoEye size={25} />}
            </span>
          </div>
          <button className="block w-full p-3 text-center bg-[#264025] font-medium text-lg hover:opacity-90">
            Sign in
          </button>
        </form>
        <Social />
      </div>
    </div>
  );
};

export default Login;
