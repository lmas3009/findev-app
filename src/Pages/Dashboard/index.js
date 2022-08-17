import React, { useState } from "react";
import DeveloperCard from "../../components/DeveloperCards";
import Poppins from "../../fonts/poppins";
import CountryList from "./countrylist";
import Header from "./header";
import Search from "./search";

const Dashboard = () => {
  const [searchdata, setSearchdata] = useState("");

  const SearchData = (data) => {
    setSearchdata(data);
  };

  return (
    <div className="bg-[#181B23] min-h-[100vh]">
      <Header />
      <div className="w-full flex items-center justify-center" style={Poppins}>
        <p className="text-white text-lg mt-8 mb-5">Meet Developers</p>
      </div>
      <Search SearchData={SearchData} />
      <p className="text-white">{searchdata}</p>
      <CountryList />
      <div className="flex items-start justify-center gap-3 flex-wrap pb-10">
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
      </div>
    </div>
  );
};

export default Dashboard;
