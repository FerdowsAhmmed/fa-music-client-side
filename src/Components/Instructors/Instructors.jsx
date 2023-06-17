import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await fetch("https://fa-music-center-server-b9mgm5ogn-ferdowsahmmed.vercel.app/classes");
      const data = await response.json();

      setInstructors(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-slate-700 mb-10 md:mt-32">
        ------All Instructors------
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor.className} className="border bg-orange-300">
            <img
              src={instructor.instructorPhoto}
              alt={instructor.className}
              className="w-full h-72 p-2"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">
                Instructor: {instructor.instructorName}
              </h2>
              <p>E-mail: {instructor.instructorEmail}</p>
              <p>Address: {instructor.instructorAddress}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
