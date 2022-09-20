import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import avatar from "../img/avatar.png";
import Logo from "../img/logo1.png";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* desktop & tab ,for mobile its hidden , for medium its set */}

      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl front-bold">FoodX</p>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer"
            onClick={() => setIsMenu(false)}>
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor" onClick={() => setIsMenu(false)}>
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor" onClick={() => setIsMenu(false)}>
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor" onClick={() => setIsMenu(false)}>
              Service
            </li>
          </ul>
          {/* cart */}
          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
              >
                {user && user.email === "maxmario2001@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all 
          duration-100 ease-in-out text-textColor text-base " onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2  flex items-center gap-3 cursor-pointer
         hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Log out
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"> </div>
    </header>
  );
};

export default Header;
