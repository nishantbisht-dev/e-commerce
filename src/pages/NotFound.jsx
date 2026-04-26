import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-gray-950">

      <h1 className="text-7xl font-extrabold text-amber-500">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="rounded-full bg-amber-500 px-6 py-2 text-white hover:bg-amber-600"
        >
          Go Home
        </Link>

        <Link
          to="/collection"
          className="rounded-full border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default NotFound;