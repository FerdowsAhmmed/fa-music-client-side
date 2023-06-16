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

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("http://localhost:5000/classes");
      const data = await response.json();
      data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {isSidebarOpen && (
        <div className="bg-gray-500 text-white w-64">
          <div className="flex items-center justify-center h-20">
            <h1>User Dashboard</h1>
          </div>
          <nav>
            <ul className="pl-10 pr-10">
              <Link to="/myPayment">
                <li>My Payment</li>
              </Link>
              <Link to="/paymentHistory">
                <li>Payment History</li>
              </Link>

              <div className="divider"></div>
              <Link to="/">
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