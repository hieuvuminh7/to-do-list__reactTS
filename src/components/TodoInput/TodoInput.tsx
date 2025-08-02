import { useState } from "react";
import styles from "./todoinput.module.scss";

interface Inputprops {
  handleAddTodo: (name: string) => void;
}

export const TodoInput = (props: Inputprops) => {
  const { handleAddTodo } = props;
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(name);
    setName('');
  };
  
  return (
    <>
      <h2>Todo list typescript</h2>
      <form action="" className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Enter your task...."
            name=""
            id=""
            className={styles.formInput}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
          <button type="submit" className={styles.btn}>
            ➕
          </button>
        </div>
      </form>
    </>
  );
};
