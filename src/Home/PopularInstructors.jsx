import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);
  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const response = await fetch("https://fa-music-center-server.vercel.app/classes");
      const data = await response.json();
      const sortedClasses = data.sort(
        (a, b) => b.enrolledStudents - a.enrolledStudents
      );
      const topClasses = sortedClasses.slice(0, 6);
      setPopularInstructor(topClasses);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-slate-700 mb-10 md:mt-32">
        ------Popular Instructors------
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {popularInstructor.map((classItem) => (
          <div key={classItem.className} className="border bg-orange-300">
            <img
              src={classItem.instructorPhoto}
              alt={classItem.className}
              className="w-full h-72 p-2"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">
                Instructor: {classItem.instructorName}
              </h2>
              <p>E-mail: {classItem.instructorEmail}</p>
              <p>Address: {classItem.instructorAddress}</p>
              <p>Instrument: {classItem.className}</p>
              <p>Enrolled Students: {classItem.enrolledStudents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
