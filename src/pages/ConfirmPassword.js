import React from "react";
import Left from "../components/authComponents/Left";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../helpers/http";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const confirmPasswordScheme = Yup.object().shape({
  code: Yup.string().minNumbers(4, "Minimal 5 angka").max(5, "Maksimal 5 angka").required("Masukkan code"),
  password: Yup.string()
    .password()
    .min(8, "Panjang minimal 8")
    .minLowercase(1, "Minimal 1 huruf kecil")
    .minUppercase(1, "Minimal 1 kapital")
    .minSymbols(1, "Minimal 1 simbol")
    .minNumbers(1, "Minimal 1 angka")
    .required("Masukkan kata sandi"),
  confirmPassword: Yup.string()
    .password()
    .min(8, "Panjang minimal 8")
    .minLowercase(1, "Minimal 1 huruf kecil")
    .minUppercase(1, "Minimal 1 kapital")
    .minSymbols(1, "Minimal 1 simbol")
    .minNumbers(1, "Minimal 1 angka")
    .required("Masukkan konfirmasi kata sandi"),
});

const ConfirmPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = React.useState("");
  const [showLeft, setShowLeft] = React.useState(false);
  const [showRight, setShowRight] = React.useState(false);

  const resetPassword = async (value) => {
    const code = value.code;
    const email = state;
    const password = value.password;
    const confirmPassword = value.confirmPassword;

    if (password !== confirmPassword) {
      return setErrMessage("Password dan konfirmasi password tidak sama");
    }

    try {
      const { data } = await http().post("/auth/resetPassword", {
        code,
        email,
        password,
        confirmPassword,
      });

      console.log(data);
      navigate("/confirm-relogin");
    } catch (err) {
      return setErrMessage(err.response.data.message);
    }
  };

  const handlerShowLeft = () => {
    setShowLeft(!showLeft);
  };

  const handlerShowRight = () => {
    setShowRight(!showRight);
  };

  return (
    <div className="flex lg:h-screen overflow-y-hidden">
      <Left />
      <div className="lg:basis-1/2 bg-[#E5E5E]">
        <div className="lg:py-28 py-10 px-3 lg:px-16">
          <img className="lg:hidden block mb-10" src={require("../assets/images/navlogo.png")} alt="logo" />
          <h2 className="text-2xl font-bold mb-3 ">Reset password</h2>
          <p className="text-gray-500 mb-5">You need to change your password to activate your account</p>
          <Formik
            initialValues={{
              code: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={confirmPasswordScheme}
            onSubmit={resetPassword}
          >
            {({ errors, touched }) => (
              <Form>
                {errMessage ? (
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errMessage}</span>
                    </div>
                  </div>
                ) : null}
                <div className="flex flex-col mb-7">
                  <label className="text-gray-400 mb-1">Kode</label>
                  <Field className="border rounded py-2 px-4 bg-white focus:outline-none" name="code" placeholder="Masukan kode " />
                  {errors.code && touched.code ? <div className="text-red-500 text-sm">{errors.code}</div> : null}
                </div>
                <div className="flex flex-col mb-7 relative">
                  <label className="text-gray-400 mb-1">Kata sandi</label>
                  <Field className="border rounded py-2 px-4 bg-white focus:outline-none" type={showLeft ? "text" : "password"} name="password" placeholder="Masukan kata sandi" />
                  <label onClick={handlerShowLeft} className="absolute right-5 top-10 cursor-pointer">
                    {showLeft ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                  </label>
                  {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
                </div>
                <div className="flex flex-col mb-7 relative">
                  <label className="text-gray-400 mb-1">Konfirmasi kata sandi</label>
                  <Field className="border rounded py-2 px-4 bg-white focus:outline-none" type={showRight ? "text" : "password"} name="confirmPassword" placeholder="Masukan konfirmasi kata sandi" />
                  <label onClick={handlerShowRight} className="absolute right-5 top-10 cursor-pointer">
                    {showRight ? <BsEyeSlash className="w-[20px] h-[20px]" /> : <BsEye className="w-[20px] h-[20px]" />}
                  </label>
                  {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm">{errors.confirmPassword}</div> : null}
                </div>
                <button type="submit" className="flex justify-center bg-[#FBB017] rounded text-white w-full py-2 my-5">
                  Reset password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
