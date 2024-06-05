import error from "../../assets/error-404.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-336px)]">
      <img className="w-[25%]" src={error} alt="" />
      <div className="relative">
        <h1 className="text-[100px] text-center font-black">404</h1>
        <p className="text-6xl font-black text-gray-400 absolute top-24 left-24">error</p>
        <p className="text-4xl text-gray-400">Page not found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
