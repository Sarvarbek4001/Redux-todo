const TodosHeader = ({ length }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl py-5">Todos:{length}</h1>
    </div>
  );
};

export default TodosHeader;
