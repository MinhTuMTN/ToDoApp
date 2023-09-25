import styled from "@emotion/styled";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  addToDo,
  deleteToDo,
  editToDo,
  getAllToDo,
} from "../../services/ToDoServices";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  flex: 1;
`;
const InputGroup = styled(Box)`
  display: flex;
  height: auto;
  width: 30%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 80%;
    column-gap: 0.7rem;
  }
`;
const DisplayGround = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 80%;
    column-gap: 0.7rem;
  }
`;
const ItemGroup = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const CustomButton = styled(Button)`
  @media (max-width: 768px) {
    max-width: 3.8rem !important;
    max-height: 2.3rem !important;
    min-width: 3.8rem !important;
    min-height: 2.3rem !important;

    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    max-width: 3.8rem !important;
    max-height: 2.3rem !important;
    min-width: 3.8rem !important;
    min-height: 2.3rem !important;

    font-size: 0.7rem;
  }
`;

function ToDoListPage(props) {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleGetAllToDo = async () => {
    const response = await getAllToDo();
    if (response.success) setToDoList(response.data.data);
    else alert(response.error);
  };

  const handleAddToDo = async () => {
    const response = await addToDo({
      task: inputText,
      isCompleted: false,
    });
    setInputText("");
    if (response.success) handleGetAllToDo();
    else alert(response.error);
  };

  const handleEditToDo = async (oldToDo) => {
    const newTask = prompt("Enter new task", oldToDo.task);
    const response = await editToDo(oldToDo.id, {
      task: newTask,
      isCompleted: oldToDo.isCompleted,
    });
    if (response.success) {
      handleGetAllToDo();
    } else alert(response.error);
  };

  const handleMarkAsCompleted = async (oldToDo) => {
    const response = await editToDo(oldToDo.id, {
      task: oldToDo.task,
      isCompleted: !oldToDo.isCompleted,
    });
    if (response.success) {
      handleGetAllToDo();
    } else alert(response.error);
  };

  const handleDeleteToDo = async (oldToDo) => {
    const response = await deleteToDo(oldToDo.id);
    if (response.success) {
      handleGetAllToDo();
    } else alert(response.error);
  };

  useEffect(() => {
    document.title = "To Do List";
    handleGetAllToDo();
  }, []);

  return (
    <Container>
      <h1>To Do List</h1>
      <InputGroup>
        <TextField
          type="text"
          size="small"
          sx={{ height: "100%", width: "80%" }}
          value={inputText}
          inputProps={{
            style: { height: "100%", fontSize: "1.5rem", width: "75%" },
          }}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <Button
          onClick={() => handleAddToDo()}
          sx={{ width: "18%" }}
          variant="outlined"
          size="medium"
          color="success"
        >
          Add
        </Button>
      </InputGroup>
      <DisplayGround>
        {toDoList.map((toDo) => (
          <ItemGroup key={toDo.id}>
            <div style={{ width: "65%" }}>
              <Checkbox
                type="checkbox"
                checked={toDo.isCompleted}
                onChange={() => handleMarkAsCompleted(toDo)}
              />
              <span>{toDo.task}</span>
            </div>
            <ButtonGroup
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "35%",
              }}
            >
              <CustomButton
                variant="contained"
                onClick={() => handleEditToDo(toDo)}
              >
                Edit
              </CustomButton>
              <CustomButton
                onClick={() => handleDeleteToDo(toDo)}
                variant="contained"
                type="button"
                color="error"
              >
                Delete
              </CustomButton>
            </ButtonGroup>
          </ItemGroup>
        ))}
      </DisplayGround>
    </Container>
  );
}

export default ToDoListPage;
