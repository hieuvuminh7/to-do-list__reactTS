import { useState } from "react";
import { TaskList } from "../TaskList/TaskList";
import { TodoInput } from "../TodoInput/TodoInput";
import styles from "./todolist.module.scss";
import { ITodo } from "../../@Types/todo";

const Todolist = () => {
  const fakeData = [
    { id: "123abc", name: "Quét nhà", done: false },
    { id: "1e3abc", name: "Nấu Cơm", done: true },
  ];
  const [todos, setTodos] = useState<ITodo[]>(fakeData);
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  // console.log(currentTodo);

  const doneList = todos.filter((item) => item.done);
  const notDoneList = todos.filter((item) => !item.done);

  const handleAddTodo = (name: string) => {
    const newTodos: ITodo = {
      name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodos]);
  };

  // Done
  // nếu click trúng id (checkbox)
  // tạo một mảng mới, giữ nguyên giá trị ban đầu, chỉ sửa lại giá trị của done
  const handleDoneTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    // console.log(id);
  };

  // Edit
  const startEdit = (id: string) => {
    const findTodo = todos.find((item) => item.id === id);
    if (findTodo) {
      setCurrentTodo(findTodo);
    }
  };

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name };
      return null;
    });
  };

  const onSubmitTodo = () => {
    setTodos((prev) => {
      return prev.map((item) => {
        if(item.id === (currentTodo as ITodo).id) {
          return currentTodo as ITodo;
        }
        return item;
      })
    })
    setCurrentTodo(null)
  };

  // Delete
  const deleteTodo = (id: string) => {
    if(currentTodo) {
      setCurrentTodo(null);
    }
    setTodos(prev => {
      const findIndexTodo = prev.findIndex(item => item.id ===  id);
      if(findIndexTodo > -1) {
        //clone
        const clone = [...prev];
        clone.splice(findIndexTodo, 1);
        return clone;
      }
      return prev;
    })
  }
  return (
    <>
      <div className={styles.todoList}>
        <div className={styles.todoListContainer}>
          <TodoInput
            handleAddTodo={handleAddTodo}
            currentTodo={currentTodo}
            editTodo={editTodo}
            onSubmitTodo={onSubmitTodo}
          />
          <TaskList
            done={false}
            taskList={notDoneList}
            handleDoneTodo={handleDoneTodo}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />
          <TaskList
            done
            taskList={doneList}
            handleDoneTodo={handleDoneTodo}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};

export default Todolist;
