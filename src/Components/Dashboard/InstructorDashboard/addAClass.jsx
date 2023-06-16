import { Link } from "react-router-dom";

const AddAClass = () => {
  return (
   <section className="w-full">
     <div className="mx-auto py-10 my-10 w-6/12 bg-slate-700">
      <form className="flex flex-col justify-center items-center my-10">
        <input
          type="text"
          name="className"
          placeholder="Class Name"
          className="w-11/12 border p-2 mb-4"
        />
        <input
          type="text"
          name="imageURL"
          placeholder="Class Image URL"
          className="w-11/12 border p-2 mb-4"
        />
        <input
          type="text"
          name="instructorName"
          placeholder="Instructor Name"
          className="w-11/12 border p-2 mb-4"
        />
        <input
          type="text"
          name="instructorEmail"
          placeholder="Instructor Email"
          className="w-11/12 border p-2 mb-4"
        />
        <input
          type="number"
          name="availableSeats"
          placeholder="Available Seats"
          className="w-11/12 border p-2 mb-4"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-11/12 border p-2 mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
          Add
        </button>
      </form>
    </div>
    <Link to="/instructorDashboard"><button className="btn btn-xs btn-primary mt-4 w-32">Back</button></Link>
   </section>
  );
};

export default AddAClass;
