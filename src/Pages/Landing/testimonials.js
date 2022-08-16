import TestimonialCards from "../../components/TestimonialCards";
import Poppins from "../../fonts/poppins";

const Testimonials = () => {
  return (
    <div style={Poppins}>
      <div className="text-white flex items-center justify-center">
        <p className="text-base sm:text-xl mt-10 sm:mt-0">See what developers are saying</p>
      </div>
      <div className="p-10 flex flex-wrap gap-3 items-start justify-center">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />

        <div
          className="w-[400px] h-full p-7 bg-[#D9D9D9] rounded-md flex flex-col items-start justify-evenly pl-5 relative"
          style={Poppins}
        >
          <p className="text-8xl absolute right-5 text-white">"</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xl">If you want to give the feedback</p>
            </div>
          </div>
          <div className="pt-7">
            <a href="/#">Check here 🚀</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
