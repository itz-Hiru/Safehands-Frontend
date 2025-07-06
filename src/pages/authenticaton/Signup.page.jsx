import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input.component";
import ProfilePhotoSelector from "../../components/Input/ProfilePhotoSelector.component";
import { UserContext } from "../../context/userContext.context";
import { API_PATHS } from "../../utils/apiPaths.util";
import axiosInstance from "../../utils/axiosInstance.util";
import { validateEmail, validatePassword } from "../../utils/helper.util";
import uploadImage from "../../utils/uploadImage.util";

const Signup = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminAccessToken, setAdminAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName.trim()) {
      toast.error("Please enter full name");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter valid email");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Please enter valid password");
    }

    try {
      setIsLoading(true);

      if (profilePic) {
        const imageUploadResponse = await uploadImage(profilePic);
        profileImageUrl = imageUploadResponse?.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName.trim(),
        email: email,
        password: password,
        profileImageUrl,
        adminAccessToken: adminAccessToken,
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

        toast.success("Signup successfully.");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
        console.error("Error while signing up ", error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Join Safehands now</h3>
      <p className="text-xs text-slate-600 mt-[5px] mb-6">
        Create your free account to book appointments, access your medical
        records, and connect with trusted healthcare professionals.
      </p>
      <form onSubmit={handleSignup}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mb-5">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Enter your full name"
            placeholder="John Doe"
            type="text"
          />
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
          <Input
            value={adminAccessToken}
            onChange={({ target }) => setAdminAccessToken(target.value)}
            label="Enter admin access token"
            placeholder="********"
            type="password"
          />
        </div>
        <button
          type="submt"
          disabled={isLoading}
          className="w-full flex items-center justify-center py-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white text-lg font-semibold hover:bg-black focus:bg-black rounded-xl transition-all duration-300"
        >
          {isLoading ? "Signing up..." : "Sign up"}
        </button>

        <p className="text-[13px] mt-4 text-slate-800">
          Already have an account?{" "}
          <button
            type="button"
            className="text-blue-600 underline cursor-pointer"
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
