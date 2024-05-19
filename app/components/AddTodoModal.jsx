import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import styles from "./AddTodo.module.css";

export const AddTodoModal = ({
  valueDics,
  updateTextDisc,
  valueHeader,
  updateTextHeader,
  handleAction,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="pink">
        Добавить
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавьте задачу</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Заголовок"
              size="md"
              className={styles.todoInputs}
              value={valueHeader}
              onChange={(event) => updateTextHeader(event.target.value)}
            />
            <Input
              placeholder="Описание"
              size="md"
              className={styles.todoInputs}
              value={valueDics}
              onChange={(event) => updateTextDisc(event.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleAction}>
              Добавить
            </Button>
            <Button colorScheme="pink" mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
