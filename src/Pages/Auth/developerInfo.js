import { useState } from "react";
import {useParams} from "react-router-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import Poppins from "../../fonts/poppins";
import CountryList from "../../widgets/country.list";
import history from "../../utils/history"
import instance from "../../utils/axios"

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          className="text-black"
          onChange={() => null}
        />{" "}
        <label className="text-black">{props.label}</label>
      </components.Option>
    </div>
  );
};

const DeveloperInfo = () => {
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState("");
  const [username, setUsername] = useState("");

  const {id} = useParams();

  const Country = (res) => {
    setCountry(res);
  };

  const CreateuserProfile = () =>{
    instance.post("/create-user-profile",{
      id,
      country,
      skills:skills.split(","),
      username,
    }).then(res=>{
      if(res.data.status){
        history.push("/home/"+id)
        history.go();
      }
      else{
        alert("unable to create userprofile")
      }
    })
  }

  return (
    <div className="bg-[#181B23] min-h-[100vh]">
      <div className="p-10 pt-20 sm:p-20" style={Poppins}>
        <div style={Poppins}>
          <p className="text-white text-xl">Enter your Username</p>
          <div className="w-[100%] mt-5 mb-10">
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="text-base p-2 rounded"
            />
          </div>
        </div>
        <div className="text-xl" style={Poppins}>
          <p className="text-white">Set your Location</p>
          <div className="w-56 sm:w-96 mt-5 mb-10">
            <ReactSelect
              className="text-base"
              options={CountryList.countries}
              closeMenuOnSelect={true}
              hideSelectedOptions={true}
              isMulti={false}
              components={{
                Option,
              }}
              allowSelectAll={false}
              onChange={(e) => Country(e)}
            />
          </div>
        </div>
        <div className="text-xl" style={Poppins}>
          <p className="text-white">Add your skills</p>
          <div className="w-[100%] mt-5 mb-10">
            <input
              type="text"
              placeholder="Enter your skills by comma separated"
              onChange={(e) => setSkills(e.target.value)}
              className="text-base p-2 w-[70%] rounded"
            />
          </div>
        </div>

        <div className="flex flex-col text-white">
            <p>If you already done you can skip this</p>
            <div className="flex gap-3 mt-5">
                <button className="bg-white text-black p-2 rounded" onClick={()=>{
                    history.push("/home/"+id);
                    history.go();
                }}>Skip</button>
                <button className="bg-white text-black p-2 rounded" onClick={CreateuserProfile}>Create Account</button>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
