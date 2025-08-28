import { useState, useRef } from "react";

export default function UnderRated_Form() {
  const initialForm = {
    color: "#000000",
    rating: 5,
    birthday: "",
    image: null,
    Team: "",
    hobbies: [],
    gender: ""
  };

  const [Form, setForm] = useState(initialForm);
  const fileInputRef = useRef(null); // <-- ref for file input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Form);
    alert("Form submitted! Check console.");
    setForm(initialForm);
     // Clear file input manually
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-full sm:w-3/4 md:w-1/2 mx-auto mt-10 flex flex-col gap-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Team Vibes Check
      </h2>

      {/* Favorite Color */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Favorite Color:</label>
        <input
          type="color"
          name="color"
          className="md:w-2/3 p-2 rounded-lg border border-gray-300 cursor-pointer transition-all duration-200 focus:ring-2 focus:ring-blue-400"
          value={Form.color}
          onChange={(e) => setForm({ ...Form, color: e.target.value })}
        />
        <div className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: Form.color }}></div>
      </div>

      {/* Satisfaction Range */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Satisfaction (1-10):</label>
        <input
          type="range"
          min="1"
          max="10"
          value={Form.rating}
          onChange={(e) => setForm({ ...Form, rating: e.target.value })}
          className="md:w-2/3 cursor-pointer accent-blue-500"
        />
        <span className="text-gray-600 font-medium">{Form.rating}</span>
      </div>

      {/* Birthday */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Birthday:</label>
        <input
          type="date"
          value={Form.birthday}
          onChange={(e) => setForm({ ...Form, birthday: e.target.value })}
          className="md:w-2/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* File Upload */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Image:</label>
        <input
          type="file" ref={fileInputRef}   accept="image/*"
          onChange={(e) => setForm({ ...Form, image: e.target.files[0] })}
          className="md:w-2/3 border border-gray-300 rounded-lg p-2 cursor-pointer"
        />
      </div>

      {/* Team */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Team:</label>
        <select
          value={Form.Team}
          onChange={(e) => setForm({ ...Form, Team: e.target.value })}
          className="md:w-2/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* Hobbies */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Hobbies:</label>
        <div className="md:w-2/3 flex flex-wrap gap-3">
          {["reading", "music", "sports"].map((hobby) => (
            <label key={hobby} className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                value={hobby}
                checked={Form.hobbies.includes(hobby)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setForm({ ...Form, hobbies: [...Form.hobbies, hobby] });
                  } else {
                    setForm({ ...Form, hobbies: Form.hobbies.filter((h) => h !== hobby) });
                  }
                }}
                className="accent-blue-500 cursor-pointer"
              />
              {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <label className="md:w-1/3 text-gray-700 font-medium">Gender:</label>
        <div className="md:w-2/3 flex gap-4">
          {["male", "female", "other"].map((g) => (
            <label key={g} className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={Form.gender === g}
                onChange={(e) => setForm({ ...Form, gender: e.target.value })}
                className="accent-blue-500 cursor-pointer"
              />
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
