import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddAClass = () => {
  const [formData, setFormData] = useState({
    className: "",
    imageURL: "",
    instructorName: "",
    instructorPhoto: "",
    instructorEmail: "",
    availableSeats: 0,
    price: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://fa-music-center-server-b9mgm5ogn-ferdowsahmmed.vercel.app/classes", formData);
      console.log("Data added successfully:", response.data);
      toast.success("Class added successfully!");
      // Clear form fields after successful submission
      setFormData({
        className: "",
        imageURL: "",
        instructorName: "",
        instructorPhoto: "",
        instructorEmail: "",
        availableSeats: 0,
        price: 0,
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <section className="w-full">
      <div className="mx-auto py-10 my-10 w-6/12 bg-slate-700">
        <form className="flex flex-col justify-center items-center my-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="className"
            placeholder="Class Name"
            className="w-11/12 border p-2 mb-4"
            value={formData.className}
            onChange={handleChange}
          />
          <input
            type="text"
            name="imageURL"
            placeholder="Class Image URL"
            className="w-11/12 border p-2 mb-4"
            value={formData.imageURL}
            onChange={handleChange}
          />
          <input
            type="text"
            name="instructorName"
            placeholder="Instructor Name"
            className="w-11/12 border p-2 mb-4"
            value={formData.instructorName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="instructorPhoto"
            placeholder="Instructor Photo"
            className="w-11/12 border p-2 mb-4"
            value={formData.instructorPhoto}
            onChange={handleChange}
          />
          <input
            type="text"
            name="instructorEmail"
            placeholder="Instructor Email"
            className="w-11/12 border p-2 mb-4"
            value={formData.instructorEmail}
            onChange={handleChange}
          />
          <input
            type="number"
            name="availableSeats"
            placeholder="Available Seats"
            className="w-11/12 border p-2 mb-4"
            value={formData.availableSeats}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-11/12 border p-2 mb-4"
            value={formData.price}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            Add
          </button>
        </form>
      </div>
      <Link to="/instructorDashboard">
        <button className="btn btn-xs btn-primary mt-4 w-32">Back</button>
      </Link>
    </section>
  );
};

export default AddAClass;
