import { Link } from "react-router-dom";
import BackBtn from "../../../../components/BackBtn";

const ApplicationForm = () => {
  return (
    <div className="py-12 lg:py-20 mx-8 lg:mx-52 shadow-xl mt-8 flex flex-col items-center  bg-gray-50">
      <BackBtn link={"/dashboard/exam-application"}></BackBtn>
      <h1 className="title text-4xl mb-3 text-blue-800 text-center ">
        Fill the Form
      </h1>
      <hr className="w-full lg:w-1/3 mx-auto border-b-4 border-blue-800 mb-8 lg:mb-12 rounded" />
      <form className="w-full mx-auto flex flex-col items-center">
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Name</span>
          </label>
          <input
            type="text"
            placeholder="Mim Khatun"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
          />
        </div>
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Registration No</span>
          </label>
          <input
            type="text"
            placeholder="20203652412"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
          />
        </div>
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Roll No</span>
          </label>
          <input
            type="text"
            placeholder="2041"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
          />
        </div>
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Department / Institute</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Institute of Information Technology
            </option>
            <option>Institute of Business Administration</option>
            <option>Institute of Information Technology</option>
            <option>Institute of Remote Sensing and GIS</option>
            <option>
              Bangabandhu Institute of Comparative Literature and Culture
            </option>
          </select>
        </div>

        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Year</span>
          </label>
          <input
            type="number"
            placeholder="Year"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
          />
        </div>
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Semester</span>
          </label>
          <input
            type="number"
            placeholder="Semester"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
          />
        </div>
        
        
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Alloted Hall</span>
          </label>
          <input
            type="text"
            placeholder="Begum Khaleda Zia Hall"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
          />
        </div>
        <Link to="/dashboard/exam-application">
        <button className="py-2 px-4 bg-gradient-to-r btn-wide mt-8 from-blue-800 to-blue-500 text-white rounded-lg ">
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
};

export default ApplicationForm;
