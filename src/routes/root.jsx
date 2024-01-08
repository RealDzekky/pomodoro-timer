import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
    return (
        <div className="flex flex-col justify-center">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
