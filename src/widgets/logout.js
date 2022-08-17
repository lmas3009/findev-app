import { GoogleLogout } from "react-google-login";
import Poppins from "../fonts/poppins";

const Logout = ({response}) => {
    return(
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={Poppins}
              >
                <div className="bg-white text-black p-2 pl-5 pr-5 rounded cursor-pointer">
                <p>Logout</p>
            </div>
              </button>
            )}
            onLogoutSuccess={response}
          />
    )
}

export default Logout;