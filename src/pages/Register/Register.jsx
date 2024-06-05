import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
const {createUser} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data

    createUser(email, password)
    .then(result => {
        console.log(result.user);
    })
    .catch(error => {
        console.log(error);
    })
  };


  return (
    <div>
      <Helmet>
        <title>GreenAcres Realty-Register</title>
      </Helmet>

        {/* Register Form */}
      <div className="md:w-2/3 p-8 space-y-3 rounded-xl mx-auto bg-[#82896E] my-20 text-gray-200">
        <h1 className="text-3xl font-bold text-center">Register</h1>
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
              {...register("yourName",{required: true})}
            />
             {errors.yourName && <span>This field is required</span>}
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
              {...register("photo")}
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
              {...register("email")}
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
              {...register("password")}
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
    </div>
  );
};

export default Register;
