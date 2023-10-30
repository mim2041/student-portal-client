import React from 'react';

const TopNav = () => {
    return (
      <nav
        className={`md:block   z-50  shadow-sm w-full transition transform duration-500  ease-in-out `}
      >
        {/* ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } */}
        <div className="w-full bg-[#0055A2] p-1 lg:pb-2 font-light lg:px-48 text-sm px-5 lg:p-0.5">
          <div className="flex items-center  lg:h-10 w-full text-white ">
            <div className="flex items-center    justify-between w-full">
              <div className="flex flex-col lg:flex-row  lg:gap-10">
                <span className="flex gap-1 items-center">
                  <BsFillTelephoneFill /> +8809614500673
                </span>
                <span className="flex gap-1  items-center">
                  <MdEmail /> info@shdclbd.com
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="hidden lg:block">
                  Rajuk Registration No : RAJUK/DC/REDMR 000195
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    className="curser-pointer"
                    to="https://www.facebook.com/shantohobby"
                  >
                    <GrFacebookOption />
                  </Link>

                  <FaLinkedinIn />
                  {/* <AiOutlineGooglePlus /> */}
                  <TfiYoutube />
                  <Link to="/login" className="text-sm font-light underline">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default TopNav;