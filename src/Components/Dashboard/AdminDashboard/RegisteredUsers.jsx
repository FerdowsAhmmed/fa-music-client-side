import { useEffect, useState } from "react";

const RegisteredStudents = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
      fetchClasses();
    }, []);
  
    const fetchClasses = async () => {
      try {
        const response = await fetch("https://fa-music-center-server-b9mgm5ogn-ferdowsahmmed.vercel.app/classes");
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div>
          <h1 className="text-center my-10">Manage Users</h1>
        <main className="flex-grow p-4 bg-gray-100">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Name</th>
                  <th>Class Image</th>
                  <th>Instructor name</th>
                  <th>Instructor email</th>
                  <th>Available seats</th>
                  <th>Status</th>
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
    );
  };

export default RegisteredStudents;