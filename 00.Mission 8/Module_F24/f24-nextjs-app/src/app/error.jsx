"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-red-500 text-4xl text-center">
        Something went wrong
      </h1>
      <h1 className="text-red-500 text-center">{error.message}</h1>
      <div className="text-center pt-10">
        <button className="px-4 py-2 bg-red-500 ">Try Again</button>
      </div>
    </div>
  );
};

export default ErrorPage;
