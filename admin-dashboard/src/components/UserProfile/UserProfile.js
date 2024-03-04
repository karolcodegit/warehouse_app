import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Profile from "../../assets/profile.png";
import authService from "../../services/auth.service";
import UserContext from "../../contexts/UserContext";

const UserProfile = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const logOut = () => {
    authService.logout();
    setCurrentUser(null);
    navigate("/login");
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
  };

  useEffect(() => {
    authService.getCurrentUser().then((user) => setCurrentUser(user));
  }, []);
  return (
    <div>
      <button
        className="inline-flex justify-center items-center"
        onClick={handleDropDown}
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src={Profile} alt="" />
        <div className="flex items-center truncate dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
          <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            {currentUser
              ? `${currentUser.name} ${currentUser.surname}`
              : "Loading..."}
          </span>
          <MdOutlineKeyboardArrowDown />
        </div>
      </button>

      {isDropDownOpen && (
        <div className="py-2 z-10 origin-top-right absolute top-full min-w-52 bg-white border rounded-md shadow-lg overflow-hidden right-0">
          <div className="flex flex-col pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <span className="font-medium text-slate-800 ">
              {currentUser
                ? `${currentUser.name} ${currentUser.surname}`
                : "Loading..."}
            </span>
            <span className="text-xs text-slate-500  italic">
              {currentUser.roles}
            </span>
          </div>
          <ul>
            <li>
              <Link
                to="/profile"
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                onClick={(e) => {
                  e.preventDefault();
                  logOut();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
