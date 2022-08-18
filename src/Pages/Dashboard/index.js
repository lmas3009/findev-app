import React, { useState,useEffect } from "react";
import DeveloperCard from "../../components/DeveloperCards";
import Poppins from "../../fonts/poppins";
import instance from "../../utils/axios";
import Header from "./header";
const Dashboard = () => {
  const [developers, setDevelopers] = useState([]);


  useEffect(() => {
    const getDevelopers = async () => {
      instance.get("/get-developers").then(res=>{
        setDevelopers(res.data.result)
      })
    }
    getDevelopers();
  },[])


  return (
    <div className="bg-[#181B23] min-h-[100vh]">
      <Header />
      <div className="w-full flex items-center justify-center" style={Poppins}>
        <p className="text-white text-lg mt-8 mb-5">Meet Developers</p>
      </div>
      <div className="flex items-start justify-center gap-3 flex-wrap pb-10">
        {developers.map((developer, index) => {
          return (
            <DeveloperCard data={developer} />
          )})}
      </div>
    </div>
  );
};

export default Dashboard;
