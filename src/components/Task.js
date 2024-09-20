import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      if (newDescription.trim() === "") {
        setNewDescription(task.description); // Restaurer la description précédente si le champ est vide
      } else {
        dispatch(editTask(task.id, { description: newDescription }));
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`flex justify-between items-center p-4 mb-2 rounded-xl shadow-md ${
        task.isDone ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          className="h-5 w-5 rounded-md focus:ring-0 cursor-pointer"
        />
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="border border-gray-300 rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <h3
              className={`font-semibold text-lg ${
                task.isDone ? "text-gray-500 line-through" : "text-gray-800"
              }`}
            >
              {task.description}
            </h3>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="text-black hover:text-yellow-600"
        >
          <FontAwesomeIcon icon={isEditing ? faCheck : faEdit} size="lg" />
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-black hover:text-red-600"
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Task;
