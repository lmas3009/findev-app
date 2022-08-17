import Poppins from "../../fonts/poppins";

const DeveloperCard = () => {
    return (
        <div className="w-56 h-full flex flex-col justify-between items-center bg-white rounded" style={Poppins}>
            <div className="w-full flex flex-col items-center justify-center  p-5">
                <div className="w-16 h-16 bg-slate-500 rounded-full">
                </div>
                <div className="flex flex-col items-center">
                    <p>Amrex</p>
                    <p className="text-xs">#18524</p>
                </div>
                <div className="w-full flex gap-3 flex-wrap justify-center mt-5">
                    <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
                        <p className="text-xs">Next</p>
                    </div>
                    <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
                        <p className="text-xs">React</p>
                    </div>
                    <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
                        <p className="text-xs">Frontend</p>
                    </div>
                    <div className="bg-black text-white text-center w-max pl-2 pr-2 p-1 rounded">
                        <p className="text-xs">Frontend</p>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <p>USA</p>
            </div>
        </div>
    )
}

export default DeveloperCard;