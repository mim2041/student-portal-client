import { BiEdit } from 'react-icons/bi';


const TestimonyTable = () => {
    return (
        <div className="mx-6 lg:mx-24 my-12">
            <h1 className='text-2xl text-blue-800 mb-8'>Recent Applications</h1>
            <div className="overflow-x-auto shadow-xl">
                <table className="table p-5 shadow-2xl bg-white">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>Applied At</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>1</td>
                        <td>2nd Year</td>
                        <td>2nd Semester</td>
                        <td>12-05-2022</td>
                        <th>
                        <button className=" text-2xl"><BiEdit /></button>
                        </th>
                    </tr>
                    
                    {/* row 2 */}
                    <tr>
                        <td>2</td>
                        <td>1st Year</td>
                        <td>2nd Semester</td>
                        <td>21-06-2022</td>
                        <th>
                        <button className=" text-2xl"><BiEdit /></button>
                        </th>
                    </tr>
                    
                    {/* row 3 */}
                    <tr>
                        <td>3</td>
                        <td>2nd Year</td>
                        <td>1st Semester</td>
                        <td>12-05-2023</td>
                        <th>
                        <button className=" text-2xl"><BiEdit /></button>
                        </th>
                    </tr>
                    
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default TestimonyTable;