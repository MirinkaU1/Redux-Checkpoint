import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  DELETE_TASK,
} from "./actions";

const initialState = {
  tasks: [],
  filter: "all",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: Date.now(), isDone: false },
        ],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    case DELETE_TASK: // Gestion de l'action DELETE_TASK
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
