import { useEffect, useState } from "react";

const MyClasses = () => {
  const [myAllClasses, setMyAllClasses] = useState([]);
  const total = myAllClasses.reduce((sum, item) => parseFloat(item.price) + sum, 0);
  
  useEffect(() => {
    fetchClasses();
  }, [myAllClasses]);

  const fetchClasses = async () => {
    try {
      const response = await fetch("http://localhost:5000/selectedClasses");
      const data = await response.json();
      

      setMyAllClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <section className="">
      <div>
        <h1 className="text-center text-3xl font-bold mt-10">Total Class Selected: 0{myAllClasses.length}</h1>
        <div className="bg-indigo-800 flex flex-col w-60 mx-auto border p-4 m-4 gap-4 text-white rounded-lg">
        <h1 className="text-center">Total Price:Tk. {total}</h1>
        <button className="btn btn-xs">Pay Now</button>
        </div>

        <main className="flex-grow p-4 bg-gray-100">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Name</th>
                  <th>Instructor Name</th>
                  <th>Class Image</th>
                  <th>Action</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {myAllClasses.map((classItem, index) => (
                  <tr key={classItem.className}>
                    <th>{index + 1}</th>
                    <td>{classItem.className}</td>
                    <td>{classItem.instructorName}</td>
                    <td>
                      <img
                        className="w-12 rounded-lg"
                        src={classItem.imageUrl}
                        alt=""
                      />{" "}
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                    <td>Tk. {classItem.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold my-10">My Enrolled classes</h1>
        <main className="flex-grow p-4 bg-gray-100">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Name</th>
                  <th>Instructor Name</th>
                  <th>Class Image</th>
                </tr>
              </thead>
              <tbody>
                {myAllClasses.map((classItem, index) => (
                  <tr key={classItem.className}>
                    <th>{index + 1}</th>
                    <td>{classItem.className}</td>
                    <td>{classItem.instructorName}</td>
                    <td>
                      <img
                        className="w-12 rounded-lg"
                        src={classItem.imageUrl}
                        alt=""
                      />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  );
};

export default MyClasses;
