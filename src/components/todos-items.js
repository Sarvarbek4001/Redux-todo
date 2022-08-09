import { useSelector } from "react-redux";

import TodoItem from "./todos-item";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="flex flex-col w-full my-3">
      {todos.length > 0 ? (
        todos.map((item) => (
          <TodoItem
            title={item.title}
            key={item.id}
            id={item.id}
            isDone={item.isDone}
          />
        ))
      ) : (
        <h3 className="text-2xl text-center text-red-600">
          Todos has not been created yet
        </h3>
      )}
    </ul>
  );
};
export default TodoItems;
