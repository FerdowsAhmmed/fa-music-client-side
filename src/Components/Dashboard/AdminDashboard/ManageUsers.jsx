import { useEffect, useState } from "react";

const ManageUsers = () => {
//   const [selectedOption, setSelectedOption] = useState("Pending");
//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

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
      <h1 className="text-center my-10">All Classes</h1>
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
                  <td>
                    <img src="#" alt="image" />
                  </td>
                  <td>{classItem.instructorName}</td>
                  <td>{classItem.instructorEmail}</td>
                  <td>{classItem.availableSeats}</td>
                  <td>
                    {" "}
                    <select>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Denied">Denied</option>
                    </select>
                  </td>
                  <td>
                    <div className="join">
                      <button className="btn btn-xs join-item">Approve</button>
                      <button className="btn btn-xs join-item">Deny</button>
                      <button className="btn btn-xs join-item">
                        Send feedback
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ManageUsers;
