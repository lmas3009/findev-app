import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Poppins from "../../fonts/poppins";
import Logout from "../../widgets/logout";
import Header from "./header";
import history from "../../utils/history";
import instance from "../../utils/axios";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [location, setLocation] = useState({});
  const [skills, setSkills] = useState([]);

  const response = () => {
    history.push("/");
    history.go();
  };

  useEffect(() => {
    GetInfo();
    GetLocation();
    GetSkills();
  });

  
  const GetSkills = () => {
    instance
      .post("/get-skills", {
        id: id,
      })
      .then((res) => {
        if (res.data.status) {
          setSkills(res.data.result);
        }
      });
  };

  const GetLocation = () => {
    instance
      .post("/get-location", {
        id: id,
      })
      .then((res) => {
        if (res.data.status) {
          setLocation(res.data.result);
        }
      });
  };


  const GetInfo = () => {
    instance
      .post("/get-user", {
        id: id,
      })
      .then((res) => {
        if (res.data.status) {
          setUserData(res.data.result);
        }
      });
  };

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
        <div className="w-72 sm:w-96 flex flex-col sm:flex-row gap-3 bg-white items-start sm:items-center p-5 rounded">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 bg-slate-500 rounded-full">
              <img
                src={userData.imageUrl}
                alt="user"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="text-sm">
              <p>{userData.username}</p>
              <p>{userData.email}</p>
            </div>
          </div>
          <div className="bg-black text-white text-center w-max pl-2 ml-3 pr-2 p-1 rounded">
            <p className="text-sm" title={location.label}>
              {location.value}
            </p>
          </div>
        </div>

        <div className="w-72 sm:w-96 flex flex-col gap-3 bg-white items-start p-5 rounded">
          <div className="text-sm mb-2">
            <p>Your Skills</p>
          </div>
          <div className="flex gap-3 flex-wrap items-center">
            {skills.map((item, index) => {
              return (
                <div
                  className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded"
                  key={index}
                >
                  <p className="text-sm">{item}</p>
                </div>
              );
            })}
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
          <Logout response={response} />
          <div className="bg-red-900 text-white p-2 pl-5 pr-5 rounded cursor-pointer">
            <p>Delete Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
