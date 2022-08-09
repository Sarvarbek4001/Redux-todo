import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import TodoItems from "./components/todos-items";
import TodosFooter from "./components/todos-footer";
import { useSelector } from "react-redux/es/exports";
import { initializeTodos } from "./actions/todos";
function App() {
  const todoItems = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(window.localStorage.getItem("todos"));
    dispatch(initializeTodos(todos));
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-100">
      <div className=" pt-20 flex justify-center items-center ">
        <div className="w-[768px] p-8 bg-white rounded-xl ">
          <div className="w-full flex-col">
            <TodosHeader length={todoItems.length} />
            <TodosForm />
            <TodoItems />
            <TodosFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
