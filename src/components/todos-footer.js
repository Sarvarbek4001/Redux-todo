import { useSelector } from "react-redux";

const TodosFooter = () => {
  const todoItems = useSelector((state) => state.todos);
  const handleSave = () => {
    window.localStorage.setItem("todos", JSON.stringify(todoItems));
  };
  return (
    <div className="card-footer flex justify-center">
      <button
        className="bg-blue-500 text-white border border-transparent transition duration-500 py-2 pl-8 pr-8 my-5 rounded-[4px] text-[18px] hover:bg-white hover:text-black hover:border hover:border-blue-500"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};
export default TodosFooter;
