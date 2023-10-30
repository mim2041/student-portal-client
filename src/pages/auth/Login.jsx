import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { base_url } from "../../config";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setToken, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setIsLoading(true);
    try {
      fetch(base_url + "/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);

          if (data.data.token && data.data.user.role === "admin") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Logged In Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            setToken(data.data.token);
            setUser(data.data.user._id);
            navigate("/dashboard", { replace: true });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "You are not an admin user",
              showConfirmButton: false,
              timer: 1500,
            });
            // location.reload();
          }
        });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className=" flex justify-center items-center h-[600px] lg:h-screen ">
      <Helmet>
        <title>JU | Student Login</title>
      </Helmet>
      <div className=" border p-5    shadow-md">
        <div className="text-center">
          <Link>
            <img className="w-1/4 mx-auto" src="/JU_logo.png" alt="" />
          </Link>
          <h1 className="text-xl font-semibold mt-4 my-2 ">
            Student Dashboard
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Registration No</span>
              </label>
              <input
                required
                type="text"
                placeholder="Enter Registration Number"
                className="input input-bordered w-full text-black  bg-white"
                {...register("registration_no", { required: true })}
              />
              {errors.registration_no && (
                <p className="text-[red]">Phone number is required.</p>
              )}
            </div> */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="Enter Email Address"
                className="input input-bordered w-full text-black  bg-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-[red]">Phone number is required.</p>
              )}
            </div>
            <div className="form-control w-full ">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              </div>
              <input
                required
                type="password"
                placeholder="******"
                className="input text-black input-bordered w-full  bg-white"
                {...register("password", { required: true })}
              />
              {errors.password && <p>Password is required.</p>}
            </div>
            <input
              type="submit"
              value="Login"
              className="my-6 cursor-pointer bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 rounded-lg btn-wide"
            />

            {/* <PrimaryButton value={"Login"}></PrimaryButton> */}
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default Login;
