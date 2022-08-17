import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VscBell } from "react-icons/vsc";
import { IoChatbubblesOutline } from "react-icons/io5";
import instance from "../../utils/axios";
import "../../index.css";

const Header = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    GetInfo();
  });

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
    <div className="h-16 w-full flex items-center justify-between pl-5 pr-5 bg-white">
      <div>
        <p className="logo">fIndev</p>
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-xl font-bold">{<IoChatbubblesOutline />}</span>
        <span className="text-xl font-bold">{<VscBell />}</span>
        <a href={"/home/" + id + "/userprofile"}>
          <p className="cursor-pointer">Welcome {userData.username}!</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
