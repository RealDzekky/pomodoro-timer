import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
