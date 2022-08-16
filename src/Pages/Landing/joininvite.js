import GR_img from "../../assets/gr_img.png"
import Poppins from "../../fonts/poppins";

const JoinInvite = () => {
    return (
        <div className="w-full flex flex-col gap-5 items-center justify-center mt-10">
            <img src={GR_img} alt="GR" className=" w-44 h-full" />
            <div className="bg-[#1085B7] text-center text-white p-2 rounded">
                <p style={Poppins}>Join the Platform</p>
            </div>
        </div>
    )
}

export default JoinInvite;