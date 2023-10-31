import { useForm } from 'react-hook-form';

const TestimonyForm = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    return (
        <div className='mt-36'>
        <h1 className="title text-4xl mb-3 text-blue-800 text-center ">
        Fill The Form
        </h1>        

        <form className="w-full mx-auto flex flex-col items-center">
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Name</span>
          </label>
          <input
            type="text"
            placeholder="Mim Khatun"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
            {...register('name', { required: true })} 
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
            {...register('registration', { required: true })} 
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
            {...register('roll', { required: true })} 
          />
        </div>
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Department / Institute</span>
          </label>
          <select className="select select-bordered" {...register('department', { required: true })} >
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
            placeholder="year"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
            {...register('year', { required: true })} 
          />
          {errors.year && <p>Year is required.</p>}
        </div>
        
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Semester</span>
          </label>
          <input
            type="number"
            placeholder="2"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
            {...register('semester', { required: true })} 
          />
          {errors.semester && <p>Semester is required.</p>}
        </div>
        
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Father's Name</span>
          </label>
          <input
            type="number"
            placeholder="Father's name"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
            {...register('fname', { required: true })} 
          />
        </div>
        
        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Mother's name</span>
          </label>
          <input
            type="number"
            placeholder="Mother's name"
            className="input input-bordered w-full max-w-xl lg:max-w-2xl"
            {...register('mname', { required: true })} 
          />
        </div>

        <div className="form-control w-full max-w-xl lg:max-w-2xl">
          <label className="label">
            <span className="label-text mt-4">Session</span>
          </label>
          <select className="select select-bordered" {...register('session', { required: true })} >
            <option disabled selected>2017-2018</option>
            <option disabled selected>2018-2019</option>
            <option disabled selected>2019-2020</option>
            <option disabled selected>2020-2021</option>
            <option disabled selected>2021-2022</option>
          </select>
        </div>
        
        <button to="/dashboard/testimony" className="py-2 px-4 bg-gradient-to-r btn-wide mt-8 from-blue-800 to-blue-500 text-white rounded-lg ">
          Submit
        </button>
      </form>
        </div>
    );
};

export default TestimonyForm;