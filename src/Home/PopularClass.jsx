import { useEffect, useState } from "react";


const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const response = await fetch("class.json"); // Replace with your API endpoint or class data source
      const data = await response.json();

      // Sort the class data based on enrolled students in descending order
      const sortedClasses = data.sort(
        (a, b) => b.enrolledStudents - a.enrolledStudents
      );

      // Get the top six classes
      const topClasses = sortedClasses.slice(0, 6);

      setPopularClasses(topClasses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-slate-700 mb-10 mt-10">------Popular Classes------</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularClasses.map((classItem) => (
          <div key={classItem.className} className="border">
            <img src={classItem.imageUrl} alt={classItem.className} className="w-full h-96 p-2"/>
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
