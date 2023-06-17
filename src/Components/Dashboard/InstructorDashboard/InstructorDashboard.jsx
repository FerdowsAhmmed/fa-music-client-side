import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyAddedClass from "./MyAddedClass";

const InstructorDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsSidebarOpen(window.innerWidth > 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      handleResize(); // Set initial isSidebarOpen value
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
   
  
    return (
      <div className="flex h-screen overflow-hidden">
        {isSidebarOpen && (
          <div className="bg-gray-600 text-white w-64">
            <div className="flex items-center justify-center h-20">
              <h1>Instructor Dashboard</h1>
            </div>
            <nav className="bg-orange-800 py-10">
              <ul className="pl-10 pr-10">
               <Link to="/AddAClass"> <li>Add a Class</li></Link>
               <Link to="/MyAddedClass"> <li>My Classes</li></Link>
               <div className="divider"></div> 
               <Link to="/"> <li>Home</li></Link>
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
          <main className="flex-grow p-4 bg-gray-100">
          <MyAddedClass></MyAddedClass>
          </main>
        </div>
      </div>
    );
  };
  

export default InstructorDashboard;