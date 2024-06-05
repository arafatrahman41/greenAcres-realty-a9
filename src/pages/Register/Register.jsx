import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:w-2/3 p-8 space-y-3 rounded-xl mx-auto bg-[#82896E] my-20 text-gray-200">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="Name" className="block text-white">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="w-full px-4 py-4 bg-base-200 text-gray-600"
            {...register("yourName", { required: true })} 
          />
          {errors.yourName && toast.error("This field is required")}
        </div>
        <div className="space-y-1">
          <label htmlFor="photo" className="block text-white">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Add Your Photo"
            className="w-full px-4 py-4 bg-base-200 text-gray-600"
            
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ledivid@mailinator.com"
            className="w-full px-4 py-4 bg-base-200 text-gray-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="w-full px-4 py-4 bg-base-200 text-gray-600"
          />
        </div>
        <button className="block w-full p-3 text-center bg-[#264025] font-medium text-lg">
          Sign in
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link to="/login" className="underline dark:text-gray-800">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
