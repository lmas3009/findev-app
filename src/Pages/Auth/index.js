import Poppins from "../../fonts/poppins"

const GoogleAuth = () => {

  return (
    <div className="w-full h-full sm:h-screen flex flex-col-reverse sm:flex-row items-center justify-between">
      <div className=" w-[100%] sm:w-[50%] flex items-center justify-center  p-6 sm:p-0">
        <div>
          <p className="text-2xl mb-3" style={Poppins}>
            Welcome back to Findev
          </p>
          <p style={Poppins} className="text-slate-600 text-sm mt-2">
           Try to login with your Google account
          </p>
          <div className="border border-black p-1 rounded mt-10 flex items-center gap-3 cursor-pointer">
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google" className="w-10"/>
            <p>Sign in using Google</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F5F9] w-[100%] sm:w-[50%] h-max p-10 sm:h-full sm:p-0 flex items-center justify-center">
        <p>FINDEV</p>
      </div>
    </div>
  );
};

export default GoogleAuth;