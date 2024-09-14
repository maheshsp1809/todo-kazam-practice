import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../store/todoSlice";

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) =>
    state.todos.find((t) => t.id === parseInt(id))
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || "");
      setCompleted(todo.completed);
    }
  }, [todo]);

  const handleUpdate = () => {
    dispatch(updateTodo({ id: parseInt(id), title, description, completed }));
    navigate("/");
  };

  const handleDelete = () => {
    dispatch(deleteTodo(parseInt(id)));
    navigate("/");
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todo Details</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoDetails;
