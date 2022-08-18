import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../utils/axios";
import "../../index.css";

const Header = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
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

    GetInfo();
  }, []);

  return (
    <div className="h-16 w-full flex items-center justify-between pl-5 pr-5 bg-white">
      <a href={"/home/"+id}>
        <p className="logo">fIndev</p>
      </a>
      <div className="flex gap-3 items-center">
        <a href={"/home/" + id + "/userprofile"}>
          <p className="cursor-pointer">Welcome {userData.username}!</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
