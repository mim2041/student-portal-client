import AddBtn from '../../../../components/AddBtn';

const Application = () => {
    return (
        <div>
            <AddBtn link={"/dashboard/new-application"} value={"New Application"}></AddBtn>
            <div className='my-36 mx-24'>
                <h1 className='text-2xl text-blue-800'>Recent Applications</h1>
                <div className='mt-8 flex gap-5'>
                    <div className='w-1/2 flex flex-col text-xl '>
                        <button className='my-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-2 rounded-lg shadow-xl'>1st Year 1st Semester</button>
                        <button className='my-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-2 rounded-lg shadow-xl'>2st Year 1st Semester</button>
                        <button className='my-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-2 rounded-lg shadow-xl'>3st Year 1st Semester</button>
                    </div>
                    <div className='w-1/2 flex flex-col text-xl '>
                        <button className='my-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-2 rounded-lg shadow-xl'>1st Year 2nd Semester</button>
                        <button className='my-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-2 rounded-lg shadow-xl'>2st Year 2nd Semester</button>
                        <button className='my-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-2 rounded-lg shadow-xl'>3st Year 2nd Semester</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;