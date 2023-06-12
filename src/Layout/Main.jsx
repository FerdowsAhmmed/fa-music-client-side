import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import  { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className="min-h-screen bg-base-200 px-2 lg:px-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;