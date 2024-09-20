import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import logo from "./logo.png";

const App = () => {
  return (
    <Provider store={store}>
      <div className="font-mont mt-5 p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
        <img src={logo} alt="Todo List" className="w-28 h-28 mx-auto -mt-8" />
        <h3 className="font-semibold mb-3 text-lg text-gray-800">
          Ajouter une tâche
        </h3>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
