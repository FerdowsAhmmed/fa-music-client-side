import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Classes = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("http://localhost:5000/classes");
      const data = await response.json();

      setClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectClass = async (classId) => {
    if (!user) {
      navigate("/login");
      console.log("User not logged in");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/selectedClasses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ classId }),
      });

      if (!response.ok) {
        console.log("Failed to select class");
        return;
      }
      toast.success("Class selected!");
      console.log("Class selected");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-slate-700 mb-10 md:mt-32">
        ------All Classes------
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`border bg-orange-300 ${
              classItem.availableSeats === 0 ? "bg-red-600" : ""
            }`}
          >
            <img
              src={classItem.imageUrl}
              alt={classItem.className}
              className="w-full h-72 p-2"
            />
            <div className="pl-4 pr-4">
              <h2 className="font-bold text-lg">
                Instructor: {classItem.className}
              </h2>
              <h2>Instructor: {classItem.instructorName}</h2>
              <p>Available seats: {classItem.availableSeats}</p>
              <p>Price: {classItem.price}</p>
            </div>
            <button
              onClick={() => handleSelectClass(classItem._id)}
              className="btn btn-sm w-full btn-primary mt-4 mb-4"
              disabled={classItem.availableSeats === 0}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
