import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex justify-center ">
      <div className="rounded-3xl overflow-hidden  shadow-2xl">
        <img src="/bg.jpg" className="w-full h-64" alt="" />
        <div className="flex justify-center -mt-8">
          <img
            src="/3607444.png"
            className="rounded-full border-solid w-1/5 border-primary border-2 -mt-3"
            alt=""
          />
        </div>
        <div className="text-right">
          <Link to="/dashboard/edit-profile">
            <button className="bg-blue-600 text-white rounded btn-sm m-3 -mt-10">Edit Profile</button>
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Full Name:
              </th>

              <td className="px-8 py-4"> Mim Khatun</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email:
              </th>

              <td className="px-8 py-4">suraiamim338@gmail.com</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Registration No:
              </th>

              <td className="px-8 py-4">20203653412</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Department
              </th>

              <td className="px-8 py-4">IIT</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Class Roll
              </th>

              <td className="px-8 py-4">2041</td>
            </tr>
          </tbody>
        </table>

        <p className="text-center p-2 text-xs bg-gray-50 text-green-800">
          Copyright (c), Jahangirnagar University
        </p>
       
      </div>
    </div>
  );
};

export default Profile;
