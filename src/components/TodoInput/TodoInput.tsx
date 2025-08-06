import { useState } from "react";
import styles from "./todoinput.module.scss";
import { ITodo } from "../../@Types/todo";

interface Inputprops {
  handleAddTodo: (name: string) => void;
  currentTodo: ITodo | null
  editTodo: (name: string) => void
  onSubmitTodo: () => void
}

export const TodoInput = (props: Inputprops) => {
  const { handleAddTodo, currentTodo, editTodo, onSubmitTodo } = props;
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(currentTodo) {
      onSubmitTodo()
    } else {
      handleAddTodo(name);
    }
    setName("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {value} = event.target;
    if(currentTodo) {
      editTodo(value);
    } else {
      setName(value);
    }
  };

  return (
    <>
      <h2>Todo list typescript</h2>
      <form action="" className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Enter your task...."
            className={styles.formInput}
            value={currentTodo ? currentTodo.name : name}
            onChange={handleChange}
          />
          <button type="submit" className={styles.btn}> 
           {currentTodo ? '✔️' : '➕'}
          </button>
        </div>
      </form>
    </>
  );
};
