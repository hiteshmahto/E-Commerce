import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist. You can always go
        back to the
        <Link to="/" className="text-red-500 font-bold ml-2 hover:underline">
          homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
