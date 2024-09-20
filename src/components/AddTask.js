import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      dispatch(addTask({ description }));
      setDescription("");
    } else {
      alert("Veuillez remplir la description");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-slate-950 hover:bg-black text-white p-2 px-4 w-auto rounded-xl shadow-md transition-colors duration-200"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddTask;
