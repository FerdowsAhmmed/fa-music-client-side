import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const response = await fetch("class.json");
      const data = await response.json();
      const sortedClasses = data.sort(
        (a, b) => b.enrolledStudents - a.enrolledStudents
      );
      const topClasses = sortedClasses.slice(0, 6);

      setPopularClasses(topClasses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-slate-700 mb-10 md:mt-32">
        ------Popular Classes------
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {popularClasses.map((classItem) => (
          <div key={classItem.className} className="border bg-orange-300">
            <img
              src={classItem.imageUrl}
              alt={classItem.className}
              className="w-full h-72 p-2"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">{classItem.className}</h2>
              <p>Instructor: {classItem.instructorName}</p>
              <p>Enrolled Students: {classItem.enrolledStudents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
