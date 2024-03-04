import React, { useEffect, useState } from "react";
import Bg from "../assets/bg.jpg";
import profile from "../assets/profile.png";
import Title from "../components/Title/Tilte";
import authService from "../services/auth.service";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    authService.getCurrentUser().then(user => setCurrentUser(user));
  }, []);

  if (!currentUser) {
    return null;
  }
  return (
    <div className="relative">
      <div className="my-3">Profile</div>

      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full w-full px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4">
            <div className="group h-40 overflow-hidden relative">
              <img src={Bg} alt="bg" className="w-full" />
            </div>
            <div className="flex justify-center relative -mt-10">
              <img
                src={profile}
                alt=""
                className="rounded-full w-24 h-24 bg-gray-200 border-solid border-white border-4 -mt-3"
              />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
              <Title tag="h3">{`${currentUser.name} ${currentUser.surname}`}</Title>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-row mb-6">
        <div className="flex-shrink max-w-full w-full md:w-1/3 px-4">
          <div class="bg-white  rounded-lg shadow-lg h-full p-6">
            <div class="flex flex-row justify-between pb-3">
              <div class="flex flex-col">
                <h3 class="text-base font-bold">Information</h3>
              </div>
              <div class="relative">
                <a
                  href="/"
                  title="edit information"
                  class="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none hover:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="py-3">
              
              <div class="border-t border-gray-200 my-3"></div>
              <div class="ltr:text-left rtl:text-right">
                <p class="mb-2">
                  <strong>Full Name :</strong>
                  <span class="ml-2">{`${currentUser.name} ${currentUser.surname}`}</span>
                </p>
                <p class="mb-2">
                  <strong>Phone :</strong>
                  <span class="ml-2">(+21) 277 728 824</span>
                </p>
                <p class="mb-2">
                  <strong>Email :</strong>
                  <span class="ml-2">{currentUser.email}</span>
                </p>
                <p class="mb-2">
                  <strong>Role :</strong>
                  <span class="ml-2">{currentUser.roles}</span>
                </p>
                <p class="mb-2">
                  <strong>Gender :</strong>
                  <span class="ml-2">{currentUser.gender}</span>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
