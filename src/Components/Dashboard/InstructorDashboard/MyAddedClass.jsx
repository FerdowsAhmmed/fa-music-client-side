import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyAddedClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`https://fa-music-center-server.vercel.appclasses/${user.email}`);
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


// import { useState, useEffect } from "react";
// import axios from "axios";

// const MyAddedClass = () => {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get("https://fa-music-center-server.vercel.appclasses/farida.begum@gmail.com");
//         setClasses(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchClasses();
//   }, []);

//   const handleUpdate = async (classId, feedback) => {
//     try {
//       const response = await axios.put(`https://fa-music-center-server.vercel.appclasses/${classId}`, {
//         feedback: feedback
//       });
//       console.log(response.data); // Optional: Handle success message
//       // Update the classes state or fetch classes again
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (classId) => {
//     try {
//       const response = await axios.delete(`https://fa-music-center-server.vercel.appclasses/${classId}`);
//       console.log(response.data); // Optional: Handle success message
//       // Update the classes state or fetch classes again
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <h1 className="text-center my-6">My All Added Classes</h1>
//       <main className="flex-grow p-4 bg-gray-100">
//         <div className="overflow-x-auto">
//           <table className="table table-zebra">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Class Name</th>
//                 <th>Status</th>
//                 <th>Total Enrolled Students</th>
//                 <th>Action</th>
//                 <th>Feedback</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {classes.map((classItem, index) => (
//                 <ClassRow
//                   key={classItem._id}
//                   classItem={classItem}
//                   index={index}
//                   handleUpdate={handleUpdate}
//                   handleDelete={handleDelete}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// const ClassRow = ({ classItem, index, handleUpdate, handleDelete }) => {
//   const [feedback, setFeedback] = useState("");

//   const onUpdate = () => {
//     handleUpdate(classItem._id, feedback);
//   };

//   const onDelete = () => {
//     handleDelete(classItem._id);
//   };

//   return (
//     <tr>
//       <th>{index + 1}</th>
//       <td>{classItem.className}</td>
//       <td>Pending</td>
//       <td>0</td>
//       <td>
//         <button onClick={onUpdate} className="btn btn-primary">
//           Update
//         </button>
//       </td>
//       <td>
//         <input
//           type="textarea"
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//         />
//       </td>
//       <td>
//         <button onClick={onDelete} className="btn btn-danger">
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default MyAddedClass;
