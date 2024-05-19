import { useDispatch } from "react-redux";
import {
  Checkbox,
  CloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

import { toggleComplete, removeTodo } from "../store/todoSlice";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, text, header, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.todoItem}>
      <Checkbox
        className={styles.checkbox}
        size="lg"
        colorScheme="green"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <div className={styles.textAndHeaderBlock}>
        <h1 className={styles.header}>{header}</h1>
        <Popover>
          <PopoverTrigger>
            <Button className={styles.popoverBtn}>Text</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>{header}</PopoverHeader>
            <PopoverBody>{text}</PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
      <CloseButton
        size="md"
        colorScheme="green"
        onClick={() => dispatch(removeTodo({ id }))}
      />
    </div>
  );
};

export default TodoItem;
