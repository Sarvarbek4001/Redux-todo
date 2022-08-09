import { useDispatch } from "react-redux";
import { removeTodo, markTodoDone } from "../actions/todos";

const TodoItem = ({ id, title, isDone }) => {
  const dispatch = useDispatch();
  const handleMarkTodo = (e) => {
    dispatch(
      markTodoDone({
        id: id,
        title: title,
        isDone: e.target.checked,
      })
    );
  };
  return (
    <li className="flex justify-between my-1">
      <div className="flex items-center">
        <input
          className="mr-5 outline-none"
          type="checkbox"
          id="exampleFormControlInput2"
          onChange={handleMarkTodo}
          defaultChecked={isDone}
        />
        <label
          htmlFor="exampleFormControlInput2"
          className={`text-[20px] ${isDone ? "line-through" : ""}`}
        >
          {title}
        </label>
      </div>
      <button
        className="bg-red-800 text-white py-2  pl-4 pr-4  rounded-[4px] text-[18px]"
        onClick={() => dispatch(removeTodo(id))}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
