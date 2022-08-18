import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Poppins from "../../fonts/poppins";
import instance from "../../utils/axios";
import Header from "./header";

const DeveloperProfile = () => {
  const { uid } = useParams();
  const [userData, setUserData] = useState({});
  const [location, setLocation] = useState({});
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const GetSkills = () => {
      instance
        .post("/get-skills", {
          id: uid,
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
          id: uid,
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
          id: uid,
        })
        .then((res) => {
          if (res.data.status) {
            setUserData(res.data.result);
          }
        });
    };
    GetInfo();
    GetLocation();
    GetSkills();
  }, [uid]);

  return (
    <div className="bg-[#181B23] min-h-[100vh]">
      <Header/>
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
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
