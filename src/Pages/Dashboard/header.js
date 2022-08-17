import {useParams} from "react-router-dom"
import { VscBell } from "react-icons/vsc";
import { IoChatbubblesOutline } from "react-icons/io5";
import "../../index.css";

const Header = () => {
  const {id} = useParams()
  return (
    <div className="h-16 w-full flex items-center justify-between pl-5 pr-5 bg-white">
      <div>
        <p className="logo">fIndev</p>
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-xl font-bold">{<IoChatbubblesOutline />}</span>
        <span className="text-xl font-bold">{<VscBell />}</span>
        <a href={"/home/"+id+"/userprofile"}><p className="cursor-pointer">Welcome admin!</p></a>
      </div>
    </div>
  );
};

export default Header;
