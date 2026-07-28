import { useState, type ChangeEvent } from "react";
import { v4 as uuid } from "uuid";

type Todo = {
  id: string;
  title: string;
};

const Knock15 = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    if (title === "") {
      return;
    }

    const newTodo = {
      id: uuid(),
      title,
    };

    setTodoList((prev) => [...prev, newTodo]);

    setTitle("");
  };

  const deleteTodo = (uuid: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== uuid));
  };

  return (
    <div>
      <h2>ToDoリスト ({todoList.length}件)</h2>
      <input type="text" onChange={changeTitle} value={title} />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todoList.map((todo) => {
          return (
            <div style={{ display: "flex" }} id={todo.id}>
              <p>{todo.title}：</p>
              <button onClick={() => deleteTodo(todo.id)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Knock15;
