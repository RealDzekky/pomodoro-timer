import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
    return (
        <div className="flex flex-col justify-center" data-theme='autumn'>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Root;
