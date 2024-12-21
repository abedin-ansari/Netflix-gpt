import { useState } from "react";
import { auth } from "../../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BG_IMG_URL } from "../../utils/constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent! Check your email");
      setError("");
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <div>
      <div className="absolute">
        <img
          src={BG_IMG_URL}
          alt="background"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="p-8 bg-black/80 rounded-lg shadow-xl w-96 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Reset Password
          </h2>
          {message && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              {message}
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition-colors"
            >
              Send Reset Link
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full bg-transparent text-white p-3 rounded hover:bg-gray-800 transition-colors border border-gray-600"
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
