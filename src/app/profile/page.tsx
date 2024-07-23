"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CiImageOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const ProfilePage: React.FC = () => {
  const router = useRouter();

  // State for handling errors
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Error handling function
  const validateForm = () => {
    let isValid = true;

    const firstNameInput = document.getElementById(
      "firstname"
    ) as HTMLInputElement;
    const lastNameInput = document.getElementById(
      "lastname"
    ) as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    if (!firstNameInput.value) {
      setFirstNameError("Can't be empty");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastNameInput.value) {
      setLastNameError("Can't be empty");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!emailInput.value) {
      setEmailError("Can't be empty");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Perform save action or navigate to another page
      console.log("Form is valid, saving...");
      // Example navigation
      // router.push("/another-page");
    }
  };

  return (
    <div className="empty-page bg-gray-50 flex p-6 gap-6 flex-col md:flex-row">
      <div className="w-full empty-page-left hidden lg:w-[560px] lg:h-[834px] p-6 gap-2 rounded-xl lg:flex items-center justify-center bg-white ">
        <img
          src="/preview-section.png"
          alt="Example"
          className="w-full lg:w-[307px] lg:h-[631px] border border-white flex "
        />
      </div>

      <div className="w-full empty-page-right flex-1 h-auto gap-6 p-10 rounded-xl bg-white flex flex-col">
        <div className="page-right-text gap-2">
          <h2 className="font-bold text-[32px] leading-[48px] text-[#333333]">
            Profile Details
          </h2>
          <p className="text-[16px] leading-[24px] text-[#737373]">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div className="w-full h-auto page-right-started p-8 gap-3 rounded-lg bg-[#FAFAFA] flex flex-col md:flex-row justify-between ">
          <div className="w-auto flex items-center justify-center ">
            <p className="text-[16px] leading-[24px] text-[#737373]">
              Profile picture
            </p>
          </div>

          <div className="w-full h-auto page-right-started-1 gap-2 p-4 md:w-[193px] md:h-[193px] rounded-lg bg-[#EFEBFF] text-[#633CFF] flex flex-col items-center justify-center">
            <CiImageOn size={25} />
            <p className="flex gap-2 text-[16px] leading-[24px]">
              <FaPlus />
              Upload Image
            </p>
          </div>
          <div className="w-auto flex items-center justify-center ">
            <p className="text-[12px] leading-[18px] text-[#737373]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <div className="w-full  h-auto page-right-started p-8 gap-3 rounded-lg bg-[#FAFAFA] flex flex-col items-center">
          <div className="w-full justify-between flex flex-col md:flex-row gap-[16px] relative">
            <label
              htmlFor="firstname"
              className={`text-left ${
                firstNameError ? "text-[#FF3939]" : "text-[#737373]"
              }`}
            >
              First Name{" "}
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="e.g. John"
              className={`flex p-2 text-base text-[#737373] border ${
                firstNameError
                  ? "border-[#FF3939]"
                  : "border-[#D9D9D9] focus:border-[#633CFF] focus:outline-none"
              } w-full md:w-[450px] rounded-lg gap-[12px]`}
            />
            {firstNameError && (
              <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-[12px] font-normal">
                {firstNameError}
              </p>
            )}
          </div>
          <div className="w-full justify-between flex flex-col md:flex-row gap-[16px] relative">
            <label
              htmlFor="lastname"
              className={`text-left ${
                lastNameError ? "text-[#FF3939]" : "text-[#737373]"
              }`}
            >
              Last Name{" "}
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="e.g. Appleseed"
              className={`flex p-2 text-base text-[#737373] border ${
                lastNameError
                  ? "border-[#FF3939]"
                  : "border-[#D9D9D9] focus:border-[#633CFF] focus:outline-none"
              } w-full md:w-[450px] rounded-lg gap-[12px]`}
            />
            {lastNameError && (
              <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-[12px] font-normal">
                {lastNameError}
              </p>
            )}
          </div>
          <div className="w-full justify-between flex flex-col md:flex-row gap-[16px] relative">
            <label
              htmlFor="email"
              className={`text-left ${
                emailError ? "text-[#FF3939]" : "text-[#737373]"
              }`}
            >
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. email@example.com"
              className={`flex p-2 text-base text-[#737373] border ${
                emailError
                  ? "border-[#FF3939]"
                  : "border-[#D9D9D9] focus:border-[#633CFF] focus:outline-none"
              } w-full md:w-[450px] rounded-lg gap-[12px]`}
            />
            {emailError && (
              <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF3939] text-[12px] font-normal">
                {emailError}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-10 border-t-2 pt-4">
          <button
            className="w-full md:w-[91px] md:h-[46px] p-3 rounded-lg opacity-25 bg-[#633CFF] text-white hover:bg-[#BEADFF] hover:shadow-lg hover:shadow-[#633CFF40]"
            onMouseDown={(e) =>
              (e.currentTarget.style.backgroundColor = "#BEADFF")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.backgroundColor = "#633CFF")
            }
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
