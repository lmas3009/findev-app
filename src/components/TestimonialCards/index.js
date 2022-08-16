import Poppins from "../../fonts/poppins";

const TestimonialCards = () => {
  return (
    <div className="w-96 h-full p-5 bg-[#D9D9D9] rounded-md flex flex-col items-start justify-evenly pl-5 relative" style={Poppins}>
        <p className="text-8xl absolute right-5 text-white">"</p>
      <div className="flex items-center gap-3">
        <div className="bg-white w-12 h-12 rounded-full"></div>
        <div>
          <p className="text-xl">Amrex</p>
        </div>
      </div>
      <div className="mt-5">
        <p>Nice Platform. I found my developers.</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
