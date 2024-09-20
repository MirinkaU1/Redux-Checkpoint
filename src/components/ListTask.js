import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => dispatch(filterTasks("all"))}
          className={`rounded-xl p-2 px-4 w-auto ${
            filter === "all" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => dispatch(filterTasks("done"))}
          className={`rounded-xl p-2 px-4 w-auto ${
            filter === "done" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Terminés
        </button>
        <button
          onClick={() => dispatch(filterTasks("notDone"))}
          className={`rounded-xl p-2 px-4 w-auto ${
            filter === "notDone" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Non terminés
        </button>
      </div>
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucune tâche pour le moment !
          </p>
        ) : (
          filteredTasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default ListTask;
