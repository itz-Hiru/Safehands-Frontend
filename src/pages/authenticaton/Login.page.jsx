import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext.context";
import { validateEmail } from "../../utils/helper.util";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance.util";
import { API_PATHS } from "../../utils/apiPaths.util";
import Input from "../../components/Input/Input.component";

const Login = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }

    try {
      setIsLoading(true);

      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email: email,
        password: password,
      });

      const { token, role } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);

        if (role === "Admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
        toast.success("Logged in successfully");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again");
        console.error("Error while logging: ", error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome back</h3>
      <p className="text-xs text-slate-600 mt-[5px] mb-6">
        Please enter your credentials to access your account.
      </p>
      <form onSubmit={handleLogin}>
        <Input 
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Enter your email"
          placeholder="john@gmail.com"
          type="email"
        />
        <Input 
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Enter your password"
          placeholder="********"
          type="password"
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center py-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white text-lg font-semibold hover:bg-black focus:bg-black rounded-xl transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <p className="text-[13px] mt-4 text-slate-800">
          Don't you have an account? {" "}
          <button
            type="button"
            className="text-blue-600 underline cursor-pointer"
            onClick={() => setCurrentPage("signup")}
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
