import BackBtn from "../../../components/BackBtn";
import PrimaryButton from "../../../components/PrimaryBtn";

const EditProfile = () => {
    return (
        <div className="mt-20 lg:mt-32 mx-6 lg:mx-48 text-center bg-gray-50 py-12 rounded-lg shadow-xl">
            <BackBtn link={"/dashboard"}></BackBtn>
            <h1 className="text-3xl font-bold text-blue-800">Edit Your Profile</h1>

            <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
                <span className="label-text">Profile picture</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-full max-w-lg" />
            </div>

            <div className="form-control w-full max-w-lg mx-auto mt-8 mb-4">
            <label className="label">
                <span className="label-text">Your name</span>
            </label>
            <input type="text" placeholder="Mim Khatun" className="input input-bordered w-full max-w-lg" />
            </div>

            <div className="form-control w-full max-w-lg mx-auto mt-8 mb-4">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="suraiyamim338@gmail.com" className="input input-bordered w-full max-w-lg" />
            </div>

            <div className="form-control w-full max-w-lg mx-auto mt-8 mb-4">
            <label className="label">
                <span className="label-text">Registration No</span>
            </label>
            <input type="text" placeholder="20203652412" className="input input-bordered w-full max-w-lg" />
            </div>

            <div className="form-control w-full max-w-lg mx-auto mt-8 mb-4">
            <label className="label">
                <span className="label-text">Department</span>
            </label>
            <input type="text" placeholder="IIT" className="input input-bordered w-full max-w-lg" />
            </div>
            <div className="form-control w-full max-w-lg mx-auto mt-8 mb-4">
            <label className="label">
                <span className="label-text">Class Roll</span>
            </label>
            <input type="text" placeholder="2041" className="input input-bordered w-full max-w-lg" />
            </div>

            <PrimaryButton onClick={""} value="Update"></PrimaryButton>
        </div>
    );
};

export default EditProfile;