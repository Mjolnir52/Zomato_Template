import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500">
      <form className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🔐 Welcome Back</h2>
        <input className="mb-4 w-full p-2 border rounded" placeholder="you@example.com" type="email" />
        <input className="mb-4 w-full p-2 border rounded" placeholder="Password" type="password" />
        <div className="flex items-center justify-between mb-4 text-sm">
          <label><input type="checkbox" className="mr-1" /> Remember me</label>
          <a href="#" className="text-blue-600">Forgot password?</a>
        </div>
        <button className="bg-purple-600 text-white py-2 w-full rounded">🚀 Login</button>
        <p className="text-center mt-4 text-sm">
          Don’t have an account? <a href="#" className="text-yellow-600 font-semibold">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
