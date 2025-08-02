import { useState } from "react";
import { TaskList } from "../TaskList/TaskList";
import { TodoInput } from "../TodoInput/TodoInput";
import styles from './todolist.module.scss';
import { ITodo } from "../../@Types/todo";

const Todolist = () => {
  const fakeData = [
    {id: '123abc', name: 'Quét nhà', done: false},
    {id: '1e3abc', name: 'Nấu Cơm', done: true}
  ]
  const [todos, setTodos] = useState<ITodo[]>(fakeData);

  const doneList = todos.filter(item => item.done);
  const notDoneList = todos.filter(item => !item.done);

  const handleAddTodo = (name: string) => {
    const newTodos:ITodo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos(prev => [...prev, newTodos])
  }

  // Done 
  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if(item.id === id) return {...item, done}
        return item
      })
    })
  }
  
  return (
    <>
      <div className={styles.todoList}>
        <div className={styles.todoListContainer}>
          <TodoInput handleAddTodo={handleAddTodo}/>
          <TaskList done={false} taskList={notDoneList} handleDoneTodo={handleDoneTodo}/>
          <TaskList done taskList={doneList} handleDoneTodo={handleDoneTodo}/>
        </div>
      </div>
    </>
  );
};

export default Todolist;
