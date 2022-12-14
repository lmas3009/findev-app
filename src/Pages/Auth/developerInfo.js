import {  useState } from "react";
import { useParams } from "react-router-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import Poppins from "../../fonts/poppins";
import CountryList from "../../widgets/country.list";
import history from "../../utils/history";
import instance from "../../utils/axios";

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
  const [usernameerror, setUsernameerror] = useState("");
  const [countryerror, setCountryerror] = useState("");
  const [skillerror, setSkillerror] = useState("");
  const [loading,setLoading] = useState(false)

  const { id } = useParams();

  const Country = (res) => {
    setCountry(res);
  };

  const CreateuserProfile = () => {
    setLoading(true)
    if (username === "") {
      setUsernameerror("Username is required");
    } else {
      setUsernameerror("");
    }
    if (country === "") {
      setCountryerror("Country is required");
    } else {
      setCountryerror("");
    }
    if (skills === "") {
      setSkillerror("Skills is required");
    } else {
      setSkillerror("");
    }
    instance
      .post("/create-user-profile", {
        id,
        country,
        skills: skills.split(","),
        username,
      })
      .then((res) => {
        setLoading(false)
        if (res.data.status) {
          history.push("/home/" + id);
          history.go();
        } else {
          alert("unable to create userprofile");
        }
      });
  };

  

  return (
    <div className="bg-[#181B23] min-h-[100vh]">
      <div className="p-10 pt-20 sm:p-20" style={Poppins}>
        <div style={Poppins}>
          <p className="text-white text-xl">Enter your Username</p>
          <div className="w-[50%] mt-5 mb-10 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="text-base p-2 rounded"
            />
            <label className="text-red-700">{usernameerror}</label>
          </div>
        </div>
        <div className="" style={Poppins}>
          <p className="text-white text-xl">Set your Location</p>
          <div className="w-56 sm:w-96 mt-5 mb-10 flex flex-col gap-3">
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
            <label className="text-red-700">{countryerror}</label>
          </div>
        </div>
        <div style={Poppins}>
          <p className="text-white text-xl">Add your skills</p>
          <div className="w-[100%] mt-5 mb-10 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter your skills by comma separated"
              onChange={(e) => setSkills(e.target.value)}
              className="text-base p-2 w-[70%] rounded"
            />
            <label className="text-red-700">{skillerror}</label>
          </div>
        </div>

        <div className="flex flex-col text-white">
          <p className="text-sm mb-5">You cannot update this again</p>
          <p>Skip only if you have completed this part already.</p>
          <div className="flex gap-3 mt-5">
            <button
              className="bg-white text-black p-2 rounded"
              onClick={() => {
                history.push("/home/" + id);
                history.go();
              }}
            >
              Skip
            </button>
            <button
              className="bg-white text-black p-2 rounded flex items-center"
              onClick={CreateuserProfile}
            >
            {loading ? (
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              ""
            )}
              Create User Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
