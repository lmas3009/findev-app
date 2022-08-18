import { useEffect, useState } from "react";
import Poppins from "../../fonts/poppins";
import instance from "../../utils/axios";

const DeveloperCard = ({ data }) => {
  const [userData, setUserData] = useState([]);
  const [location, setLocation] = useState({});
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    GetUser();
    GetLocation();
    GetSkills();
  });

  const GetSkills = () => {
    instance
      .post("/get-skills", {
        id: data,
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
        id: data,
      })
      .then((res) => {
        if (res.data.status) {
          setLocation(res.data.result);
        }
      });
  };

  const GetUser = () => {
    instance
      .post("/get-user", {
        id: data,
      })
      .then((res) => {
        setUserData(res.data.result);
      });
  };

  return (
    <div
      className="w-56 h-full flex flex-col justify-between items-center bg-white rounded"
      style={Poppins}
    >
      <div className="w-full flex flex-col items-center justify-center  p-5">
        <div className="w-16 h-16 bg-slate-500 rounded-full">
          <img
            src={userData.imageUrl}
            alt="user"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <p>{userData.username}</p>
          <p className="text-xs">#18524</p>
        </div>
        <div className="w-full flex gap-3 flex-wrap justify-start mt-5">
          {skills.map((item, index) => {
            return (
              <div
                className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded"
                key={index}
              >
                <p className="text-xs">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3">
        <p title={location.label}>{location.value}</p>
      </div>
    </div>
  );
};

export default DeveloperCard;
