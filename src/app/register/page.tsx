"use client"; // Ensure this directive is at the very top

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const RegisterPage: React.FC = () => {
  const router = useRouter();

  // State for handling errors
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Error handling function
  const validateForm = () => {
    let isValid = true;

    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (!usernameInput.value) {
      setUsernameError("Username can't be empty");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!emailInput.value) {
      setEmailError("Can't be empty");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!passwordInput.value) {
      setPasswordError("Please check again");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <div className="flex w-full h-full md:justify-center md:items-center md:h-full">
      <div className="w-full flex flex-col p-8 md:items-center md:w-[476px] md:h-[573px] md:p-10 gap-12 m-10">
        <div className="w-full flex md:justify-center items-center gap-2">
          <img
            src="/solar_link-circle-bold@2x.png"
            alt="Logo"
            className="w-[40px]"
          />
          <img
            src="/devlinks.png"
            alt="text"
            className="w-[135px] h-[26.25px]"
          />
        </div>
        <div className="w-full bg-white md:border-2 md:rounded-xl md:shadow-md md:p-6 gap-[40px]">
          <div className="mb-4 flex flex-col gap-2">
            <h1 className="text-[#333333] text-2xl font-bold leading-8">
              Register
            </h1>
            <p className="text-[#737373] text-base leading-6">
              Add your details below to create an account
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="username"
                className={`text-base ${
                  usernameError ? "text-[#FF3939]" : "text-[#737373]"
                }`}
              >
                Username
              </label>
              <div
                className={`relative flex items-center border rounded-lg p-2 ${
                  usernameError
                    ? "border-[#FF3939]"
                    : "border-[#D9D9D9] focus-within:border-[#633CFF]"
                }`}
              >
                <FaUser
                  className={`text-[#737373] ${
                    usernameError ? "text-[#FF3939]" : ""
                  }`}
                />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className={`flex-1 p-2 text-base text-[#737373] opacity-50 focus:outline-none ${
                    usernameError ? "border-[#FF3939]" : ""
                  }`}
                />
                {usernameError && (
                  <p
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-[12px] font-normal"
                    style={{
                      fontFamily: "Instrument Sans",
                      lineHeight: "18px",
                      textAlign: "right",
                    }}
                  >
                    {usernameError}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="email"
                className={`text-base ${
                  emailError ? "text-[#FF3939]" : "text-[#737373]"
                }`}
              >
                Email address
              </label>
              <div
                className={`relative flex items-center border rounded-lg p-2 ${
                  emailError
                    ? "border-[#FF3939]"
                    : "border-[#D9D9D9] focus-within:border-[#633CFF]"
                }`}
              >
                <FaEnvelope
                  className={`text-[#737373] ${
                    emailError ? "text-[#FF3939]" : ""
                  }`}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. alex@email.com"
                  className={`flex-1 p-2 text-base text-[#737373] opacity-50 focus:outline-none ${
                    emailError ? "border-[#FF3939]" : ""
                  }`}
                />
                {emailError && (
                  <p
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-[12px] font-normal"
                    style={{
                      fontFamily: "Instrument Sans",
                      lineHeight: "18px",
                      textAlign: "right",
                    }}
                  >
                    {emailError}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className={`text-base ${
                  passwordError ? "text-[#FF3939]" : "text-[#737373]"
                }`}
              >
                Password
              </label>
              <div
                className={`relative flex items-center border rounded-lg p-2 ${
                  passwordError
                    ? "border-[#FF3939]"
                    : "border-[#D9D9D9] focus-within:border-[#633CFF]"
                }`}
              >
                <FaLock
                  className={`text-[#737373] ${
                    passwordError ? "text-[#FF3939]" : ""
                  }`}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className={`flex-1 p-2 text-base text-[#737373] opacity-50 focus:outline-none ${
                    passwordError ? "border-[#FF3939]" : ""
                  }`}
                />
                {passwordError && (
                  <p
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-[12px] font-normal"
                    style={{
                      fontFamily: "Instrument Sans",
                      lineHeight: "18px",
                      textAlign: "right",
                    }}
                  >
                    {passwordError}
                  </p>
                )}
              </div>
            </div>
            <button
              className="bg-[#633CFF] text-white rounded-lg py-3 px-6 transition-colors duration-300 hover:bg-[#BEADFF] hover:shadow-lg"
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#BEADFF")
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.backgroundColor = "#633CFF")
              }
              style={{
                boxShadow: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
              }}
              onClick={validateForm}
            >
              Register
            </button>
            <div className="text-center flex flex-col items-center justify-center md:flex-row">
              <p className="text-base text-[#737373]">
                Already have an account?{" "}
                <span
                  className="text-[#633CFF] cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
