import Poppins from "../../fonts/poppins";
import Header from "./header";

const Profile = () => {
  return (
    <div className="bg-[#181B23] min-h-[100vh]">
      <Header />
      <div
        className="w-full flex flex-col gap-3 items-center justify-center"
        style={Poppins}
      >
        <div className="text-white p-5">
          <p>UserProfile</p>
        </div>
        <div className="w-72 sm:w-96 flex gap-3 bg-white items-center p-5 rounded">
          <div className="h-16 w-16 bg-slate-500 rounded-full"></div>
          <div className="text-sm">
            <p>Amrex</p>
          </div>
          <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
            <p className="text-sm">USA</p>
          </div>
        </div>

        <div className="w-72 sm:w-96 flex flex-col gap-3 bg-white items-start p-5 rounded">
          <div className="text-sm mb-2">
            <p>Your Skills</p>
          </div>
          <div className="flex gap-3 flex-wrap items-center">
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
            <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
              <p className="text-sm">USA</p>
            </div>
          </div>
          <div className="w-full flex items-end justify-end cursor-pointer">
            <p className="text-sm">Update Skills</p>
          </div>
        </div>

        <div className="w-72 sm:w-96 flex flex-col gap-3 bg-white items-start p-5 rounded">
          <div className="text-sm mb-2">
            <p>Your Connections</p>
          </div>
          <div className="w-full flex gap-3 flex-wrap items-center justify-between">
            <div className="flex gap-3">
                10 <p>Connections</p>
            </div>
            <div className="flex gap-3">
                5 <p>Pending</p>
            </div>
          </div>
        </div>

        <div className="w-72 sm:w-96 flex items-center justify-between">
            <div className="bg-white text-black p-2 pl-5 pr-5 rounded cursor-pointer">
                <p>Logout</p>
            </div>
            <div className="bg-red-900 text-white p-2 pl-5 pr-5 rounded cursor-pointer">
                <p>Delete Account</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
