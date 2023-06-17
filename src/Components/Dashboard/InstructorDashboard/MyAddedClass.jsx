import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyAddedClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext); // Assuming user context provides user information including email

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/classes/${user.email}`);
        setClasses(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchClasses();
    }
  }, [user]);

  return (
    <div className="min-h-screen">
      <h1 className="text-center my-6">My All Added Classes</h1>
      <main className="flex-grow p-4 bg-gray-100">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>Total Enrolled Students</th>
                <th>Action</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr key={classItem._id}>
                  <th>{index + 1}</th>
                  <td>{classItem.className}</td>
                  <td>Pending</td>
                  <td>0</td>
                  <td>Update</td>
                  <td><input type="textarea" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MyAddedClass;
