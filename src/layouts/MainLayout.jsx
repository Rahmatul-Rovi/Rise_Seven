import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;