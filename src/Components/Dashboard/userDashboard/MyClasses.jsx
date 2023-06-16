import { useEffect, useState } from "react";

const MyClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("http://localhost:5000/selectedClasses");
      const data = await response.json();

      setMyClasses(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <h1 className="text-center my-10">My Selected classes</h1>
      <main className="flex-grow p-4 bg-gray-100">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myClasses.map((classItem, index) => (
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

export default MyClasses;
