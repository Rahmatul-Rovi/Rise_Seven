import { Outlet } from "react-router-dom";
// Ekhane Navbar ar Footer import korben
// import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* <Navbar /> */}
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;