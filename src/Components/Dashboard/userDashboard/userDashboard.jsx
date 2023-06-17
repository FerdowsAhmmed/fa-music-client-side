import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyClasses from "./MyClasses";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden">
      {isSidebarOpen && (
        <div className="bg-slate-800 w-64">
          <div className="flex items-center justify-center h-20">
            <h1 className="bg-indigo-800 text-white py-2 px-10 text-center w-full">
              User Dashboard
            </h1>
          </div>
          <nav className="bg-orange-900 text-white py-32">
            <ul className="pl-10 pr-10">
              <Link to="/myPayment" className="flex items-center gap-2">
                <li> My Payment</li>
              </Link>
              <br />
              <Link to="/paymentHistory" className="flex items-center gap-2">
                <li>Payment History</li>
              </Link>

              <div className="divider"></div>
              <Link to="/" className="flex items-center gap-2">
                {" "}
                <li>Home</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={toggleSidebar}
            >
              <span className="material-icons">
                {isSidebarOpen ? "close" : "Click to open Dashboard Menu"}
              </span>
            </button>
          </div>
        </header>
        <MyClasses></MyClasses>
      </div>
    </div>
  );
};

export default Dashboard;
