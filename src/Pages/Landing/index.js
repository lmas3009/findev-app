import Poppins from "../../fonts/poppins";
import Header from "./header";
import BG from "../../assets/bg1.png";
import BG_back from "../../assets/bg_side_1.png";
import Testimonials from "./testimonials";
import JoinInvite from "./joininvite";

const LandindPage = () => {
  return (
    <div className="bg-[#181B23]">
      <Header />
      <div className="p-2 sm:pt-8">
        <div className="text-white text-center pb-10 pt-5" style={Poppins}>
          <p className="text-lg">A place to connect/find developers</p>
        </div>
        <div className="w-full flex items-center justify-center p-5">
          <img src={BG} alt="BG" className="max-w-[120vh] w-full h-[100%]" />
        </div>
        <div className="text-white m-5 lg:ml-32 lg:mr-32 mt-16 mb-10 flex items-sart justify-between">
          <div style={Poppins} className="text-center sm:text-start">
            <p className="text-base sm:text-xl">Connect with developers</p>
            <p className="text-sm sm:text-base pt-5 w-full sm:w-96 ">
              You can connect with developers around the world to make friends
              and chat with each other.
            </p>
          </div>
          <div>
            <img
              src={BG_back}
              alt="BG"
              className="w-96 h-full hidden sm:flex"
            />
          </div>
        </div>

        <Testimonials/>

        <JoinInvite/>

        <p className="w-full flex items-center justify-center text-white pt-10 pb-2">&copy;findev 2022</p>
      </div>
    </div>
  );
};

export default LandindPage;
