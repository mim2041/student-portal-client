import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackBtn = ({link}) => {
    return (
        <div className="absolute  lg:top-16 left-8">
            <Link to={link}>
                <button className="flex items-center justify-center gap-2 text-2xl text-white bg-gradient-to-r from-blue-800 to-blue-500 py-2 px-4 rounded-lg  mx-auto my-8">
                    {" "}
                    <BsFillArrowLeftCircleFill />
                </button>
            </Link>
        </div>
    );
};

export default BackBtn;