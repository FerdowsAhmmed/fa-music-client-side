import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [classes, setClasses] = useState([]);

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

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("class.json");
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="bg-gray-800 text-white w-64">
          {/* Sidebar content */}
          <div className="flex items-center justify-center h-20">
            <h1>User Dashboard</h1>
          </div>
          <nav>
            <ul className="pl-10 pr-10">
              <li>My Class</li>
              <li>My Payment</li>
              <li>Payment History</li>
              {/* Add more sidebar items */}
            </ul>
          </nav>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-grow">
        {/* Top navigation */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Hamburger menu */}
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={toggleSidebar}
            >
              <span className="material-icons">
                {isSidebarOpen ? "close" : "Click to open Dashboard Menu"}
              </span>
            </button>
            {/* Other navigation elements */}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-grow p-4 bg-gray-100">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Name</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classItem, index) => (
                  <tr key={classItem.className}>
                    <th>{index + 1}</th>
                    <td>{classItem.className}</td>
                    <td>Delete</td>
                    <td>Pay</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
