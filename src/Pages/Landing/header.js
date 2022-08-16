import "../../index.css"

const Header = () => {
    return(
        <div className="h-16 w-full flex items-center justify-between pl-5 pr-5 bg-white">
            <div className="logo">
                <p>FINDEV</p>
            </div>
            <div className="flex gap-3 items-center">
                <p>Github</p>
                <div className="text-white bg-black p-1 rounded-md flex items-center justify-center">
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    )
}

export default Header