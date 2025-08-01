import { useState } from "react";
import styles from "./taskinput.module.scss";

interface TaskInputProps {
  addTodo: (name: string) => void;
}

export const TaskInput = (props: TaskInputProps) => {
  const { addTodo } = props;
  const [name, setName] = useState<string>("");

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(name);
    setName('');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1 className={styles.title}>Todo List</h1>
      <form action="" className={styles.form} onSubmit={onHandleAdd}>
        <input
          type="text"
          className={styles.formInput}
          placeholder="put here...."
          value={name}
          onChange={onChangeInput}
        />
        <button type="submit" className={styles.btn}>
          ➕
        </button>
      </form>
    </>
  );
};
