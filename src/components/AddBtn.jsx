import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AddBtn = ({ link, value }) => {
    return (
        <div className="absolute  lg:top-16 right-8">
            <Link to={link}>
                <button className="flex items-center justify-center gap-2  text-white bg-gradient-to-r from-blue-800 to-blue-500 py-2 px-4 rounded-lg  mx-auto my-8">
                    {" "}
                    <IoMdAdd className='text-2xl'/>
                    {value}
                </button>
            </Link>
        </div>
    );
};

export default AddBtn;