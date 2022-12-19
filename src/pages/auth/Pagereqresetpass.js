import { Link } from "react-router-dom";

const PageReqResetPass = () => {
  return (
    <div className="bg-[#F0F5F9] h-screen flex justify-center items-center">
      <div className="relative">
        <div className="bg-white w-fit py-10 md:px-40 px-5 rounded-2xl flex flex-col justify-center items-center">
          <img src={require("../../assets/images/navlogo.png")} alt="logo" />
          <h1 className="text-xl font-bold w-80 text-center py-10">
            Request to Reset Your Account Password
          </h1>
          <img
            src={require("../../assets/images/auth/gembok.png")}
            alt="gembok"
          />
          <p className="text-small text-gray-400 w-80 text-center py-5">
            The following is the button for you to reset the password.
          </p>
          <Link
            to="/confirm-password"
            className="bg-[#FBB017] py-1 px-10 rounded text-white mb-10"
          >
            Change Password
          </Link>
        </div>
        <div className="w-full h-5 bg-[#5E50A1] rounded-bl-2xl rounded-br-2xl absolute bottom-0" />
      </div>
    </div>
  );
};

export default PageReqResetPass;
