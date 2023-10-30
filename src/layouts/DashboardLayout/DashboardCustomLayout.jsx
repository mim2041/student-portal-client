import { useState } from "react";
import { Outlet } from "react-router-dom";
import { PiFilesFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { MdSettingsApplications } from "react-icons/md";
import { BsBarChartSteps } from "react-icons/bs";
import Drawer from "../../pages/dashboard/_components/Drawer";
import Swal from "sweetalert2";
import TopRightDrawerComponent from "../../pages/dashboard/_components/TopRightDrawerComponent";
import { RiLockPasswordLine } from "react-icons/ri";

const DashboardCustomLayout = () => {
  // define the active state for active link with default value, like in this case it is Dashboard
  const [active, setActive] = useState("Dashboard");

  // define the routes of your dashboard with appropriate path & path name should not start with '/', by default it will be added.
  const routes = [
    {
      path: "dashboard",
      title: "Dashboard",
      icon: <ImProfile className=" w-6 h-6" />,
    },
    {
      path: "dashboard/exam-application",
      title: "Exam Apllication",
      icon: <MdSettingsApplications className=" w-6 h-6" />,
    },
    {
      path: "dashboard/result",
      title: "View Result",
      icon: <PiFilesFill className=" w-6 h-6" />,
    },
    {
      path: "dashboard/testimonial",
      title: "Testimonial",
      icon: <BsBarChartSteps className=" w-6 h-6" />,
    },
   
  ];
  const topRoutes = [
    // {
    //   name: "Profile",
    //   href: "/dashboard/profile",
    //   icon: <CgProfile color="gray" />,
    // },
    {
      name: "Change Password",
      href: "/dashboard/profile/change-password",
      icon: <RiLockPasswordLine color="gray" />,
    },
  ];

  const handleLogout = () => {
    Swal.fire({
      title: "Are you want logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken_SHDCL");
        localStorage.removeItem("SHDCL_User");
        location.reload();
      }
    });

    // navigate("/", { replace: true });
  };
  return (
    <div className=" block md:flex ">
      <div className="w-full md:w-72 flex-none shadow-xl px-5">
        {/* Drawer content or sidebar for medium & small screen */}
        <Drawer
          routes={routes}
          active={active}
          setActive={setActive}
          // Send the image source for the logo
          src="/JU_logo.png"
        ></Drawer>
      </div>
      <div className="grow min-h-screen relative">
        <div className=" flex justify-end fixed bg-white drop-shadow w-full top-0 right-0 py-4 pe-4 z-40">
          <TopRightDrawerComponent
            topRoutes={topRoutes}
            handleLogout={handleLogout}
          />
        </div>
        <div className="my-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomLayout;
