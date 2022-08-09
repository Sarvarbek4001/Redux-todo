import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos";
import { v4 as uuidv4 } from "uuid";
const TodosForm = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      addTodo({
        title: inputRef.current.value,
        id: uuidv4(),
        isDone: false,
      })
    );
    formRef.current.reset();
  };
  return (
    <form
      className="flex items-center justify-between"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="w-full mr-5">
        <input
          ref={inputRef}
          className="w-full outline-none rounded-[4px] "
          type="text"
          placeholder="e.g. Buy egss"
        />
      </div>
      <button className="border bg-slate-700 p-2 pl-8 pr-8 text-white rounded-[4px] text-[18px]">
        Add
      </button>
    </form>
  );
};

export default TodosForm;
