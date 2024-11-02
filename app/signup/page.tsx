import Link from "next/link"
import React from "react";

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-signup_bg bg-cover bg-center">

      <div className="w-full max-w-md p-8 bg-darkGreen bg-opacity-80 rounded-3xl shadow-lg">

        <h2 className="text-4xl font-semibold text-center text-gray-300">Create an account</h2>
        <br />

        <hr className="my-4 border-gray-300" />
        <br />

        <form className="space-y-6">

          <div className="flex space-x-5">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-400 text-gray-300 bg-transparent rounded-lg focus:outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-400 text-gray-300 bg-transparent rounded-lg focus:outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-400 text-gray-300 bg-transparent rounded-lg focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-400 text-gray-300 bg-transparent rounded-lg focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-400 text-gray-300 bg-transparent rounded-lg focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-400 text-gray-300 bg-transparent rounded-lg focus:outline-none"
          />
        
          <div>
            <button
            type="submit"
            className="w-full py-3 mt-4 text-xl font-semibold text-gray-300 bg-confirmGreen rounded-3xl hover:bg-lightGreen"
            >Next</button>
          </div>
          

        </form>

        <p className="mt-4 text-center text-gray-300">
        Already have an account?{" "}
        
        <a href="#" className="text-teal-300 hover:underline">
        Sign In</a>

        </p>

      </div>

    </div>
  );
}

export default SignUp;